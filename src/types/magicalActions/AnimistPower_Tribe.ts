/**
 * @main Tribe
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { LocaleMap } from "../_LocaleMap.js"

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
   * @minProperties 1
   */
  translations: LocaleMap<{
    /**
     * The tribe name.
     * @minLength 1
     */
    name: string
  }>
}

export const validateSchema = validateSchemaCreator<Tribe>(import.meta.url)
