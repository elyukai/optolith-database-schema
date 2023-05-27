import type { default as AjvModule, DefinedError } from "ajv"
import { basename, relative, sep } from "path"
import { fileURLToPath } from "url"
import { libDir } from "../../../folders.js"
import { changeFileExtension } from "../../helpers/io.js"
import { Result, error, ok } from "../../helpers/result.js"

// import resolution fixes for TypeScript
type Ajv = AjvModule.default

export type SchemaError = DefinedError

/**
 * The result of validating a single file. Either the valid data or validation
 * errors.
 */
export type SchemaValidationResult<T> = Result<T, SchemaError[]>

const schemaIdFromSourcePath = (sourcePath: string) => {
  const relativePathOfType   = relative(libDir, fileURLToPath(sourcePath))
  const relativePathOfSchema = changeFileExtension(relativePathOfType, ".schema.json")

  return "/" + relativePathOfSchema.split(sep).join("/")
}

/**
 * A function that validates `data` at a specific `filePath` to be of type `T`
 * using a specified `validator`.
 */
export type SchemaValidator<T> = (validator: Ajv, data: unknown, filePath: string) => SchemaValidationResult<T>

/**
 * Options for creating a `TypeValidator`.
 */
export type SchemaValidatorOptions = {
  ignoreFileNamePattern?: boolean
}

/**
 * Creates a type validator based on the URL of the type definition source file
 * and options. The source file URL is used to derive it’s corresponding schema
 * location.
 * @param importMetaUrl The `import.meta.url` value of the type definition
 * source file.
 * @param options
 * @returns
 */
export const createSchemaValidator = <T>(
  importMetaUrl: string,
  options: SchemaValidatorOptions = {}
): SchemaValidator<T> => {
  const { ignoreFileNamePattern = false } = options
  const schemaId = schemaIdFromSourcePath(importMetaUrl)

  return (validator: Ajv, data: unknown, filePath: string): SchemaValidationResult<T> => {
    const fileName = basename(filePath)

    if (validator.validate(schemaId, data)) {
      return ok(data as T)
    }
    else {
      return error(validator.errors as SchemaError[] ?? [])
    }
  }
}
