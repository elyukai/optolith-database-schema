import Ajv, { DefinedError } from "ajv"
import { basename, dirname, extname, join, relative, sep } from "path"
import { fileURLToPath } from "url"
import { libDir } from "../../build/directories.js"

export type TypeValidationResult<T> =
  | { tag: "Ok", value: T }
  | { tag: "Error", errors: DefinedError[] }

const changeFileExtension = (path: string, ext: string) =>
  join(dirname(path), basename(path, extname(path)) + ext)

const schemaIdFromSourcePath = (sourcePath: string) => {
  const relativePathOfType   = relative(libDir, fileURLToPath(sourcePath))
  const relativePathOfSchema = changeFileExtension(relativePathOfType, ".schema.json")

  return "/" + relativePathOfSchema.split(sep).join("/")
}

export type TypeValidator<T> = (validator: Ajv, data: unknown, filePath: string) => TypeValidationResult<T>

export const validateSchemaCreator =
  <T>(importMetaUrl: string): TypeValidator<T> => {
    const schemaId = schemaIdFromSourcePath(importMetaUrl)

    return (validator: Ajv, data: unknown): TypeValidationResult<T> => {
      if (validator.validate(schemaId, data)) {
        return { tag: "Ok", value: data as T}
      }
      else {
        return { tag: "Error", errors: validator.errors as DefinedError[] }
      }
    }
  }
