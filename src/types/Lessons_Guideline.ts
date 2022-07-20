/**
 * @main Guideline
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Guideline
 */
export type Guideline = {
  /**
   * The region's identifier. An unique, increasing integer.
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
   * @minProperties 1
   */
  translations: LocaleMap<GuidelineTranslation>
}

export type GuidelineTranslation = {
  /**
   * The guideline name.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<Guideline>(import.meta.url)
