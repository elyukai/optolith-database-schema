/**
 * @main LiturgicalChant
 */

import { Errata } from "./source/_Erratum"
import { PublicationRefs } from "./source/_PublicationRef"
import { Effect, FastPerformanceParameters, TargetCategory } from "./_ActivatableSkill"
import { Enhancements } from "./_Enhancements"
import { ImprovementCost } from "./_ImprovementCost"
import { GroupCollection } from "./_Prerequisite"
import { SkillCheck, SkillCheckPenalty } from "./_SkillCheck"

/**
 * @title Liturgical Chant
 */
export type LiturgicalChant = {
  /**
   * The liturgical chant's identifier. An unique, increasing integer.
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
   * Measurable parameters of a liturgical chant.
   */
  parameters: FastPerformanceParameters

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
   * The tradition(s) the liturgical chant is available for. Note that general
   * aspects do not have an associated tradition and thus need to be defined in
   * a special way.
   * @minItems 1
   */
  traditions: Tradition[]

  /**
   * States which column is used to improve the skill.
   */
  improvement_cost: ImprovementCost

  prerequisites?: GroupCollection.Liturgy

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
       * The name of the liturgical chant.
       * @minLength 1
       */
      name: string

      /**
       * A compressed name of the liturgical chant for use in small areas (e.g.
       * on character sheet). Should only be defined if the `name` does not fit
       * on character sheet.
       * @minLength 1
       */
      name_compressed?: string

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

export type Tradition =
  | {
    tag: "GeneralAspect"

    /**
     * A general aspect's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "Tradition"

    /**
     * The blessed tradition's identifier.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * The aspect(s) from the tradition the ceremony belongs to. Note that not
     * all traditions have aspects.
     * @minItems 1
     * @maxItems 2
     */
    aspects?: {
      /**
       * The aspect's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }[]
  }
