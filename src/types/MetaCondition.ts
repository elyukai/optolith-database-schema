/**
 * @main MetaCondition
 */

import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * Meta Conditions are rule elements that work like conditions in the sense that
 * they have four levels with different effects, but which are not explicitly
 * listed as conditions.
 * @title Meta Condition
 */
export type MetaCondition = {
  /**
   * The meta condition's identifier. An unique, increasing integer.
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
       * The meta condition's name.
       * @minLength 1
       */
      name: string

      /**
       * Additional rules for the meta condition, if applicable.
       * @markdown
       * @minLength 1
       */
      rules?: string

      /**
       * The effects for level 1 to 4.
       */
      effects: [Effect, Effect, Effect, Effect]

      errata?: Errata
    }
  }
}

/**
 * The effect on a level.
 * @markdown
 * @minLength 1
 */
type Effect = string
