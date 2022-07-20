import { CombatTechniqueIdentifier } from "./_Identifier.js"

export type RaceReference = {
  /**
   * The race's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type CultureReference = {
  /**
   * The culture's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type ProfessionReference = {
  /**
   * The profession's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type ProfessionVariantReference = {
  /**
   * The profession variant's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type AttributeReference = {
  /**
   * The attribute's identifier.
   * @integer
   * @minimum 1
   * @minimum 8
   */
  id: number
}

export type SkillReference = {
  /**
   * The skill's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type SkillGroupReference = {
  /**
   * The skill group's identifier.
   * @integer
   * @minimum 1
   * @maximum 5
   */
  id: number
}

export type CombatTechniqueReference = {
  /**
   * The combat technique's identifier.
   */
  id: CombatTechniqueIdentifier
}

export type MagicalTraditionReference = {
  /**
   * The magical tradition's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type PropertyReference = {
  /**
   * The property's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type BlessedTraditionReference = {
  /**
   * The blessed tradition's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type CantripReference = {
  /**
   * The cantrip's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type AspectReference = {
  /**
   * The aspect's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type AdvantageReference = {
  /**
   * The advantage's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type LanguageReference = {
  /**
   * The language's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type ScriptReference = {
  /**
   * The script's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type SocialStatusReference = {
  /**
   * The social status's identifier.
   * @integer
   * @minimum 1
   * @maximum 5
   */
  id: number
}

export type CurriculumReference = {
  /**
   * The institution's curriculum's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type GuidelineReference = {
  /**
   * The institution's guideline's identifier.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  id: number
}

export type AnimalTypeReference = {
  /**
   * The animal type's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type TargetCategoryReference = {
  /**
   * The target category's identifier.
   * @integer
   * @minimum 1
   * @maximum 24
   */
  id: number
}

export type PatronCategoryReference = {
  /**
   * The patron category's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type PersonalityTraitReference = {
  /**
   * The personality trait's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type HairColorReference = {
  /**
   * The hair color's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

export type EyeColorReference = {
  /**
   * The hair color's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}
