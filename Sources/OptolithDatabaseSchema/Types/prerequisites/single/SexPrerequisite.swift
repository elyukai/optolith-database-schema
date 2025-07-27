import FileDB

/// Requires a specific sex.
@Embedded
public struct SexPrerequisite {
      id: Required({
        type: IncludeIdentifier(BinarySex),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
