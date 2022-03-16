/**
 * @main JesterTrick
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { Duration, Effect, TargetCategory } from "../_ActivatableSkill.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"

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

/**
 * Measurable parameters of a jester trick.
 */
type PerformanceParameters = {
  /**
   * The casting time.
   * @integer
   * @minimum 1
   */
  casting_time: {
    /**
     * The casting time in actions.
     * @integer
     * @minimum 1
     */
    value: number
  }

  /**
   * The AE cost.
   * @integer
   * @minimum 1
   */
  cost: {
    /**
     * The AE cost value.
     * @integer
     * @minimum 1
     */
    value: number
  }

  /**
   * The range.
   */
  range:
    | { tag: "Touch" }
    | { tag: "Self" }
    | {
      tag: "Fixed"

      /**
       * The range in steps/m.
       * @integer
       * @minimum 2
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
      unit: Duration.Unit
    }
    | Duration.CheckResultBasedTagged
}

export const validateSchema = validateSchemaCreator<JesterTrick>(import.meta.url)
