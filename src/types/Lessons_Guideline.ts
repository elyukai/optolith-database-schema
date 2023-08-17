/**
 * @main Guideline
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Guideline
 */
export type Guideline = {
  /**
   * The guideline's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Maximum number of spells that can be exchanged.
   * @integer
   * @minimum 0
   */
  spellwork_changes_allowed: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<GuidelineTranslation>
}

export type GuidelineTranslation = {
  /**
   * The guideline name.
   */
  name: NonEmptyString
}

export const config: TypeConfig<Guideline> = {
  name: "Guideline",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Guideline"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
