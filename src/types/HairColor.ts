/**
 * @main HairColor
 */

import { validateSchemaCreator } from "../validation/schema.js"
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
   * @minProperties 1
   */
  translations: LocaleMap<HairColorTranslation>
}

export type HairColorTranslation = {
  /**
   * The hair color.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<HairColor>(import.meta.url)
