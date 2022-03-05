/**
 * @main SkillModificationLevel
 */

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
  fast: {
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

  /**
   * Configuration for this level for slow skills (rituals, ceremonies).
   */
  slow: {
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
       * The unit for the `value`.
       */
      unit: SlowSkillCastingTimeUnit
    }

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
       * Configuration for this level for fast skills (spells, liturgical chants).
       * Values set here override the default generated text.
       * @minLength 1
       */
      fast?: LevelTypeConfigTranslation

      /**
       * Configuration for this level for slow skills (rituals, ceremonies). Values
       * set here override the default generated text.
       * @minLength 1
       */
      slow?: LevelTypeConfigTranslation
    }
  }
}

export enum SlowSkillCastingTimeUnit {
  Minutes = "Minutes",
  Hours = "Hours",
}

/**
 * Configuration translation of a type for a level. Values set here override the
 * default generated text.
 */
type LevelTypeConfigTranslation = {
  /**
   * @minLength 1
   */
  range: string
}
