/**
 * @main MagicalRune
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"
import { Duration, Effect } from "../_ActivatableSkill"
import { ImprovementCost } from "../_ImprovementCost"
import { SkillCheck } from "../_SkillCheck"

/**
 * @title Magical Rune
 */
export type MagicalRune = {
  /**
   * The magical rune's identifier. An unique, increasing integer.
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
  check_penalty?:
    | {
      tag: "CloseCombatTechnique"

      /**
       * A map from close combat techniques to their modifiers.
       * @minItems 1
       */
      map: {
        /**
         * The close combat technique's identifier.
         * @integer
         * @minimum 1
         */
        combat_technique_id: number

        /**
         * The check modifier for the specified close combat technique.
         * @integer
         */
        modifier: number
      }[]

      other: {
        /**
         * The check modifier for close combat techniques not specified in
         * `map`.
         * @integer
         */
        modifier: number
      }
    }

  /**
   * Measurable parameters of a magical rune.
   */
  parameters: PerformanceParameters

  /**
   * The property's identifier.
   * @integer
   * @minimum 1
   */
  property_id: number

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
       * The name of the magical rune.
       * @minLength 1
       */
      name: string

      /**
       * The native name of the magical rune.
       * @minLength 1
       */
      native_name: string

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
      crafting_time: {
        slow: { full: string; abbr: string }
        fast: { full: string; abbr: string }
      }

      /**
       * @deprecated
       */
      duration: {
        slow: { full: string; abbr: string }
        fast: { full: string; abbr: string }
      }

      errata?: Errata
    }
  }
}

/**
 * Measurable parameters of a magical rune.
 */
type PerformanceParameters = {
  /**
   * The AE cost.
   */
  cost:
    | {
      tag: "Single"

      /**
       * The AE cost value.
       * @integer
       * @minimum 1
       */
      value: number

      /**
       * All translations for the entry, identified by IETF language tag
       * (BCP47).
       * @minProperties 1
       */
      translations?: {
        /**
         * @patternProperties ^[a-z]{2}-[A-Z]{2}$
         * @minProperties 1
         */
        [localeId: string]: {
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
      tag: "Disjunction"

      /**
       * A set of possible AE cost values.
       * @minItems 2
       */
      list: {
        /**
          * The AE cost value.
          * @integer
          * @minimum 1
          */
        value: number
      }[]
    }

  /**
   * The crafting time.
   */
  crafting_time: {
    /**
     * The (unitless) crafting time.
     */
    value: 1 | 2 | 4

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
         * The crafting time has to be per a specific countable entity, e.g. `8
         * action per person`.
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

  /**
   * The duration.
   */
  duration: {
    /**
     * The duration on slow rune application.
     */
    slow: Duration.CheckResultBased

    /**
     * The duration on fast rune application.
     */
    fast: Duration.CheckResultBased
  }
}
