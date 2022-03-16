/**
 * @main Script
 */

import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"

/**
 * @title Script
 */
export type Script = {
  /**
   * The script's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The script's adventure point value.
   * @integer
   * @minimum 2
   * @multipleOf 2
   */
  ap_value: number

  /**
   * A list of languages that use this script.
   */
  associated_languages: {
    /**
     * The language's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }[]

  /**
   * The continents this script is present on.
   * @minItems 1
   */
  continent: {
    /**
     * The continent's identifier.
     * @integer
     * @minimum 1
     * @maximum 3
     */
    id: number

    /**
     * Is the script considered virtually extinct in this continent?
     */
    is_extinct: boolean
  }[]

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
       * The name of the language.
       * @minLength 1
       */
      name: string

      /**
       * A list of alternative names.
       * @minLength 1
       */
      alternative_names?: {
        /**
         * An alternative name of the language.
         * @minLength 1
         */
        name: string
      }[]

      /**
       * The description of the alphabet.
       * @minLength 1
       */
       alphabet?: string

      errata?: Errata
    }
  }
}
