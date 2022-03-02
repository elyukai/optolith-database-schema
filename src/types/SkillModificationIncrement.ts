/**
 * @main SkillModificationIncrement
 */

/**
 * @title Skill Modification Increment
 */
type SkillModificationIncrement = {
  /**
   * The skill modification increment's identifier. It also represents the
   * increment level.
   * @integer
   * @minimum 1
   * @maximum 6
   *
   */
  id: number

  /**
   * Configuration for this level for fast skills (spells, liturgical chants).
   */
  fast: LevelTypeConfig

  /**
   * Configuration for this level for slow skills (rituals, ceremonies).
   */
  slow: LevelTypeConfig

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

/**
 * Configuration of a type for a level.
 */
type LevelTypeConfig = {
  /**
   * Casting time in actions.
   * @integer
   * @minimum 1
   */
  casting_time: number

  /**
   * Range in meters.
   * @integer
   * @minimum 1
   */
  range: number

  /**
   * Cost in AE/KP.
   * @integer
   * @minimum 1
   */
  cost: number
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
