/**
 * @main AnimalShapePath
 */

import { validateSchemaCreator } from "../../../validation/schema.js"

/**
 * @title Animal Shape Path
 */
 export type AnimalShapePath = {
  /**
   * The animal shape path's identifier. An unique, increasing integer.
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
       * The animal shape path's name.
       * @minLength 1
       */
      name: string
    }
  }
}

export const validateSchema = validateSchemaCreator<AnimalShapePath>(import.meta.url)
