import FileDB

@Embedded
public struct PrimaryAttributePrerequisite {

  /// Is the required primary attribute for spellcasters or blessed ones?
  @Relationship(PrimaryAttributeCategory)
  let category: PrimaryAttributeCategory.ID

  /// Required value of the attribute.
  let value: Integer({ minimum: 9 })
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }

@ModelEnum
public enum PrimaryAttributeCategory {
    case Blessed
    case Magical
}
