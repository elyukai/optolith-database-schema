//
//  RacePrerequisite.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// Requires a specific race or one of a specific set of races. You can also provide an object to say whether the hero must meet one of the races or if the entry does not allow one of the races.
public struct RacePrerequisite: EntitySubtype {
    /// The race's identifier.
    public let id: RaceIdentifier
    
    public let active: Bool
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case active = "active"
        case displayOption = "display_option"
    }
}
