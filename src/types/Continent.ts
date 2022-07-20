/**
 * @main Continent
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { LocaleMap } from "./_LocaleMap.js"

/**
 * Continents are mostly referenced to in languages and scripts that occur on a
 * specific continent.
 * @title Continent
 */
export type Continent = {
  /**
   * The continent's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<ContinentTranslation>
}

export type ContinentTranslation = {
  /**
   * The continent name.
   * @minLength 1
   */
  name: string
}

export const validateSchema = validateSchemaCreator<Continent>(import.meta.url)
