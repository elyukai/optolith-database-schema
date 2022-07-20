import { AttributeReference } from "./_SimpleReferences.js"

/**
 * The attributes' identifiers of the skill check.
 * @title Skill Check
 */
export type SkillCheck = [
  AttributeReference,
  AttributeReference,
  AttributeReference,
]

/**
 * A specific value that represents a penalty for the associated skill check.
 * @title Skill Check Penalty
 */
export type SkillCheckPenalty =
  | { tag: "SPI" }
  | { tag: "SPI/2" }
  | { tag: "TOU" }
  | { tag: "SPI/TOU" }
