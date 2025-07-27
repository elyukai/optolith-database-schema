import FileDB

export const SkillCheck = TypeAlias(import.meta.url, {
  name: "SkillCheck",
  comment: "The attributes’ identifiers of the skill check.",
  type: () =>
    Array(AttributeIdentifier(), {
      minItems: 3,
      maxItems: 3,
  }

/// A specific value that represents a penalty for the associated skill check.
@ModelEnum
public enum SkillCheckPenalty {
    case Spirit(null)
    case HalfOfSpirit(null)
    case Toughness(null)
    case HigherOfSpiritAndToughness(null)
    case SummoningDifficulty(null)
    case CreationDifficulty(null)
}
