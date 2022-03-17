/**
 * @main ElvenMagicalSong
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { Duration, Effect } from "../_ActivatableSkill.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { SkillReference } from "./_SkillReference.js"

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
    value: number

    /**
     * Specified if the AE cost `value` has to be paid for each time interval.
     */
    interval?: Duration.UnitValue

    /**
     * A permanent AE cost, independent from a possible interval.
     */
    permanent?: {
      /**
       * The permanent AE cost value.
       * @integer
       * @minimum 1
       */
      value: number

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
           * A replacement string for the permanent cost.
           */
          replacement: {
            /**
             * The full replacement string. It must contain `$1`, which is
             * going to be replaced with the generated AE cost string, so
             * additional information can be provided without duplicating
             * concrete numeric values.
             * @minLength 1
             * @pattern \$1
             */
            default: string

            /**
             * A compressed replacement string for use in small areas (e.g. on
             * character sheet). It must contain `$1`, which is going to be
             * replaced with the generated AE cost string, so additional
             * information can be provided without duplicating concrete
             * numeric values.
             * @minLength 1
             * @pattern \$1
             */
            compressed: string
          }
        }
      }
    }

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
         * The cost have to be per a specific countable entity, e.g. `8 AE
         * per person`.
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
}

export const validateSchema = validateSchemaCreator<ElvenMagicalSong>(import.meta.url)
