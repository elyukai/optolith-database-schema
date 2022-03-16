import Ajv, { DefinedError } from "ajv"
import addFormats from "ajv-formats"
import { lstat, readdir, readFile } from "fs/promises"
import { join } from "path"
import YAML from "yaml"
import { jsonSchemaDir } from "../config/directories.js"
import { TypeMap, typeValidatorMap } from "./config.js"
import { TypeValidationResult } from "./validation/schema.js"

type RawResultMap = { [K in keyof TypeMap]: Record<string, TypeValidationResult<TypeMap[K]>> }

type Result =
  | { tag: "Ok"; value: { [K in keyof TypeMap]: TypeMap[K][] } }
  | { tag: "Error"; errors: Record<string, DefinedError[]> }

export type EntityDirectoryPaths = { [K in keyof TypeMap]: string }

const readdirRecursive = async (dirPath: string): Promise<string[]> => {
  const directoryEntries = await readdir(dirPath, { withFileTypes: true })

  const flattenedRecursivePaths = await Promise.all(
    directoryEntries.map(async dirEntry => {
      const absoluteEntryPath = join(dirPath, dirEntry.name)

      if (dirEntry.isDirectory()) {
        return await readdirRecursive(absoluteEntryPath)
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

const registerAllJsonSchemaDocuments = async (validator: Ajv) => {
  const allJsonSchemaFilePaths = await readdirRecursive(jsonSchemaDir)

  const readFileAsUtf8 = (path: string) => readFile(path, "utf-8")
  const readFilesAsUtf8 = (paths: string[]) => Promise.all(paths.map(readFileAsUtf8))
  const parseJson = (json: string) => JSON.parse(json)
  const registerSchemaInValidator = (jsonSchema: any) => { validator.addSchema(jsonSchema) }

  (await readFilesAsUtf8(allJsonSchemaFilePaths))
    .map(parseJson)
    .forEach(registerSchemaInValidator)
}

const readDataFileAssocsFromDirectory = async (dirPath: string) =>
  await Promise.all(
    (await readdir(dirPath)).map(
      async (fileName): Promise<[string, unknown]> => {
        const filePath = join(dirPath, fileName)

        try {
          const fileContent = YAML.parse(await readFile(join(dirPath, fileName), "utf-8"))

          return [filePath, fileContent]
        }
        catch (error) {
          if (error instanceof Error) {
            error.message = `in "${filePath}":\n  ${error.message}`
          }

          return [filePath, null]
        }
      }
    )
  )

const validateAllFromType = async <K extends keyof TypeMap>(validator: Ajv, typeName: K, path: string): Promise<[K, Record<string, TypeValidationResult<TypeMap[K]>>]> => {
  const isFile = (await lstat(path)).isFile()

  const typeValidator = typeValidatorMap[typeName]

  if (isFile) {
    return [typeName, { [path]: typeValidator(validator, await readFile(path, "utf-8"), path) }]
  }
  else {
    const dataFiles = await readDataFileAssocsFromDirectory(path)

    return [
      typeName,
      Object.fromEntries(
        dataFiles.map(
          ([filePath, fileContent]) =>
            [filePath, typeValidator(validator, fileContent, filePath)]
        )
      )
    ]
  }
}

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
  const validator = new Ajv()

  addFormats(validator)
  await registerAllJsonSchemaDocuments(validator)

  const rawResultMap: RawResultMap = Object.fromEntries<RawResultMap[keyof RawResultMap]>(
    (await Promise.all(
      Object.entries(entityDirPaths)
        .map(async ([typeName, path]): Promise<[keyof RawResultMap, RawResultMap[keyof RawResultMap]]> =>
          validateAllFromType(validator, typeName as keyof RawResultMap, path) as
            Promise<[keyof RawResultMap, RawResultMap[keyof RawResultMap]]>
        ))
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
