/**
 * @main State
 */

import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title State
 */
export type State = {
  /**
   * The state's identifier. An unique, increasing integer.
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
       * The name of the state.
       * @minLength 1
       */
      name: string

      /**
       * The description of the state.
       * @markdown
       * @minLength 1
       */
      description: string

      errata?: Errata
    }
  }
}
