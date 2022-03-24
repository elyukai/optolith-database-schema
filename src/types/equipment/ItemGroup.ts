/**
 * @main ItemGroup
 */

import { validateSchemaCreator } from "../../validation/schema.js"

/**
 * @title Item Group
 */
export type ItemGroup = {
  /**
   * The item group's identifier. An unique, increasing integer.
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
       * The name of the item group.
       * @minLength 1
       */
      name: string
    }
  }
}

export const validateSchema = validateSchemaCreator<ItemGroup>(import.meta.url)
