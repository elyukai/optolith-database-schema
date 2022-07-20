/**
 * @main Aspect
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Aspect
 */
export type Aspect = {
  /**
   * The aspect's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<AspectTranslation>
}

export type AspectTranslation = {
  /**
   * The aspect name.
   */
  name: NonEmptyString

  /**
   * The aspect's name appended to the simple name (not `name_in_library`)
   * of the special ability *Master of (Aspect)*.
   */
  master_of_aspect_suffix?: NonEmptyString
}

export const validateSchema = validateSchemaCreator<Aspect>(import.meta.url)
