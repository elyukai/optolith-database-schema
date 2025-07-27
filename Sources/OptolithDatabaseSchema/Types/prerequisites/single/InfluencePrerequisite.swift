import FileDB

@Embedded
public struct InfluencePrerequisite {

  /// The influence’s identifier.
  let id: InfluenceIdentifier()

  /// If the referenced influence must or must not be chosen.
  let active: Boolean()
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
