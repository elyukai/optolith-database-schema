/**
 * @main Aspect
 */

import { validateSchemaCreator } from "../validation/schema.js"

/**
 * @title Aspect
 */
export type Aspect = {
  /**
   * The aspect's identifier. An unique, increasing integer.
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
       * The aspect name.
       * @minLength 1
       */
      name: string

      /**
       * The aspect's name appended to the simple name (not `name_in_library`)
       * of the special ability *Master of (Aspect)*.
       * @minLength 1
       */
      master_of_aspect_suffix?: string
    }
  }
}

export const validateSchema = validateSchemaCreator<Aspect>(import.meta.url)
