import FileDB

/// Requires a specific culture or one of a specific set of cultures.
@Embedded
public struct CulturePrerequisite {

  /// The culture’s identifier.
  let id: CultureIdentifier()
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
