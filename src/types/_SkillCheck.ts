/**
 * The attributes' identifiers of the skill check.
 * @title Skill Check
 */
export type SkillCheck = [Attribute, Attribute, Attribute]

type Attribute = {
  /**
   * The attribute's identifier.
   * @integer
   * @minimum 1
   * @maximum 8
   */
  id: number
}

/**
 * A specific value that represents a penalty for the associated skill check.
 * @title Skill Check Penalty
 */
export type SkillCheckPenalty =
  | { tag: "SPI" }
  | { tag: "SPI/2" }
  | { tag: "TOU" }
  | { tag: "SPI/TOU" }
