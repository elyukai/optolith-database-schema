/**
 * @main AnimalShapeSize
 */

import { validateSchemaCreator } from "../../../validation/schema.js"

/**
 * @title Animal Shape Size
 */
 export type AnimalShapeSize = {
  /**
   * The animal shape's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The volume points the animal shape needs.
   * @integer
   * @minimum 1
   */
  volume: number

  /**
   * The adventure point value of the animal shape.
   * @integer
   * @minimum 1
   */
  ap_value: number

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
       * The animal shape size name.
       * @minLength 1
       */
      name: string
    }
  }
}

export const validateSchema = validateSchemaCreator<AnimalShapeSize>(import.meta.url)
