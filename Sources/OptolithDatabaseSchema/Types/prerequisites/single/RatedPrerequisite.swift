import FileDB

@Embedded
public struct RatedPrerequisite {

  /// The rated entry’s identifier.
  @Relationship(RatedIdentifier)
  let id: RatedIdentifier.ID

  /// The required minimum value.
  let value: Integer({ minimum: 0 })
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
