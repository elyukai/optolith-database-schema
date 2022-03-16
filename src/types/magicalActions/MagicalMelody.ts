/**
 * @main MagicalMelody
 */

import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { Effect } from "../_ActivatableSkill.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { MusicTraditionReference } from "./_MusicTradition.js"
import { SkillReference } from "./_SkillReference.js"

/**
 * @title Magical Melody
 */
export type MagicalMelody = {
  /**
   * The magical melody's identifier. An unique, increasing integer.
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
   * Arcane bards must make a *Singing (area of application)* or *Music (area of
   * application)* check for each magical melody.
   * @minItems 1
   * @maxItems 2
   * @uniqueItems
   */
  skill: SkillReference[]

  /**
   * Measurable parameters of a magical melody.
   */
  parameters: PerformanceParameters

  /**
   * The property's identifier.
   * @integer
   * @minimum 1
   */
  property_id: number

  /**
   * The music tradition(s) the magical melody is available for. This also
   * defines the different names in each music tradition.
   * @minItems 1
   */
  music_tradition: MusicTraditionReference[]

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
       * The name of the magical melody.
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
      duration: { full: string; abbr: string }

      /**
       * @deprecated
       */
      cost: { full: string; abbr: string }

      errata?: Errata
    }
  }
}

/**
 * Measurable parameters of a magical melody.
 */
type PerformanceParameters = {
  duration: {
    length:
      | { tag: "Long" }
      | { tag: "Short" }
    reusability:
      | { tag: "OneTime" }
      | { tag: "Sustainable" }
  }
  cost:
    | {
      tag: "Fixed"

      /**
       * The (temporary) AE cost value.
       * @integer
       * @minimum 1
       */
      value: number
    }
    | {
      tag: "FirstPerson"

      /**
       * The (temporary) AE cost value for the first targeted person. The AE
       * cost for each additional person is half this value.
       * @integer
       * @minimum 1
       * @multipleOf 2
       */
      value: number
    }
}
