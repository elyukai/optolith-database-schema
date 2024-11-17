//
//  InfluencePrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct InfluencePrerequisite: EntitySubtype {
    /// The influence's identifier.
    public let id: InfluenceIdentifier
    
    /// If the referenced influence must or must not be chosen.
    public let active: Bool
    
    public let displayOption: DisplayOption?

    public init(id: InfluenceIdentifier, active: Bool, displayOption: DisplayOption? = nil) {
        self.id = id
        self.active = active
        self.displayOption = displayOption
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case active = "active"
        case displayOption = "display_option"
    }
}
