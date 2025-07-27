import FileDB

/// Requires a specific state to be active.
@Embedded
public struct StatePrerequisite {
      id: Required({
        type: StateIdentifier(),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
