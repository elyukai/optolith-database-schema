import FileDB

@Embedded
public struct PrimaryAttributePrerequisite {
    /// Is the required primary attribute for spellcasters or blessed ones?
    let category: PrimaryAttributeCategory

    /// Required value of the attribute.
    @Minimum(9)
    let value: Int

    let display_option: DisplayOption?
}

@ModelEnum
public enum PrimaryAttributeCategory {
    case Blessed
    case Magical
}
