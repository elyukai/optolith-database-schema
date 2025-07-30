import FileDB

/// The attributes’ identifiers of the skill check.
@Embedded
public struct SkillCheck {
  @MinItems(3)
  @MaxItems(3)
  let list: [Attribute.ID]
  }

/// A specific value that represents a penalty for the associated skill check.
@ModelEnum
public enum SkillCheckPenalty {
    case Spirit
    case HalfOfSpirit
    case Toughness
    case HigherOfSpiritAndToughness
    case SummoningDifficulty
    case CreationDifficulty
}
