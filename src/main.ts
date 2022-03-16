import Ajv, { DefinedError } from "ajv"
import addFormats from "ajv-formats"
import { readdir, readFile } from "fs/promises"
import { join } from "path"
import YAML from "yaml"
import { jsonSchemaDir } from "../build/directories.js"
import { schemaMap, TypeMap } from "./config.js"
import { SchemaValidationResult } from "./validation/schema.js"

type RawResultMap = { [K in keyof TypeMap]: Record<string, SchemaValidationResult<TypeMap[K]>> }

type Result =
  | { tag: "Ok"; value: { [K in keyof TypeMap]: TypeMap[K][] } }
  | { tag: "Error"; errors: Record<string, DefinedError[]> }

export type EntityDirectoryPaths = { [K in keyof TypeMap]: string }

const readDirectoryFilesRecursive = async (dirPath: string): Promise<string[]> => {
  const directoryContents = await readdir(dirPath, { withFileTypes: true })

  const flattenedRecursivePaths = await Promise.all(
    directoryContents.map(async dirEntry => {
      const absoluteEntryPath = join(dirPath, dirEntry.name)

      if (dirEntry.isDirectory()) {
        return await readDirectoryFilesRecursive(absoluteEntryPath)
      }
      else if (dirEntry.isFile()) {
        return [absoluteEntryPath]
      }
      else {
        return []
      }
    })
  )

  return flattenedRecursivePaths.flat()
}

const readDataFileAssocsFromDirectory = async (dirPath: string) =>
  await Promise.all(
    (await readdir(dirPath)).map(
      async (fileName): Promise<[string, unknown]> => {
        const filePath = join(dirPath, fileName)
        const fileContent = YAML.parse(await readFile(join(dirPath, fileName), "utf-8"))

        return [filePath, fileContent]
      }
    )
  )

const rawResultMapToResult = (rawResultMap: RawResultMap): Result =>
  Object.entries(rawResultMap).reduce<Result>(
    (result: Result, [typeName, typeResults]) =>
      Object.entries(typeResults).reduce<Result>(
        (outerResult, [filePath, fileResult]): Result => {
          if (outerResult.tag === "Ok" && fileResult.tag === "Ok") {
            return {
              tag: "Ok",
              value: {
                ...outerResult.value,
                [typeName]: [...(outerResult.value[typeName as keyof RawResultMap] ?? []), fileResult.value]
              }
            }
          }
          else if (outerResult.tag === "Ok" && fileResult.tag === "Error") {
            return {
              tag: "Error",
              errors: {
                [filePath]: fileResult.errors
              }
            }
          }
          else if (outerResult.tag === "Error" && fileResult.tag === "Error") {
            return {
              tag: "Error",
              errors: {
                ...outerResult.errors,
                [filePath]: [...(outerResult.errors[filePath] ?? []), ...fileResult.errors]
              }
            }
          }
          else {
            return outerResult
          }
        },
        result
      ),
    ({
      tag: "Ok",
      value: {}
    }) as Result
  )

export const validate = async (entityDirPaths: EntityDirectoryPaths, checkIntegrity: boolean): Promise<Result> => {
  const jsonSchemaDirectoryContents = await readDirectoryFilesRecursive(jsonSchemaDir)

  const jsonSchemaFiles = await Promise.all(
    jsonSchemaDirectoryContents.map(
      async jsonSchemaFilePath =>
        JSON.parse(await readFile(jsonSchemaFilePath, "utf-8"))
    )
  )

  const validator = new Ajv()

  addFormats(validator)

  jsonSchemaFiles.forEach(jsonSchema => validator.addSchema(jsonSchema))

  const rawResultMap: RawResultMap = Object.fromEntries<RawResultMap[keyof RawResultMap]>(
    (await Promise.all(
      Object.entries(entityDirPaths)
        .map(async ([typeName, dirPath]): Promise<[string, RawResultMap[keyof RawResultMap]]> => {
          const dataFiles = await readDataFileAssocsFromDirectory(dirPath)

          const typeValidator = schemaMap[typeName as keyof TypeMap]

          return [
            typeName,
            Object.fromEntries(
              dataFiles.map(
                ([filePath, fileContent]) =>
                  [filePath, typeValidator(validator, fileContent)]
              )
            )
          ]
        }))
    )
  ) as Record<keyof RawResultMap, RawResultMap[keyof RawResultMap]> as RawResultMap

  return rawResultMapToResult(rawResultMap)
}

export const printErrors = (errorsByFile: Record<string, DefinedError[]>) =>
  Object.entries(errorsByFile)
    .flatMap(
      ([filePath, errors]) =>
        errors.map(error => {
          const pathSegments = [filePath, ...error.instancePath.split("/").slice(1)]

          return [
            ...pathSegments.map((segment, i) => `${" ".repeat(i * 2)}in "${segment}":`),
            `${" ".repeat(pathSegments.length * 2)}${error.message ?? ""}`
          ].join("\n")
        })
    )
    .join("\n\n")
