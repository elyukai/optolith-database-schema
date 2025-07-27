import FileDB

@Embedded
public struct BlessedTraditionPrerequisite {
  /// The blessed tradition prerequisite may only be satified if the blessed tradition is either church or shamanistic.
  @Relationship(BlessedTraditionPrerequisiteRestriction)
  let restriction: BlessedTraditionPrerequisiteRestriction.ID?
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }

/// The blessed tradition prerequisite may only be satified if the blessed tradition is either church or shamanistic.
@ModelEnum
public enum BlessedTraditionPrerequisiteRestriction {
    case Church
    case Shamanistic
}

@Embedded
public struct MagicalTraditionPrerequisite {
  /// The magical tradition prerequisite may only be satified if the magical tradition can learn rituals or can bind familiars.
  @Relationship(MagicalTraditionPrerequisiteRestriction)
  let restriction: MagicalTraditionPrerequisiteRestriction.ID?
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }

/// The magical tradition prerequisite may only be satified if the magical tradition can learn rituals or can bind familiars.
@ModelEnum
public enum MagicalTraditionPrerequisiteRestriction {
    case CanLearnRituals
    case CanBindFamiliars
}
