/**
 * @main JesterTrick
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"
import { Duration, Effect, TargetCategory } from "../_ActivatableSkill"
import { ImprovementCost } from "../_ImprovementCost"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck"

/**
 * @title Jester Trick
 */
export type JesterTrick = {
  /**
   * The jester trick's identifier. An unique, increasing integer.
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
   * Measurable parameters of a jester trick.
   */
  parameters: PerformanceParameters

  /**
   * The target category – the kind of creature or object – the skill affects.
   */
  target: TargetCategory.T

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
       * The name of the jester trick.
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
      casting_time: { full: string; abbr: string }

      /**
       * @deprecated
       */
      cost: { full: string; abbr: string }

      /**
       * @deprecated
       */
      range: { full: string; abbr: string }

      /**
       * @deprecated
       */
      duration: { full: string; abbr: string }

      /**
       * @deprecated
       */
      target: string

      errata?: Errata
    }
  }
}

type PerformanceParameters = {
  /**
   * The casting time.
   * @integer
   * @minimum 1
   */
  casting_time: number

  /**
   * The AE cost.
   * @integer
   * @minimum 1
   */
  cost: number

  /**
   * The range.
   */
  range:
    | { tag: "Touch" }
    | { tag: "Self" }
    | {
      tag: "Steps"

      /**
       * The range in steps/m.
       * @integer
       * @minimum 2
       */
      value: number
    }

  /**
   * The range.
   */
  duration: {
    value:
      | { tag: "Immediate" }
      | {
        tag: "Flat"

        /**
         * The (unitless) duration.
         * @integer
         * @minimum 2
         */
        value: number
      }
      | {
        tag: "QualityLevels"

        /**
         * A value that multiplies the resulting quality levels.
         * @integer
         * @minimum 2
         * @default 1
         */
        multiplier?: number
      }

    unit: Duration.Unit
  }
}
