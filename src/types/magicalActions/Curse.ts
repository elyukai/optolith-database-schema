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
  cost:
    | {
      tag: "Numeric"

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
           * The cost have to be per a specific countable entity, e.g. `8 KP
           * per person`
           * @minLength 1
           */
          per?: string

          /**
           * A note, appended to the generated string in parenthesis.
           * @minLength 1
           */
          note?: string
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
  duration:
    | { tag: "Immediate" }
    | {
      tag: "Numeric"

      /**
       * The duration value. If `check_result` is defined and this is `1`, it
       * is used as the unit for the value derived from the check result in
       * rendered text output.
       */
      value: Duration.UnitValue

      /**
       * If defined, the check result affects the duration in the defined way.
       */
      check_result?: Duration.CheckResult
    }
    | {
      tag: "Indefinite"

      /**
       * Specified if the duration has a maximum time span.
       */
      maximum?: {
        /**
         * The duration value. If `check_result` is defined and this is `1`, it
         * is used as the unit for the value derived from the check result in
         * rendered text output.
         */
        value: Duration.UnitValue

        /**
         * If defined, the check result affects the duration in the defined way.
         */
        check_result?: Duration.CheckResult
      }

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
