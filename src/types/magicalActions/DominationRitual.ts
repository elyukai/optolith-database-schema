/**
 * @main DominationRitual
 */

import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { Duration, Effect } from "../_ActivatableSkill.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"

/**
 * @title Domination Ritual
 */
export type DominationRitual = {
  /**
   * The domination ritual's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Lists the linked three attributes used to make a skill check.
   */
  check: SkillCheck

  /**
   * In some cases, the target's Spirit or Toughness is applied as a penalty.
   */
  check_penalty?: SkillCheckPenalty

  /**
   * Measurable parameters of a curse.
   */
  parameters: PerformanceParameters

  /**
   * The property's identifier.
   * @integer
   * @minimum 1
   */
  property_id: number

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
       * The name of the domination ritual.
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
      cost: { full: string; abbr: string }

      /**
       * @deprecated
       */
      duration: { full: string; abbr: string }

      errata?: Errata
    }
  }
}

/**
 * Measurable parameters of a curse.
 */
type PerformanceParameters = {
  /**
   * The AE cost.
   */
  cost: {
    /**
     * The initial skill modification identifier/level.
     * @integer
     * @minimum 1
     * @maximum 6
     */
    initial_modification_level: number

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
         * AE cost in addition to the normal AE cost.
         */
        additional?: {
          /**
           * The full description of where the cost come from.
           * @minLength 1
           */
          default: string

          /**
           * A compressed description of where the cost come from for use in
           * small areas (e.g. on character sheet).
           * @minLength 1
           */
          compressed: string
        }
      }
    }
  }

  /**
   * The duration.
   */
  duration:
    | {
      tag: "Fixed"

      /**
       * The (unitless) duration value.
       * @integer
       * @minimum 1
       */
      value: number

      /**
       * The unit of the `value`.
       */
      unit: Duration.Unit
    }
    | Duration.CheckResultBasedTagged
    | {
      tag: "Indefinite"

      /**
       * Specified if the duration has a maximum time span.
       */
      maximum?:
        | {
          tag: "Fixed"

          /**
           * The (unitless) maximum duration value.
           * @integer
           * @minimum 1
           */
          value: number

          /**
           * The unit of the `value`.
           */
          unit: Duration.Unit
        }
        | Duration.CheckResultBasedTagged

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
