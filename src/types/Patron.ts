/**
 * @main Patron
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { CultureReference, PatronCategoryReference, SkillReference } from "./_SimpleReferences.js"

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
   * The patron's category.
   */
  category: PatronCategoryReference

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
  culture: PatronCulture

  /**
   * The list of cultures where patrons from this category can be the primary
   * patron of.
   * @uniqueItems
   */
  primary_patron_cultures?: CultureReference[]

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
   */
  translations: LocaleMap<PatronTranslation>
}

export type PatronTranslation = {
  /**
   * The name of the patron.
   */
  name: NonEmptyString
}

/**
 * The patron cultures the patron is or is not part of. If the patron is part of
 * all patron cultures, the set should be empty and the operation should be
 * difference.
 */
export type PatronCulture = {
  set: CultureReference[]
  operation: PatronCultureOperation
}

/**
 * The set operation to combine the set of all patron cultures with the
 * specified set of patron cultures: If they should intersect, the patron is
 * only part of the given cultures. If they should differ, the patron is only
 * part of the cultures that are not given.
 */
export enum PatronCultureOperation {
  Intersection = "Intersection",
  Difference = "Difference",
}

export type AdvantageAnimalPower = {
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

export type SkillAnimalPower = {
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

export type AnimalPowerLevel1 =
  | { tag: "Advantage"; advantage: AdvantageAnimalPower }
  | { tag: "Skill"; skill: SkillAnimalPower }

/**
 * @minItems 1
 */
export type AnimalPowersLevel1 = AnimalPowerLevel1[]

export type CombatAnimalPower = {
  /**
   * The combat value.
   */
  id: CombatAnimalPowerType

  /**
   * The value that gets added to the combat value.
   * @integer
   * @minimum 1
   */
  value: number
}

export enum CombatAnimalPowerType {
  Attack = "Attack",
  Parry = "Parry",
  RangedCombat = "RangedCombat",
  Dodge = "Dodge",
  DamagePoints = "DamagePoints",
  Protection = "Protection",
}

export type AnimalPowerLevel2 =
  | { tag: "Combat"; combat: CombatAnimalPower }

/**
 * @minItems 1
 */
export type AnimalPowersLevel2 = AnimalPowerLevel2[]

export type AttributeAnimalPower = {
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

export type AnimalPowerLevel3 =
  | { tag: "Attribute"; attribute: AttributeAnimalPower }

/**
 * @minItems 1
 */
export type AnimalPowersLevel3 = AnimalPowerLevel3[]

export const validateSchema = validateSchemaCreator<Patron>(import.meta.url)
