/**
 * @title Enhancements
 */

import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { LocaleMap } from "./_LocaleMap.js"
import { EnhancementPrerequisites } from "./_Prerequisite.js"

/**
 * A list of enhancements.
 * @minItems 3
 * @maxItems 5
 */
export type Enhancements = Enhancement[]

/**
 * @title Enhancement
 */
export type Enhancement = {
  /**
   * The enhancement's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The skill rating required to learn this enhancement.
   * @integer
   * @minimum 8
   * @maximum 16
   * @mulitpleOf 2
   */
  skill_rating: number

  /**
   * The value to multiply with the numeric representation of the associated
   * skill's improvement cost to form the final AP cost of this enhancement.
   * @integer
   * @minimum 1
   */
  adventure_points_modifier: number

  prerequisites?: EnhancementPrerequisites

  /**
   * Only defined if different than the associated skill.
   */
  src?: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<EnhancementTranslation>
}

export type EnhancementTranslation = {
  /**
   * The name of the enhancement.
   * @minLength 1
   */
  name: string

  /**
   * The effect description.
   * @markdown
   * @minLength 1
   */
  effect: string

  errata?: Errata
}
