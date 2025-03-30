//
//  ActivatablePrerequisite.swift
//  OptolithDatabaseSchema
//

/// Requires a specific advantage, disadvantage or special ability.
public struct ActivatablePrerequisite: EntitySubtype {
    /// The activatable entry's identifier.
    public let id: ActivatableIdentifier

    /// If the required entry should be required to be active or inactive.
    public let active: Bool

    /// The required minimum level of the entry.
    public let level: Int?

    /// Required select options. Order is important. Typically, you only need the first array index, though.
    public let options: [RequirableSelectOptionIdentifier]?

    public let displayOption: DisplayOption?

    public let when: Preconditions?

    public init(id: ActivatableIdentifier, active: Bool, level: Int? = nil, options: [RequirableSelectOptionIdentifier]? = nil, displayOption: DisplayOption? = nil, when: Preconditions? = nil) {
        self.id = id
        self.active = active
        self.level = level
        self.options = options
        self.displayOption = displayOption
        self.when = when
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case active = "active"
        case level = "level"
        case options = "options"
        case displayOption = "display_option"
        case when = "when"
    }
}
