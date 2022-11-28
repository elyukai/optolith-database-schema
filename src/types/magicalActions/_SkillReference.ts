import { SkillIdentifier } from "../_Identifier"

/**
 * A reference to a skill used for performing melodies.
 */
export type MusicalSkillReference = {
  /**
   * The skill's identifier.
   */
  id: SkillIdentifier<SkillIdentifierValue>
}

export enum SkillIdentifierValue {
  Singing = 9,
  Music = 56,
}
