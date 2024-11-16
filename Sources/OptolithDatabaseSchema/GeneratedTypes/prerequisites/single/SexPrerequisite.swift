//
//  SexPrerequisite.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// Requires a specific sex.
public struct SexPrerequisite: EntitySubtype {
    public let id: BinarySex
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
