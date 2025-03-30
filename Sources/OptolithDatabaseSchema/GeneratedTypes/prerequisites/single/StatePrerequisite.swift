//
//  StatePrerequisite.swift
//  OptolithDatabaseSchema
//

/// Requires a specific state or one of a specific set of states.
public struct StatePrerequisite: EntitySubtype {
    public let id: StateIdentifier

    public let displayOption: DisplayOption?

    public init(id: StateIdentifier, displayOption: DisplayOption? = nil) {
        self.id = id
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
