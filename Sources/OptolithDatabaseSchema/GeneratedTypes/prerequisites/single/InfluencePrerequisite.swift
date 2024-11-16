//
//  InfluencePrerequisite.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct InfluencePrerequisite: EntitySubtype {
    /// The influence's identifier.
    public let id: InfluenceIdentifier
    
    /// If the referenced influence must or must not be chosen.
    public let active: Bool
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case active = "active"
        case displayOption = "display_option"
    }
}
