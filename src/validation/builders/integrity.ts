import { TypeMap } from "../../config.js"
import { PathDescriptor, printPathDescriptor } from "../../helpers/objectPath.js"
import { Result } from "../../helpers/result.js"
import { TypeId } from "../../typeConfig.js"
import { config } from "../../types/Locale.js"

/**
 * An error in the shape of an `Ajv` error, with `keyword` being the
 * discriminating property.
 */
export type IntegrityError = {
  keyword: "integrity"
  instancePath: string
  message: string
}

const integrityError = (instancePath: PathDescriptor, message: string): IntegrityError => ({
  keyword: "integrity",
  instancePath: printPathDescriptor(instancePath),
  message
})

export type IntegrityValidationResult = Result<void, IntegrityError[]>

/**
 * Returns an error if the condition evaluates to `false`.
 */
const conditionalError = (condition: boolean, instancePath: PathDescriptor, message: string): IntegrityValidationResult =>
  condition ? Result.ok(undefined) : Result.error([integrityError(instancePath, message)])

/**
 * A function that validates `data` at a specific `filePath` to be of type `T`
 * using a specified `validator`.
 */
export type IntegrityValidator<T> = (validators: IntegrityValidators, data: T, filepath: string) => IntegrityValidationResult

export type IntegrityValidators = {
  identity: IdentityIntegrityValidators
}

export type IdentityIntegrityValidators = {
  [K in keyof TypeMap]: {
    isUnique: (id: TypeId<K>) => boolean
    exists: (id: TypeId<K>) => boolean
  }
}

export const getReferencialIntegrityErrors =
  <T>(ids: T[], typeName: string, existsId: (id: T) => boolean, pathToData: PathDescriptor): IntegrityValidationResult => {
    const errors = ids
      .filter(id => !existsId(id))
      .map(id => integrityError(pathToData, `The identifier "${id}" for type ${typeName} does not exist.`))

    if (errors.length > 0) {
      return Result.error(errors)
    }
    else {
      return Result.ok(undefined)
    }
  }

interface Translatable<T> {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    [localeId: string]: T
  }
}

export const getReferencialIntegrityErrorsForTranslatable =
  <T>(validators: IntegrityValidators, data: Translatable<T>, pathToData: PathDescriptor = []): IntegrityValidationResult =>
    getReferencialIntegrityErrors(
      Object.keys(data.translations),
      config.name,
      validators.identity.locales.exists,
      [...pathToData, { k: "translations" }]
    )

/**
 * Validates that a given identifier is unique. If the identifier is present in
 * both the file name and the file contents, their equality is validated as
 * well. The `pathToId` parameter is used to identify the location of the
 * identifier in the file contents.
 */
export const validateEntityIntegrity =
  <ID extends string | number>(isUnique: (id: ID) => boolean, filenameId: ID, dataId?: ID, pathToId: PathDescriptor = [{ k: "id" }]): IntegrityValidationResult =>
    reduceIntegrityValidationResults(
      conditionalError(isUnique(filenameId), [], `The identifier "${filenameId}" is not unique.`),
      conditionalError(dataId === undefined || filenameId === dataId, pathToId, `The identifier in the filename (${JSON.stringify(filenameId)}) and the identifier (${JSON.stringify(dataId)}) in the file itself are not equal.`),
    )


/**
 * Warns about missing integrity validation, but returns no errors.
 * @param typeName The name of the type that is not being validated.
 * @returns An empty list of errors.
 */
export const todo = (typeName: string): () => IntegrityValidationResult => {
  console.warn(`The type ${typeName} has no integrity validation yet.`)
  return () => Result.ok(undefined)
}

/**
 * Combines multiple integrity validation results into one.
 */
export const reduceIntegrityValidationResults =
  (...results: IntegrityValidationResult[]): IntegrityValidationResult =>
    results.reduce(
      (acc, result) => Result.combine(acc, result, () => undefined, (a, b) => [...a, ...b]),
      Result.ok(undefined)
    )
