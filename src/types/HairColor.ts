/**
 * @main HairColor
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Hair Color
 */
 export type HairColor = {
  /**
   * The hair color's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<HairColorTranslation>
}

export type HairColorTranslation = {
  /**
   * The hair color.
   */
  name: NonEmptyString
}

export const config: TypeConfig<HairColor> = {
  name: "HairColor",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("HairColor"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
