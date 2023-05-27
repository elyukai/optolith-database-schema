import { basename } from "node:path"
import { Result, error, ok } from "../../helpers/result.js"

const BASE_NAME_PATTERN = /^(?:0|[1-9][0-9]*)_(?:[A-Z][a-zA-Z]*|[1-9][0-9]*)(?:-(?:[a-zA-Z]+|[1-9][0-9]*))*\.yml$/

/**
 * An error in the shape of an `Ajv` error, with `keyword` being the
 * discriminating property.
 */
export type FileNameError = {
  keyword: "filename"
  instancePath: string
  message: string
}

const fileNameError = (fileName: string): FileNameError => ({
  keyword: "filename",
  instancePath: "",
  message: `the file name "${fileName}" does not match the pattern ${BASE_NAME_PATTERN.source}`
})

export type FileNameValidationResult = Result<void, FileNameError[]>

export type FileNameValidator = (filePath: string) => FileNameValidationResult

export const validateFileName: FileNameValidator = (filePath: string): FileNameValidationResult => {
  const fileName = basename(filePath)
  return BASE_NAME_PATTERN.test(fileName)
    ? ok(undefined)
    : error([fileNameError(fileName)])
}
