/**
 * @main EyeColor
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Eye Color
 */
export type EyeColor = {
  /**
   * The eye color's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<EyeColorTranslation>
}

export type EyeColorTranslation = {
  /**
   * The eye color.
   */
  name: NonEmptyString
}

export const config: TypeConfig<EyeColor, EyeColor["id"], "EyeColor"> = {
  name: "EyeColor",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("EyeColor"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
