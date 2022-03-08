/**
 * @main Patron
 */

import { ImprovementCost } from "./_ImprovementCost"

/**
 * @title Patron
 */
export type Patron = {
  /**
   * The patron's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The patron's category identifier.
   * @integer
   * @minimum 1
   */
  category_id: number

  /**
   * The patron-specific skills.
   */
  skills: [SkillReference, SkillReference, SkillReference]

  /**
   * The patron is only available to a certain set of cultures. It may be
   * available to all, it may be available to only specific ones (intersection)
   * and it may be available to all except specific ones to the listed cultures
   * (difference).
   */
  culture:
    | { tag: "All" }
    | {
      tag: "Intersection"

      list: {
        /**
         * The culture's identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }[]
    }
    | {
      tag: "Difference"

      list: {
        /**
         * The culture's identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }[]
    }

  /**
   * The list of cultures where patrons from this category can be the primary
   * patron of.
   * @minItems 1
   * @uniqueItems
   */
  primary_patron_cultures?: {
    /**
     * The culture's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }[]

  /**
   * The patron-specific powers. Used by animist power Animal Powers I–III and
   * should only be present on animal patrons.
   */
  powers?: [AnimalPowersLevel1, AnimalPowersLevel2, AnimalPowersLevel3]

  /**
   * The patron-specific AE cost. Used by several animist forces for animal
   * patrons.
   * @integer
   * @minimum 2
   * @multipleOf 2
   */
  ae_cost?: number

  /**
   * The patron-specific improvement cost. Used by several animist forces for
   * animal patrons.
   */
  improvement_cost?: ImprovementCost

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
       * The name of the patron.
       * @minLength 1
       */
      name: string
    }
  }
}

export type SkillReference = {
  /**
   * The skill's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type AnimalPowerLevel1 =
  | {
    tag: "Advantage"

    /**
     * The advantage's identifier.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * It grants a higher level of the advantage.
     * @integer
     * @minimum 2
     */
    level?: number

    /**
     * It grants a specific general option of the advantage.
     * @integer
     * @minimum 1
     */
    option?: number
  }
  | {
    tag: "Skill"

    /**
     * The skill's identifier.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * The points that gets added to the skill's rating.
     * @integer
     * @minimum 1
     */
    points: number
  }

/**
 * @minItems 1
 */
export type AnimalPowersLevel1 = AnimalPowerLevel1[]

export type AnimalPowerLevel2 =
  {
    tag: "Combat"

    /**
     * The combat value.
     */
    id:
      | { tag: "Attack" }
      | { tag: "Parry" }
      | { tag: "RangedCombat" }
      | { tag: "Dodge" }
      | { tag: "DamagePoints" }
      | { tag: "Protection" }

    /**
     * The value that gets added to the combat value.
     * @integer
     * @minimum 1
     */
    value: number
  }

/**
 * @minItems 1
 */
export type AnimalPowersLevel2 = AnimalPowerLevel2[]

export type AnimalPowerLevel3 =
  {
    tag: "Attribute"

    /**
     * The attribute's identifier.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * The value that gets added to the attribute.
     * @integer
     * @minimum 1
     */
    value: number
  }

/**
 * @minItems 1
 */
export type AnimalPowersLevel3 = AnimalPowerLevel3[]
