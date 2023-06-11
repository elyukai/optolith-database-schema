import { basename } from "node:path"
import { Result, error, ok } from "../../helpers/result.js"

const ENTITY_FILENAME_PATTERN = /^(?:0|[1-9][0-9]*)_(?:[A-Z][a-zA-Z]*|[1-9][0-9]*)(?:-(?:[a-zA-Z]+|[1-9][0-9]*))*\.yml$/

const LANGUAGE_FILENAME_PATTERN = /^[a-z]{2}-[A-Z]{2}\.yml$/

/**
 * An error in the shape of an `Ajv` error, with `keyword` being the
 * discriminating property.
 */
export type FileNameError = {
  keyword: "filename"
  instancePath: string
  message: string
}

const fileNameError = (pattern: RegExp, fileName: string): FileNameError => ({
  keyword: "filename",
  instancePath: "",
  message: `the file name "${fileName}" does not match the pattern ${pattern.source}`
})

export type FileNameValidationResult = Result<void, FileNameError[]>

export type FileNameValidator = (filePath: string) => FileNameValidationResult

export const createFileNameValidator = (pattern: RegExp): FileNameValidator =>
  (filePath: string) => {
    const fileName = basename(filePath)
    return pattern.test(fileName)
      ? ok(undefined)
      : error([fileNameError(pattern, fileName)])
  }

export const validateEntityFileName: FileNameValidator = createFileNameValidator(ENTITY_FILENAME_PATTERN)

export const validateLanguageFileName: FileNameValidator = createFileNameValidator(LANGUAGE_FILENAME_PATTERN)
