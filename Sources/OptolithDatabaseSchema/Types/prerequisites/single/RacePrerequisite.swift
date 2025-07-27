import FileDB

/// Requires a specific race or one of a specific set of races. You can also provide an object to say whether the hero must meet one of the races or if the entry does not allow one of the races.
@Embedded
public struct RacePrerequisite {

  /// The race’s identifier.
  let id: RaceIdentifier()
      active: Required({
        type: Boolean(),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
