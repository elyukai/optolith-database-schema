import FileDB

/// Requires a minimum social status.
@Embedded
public struct SocialStatusPrerequisite {

  /// The minimum social status’s identifier.
  let id: SocialStatusIdentifier()
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
