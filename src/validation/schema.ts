import Ajv, { DefinedError } from "ajv"
import { basename, dirname, extname, join, relative, sep } from "path"
import { fileURLToPath } from "url"
import { libDir } from "../../config/directories.js"

export type FileNameError = {
  keyword: "filename"
}

const fileNameError: FileNameError = {
  keyword: "filename"
}

const baseNamePattern = /^[1-9][0-9]*_[A-Z][a-z]*(?:-[a-zA-Z][a-z]*)$/

export type TypeValidationError = DefinedError | FileNameError

export type TypeValidationResult<T> =
  | { tag: "Ok", value: T }
  | { tag: "Error", errors: TypeValidationError[] }

const changeFileExtension = (path: string, ext: string) =>
  join(dirname(path), basename(path, extname(path)) + ext)

const schemaIdFromSourcePath = (sourcePath: string) => {
  const relativePathOfType   = relative(libDir, fileURLToPath(sourcePath))
  const relativePathOfSchema = changeFileExtension(relativePathOfType, ".schema.json")

  return "/" + relativePathOfSchema.split(sep).join("/")
}

export type TypeValidator<T> = (validator: Ajv, data: unknown, filePath: string) => TypeValidationResult<T>

export type TypeValidatorOptions = {
  ignoreFileNamePattern?: boolean
}

export const validateSchemaCreator = <T>(
  importMetaUrl: string,
  { ignoreFileNamePattern = false }: TypeValidatorOptions = {}
): TypeValidator<T> => {
    const schemaId = schemaIdFromSourcePath(importMetaUrl)

    return (validator: Ajv, data: unknown, filePath: string): TypeValidationResult<T> => {
      const correctFileName = ignoreFileNamePattern || baseNamePattern.test(basename(filePath))

      if (validator.validate(schemaId, data) && correctFileName) {
        return { tag: "Ok", value: data as T}
      }
      else {
        const errors: TypeValidationError[] = [
          ...(validator.errors as DefinedError[] ?? []),
          ...(!correctFileName ? [fileNameError] : [])
        ]

        return { tag: "Error", errors }
      }
    }
  }
