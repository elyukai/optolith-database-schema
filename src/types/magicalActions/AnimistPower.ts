/**
 * @main AnimistPower
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"
import { Duration, Effect } from "../_ActivatableSkill"
import { ImprovementCost } from "../_ImprovementCost"
import { SkillCheck } from "../_SkillCheck"

/**
 * @title Animist Power
 */
export type AnimistPower = {
  /**
   * The animist power's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Lists the linked three attributes used to make a skill check.
   */
  check: SkillCheck

  /**
   * Measurable parameters of a animist power.
   */
  parameters: PerformanceParameters

  /**
   * The property's identifier.
   * @integer
   * @minimum 1
   */
  property_id: number

  /**
   * The tribe traditions the animist power is available to. It may be available
   * to all or only specific tribes.
   */
  tribe_tradition:
    | { tag: "General" }
    | {
      tag: "Specific"

      /**
       * The specific tribe traditions this animist power is available to.
       * @minItems 1
       * @uniqueItems
       */
      list: {
        /**
         * The tribe's identifier.
         * @integer
         * @minimum 1
         * @maximum 6
         */
        id: number
      }[]
    }

  /**
   * States which column is used to improve the skill. It is a fixed value or
   * depends on the primary patron.
   */
  improvement_cost:
    | {
      tag: "Flat"

      value: ImprovementCost
    }
    | { tag: "ByPrimaryPatron" }

  /**
   * The animist power can have multiple levels. Each level is skilled
   * separately. A previous level must be on at least 10 so that the next higher
   * level can be activated and skilled. A higher level cannot be skilled higher
   * than a lower level. Each level also adds an effect text to the text of the
   * first level.
   * @minItems 1
   */
  levels?: {
    /**
     * The level number.
     * @integer
     * @minimum 2
     */
    level: number

    /**
     * The source references, if different than the references for level 1.
     */
    src?: PublicationRefs

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
         * An additional effect description for this level.
         * @markdown
         * @minLength 1
         */
        effect: string
      }
    }
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
       * The name of the animist power.
       * @minLength 1
       */
      name: string

      /**
       * The full name of the entry as stated in the sources. Only use when
       * `name` needs to be different from full name for text generation
       * purposes.
       * @minLength 1
       */
      name_in_library?: string

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

      /**
       * A prerequisites text.
       * @deprecated
       */
      prerequisites?: string

      errata?: Errata
    }
  }
}

/**
 * Measurable parameters of a animist power.
 */
type PerformanceParameters =
  | {
    tag: "OneTime"

    /**
     * The AE cost value, either a flat value or defined dynamically by the
     * primary patron.
     */
    cost:
      | {
        tag: "Fixed"

        /**
         * The AE cost value.
         * @integer
         * @minimum 1
         */
        value: number

        /**
         * If defined, half of the AE cost `value` has to be paid each
         * interval.
         */
        interval?: Duration.UnitValue
      }
      | {
        tag: "ByPrimaryPatron"

        /**
         * If defined, half of the AE cost `value` has to be paid each
         * interval.
         */
        interval?: Duration.UnitValue
      }

    /**
     * The duration.
     */
    duration:
      | { tag: "Immediate" }
      | {
        tag: "Fixed"

        /**
         * If the duration is the maximum duration, so it may end earlier.
         */
        is_maximum?: boolean

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
      | Duration.CheckResultBasedTaggedAnimistPower
  }
  | {
    tag: "Sustained"

    /**
     * The AE cost value, either a flat value or defined dynamically by the
     * primary patron.
     */
    cost:
      | {
        tag: "Fixed"

        /**
         * The AE cost value.
         * @integer
         * @minimum 1
         */
        value: number

        /**
         * Half of the AE cost `value` has to be paid each interval.
         */
        interval: Duration.UnitValue
      }
      | {
        tag: "ByPrimaryPatron"

        /**
         * Half of the AE cost `value` has to be paid each interval.
         */
        interval: Duration.UnitValue
      }
  }
