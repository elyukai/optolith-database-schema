/**
 * @main GeodeRitual
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"
import { Cost, Duration, Effect, TargetCategory } from "../_ActivatableSkill"
import { GroupCollection } from "../_Prerequisite"
import { SkillCheck } from "../_SkillCheck"

/**
 * @title Geode Ritual
 */
export type GeodeRitual = {
  /**
   * The geode ritual's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Lists the linked three attributes used to make a skill check.
   */
  check: SkillCheck

  /**
   * Measurable parameters of a geode ritual.
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

  prerequisites?: GroupCollection.GeodeRitual

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
       * The name of the geode ritual.
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

/**
 * Measurable parameters of a geode ritual.
 */
type PerformanceParameters = {
  /**
   * The casting time.
   */
  casting_time: {
    /**
     * The skill modification increment identifier/level.
     * @integer
     * @minimum 1
     * @maximum 6
     */
    modification_id: number
  }

  /**
   * The AE cost.
   * @integer
   * @minimum 1
   */
  cost:
    | {
      tag: "Single"

      /**
       * The skill modification increment identifier/level.
       * @integer
       * @minimum 1
       * @maximum 6
       */
      modification_id: number
    }
    | {
      tag: "Map"

      map: Cost.OneTime.Map
    }

  /**
   * The range.
   */
  range:
    | { tag: "Self" }
    | {
      tag: "Steps"

      /**
       * The range in steps/m.
       * @integer
       * @minimum 1
       */
      value: number
    }

  /**
   * The duration.
   */
  duration:
    | { tag: "Immediate" }
    | {
      tag: "Flat"

      /**
       * The (unitless) duration.
       * @integer
       * @minimum 2
       */
      value: number

      /**
       * The duration unit.
       */
      unit: Duration.Unit
    }
    | {
      tag: "QualityLevels"

      /**
       * A value that modifies the resulting quality levels.
       */
      modifier?:
        | {
          tag: "Multiply"

          /**
           * A value that multiplies the resulting quality levels.
           * @integer
           * @minimum 2
           * @default 1
           */
          value: number
        }
        | {
          tag: "Divide"

          /**
           * A value that divides the resulting quality levels.
           * @integer
           * @minimum 2
           * @default 1
           */
          value: number
        }

      /**
       * The duration unit.
       */
      unit: Duration.Unit
    }
}
