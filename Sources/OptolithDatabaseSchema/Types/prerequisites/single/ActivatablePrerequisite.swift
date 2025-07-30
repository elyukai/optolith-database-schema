import FileDB

/// Requires a specific advantage, disadvantage or special ability.
@Embedded
public struct ActivatablePrerequisite {

  /// The activatable entry’s identifier.
  let id: ActivatableIdentifier

  /// If the required entry should be required to be active or inactive.
  let active: Bool

  /// The required minimum level of the entry.
  @Minimum(1)
  let level: Int?

  /// Required select options. Order is important. Typically, you only need the first array index, though.
  @MinItems(1)
  let options: [RequirableSelectOptionIdentifier]?

      let display_option: DisplayOption?

      let when: Preconditions?
  }
