//
//  AnimistPowerPrerequisite.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// Requires a specific animist power to be on a minimum value.
public struct AnimistPowerPrerequisite: EntitySubtype {
    /// The animist power's identifier.
    public let id: AnimistPowerIdentifier
    
    /// The level to which the minimum value applies.
    public let level: Int?
    
    /// The required minimum value.
    public let value: Int
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case level = "level"
        case value = "value"
        case displayOption = "display_option"
    }
}
