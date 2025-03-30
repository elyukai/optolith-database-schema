import { Ok, Result, error, isError, isOk, ok } from "@optolith/helpers/result"
import type { Options as AjvOptions } from "ajv"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname } from "node:path"
import { CacheMap, cacheMap } from "./config/cache.js"
import { TypeId, TypeMap } from "./config/types.js"
import "./helpers/array.js"
import { mapSecond } from "./helpers/pair.js"
import { IntegrityError } from "./validation/builders/integrity.js"
import { FileNameError } from "./validation/builders/naming.js"
import { SchemaError } from "./validation/builders/schema.js"
import {
  TypeIdPair,
  TypeValidationResult,
  TypeValidationResultsByType,
  getRawValidationResults,
} from "./validation/raw.js"

/**
 * Options for validating data files.
 */
export type ValidationOptions = {
  /**
   * Whether to check the integrity of the data files. This includes checking
   * for referencial integrity (i.e. whether all referenced entities exist).
   * @default false
   */
  checkIntegrity?: boolean

  /**
   * Ajv instance options. See https://ajv.js.org/options.html.
   */
  ajvOptions?: AjvOptions
}

/**
 * A type validation may fail because of the data not matching the schema, the
 * file name not matching a pattern, or integrity issues.
 */
export type TypeValidationError = IntegrityError | FileNameError | SchemaError

/**
 * A map of all valid entries, grouped by entity type.
 */
export type ValidResults = {
  [K in keyof TypeMap]: [id: TypeId<K>, data: TypeMap[K]][]
}

/**
 * A map of all entries, grouped by entity type.
 */
export type RawResults = {
  [K in keyof TypeMap]: TypeValidationResult<K>[]
}

/**
 * A dictionary of entity types and their data’s associated locations.
 */
export type EntityDirectoryPaths = {
  [K in keyof TypeMap]: string
}

type StrictResults = Result<ValidResults, Record<string, TypeValidationError[]>>

const rawResultMapToResult = (rawResultMap: TypeValidationResultsByType): StrictResults =>
  rawResultMap.reduce<StrictResults>(
    (result: StrictResults, [typeName, typeResults]) =>
      typeResults.reduce<StrictResults>((outerResult, [filePath, fileResult]): StrictResults => {
        if (isOk(outerResult) && isOk(fileResult)) {
          return ok({
            ...outerResult.value,
            [typeName]: [...(outerResult.value[typeName] ?? []), fileResult.value],
          })
        } else if (isOk(outerResult) && isError(fileResult)) {
          return error({
            [filePath]: fileResult.error,
          })
        } else if (isError(outerResult) && isError(fileResult)) {
          return error({
            ...outerResult.error,
            [filePath]: fileResult.error,
          })
        } else {
          return outerResult
        }
      }, result),
    ok({}) as StrictResults
  )

const filterResultMapByValidData = (rawResultMap: TypeValidationResultsByType): ValidResults =>
  rawResultMap
    .map(
      mapSecond((typeResults): [id: TypeId<keyof TypeMap>, data: TypeMap[keyof TypeMap]][] =>
        typeResults
          .filter(
            (typeResult): typeResult is [filePath: string, result: Ok<TypeIdPair<keyof TypeMap>>] =>
              Result.isOk(typeResult[1])
          )
          .map(fileResult => fileResult[1].value)
      )
    )
    .objectFromEntries() as ValidResults

/**
 * If the database has no validation issues, returns the whole data set as a map
 * of entity types to their data. If there are any errors, only the errors will
 * be returned instead.
 * @param entityDirPaths THe paths to the directories containing the data to be
 * validated.
 * @param options Configuration options for the validation.
 * @returns Either the whole data set or the errors.
 */
export const getAllValidDataOrErrors = async (
  entityDirPaths: EntityDirectoryPaths,
  options: ValidationOptions = {}
): Promise<StrictResults> => {
  const rawResultMap = await getRawValidationResults(entityDirPaths, options)
  return rawResultMapToResult(rawResultMap)
}

/**
 * Returns all valid data as a map of entity types to their data.
 * @param entityDirPaths THe paths to the directories containing the data to be
 * validated.
 * @param options Configuration options for the validation.
 * @returns The valid data.
 */
export const getAllValidData = async (
  entityDirPaths: EntityDirectoryPaths,
  options: ValidationOptions = {}
): Promise<ValidResults> => {
  const rawResultMap = await getRawValidationResults(entityDirPaths, options)
  return filterResultMapByValidData(rawResultMap)
}

/**
 * Returns all data as a map of entity types to their validation results.
 * @param entityDirPaths THe paths to the directories containing the data to be
 * validated.
 * @param options Configuration options for the validation.
 * @returns The validation results.
 */
export const getRawResults = async (
  entityDirPaths: EntityDirectoryPaths,
  options: ValidationOptions = {}
): Promise<RawResults> => {
  const rawResultMap = await getRawValidationResults(entityDirPaths, options)
  return Object.fromEntries(rawResultMap) as unknown as RawResults
}

/**
 * A dictionary of cache types and their associated location.
 */
export type CachePaths = {
  [K in keyof CacheMap]: string
}

export type CacheOptions = {
  /**
   * Whether to pretty-print the JSON. Default is `false`.
   */
  pretty?: boolean
}

/**
 * Builds the cache and writes it to the specified paths in JSON format.
 * @param cachePaths The absolute paths to write each cache to.
 * @param validResults The data to build the cache from. Usually the result of
 * `getAllValidData`.
 * @param options Configuration options for building the cache.
 */
export const buildCache = async (
  cachePaths: CachePaths,
  validResults: ValidResults,
  options: CacheOptions = {}
): Promise<void> => {
  const { pretty = false } = options

  const activatableSelectOptionsCache = cacheMap.activatableSelectOptions.builder(validResults)
  const ancestorBloodAdvantagesCache = cacheMap.ancestorBloodAdvantages.builder(validResults)
  const magicalAndBlessedAdvantagesAndDisadvantagesCache =
    cacheMap.magicalAndBlessedAdvantagesAndDisadvantages.builder(validResults)
  const newApplicationsAndUsesCache = cacheMap.newApplicationsAndUses.builder(
    validResults,
    activatableSelectOptionsCache
  )

  const cacheData: CacheMap = {
    activatableSelectOptions: activatableSelectOptionsCache,
    ancestorBloodAdvantages: ancestorBloodAdvantagesCache,
    magicalAndBlessedAdvantagesAndDisadvantages: magicalAndBlessedAdvantagesAndDisadvantagesCache,
    newApplicationsAndUses: newApplicationsAndUsesCache,
  }

  for (const [cacheName, cachePath] of Object.entries(cachePaths)) {
    await mkdir(dirname(cachePath), { recursive: true })
    await writeFile(
      cachePath,
      JSON.stringify(cacheData[cacheName as keyof CachePaths], null, pretty ? 2 : undefined),
      "utf-8"
    )
  }
}

/**
 * Reads the cache from the specified paths in JSON format.
 * @param cachePaths The absolute paths to read each cache from.
 * @returns
 */
export const getCache = async (cachePaths: CachePaths): Promise<CacheMap> => {
  const cache: Partial<CacheMap> = {}
  for (const [cacheName, cachePath] of Object.entries(cachePaths)) {
    const cacheData = JSON.parse(await readFile(cachePath, "utf-8"))
    cache[cacheName as keyof CacheMap] = cacheData
  }
  return cache as CacheMap
}
