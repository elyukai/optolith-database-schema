import FileDB

@Embedded
public struct PublicationPrerequisite {

  /// The publication’s identifier.
  let id: PublicationIdentifier()
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
