/**
 * @main ExperienceLevel
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { LocaleMap } from "./_LocaleMap.js"

/**
 * Adventure Points and maximum values at hero creation.
 * @title Experience Level
 */
export type ExperienceLevel = {
  /**
   * An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The AP value you get.
   * @integer
   */
  adventure_points: number

  /**
   * The highest possible attribute value.
   * @integer
   */
  max_attribute_value: number

  /**
   * The highest possible skill rating.
   * @integer
   */
  max_skill_rating: number

  /**
   * The highest possible combat technique rating.
   * @integer
   */
  max_combat_technique_rating: number

  /**
   * The limit for the sum of all attribute values.
   * @integer
   */
  max_attribute_total: number

  /**
   * The maximum of spells/chants you can activate.
   * @integer
   */
  max_number_of_spells_liturgical_chants: number

  /**
   * The maximum of spells of an unfamiliar tradition you can activate.
   * @integer
   */
  max_number_of_unfamiliar_spells: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ExperienceLevelTranslation>
}

export type ExperienceLevelTranslation = {
  /**
   * The name of the experience level.
   * @minLength 1
   */
  name: string
}

export const validateSchema = validateSchemaCreator<ExperienceLevel>(import.meta.url)
