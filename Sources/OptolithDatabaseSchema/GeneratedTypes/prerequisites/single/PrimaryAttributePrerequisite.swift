//
//  PrimaryAttributePrerequisite.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct PrimaryAttributePrerequisite: EntitySubtype {
    /// Is the required primary attribute for spellcasters or blessed ones?
    public let category: PrimaryAttributeCategory
    
    /// Required value of the attribute
    public let value: Int
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case category = "category"
        case value = "value"
        case displayOption = "display_option"
    }
}

public enum PrimaryAttributeCategory: String, EntitySubtype {
    case blessed = "Blessed"
    case magical = "Magical"
}
