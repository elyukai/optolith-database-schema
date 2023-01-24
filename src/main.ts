import Ajv, { AnySchemaObject, Options } from "ajv"
import addFormats from "ajv-formats"
import Ajv2019 from "ajv/dist/2019.js"
import Ajv2020 from "ajv/dist/2020.js"
import { lstat, readdir, readFile } from "fs/promises"
import { join } from "path"
import YAML from "yaml"
import { jsonSchemaDir } from "../config/directories.js"
import { TypeMap, typeValidatorMap } from "./config.js"
import { TypeValidationResult, TypeValidationResultErrors } from "./validation/schema.js"

type RawResultMap = { [K in keyof TypeMap]: Record<string, TypeValidationResult<TypeMap[K]>> }

type Result =
  | { tag: "Ok"; value: { [K in keyof TypeMap]: TypeMap[K][] } }
  | { tag: "Error"; errors: Record<string, TypeValidationResultErrors> }

export type EntityDirectoryPaths = { [K in keyof TypeMap]: string }

const readdirRecursive = async (dirPath: string): Promise<string[]> => {
  const directoryEntries = await readdir(dirPath, { withFileTypes: true })

  const flattenedRecursivePaths = await Promise.all(
    directoryEntries
      .filter(dirEntry => !dirEntry.name.startsWith("."))
      .map(async dirEntry => {
        const absoluteEntryPath = join(dirPath, dirEntry.name)

        if (dirEntry.isDirectory()) {
          return (await readdirRecursive(absoluteEntryPath))
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

const registerAllJsonSchemaDocuments = async (validatorOptions: Options) => {
  const readFileAsUtf8 = (path: string) => readFile(path, "utf-8")
  const readFilesAsUtf8 = (paths: string[]) => Promise.all(paths.map(readFileAsUtf8))
  const parseJson = (json: string): AnySchemaObject => JSON.parse(json)
  const schemes = (await readFilesAsUtf8(await readdirRecursive(jsonSchemaDir))).map(parseJson)

  const META_SCHEMA_ID_2020_12 = "https://json-schema.org/draft/2020-12/schema";
  const validator = schemes[0]?.$schema === META_SCHEMA_ID_2020_12
    ? new Ajv2020(validatorOptions)
    : new Ajv2019(validatorOptions)

  const registerSchemaInValidator = (jsonSchema: any) => { validator.addSchema(jsonSchema) }
  schemes.forEach(registerSchemaInValidator)

  return validator
}

const collator = Intl.Collator(undefined, { numeric: true })

const readDataFileAssocsFromDirectory = async (dirPath: string) => {
  const filenames = await readdir(dirPath)
  filenames.sort(collator.compare)

  return await Promise.all(
    filenames
      .filter(fileName => !fileName.startsWith("."))
      .map(async (fileName): Promise<[string, unknown]> => {
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
      })
  )}

const validateAllFromType = async <K extends keyof TypeMap>(validator: Ajv, typeName: K, path: string): Promise<Record<string, TypeValidationResult<TypeMap[K]>>> => {
  const isFile = (await lstat(path)).isFile()

  const typeValidator = typeValidatorMap[typeName]

  if (isFile) {
    return { [path]: typeValidator(validator, await readFile(path, "utf-8"), path) }
  }
  else {
    const dataFiles = await readDataFileAssocsFromDirectory(path)

    return Object.fromEntries(
      dataFiles.map(
        ([filePath, fileContent]) =>
          [filePath, typeValidator(validator, fileContent, filePath)]
      )
    )
  }
}

const rawResultMapToResult = (rawResultMap: RawResultMap): Result =>
  Object.entries(rawResultMap).reduce<Result>(
    (result: Result, [typeName, typeResults]) =>
      Object.entries(typeResults).reduce<Result>(
        (outerResult, [filePath, fileResult]: [string, TypeValidationResult<unknown>]): Result => {
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
                [filePath]: fileResult.errors
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
  const validator = await registerAllJsonSchemaDocuments({  })
  addFormats(validator)

  const rawResultMap: RawResultMap = Object.fromEntries<RawResultMap[keyof RawResultMap]>(
    (await Promise.all(
      Object.entries(entityDirPaths)
        .map(async ([typeName, path]): Promise<[keyof RawResultMap, RawResultMap[keyof RawResultMap]]> => [
          typeName as keyof RawResultMap,
          await validateAllFromType(validator, typeName as keyof RawResultMap, path) as
            RawResultMap[keyof RawResultMap]
        ]))
    )
  ) as Record<keyof RawResultMap, RawResultMap[keyof RawResultMap]> as RawResultMap

  return rawResultMapToResult(rawResultMap)
}

export const printErrors = (errorsByFile: Record<string, TypeValidationResultErrors>, printOptions: PrintOptions = {}) => {
  const { verbose = false } = printOptions

  return Object.entries(errorsByFile)
    .sort(([filePathA], [filePathB]) => collator.compare(filePathA, filePathB))
    .flatMap(
      ([filePath, errors]) => {
        if (verbose) {
          return filterNullable([
            errors.fileNameError ? errorMessageBlock([filePath], errors.fileNameError.message) : undefined,
            ...errors.schemaErrors.map(error => {
              const pathSegments = [filePath, ...error.instancePath.split("/").slice(1)]
              return errorMessageBlock(pathSegments, error.message ?? "")
            })
          ])
        } else {
          return filterNullable([
            errors.fileNameError ? errorMessageBlock([filePath], errors.fileNameError.message) : undefined,
            errors.schemaErrors.length > 0 ? errorMessageBlock([filePath], "does not match schema") : undefined
          ])
        }
      }
    )
    .join("\n\n")
}

export type PrintOptions = {
  verbose?: boolean
}

const errorMessageBlock = (path: string[], message: string): string =>
  [
    ...path.map((segment, i) => `${" ".repeat(i * 2)}in "${segment}":`),
    `${" ".repeat(path.length * 2)}${message}`
  ].join("\n")

const filterNullable = <T>(arr: T[]): NonNullable<T>[] => arr.filter((x): x is NonNullable<typeof x> => x != null)
