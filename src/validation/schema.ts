import Ajv, { DefinedError } from "ajv"
import { basename, dirname, extname, join, relative, sep } from "path"
import { fileURLToPath } from "url"
import { libDir } from "../../config/directories.js"

export type FileNameError = {
  keyword: "filename"
  instancePath: string
  message: string
}

const fileNameError = (fileName: string): FileNameError => ({
  keyword: "filename",
  instancePath: "",
  message: `the file name "${fileName}" does not match the pattern ^[1-9][0-9]*_[A-Z][a-z]*(?:-[a-zA-Z][a-z]*)\\.yml$`
})

const baseNamePattern = /^[1-9][0-9]*_[A-Z][a-z]*(?:-[a-zA-Z][a-z]*)*\.yml$/

export type TypeValidationResult<T> =
  | { tag: "Ok", value: T }
  | { tag: "Error", errors: TypeValidationResultErrors }

export type TypeValidationResultErrors = {
  fileNameError?: FileNameError
  schemaErrors: DefinedError[]
}

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
      const fileName = basename(filePath)
      const correctFileName = ignoreFileNamePattern || baseNamePattern.test(fileName)

      if (validator.validate(schemaId, data) && correctFileName) {
        return { tag: "Ok", value: data as T}
      }
      else {
        return {
          tag: "Error",
          errors: {
            fileNameError: correctFileName ? undefined : fileNameError(fileName),
            schemaErrors: validator.errors as DefinedError[] ?? [],
          }
        }
      }
    }
  }
