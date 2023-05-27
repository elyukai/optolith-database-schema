import { filterNullable } from "./helpers/array.js"
import { collator } from "./helpers/i18n.js"
import { TypeValidationError } from "./main.js"
import { IntegrityError } from "./validation/builders/integrity.js"
import { FileNameError } from "./validation/builders/naming.js"

/**
 * Options for pretty-printing errors.
 */
export type PrintOptions = {
  /**
   * Whether to print each error message in a file or just print that a file has
   * errors.
   * @default false
   */
  verbose?: boolean
}

/**
 * Pretty-prints an error map.
 * @param errorsByFile A map from file paths to the errors that occurred in
 * them.
 * @param printOptions Configuration options for the printer.
 * @returns The pretty-printed error map.
 */
export const printErrors = (errorsByFile: Record<string, TypeValidationError[]>, printOptions: PrintOptions = {}): string => {
  const { verbose = false } = printOptions

  return Object.entries(errorsByFile)
    .sort(([filePathA], [filePathB]) => collator.compare(filePathA, filePathB))
    .flatMap(
      verbose
      ? ([filePath, errors]) => filterNullable(errors.map(printVerboseError(filePath)))
      : ([filePath, errors]) => [
        ...(
          errors
            .filter((error): error is IntegrityError | FileNameError =>
              error.keyword === "integrity" || error.keyword === "filename"
            )
            .map(printVerboseError(filePath))
        ),
        ...(
          errors.some(error => error.keyword !== "integrity" && error.keyword !== "filename")
          ? [errorMessageBlock([filePath], "has schema errors")]
          : []
        ),
      ]
    )
    .join("\n\n")
}

const printVerboseError = (filePath: string) => (error: TypeValidationError): string => {
  const pathSegments = [filePath, ...error.instancePath.split("/").slice(1)]
  return errorMessageBlock(pathSegments, error.message ?? "")
}

const errorMessageBlock = (path: string[], message: string): string =>
  [
    ...path.map((segment, i) => `${" ".repeat(i * 2)}in "${segment}":`),
    `${" ".repeat(path.length * 2)}${message}`
  ].join("\n")
