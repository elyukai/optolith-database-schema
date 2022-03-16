/**
 * @main SexPractice
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Sex Practice
 */
export type SexPractice = {
  /**
   * The sex practice's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  src: PublicationRefs

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
       * The sex practice's name.
       * @minLength 1
       */
      name: string

      /**
       * The rules of the sex practice.
       * @minLength 1
       */
      rules: string

      /**
       * How long a round of this sex practice takes.
       * @minLength 1
       */
      duration: string

      /**
       * Prerequisites of participants and environment. Do not specify if the
       * sex practice has no prerequisites.
       * @minLength 1
       */
      prerequisites?: string

      /**
       * Effects of a failed *Seduction* check.
       * @minLength 1
       */
      failed: string
    }
  }
}

export const validateSchema = validateSchemaCreator<SexPractice>(import.meta.url)
