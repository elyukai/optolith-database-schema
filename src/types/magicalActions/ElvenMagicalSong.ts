/**
 * @main ElvenMagicalSong
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"
import { Duration, Effect } from "../_ActivatableSkill"
import { ImprovementCost } from "../_ImprovementCost"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck"
import { SkillReference } from "./_SkillReference"

/**
 * @title Elven Magical Song
 */
export type ElvenMagicalSong = {
  /**
   * The elven magical song's identifier. An unique, increasing integer.
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
   * To enhance their songs, elves can make a check on either *Singing
   * (Two-Voiced Singing)* or *Music (appropriate application)* before making
   * the check for the song.
   * @minItems 1
   * @maxItems 2
   * @uniqueItems
   */
  skill: SkillReference[]

  /**
   * Measurable parameters of an elven magical song.
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
       * The name of the elven magical song.
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

      errata?: Errata
    }
  }
}

/**
 * Measurable parameters of an elven magical song.
 */
type PerformanceParameters = {
  /**
   * The AE cost.
   */
  cost: {
    /**
     * The (temporary) AE cost value.
     * @integer
     * @minimum 1
     */
    temporary: number

    /**
     * Specified if the AE cost `value` have to paid for each time interval.
     */
    interval?: Duration.UnitValue

    /**
     * A permanent AE cost, independent from a possible interval.
     * @integer
     * @minimum 1
     */
    permanent?: number

    /**
     * All translations for the entry, identified by IETF language tag (BCP47).
     * @minProperties 1
     */
    translations?: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       */
      [localeId: string]: {
        /**
         * A replacement string for the permanent cost. It must contain `$1`,
         * which is going to be replaced with the generated permanent cost
         * string, so additional information can be provided without
         * duplicating concrete numeric values.
         * @minLength 1
         * @pattern \$1
         */
        permanent: string
      }
    }
  }
}