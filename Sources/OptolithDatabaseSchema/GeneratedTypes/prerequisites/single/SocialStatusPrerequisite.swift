//
//  SocialStatusPrerequisite.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// Requires a minimum social status.
public struct SocialStatusPrerequisite: EntitySubtype {
    /// The minimum social status' identifier.
    public let id: SocialStatusIdentifier
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case displayOption = "display_option"
    }
}
