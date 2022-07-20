/**
 * @main Region
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Region
 */
export type Region = {
  /**
   * The region's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<RegionTranslation>
}

export type RegionTranslation = {
  /**
   * The region name.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<Region>(import.meta.url)
