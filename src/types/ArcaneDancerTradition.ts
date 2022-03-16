/**
 * @main ArcaneDancerTradition
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { ArcaneTraditionPrerequisites } from "./_Prerequisite.js"

/**
 * @title Arcane Dancer Tradition
 */
export type ArcaneDancerTradition = {
  /**
   * The arcane dancer tradition's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  prerequisites: ArcaneTraditionPrerequisites

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
       * The arcane dancer tradition's name.
       * @minLength 1
       */
      name: string
    }
  }
}

export const validateSchema = validateSchemaCreator<ArcaneDancerTradition>(import.meta.url)
