import { AttributeReference } from "./_SimpleReferences.js"

/**
 * The attributes' identifiers of the skill check.
 * @title Skill Check
 * @minLength 3
 * @maxLength 3
 */
export type SkillCheck = AttributeReference[]

/**
 * A specific value that represents a penalty for the associated skill check.
 * @title Skill Check Penalty
 */
export type SkillCheckPenalty =
  | "Spirit"
  | "HalfOfSpirit"
  | "Toughness"
  | "HigherOfSpiritAndToughness"
  | "SummoningDifficulty"
  | "CreationDifficulty"
