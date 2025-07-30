import FileDB

@Embedded
public struct RatedPrerequisite {

  /// The rated entry’s identifier.
  let id: RatedIdentifier

  /// The required minimum value.
  @Minimum(0)
  let value: Int

      let display_option: DisplayOption?
  }
