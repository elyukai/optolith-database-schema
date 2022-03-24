/**
 * @main ArmorType
 */

import { validateSchemaCreator } from "../../validation/schema.js"

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
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The name of the armor type.
       * @minLength 1
       */
      name: string
    }
  }
}

export const validateSchema = validateSchemaCreator<ArmorType>(import.meta.url)
