/**
 * A reference to a skill used for performing melodies.
 */
export type MusicalSkillReference = {
  /**
   * The skill's identifier.
   */
  id: SkillIdentifier
}

export enum SkillIdentifier {
  Singing = 9,
  Music = 56,
}
