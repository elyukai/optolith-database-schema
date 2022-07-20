/**
 * @main SkillModificationLevel
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Skill Modification Level
 */
export type SkillModificationLevel = {
  /**
   * The skill modification level's identifier.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  id: number

  /**
   * Configuration for this level for fast skills (spells, liturgical chants).
   */
  fast: FastSkillModificationLevelConfig

  /**
   * Configuration for this level for slow skills (rituals, ceremonies).
   */
  slow: SlowSkillModificationLevelConfig

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations?: LocaleMap<SkillModificationLevelTranslation>
}

export type FastSkillModificationLevelConfig = {
  /**
   * The casting time in actions.
   * @integer
   * @minimum 1
   */
  casting_time: number

  /**
   * The range in meters.
   * @integer
   * @minimum 1
   */
  range: number

  /**
   * The cost in AE/KP.
   * @integer
   * @minimum 1
   */
  cost: number
}

export type SlowSkillModificationLevelConfig = {
  /**
   * The casting time.
   */
  casting_time: SlowSkillCastingTime

  /**
   * The range in meters.
   * @integer
   * @minimum 1
   */
  range: number

  /**
   * The cost in AE/KP.
   * @integer
   * @minimum 1
   */
  cost: number
}

export type SlowSkillCastingTime = {
  /**
   * The (unitless) casting time.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The unit for the `value`.
   */
  unit: SlowSkillCastingTimeUnit
}

export enum SlowSkillCastingTimeUnit {
  Minutes = "Minutes",
  Hours = "Hours",
}

/**
 * @minProperties 1
 */
export type SkillModificationLevelTranslation = {
  /**
   * Configuration for this level for fast skills (spells, liturgical chants).
   * Values set here override the default generated text.
   */
  fast?: LevelTypeConfigTranslation

  /**
   * Configuration for this level for slow skills (rituals, ceremonies). Values
   * set here override the default generated text.
   */
  slow?: LevelTypeConfigTranslation
}

/**
 * Configuration translation of a type for a level. Values set here override the
 * default generated text.
 */
export type LevelTypeConfigTranslation = {
  range: NonEmptyString
}

export const validateSchema = validateSchemaCreator<SkillModificationLevel>(import.meta.url)
