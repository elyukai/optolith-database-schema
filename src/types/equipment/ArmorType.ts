/**
 * @main ArmorType
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"

/**
 * @title Armor Type
 */
export type ArmorType = {
  /**
   * The armor type's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Each armor type has a *sturdiness rating*. The higher the rating, the more
   * durable the armor. Rolling higher than this rating during a sturdiness
   * check means the armor receives one level of the new condition *Wear*.
   * @integer
   * @minimum 1
   * @msximum 20
   */
  sturdiness_rating: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ArmorTypeTranslation>
}

export type ArmorTypeTranslation = {
  /**
   * The name of the armor type.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<ArmorType>(import.meta.url)
