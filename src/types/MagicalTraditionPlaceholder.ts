/**
 * @main MagicalTraditionPlaceholder
 */

import { validateSchemaCreator } from "../validation/schema.js"

/**
 * @title Magical Tradition Placeholder
 */
export type MagicalTraditionPlaceholder = {
  /**
   * The magical tradition placeholder's identifier. An unique, increasing
   * integer.
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
       * The name of the magical tradition.
       * @minLength 1
       */
      name: string
    }
  }
}

export const validateSchema = validateSchemaCreator<MagicalTraditionPlaceholder>(import.meta.url)
