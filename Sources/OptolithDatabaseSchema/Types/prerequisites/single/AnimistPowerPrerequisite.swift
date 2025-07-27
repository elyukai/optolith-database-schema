import FileDB

/// Requires a specific animist power to be on a minimum value.
@Embedded
public struct AnimistPowerPrerequisite {

  /// The animist power’s identifier.
  let id: AnimistPowerIdentifier()
  /// The level to which the minimum value applies.
  let level: Integer({ minimum: 2 })?

  /// The required minimum value.
  let value: Integer({ minimum: 0 })
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }
