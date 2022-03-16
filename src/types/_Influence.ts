/**
 * @main Influence
 */

import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { InfluencePrerequisites } from "./_Prerequisite.js"

/**
 * @title Influence
 */
export type Influence = {
  /**
   * The influence's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  prerequisites: InfluencePrerequisites

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
       * The influence name.
       * @minLength 1
       */
      name: string

      /**
       * The effects of the influence. They should be sorted like they are in
       * the book.
       * @minItems 1
       */
      effects: {
        /**
         * An optional label that is displayed and placed before the actual
         * text.
         * @minLength 1
         */
        label?: string

        /**
         * The effect text.
         * @minLength 1
         */
        text: string
      }[]

      errata?: Errata
    }
  }
}
