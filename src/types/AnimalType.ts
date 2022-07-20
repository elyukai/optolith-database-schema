/**
 * @main AnimalType
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Animal Type
 */
export type AnimalType = {
  /**
   * The animal type's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AnimalTypeTranslation>
}

export type AnimalTypeTranslation = {
  /**
   * The animal type name.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<AnimalType>(import.meta.url)
