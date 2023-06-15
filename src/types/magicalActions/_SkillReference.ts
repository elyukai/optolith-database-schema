import { SkillIdentifier } from "../_Identifier.js"

/**
 * A reference to a skill used for performing melodies.
 */
export type MusicalSkillReference = {
  /**
   * The skill's identifier.
   */
  id: SkillIdentifier<SkillIdentifierValue>
}

export type SkillIdentifierValue =
  | 9 // Singing
  | 56 // Music
