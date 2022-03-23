/**
 * @main EquipmentPackage
 */

import { validateSchemaCreator } from "../../validation/schema.js"

/**
 * @title Equipment Package
 */
export type EquipmentPackage = {
  /**
   * The equipment package's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All items in the package. You have to provide the item (template)
   * identifier and you can optionally provide the number of how often an item
   * is included in the package.
   * @minItems 2
   */
  items: {
    /**
     * The item's identifier.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * The number of how often the item is included in the package.
     * @integer
     * @minimum 2
     * @default 1
     */
    number?: number
  }[]

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
       * The name of the equipment package.
       * @minLength 1
       */
      name: string
    }
  }
}

export const validateSchema = validateSchemaCreator<EquipmentPackage>(import.meta.url)