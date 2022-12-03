/**
 * @main Curriculum
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { ElementIdentifier, MagicalTraditionIdentifier, PropertyIdentifier, SkillIdentifier } from "./_Identifier.js"
import { CombatTechniqueIdentifier, SpellworkIdentifier } from "./_IdentifierGroup.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { GuidelineReference } from "./_SimpleReferences.js"

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
   * The institution's guideline.
   */
  guideline: GuidelineReference

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
   */
  translations: LocaleMap<CurriculumTranslation>
}

export type CurriculumTranslation = {
  /**
   * The name of the academy.
   */
  name: NonEmptyString

  errata?: Errata
}

/**
 * The academy's elective spellworks package.
 */
type ElectiveSpellworks =
  | { tag: "DefinedByGameMaster"; defined_by_game_master: {} }
  | { tag: "Specific"; specific: SpecificElectiveSpellworks }

export type SpecificElectiveSpellworks = {
  /**
   * @minItems 1
   */
  list: ElectiveSpellwork[]
}

export type ElectiveSpellwork = {
  id: SpellworkIdentifier

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
export type ElectiveSpellworkRestriction =
  | { tag: "Element"; element: ElectiveSpellworkElementRestriction }

export type ElectiveSpellworkElementRestriction = {
  id: ElementIdentifier
}

/**
 * The academy's restricted spellworks package.
 * @minItems 1
 */
export type RestrictedSpellworks = RestrictedSpellwork[]

/**
 * The academy's restricted spellworks package.
 */
export type RestrictedSpellwork =
  | { tag: "Property"; property: RestrictedProperty }
  | { tag: "Spellwork"; spellwork: SpellworkIdentifier }
  | { tag: "DemonSummoning"; demon_summoning: {} }
  | { tag: "Borbaradian"; borbaradian: {} }
  | { tag: "DamageIntelligent"; damage_intelligent: {} }

export type RestrictedProperty = {
  /**
   * The identifier of the property that spellworks are disallowed from.
   * @integer
   * @minimum 1
   */
  id: PropertyIdentifier

  /**
   * Exclude specific spellworks from the restriction.
   * @minItems 1
   */
  exclude?: SpellworkIdentifier[]

  /**
   * Spellworks from this property up to a certain number are allowed.
   * Spellworks excluded from this restriction definition using `exclude` do
   * not contribute to the maximum.
   */
  maximum?: number
}

/**
 * A list of available lesson packages.
 */
export type LessonPackages = [LessonPackage, LessonPackage]

/**
 * @title Lesson Package
 * @minProperties 3
 */
export type LessonPackage = {
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
  spellwork_changes?: SpellworkChange[]

  skills?: AbilityAdjustment[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<LessonPackageTranslation>
}

export type SpellworkChange = {
  base: SpellworkAdjustment
  replacement: SpellworkAdjustment
}

export type LessonPackageTranslation = {
  /**
   * The name of the lesson package.
   */
  name: NonEmptyString

  /**
   * The spell values difference of the lesson package. Use this field to
   * specify a text that is displayed instead of the generated
   * `spellwork_changes` list. The field is displayed even if no list is
   * present.
   */
  spellwork_changes?: NonEmptyString
}

export type AbilityAdjustment =
  | { tag: "CombatTechnique"; combat_technique: CombatTechniqueAdjustment }
  | { tag: "Skill"; skill: SkillAdjustment }
  | { tag: "Spellwork"; spellwork: SpellworkAdjustment }

export type CombatTechniqueAdjustment = {
  id: CombatTechniqueIdentifier

  /**
   * The combat technique points that will be added to the current combat
   * technique rating.
   * @integer
   * @minimum -6
   * @maximum 6
   */
  points: number
}

export type SkillAdjustment = {
  /**
   * The skill's identifier.
   * @integer
   * @minimum 1
   */
  id: SkillIdentifier

  /**
   * The skill points that will be added to the current skill rating.
   * @integer
   * @minimum -8
   * @maximum 8
   */
  points: number
}

export type SpellworkAdjustment = {
  id: SpellworkIdentifier

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
   * The target tradition. If the target spell is not from the Guild Mage
   * tradition, specify the tradition identifier here.
   */
  tradition?: MagicalTraditionIdentifier
}

export const validateSchema = validateSchemaCreator<Curriculum>(import.meta.url)
