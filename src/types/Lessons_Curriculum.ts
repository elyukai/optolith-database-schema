/**
 * @main Curriculum
 */

import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * This is a curriculum of a specified academy, containing the guideline,
 * elective and restricted spellworks as well as the lesson packages of that
 * academy.
 * @title Curriculum
 */
export type Curriculum = {
  /**
   * The curriculum's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The institution's guideline's identifier.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  guideline_id: number

  /**
   * The academy's elective spellworks package.
   */
  elective_spellworks?: ElectiveSpellworks

  /**
   * The academy's restricted spellworks package.
   */
  restricted_spellworks?: RestrictedSpellworks

  /**
   * A list of available lesson packages.
   */
  lesson_packages: LessonPackages

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
       * The name of the academy.
       * @minLength 1
       */
      name: string

      errata?: Errata
    }
  }
}

/**
 * The academy's elective spellworks package.
 */
type ElectiveSpellworks =
  | { tag: "DefinedByGameMaster" }
  | {
    tag: "Explicit"

    /**
     * @minItems 1
     */
    list: ElectiveSpellwork[]
  }

type ElectiveSpellwork = {
  id: SpellworkId

  /**
   * The elective spellwork may only take effect if a certain condition is met.
   * The condition may be related to professions or profession variants, but it
   * is designed so that it can work without a specific profession, as multiple
   * may belong to an institute, but with referencing other entities instead.
   */
  restriction?: ElectiveSpellworkRestriction
}

/**
 * The elective spellwork may only take effect if a certain condition is met.
 * The condition may be related to professions or profession variants, but it is
 * designed so that it can work without a specific profession, as multiple may
 * belong to an institute, but with referencing other entities instead.
 */
type ElectiveSpellworkRestriction = {
  tag: "Element"

  /**
   * The element's identifier.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  id: number
}

/**
 * The academy's restricted spellworks package.
 * @minItems 1
 */
type RestrictedSpellworks = RestrictedSpellwork[]

/**
 * The academy's restricted spellworks package.
 */
type RestrictedSpellwork =
  | {
    tag: "Property"

    /**
     * The identifier of the property that spellworks are disallowed from.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * Exclude specific spellworks from the restriction.
     * @minItems 1
     */
    exclude?: SpellworkId[]

    /**
     * Spellworks from this property up to a certain number are allowed.
     * Spellworks excluded from this restriction definition using `exclude` do
     * not contribute to the maximum.
     */
    maximum?: number
  }
  | SpellworkId
  | { tag: "DemonSummoning" }
  | { tag: "Borbaradian" }
  | { tag: "DamageIntelligent" }

/**
 * A list of available lesson packages.
 */
type LessonPackages = [LessonPackage, LessonPackage]

/**
 * @title Lesson Package
 * @minProperties 3
 */
type LessonPackage = {
  /**
   * The lesson package's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The spell values difference of the lesson package. This field reflects the
   * changes (difference) to the field of the same name in the profession
   * package. If a spell gets to SR 0 because of this, it will be removed
   * completely.
   * @minItems 1
   */
  spellwork_changes?: {
    base: SpellworkAdjustment
    replacement: SpellworkAdjustment
  }[]

  skills?: SkillAdjustment[]

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
       * The name of the lesson package.
       * @minLength 1
       */
      name: string

      /**
       * The spell values difference of the lesson package. Use this field to
       * specify a text that is displayed instead of the generated
       * `spellwork_changes` list. The field is displayed even if no list is
       * present.
       * @minLength 1
       */
      spellwork_changes?: string
    }
  }
}

type SkillAdjustment =
  | {
    tag: "MeleeCombatTechnique"

    /**
     * The melee combat technique's identifier.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * The combat technique points that will be added to the current combat
     * technique rating.
     * @integer
     * @minimum -6
     * @maximum 6
     */
    points: number
  }
  | {
    tag: "RangedCombatTechnique"

    /**
     * The ranged combat technique's identifier.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * The combat technique points that will be added to the current combat
     * technique rating.
     * @integer
     * @minimum -6
     * @maximum 6
     */
    points: number
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
     * The skill points that will be added to the current skill rating.
     * @integer
     * @minimum -8
     * @maximum 8
     */
    points: number
  }
  | SpellworkAdjustment

type SpellworkAdjustment =
  | {
    tag: "Spell"

    /**
     * The spell's identifier.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * The skill points that will be added to the current skill rating. If a
     * spell gets to a skill rating of 0 because of this, it will be removed
     * completely.
     * @integer
     * @minimum -10
     * @maximum 10
     */
    points: number

    /**
     * The target tradition's identifier. If the target spell is not from the
     * Guild Mage tradition, specify the tradition identifier here.
     * @integer
     * @minimum 2
     * @default 1
     */
    tradition_id?: number
  }
  | {
    tag: "Ritual"

    /**
     * The ritual's identifier.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * The skill points that will be added to the current skill rating. If a
     * ritual gets to a skill rating of 0 because of this, it will be removed
     * completely.
     * @integer
     * @minimum -10
     * @maximum 10
     */
    points: number

    /**
     * The target tradition's identifier. If the target ritual is not from the
     * Guild Mage tradition, specify the tradition identifier here.
     * @integer
     * @minimum 2
     * @default 1
     */
    tradition_id?: number
  }

type SpellworkId =
  | {
    tag: "Spell"

    /**
     * The spell's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "Ritual"

    /**
     * The ritual's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
