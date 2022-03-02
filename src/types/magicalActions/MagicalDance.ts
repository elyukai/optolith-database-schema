/**
 * @main MagicalDance
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"
import { Effect } from "../_ActivatableSkill"
import { ImprovementCost } from "../_ImprovementCost"
import { SkillCheck } from "../_SkillCheck"
import { MusicTraditionReference } from "./_MusicTradition"

/**
 * @title Magical Dance
 */
export type MagicalDance = {
  /**
   * The magical dance's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Lists the linked three attributes used to make a skill check.
   */
  check: SkillCheck

  /**
   * Measurable parameters of a magical dance.
   */
  parameters: PerformanceParameters

  /**
   * The property's identifier.
   * @integer
   * @minimum 1
   */
  property_id: number

  /**
   * The music tradition(s) the magical dance is available for. This also
   * defines the different names in each music tradition.
   * @minItems 1
   */
  music_tradition: MusicTraditionReference[]

  /**
   * States which column is used to improve the skill.
   */
  improvement_cost: ImprovementCost

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
       * The name of the magical dance.
       * @minLength 1
       */
      name: string

      /**
       * The effect description may be either a plain text or a text that is
       * divided by a list of effects for each quality level. It may also be a
       * list for each two quality levels.
       */
      effect: Effect.T

      /**
       * @deprecated
       */
      duration: { full: string; abbr: string }

      /**
       * @deprecated
       */
      cost: { full: string; abbr: string }

      errata?: Errata
    }
  }
}

/**
 * Measurable parameters of a magical dance.
 */
type PerformanceParameters = {
  duration: {
    length:
      | { tag: "Long" }
      | { tag: "Short" }
    reusability:
      | { tag: "OneTime" }
      | { tag: "Sustainable" }
  }
  cost:
    | {
      tag: "Flat"

      /**
       * The (temporary) AE cost value.
       * @integer
       * @minimum 1
       */
      temporary: number

      /**
       * All translations for the entry, identified by IETF language tag (BCP47).
       * @minProperties 1
       */
      translations?: {
        /**
         * @patternProperties ^[a-z]{2}-[A-Z]{2}$
         * @minProperties 1
         */
        [localeId: string]: {
          /**
           * The cost have to be per a specific countable entity, e.g. `8 AE per
           * person`
           * @minLength 1
           */
          per?: {
            /**
             * The full countable entity name.
             * @minLength 1
             */
            default: string

            /**
             * The compressed countable entity name.
             * @minLength 1
             */
            compressed: string
          }
        }
      }
    }
    | {
      tag: "Indefinite"

      /**
       * Specified if the indefinite description's result value is to be
       * multiplied by a certain number.
       * @integer
       * @minimum 2
       */
      multiply?: number

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
           * A description of the duration.
           * @minLength 1
           */
          description: {
            /**
             * The full description of the duration.
             * @minLength 1
             */
            default: string

            /**
             * A compressed description of the duration for use in small areas
             * (e.g. on character sheet).
             * @minLength 1
             */
            compressed: string
          }
        }
      }
    }
}
