/**
 * @main Curse
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"
import { Duration, Effect } from "../_ActivatableSkill"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck"

/**
 * @title Curse
 */
export type Curse = {
  /**
   * The curse's identifier. An unique, increasing integer.
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
       * The name of the curse.
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
  cost:
    | {
      tag: "Fixed"

      /**
       * The (temporary) AE cost value.
       * @integer
       * @minimum 1
       */
      value: number

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
           * The cost have to be per a specific countable entity, e.g. `8 KP
           * per person`
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

          /**
           * A note, appended to the generated string in parenthesis.
           */
          note?: {
            /**
             * The full note.
             * @minLength 1
             */
            default: string

            /**
             * A compressed note, if applicable. If not specified it should not
             * be displayed in small location.
             * @minLength 1
             */
            compressed?: string
          }
        }
      }
    }
    | {
      tag: "Indefinite"

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
           * A description of where the cost come from.
           */
          description: {
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
    | { tag: "Immediate" }
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
