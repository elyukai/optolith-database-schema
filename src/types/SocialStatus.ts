/**
 * @main SocialStatus
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Social Status
 */
export type SocialStatus = {
  /**
   * The social status' identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<SocialStatusTranslation>
}

export type SocialStatusTranslation = {
  /**
   * The social status name.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<SocialStatus>(import.meta.url)
