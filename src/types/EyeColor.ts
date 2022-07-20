/**
 * @main EyeColor
 */

import { validateSchemaCreator } from "../validation/schema.js"
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
   * @minProperties 1
   */
  translations: LocaleMap<EyeColorTranslation>
}

export type EyeColorTranslation = {
  /**
   * The eye color.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<EyeColor>(import.meta.url)
