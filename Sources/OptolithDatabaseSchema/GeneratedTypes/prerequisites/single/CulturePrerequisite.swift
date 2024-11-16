//
//  CulturePrerequisite.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// Requires a specific culture or one of a specific set of cultures.
public struct CulturePrerequisite: EntitySubtype {
    /// The culture's identifier.
    public let id: CultureIdentifier
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
