/**
 * @main GeodeRitual
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { SlowSkillCastingTimeUnit } from "../SkillModificationLevel.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { CostMap } from "../_ActivatableSkillCost.js"
import { DurationUnit, TaggedCheckResultBasedDuration } from "../_ActivatableSkillDuration.js"
import { Effect } from "../_ActivatableSkillEffect.js"
import { TargetCategory } from "../_ActivatableSkillTargetCategory.js"
import { GeodeRitualPrerequisites } from "../_Prerequisite.js"
import { SkillCheck } from "../_SkillCheck.js"

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
  target: TargetCategory

  /**
   * The property's identifier.
   * @integer
   * @minimum 1
   */
  property_id: number

  prerequisites?: GeodeRitualPrerequisites

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
      effect: Effect

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
     * The (unitless) casting time.
     * @integer
     * @minimum 1
     */
    value: number

    /**
     * The casting time unit.
     */
    unit: SlowSkillCastingTimeUnit
  }

  /**
   * The AE cost.
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
    }
    | {
      tag: "Map"

      map: CostMap
    }

  /**
   * The range.
   */
  range:
    | { tag: "Self" }
    | {
      tag: "Fixed"

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
      tag: "Fixed"

      /**
       * The (unitless) duration.
       * @integer
       * @minimum 2
       */
      value: number

      /**
       * The duration unit.
       */
      unit: DurationUnit
    }
    | TaggedCheckResultBasedDuration
}

export const validateSchema = validateSchemaCreator<GeodeRitual>(import.meta.url)
