//
//  CulturePrerequisite.swift
//  OptolithDatabaseSchema
//

/// Requires a specific culture or one of a specific set of cultures.
public struct CulturePrerequisite: EntitySubtype {
    /// The culture's identifier.
    public let id: CultureIdentifier

    public let displayOption: DisplayOption?

    public init(id: CultureIdentifier, displayOption: DisplayOption? = nil) {
        self.id = id
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
