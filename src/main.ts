import { TypeMap } from "./config.js"
import "./helpers/array.js"
import { mapSecond } from "./helpers/pair.js"
import { Ok, Result, error, isError, isOk, ok } from "./helpers/result.js"
import { TypeId } from "./typeConfig.js"
import { IntegrityError } from "./validation/builders/integrity.js"
import { FileNameError } from "./validation/builders/naming.js"
import { SchemaError } from "./validation/builders/schema.js"
import { TypeIdPair, TypeValidationResultsByType, getRawValidationResults } from "./validation/raw.js"

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
  [K in keyof TypeMap]: [id: TypeId<keyof TypeMap>, data: TypeMap[keyof TypeMap]][]
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
      typeResults.reduce<StrictResults>(
        (outerResult, [filePath, fileResult]): StrictResults => {
          if (isOk(outerResult) && isOk(fileResult)) {
            return ok({
              ...outerResult.value,
              [typeName]: [...(outerResult.value[typeName] ?? []), fileResult.value]
            })
          }
          else if (isOk(outerResult) && isError(fileResult)) {
            return error({
              [filePath]: fileResult.error
            })
          }
          else if (isError(outerResult) && isError(fileResult)) {
            return error({
              ...outerResult.error,
              [filePath]: fileResult.error
            })
          }
          else {
            return outerResult
          }
        },
        result
      ),
    ok({}) as StrictResults
  )

const filterResultMapByValidData = (rawResultMap: TypeValidationResultsByType): ValidResults =>
  rawResultMap
    .map(mapSecond((typeResults): [id: TypeId<keyof TypeMap>, data: TypeMap[keyof TypeMap]][] =>
      typeResults
        .filter((typeResult): typeResult is [filePath: string, result: Ok<TypeIdPair<keyof TypeMap>>] => Result.isOk(typeResult[1]))
        .map(fileResult => fileResult[1].value)
    ))
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
