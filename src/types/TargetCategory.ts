/**
 * @main TargetCategory
 */

import { validateSchemaCreator } from "../validation/schema.js"

/**
 * @title Target Category
 */
export type TargetCategory = {
  /**
   * The target category's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * A superordinate target category, if present.
   */
  parent?: {
    /**
     * The identifier of the superordinate target category.
     * @integer
     * @minimum 1
     */
    id: number
  }

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
       * The target category name.
       * @minLength 1
       */
      name: string
    }
  }
}

export const validateSchema = validateSchemaCreator<TargetCategory>(import.meta.url)
