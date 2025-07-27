import FileDB

/// Requires a specific advantage, disadvantage or special ability.
@Embedded
public struct ActivatablePrerequisite {

  /// The activatable entry’s identifier.
  @Relationship(ActivatableIdentifier)
  let id: ActivatableIdentifier.ID

  /// If the required entry should be required to be active or inactive.
  let active: Boolean()
  /// The required minimum level of the entry.
  let level: Integer({ minimum: 1 })?
  /// Required select options. Order is important. Typically, you only need the first array index, though.
  let options: Array(IncludeIdentifier(RequirableSelectOptionIdentifier), { minItems: 1 })?
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
      when: Optional({
        type: IncludeIdentifier(Preconditions),
      }),
  }
