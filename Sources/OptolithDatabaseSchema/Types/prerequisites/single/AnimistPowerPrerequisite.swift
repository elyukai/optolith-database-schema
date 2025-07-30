import FileDB

/// Requires a specific animist power to be on a minimum value.
@Embedded
public struct AnimistPowerPrerequisite {

  /// The animist power’s identifier.
  @Relationship(AnimistPower.self)
  let id: AnimistPower.ID

  /// The level to which the minimum value applies.
  @Minimum(2)
  let level: Int?

  /// The required minimum value.
  @Minimum(0)
  let value: Int

      let display_option: DisplayOption?
  }
