import type AjvModule from "ajv"
import { readdir } from "node:fs/promises"
import { join } from "node:path"
import { jsonSchemaDir, jsonSchemaSpec } from "../config/build.js"
import { TypeId, TypeMap, configMap } from "../config/types.js"
import "../helpers/array.js"
import { collator } from "../helpers/i18n.js"
import { isHiddenFileName, readYamlFile } from "../helpers/io.js"
import { mapSecond, mapSecondAsync, mapToSecondAsync } from "../helpers/pair.js"
import { Result, isOk } from "../helpers/result.js"
import { EntityDirectoryPaths, TypeValidationError, ValidationOptions } from "../main.js"
import { TypeConfig } from "../typeConfig.js"
import { IdentityIntegrityValidators, IntegrityValidators } from "./builders/integrity.js"
import { FileNameValidator } from "./builders/naming.js"
import { getPreparedSchemaValidator } from "./schema.js"

// import resolution fixes for TypeScript
type Ajv = AjvModule.default

export type TypeIdPair<K extends keyof TypeMap> = [id: TypeId<K>, data: TypeMap[K]]

export type TypeValidationResult<K extends keyof TypeMap> = Result<TypeIdPair<K>, TypeValidationError[]>

export type TypeValidationResultsByType = [keyof TypeMap, [filePath: string, result: TypeValidationResult<keyof TypeMap>][]][]

const getFiles = async (path: string): Promise<[path: string, data: unknown][]> =>
  (await readdir(path))
    .sort(collator.compare)
    .filter(isHiddenFileName)
    .map(fileName => join(path, fileName))
    .map(mapToSecondAsync(async filePath => {
      try {
        return await readYamlFile(filePath)
      }
      catch (error) {
        if (error instanceof Error) {
          error.message = `in "${filePath}":\n  ${error.message}`
        }
        return null
      }
    }))
    .promiseAll()

const validateStructuralIntegrityOfFiles = <K extends keyof TypeMap>(
  validator: Ajv,
  typeConfig: TypeConfig<TypeMap[K], TypeId<K>>,
  validateFileName: FileNameValidator,
  files: [path: string, data: unknown][],
): [path: string, result: TypeValidationResult<K>][] =>
  files.map(mapSecond((data, path) => {
    const schemaValidationResult = typeConfig.schemaValidator(validator, data, path)
    const fileNameValidationResult = validateFileName(path)

    return Result.map(
      Result.combine(
        schemaValidationResult,
        fileNameValidationResult,
        (data, _) => data,
        (schemaErrors, fileNameErrors) => [...schemaErrors, ...fileNameErrors]
      ),
      data => [typeConfig.id(data, path), data]
    )
  }))

const validateSemanticAndReferencialIntegrityOfFiles = <K extends keyof TypeMap>(
  validators: IntegrityValidators,
  typeConfig: TypeConfig<TypeMap[K], TypeId<K>>,
  results: [filePath: string, result: TypeValidationResult<K>][]
): [filePath: string, result: TypeValidationResult<K>][] =>
  results.map(mapSecond((res, path) =>
    Result.reduce(
      res,
      ([id, data]): TypeValidationResult<K> =>
        Result.map(
          typeConfig.integrityValidator(validators, data, path),
          () => [id, data]
        ),
      errors => Result.error(errors)
    )
  ))

export const getRawValidationResults = async (
  entityDirPaths: EntityDirectoryPaths,
  options: ValidationOptions = {}
): Promise<TypeValidationResultsByType> => {
  const { checkIntegrity = false } = options

  const validator = await getPreparedSchemaValidator(jsonSchemaSpec, {}, jsonSchemaDir)
  const entityDirectoryPathEntries =
    Object.entries(entityDirPaths) as [typeName: keyof TypeMap, path: string][]

  const structuralIntegrityResults =
    await Promise.all(
      entityDirectoryPathEntries.map(mapSecondAsync(async (path, typeName) => {
        const files = await getFiles(path)

        return validateStructuralIntegrityOfFiles(
          validator,
          configMap[typeName] as TypeConfig<TypeMap[keyof TypeMap], TypeId<keyof TypeMap>>,
          configMap[typeName].fileNameValidator,
          files
        )
      }))
    )

  if (checkIntegrity) {
    const identityIntegrityValidators =
      Object.fromEntries(structuralIntegrityResults.map(mapSecond(results => {
        const idCount = results.reduce(
          (mp, [_, result]) => isOk(result) ? mp.set(result.value[0], (mp.get(result.value[0]) ?? 0) + 1) : mp,
          new Map<TypeId<keyof TypeMap>, number>()
        )

        return {
          isUnique: (id: TypeId<keyof TypeMap>) => (idCount.get(id) ?? 0) === 1,
          exists: (id: TypeId<keyof TypeMap>) => idCount.has(id),
        }
      }))) as IdentityIntegrityValidators

    return structuralIntegrityResults.map(mapSecond((results, typeName) =>
      validateSemanticAndReferencialIntegrityOfFiles(
        { identity: identityIntegrityValidators },
        configMap[typeName] as TypeConfig<TypeMap[keyof TypeMap], TypeId<keyof TypeMap>>,
        results
      )
    ))
  }
  else {
    return structuralIntegrityResults
  }
}
