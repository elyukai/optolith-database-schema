/**
 * @main Spell
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { Effect, FastPerformanceParameters, TargetCategory } from "./_ActivatableSkill.js"
import { Enhancements } from "./_Enhancements.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { SpellworkPrerequisites } from "./_Prerequisite.js"
import { SkillCheck, SkillCheckPenalty } from "./_SkillCheck.js"

/**
 * @title Spell
 */
export type Spell = {
  /**
   * The spell's identifier. An unique, increasing integer.
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
   * Measurable parameters of a spell.
   */
  parameters: FastPerformanceParameters

  /**
   * The target category – the kind of creature or object – the skill affects.
   */
  target: TargetCategory.T

  /**
   * The associated property.
   */
  property: {
    /**
     * The property's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }

  /**
   * The tradition(s) the spell is available for. It may be *generally*
   * available to all traditions or it may be only familiar in specific
   * traditions.
   */
  traditions:
    | { tag: "General" }
    | {
      tag: "Specific"

      /**
       * A list of specific traditions.
       * @minItems 1
       */
      list: {
        /**
         * The magical tradition's identifier. If `is_placeholder` is `true`
         * then this is the magical tradition's placeholder identifier
         * instead.
         * @integer
         * @minimum 1
         */
        id: number

        /**
         * If set to `true`, the tradition is not available as a special ability
         * yet.
         */
        is_placeholder?: true
      }[]
    }

  /**
   * States which column is used to improve the skill.
   */
  improvement_cost: ImprovementCost

  prerequisites?: SpellworkPrerequisites

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
       * The name of the spell.
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

  enhancements?: Enhancements
}

export const validateSchema = validateSchemaCreator<Spell>(import.meta.url)
