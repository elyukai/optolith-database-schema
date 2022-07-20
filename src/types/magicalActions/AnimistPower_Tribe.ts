/**
 * @main Tribe
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"

/**
 * @title Tribe
 */
export type Tribe = {
  /**
   * The tribe's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<TribeTranslation>
}

export type TribeTranslation = {
  /**
   * The tribe name.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<Tribe>(import.meta.url)
