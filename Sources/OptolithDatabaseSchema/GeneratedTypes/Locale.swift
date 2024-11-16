//
//  Locale.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Locale: Entity {
    /// The locale's identifier. An IETF language tag (BCP47).
    public let id: String
    
    /// Name of the language in it's language.
    public let name: String
    
    /// Region in which the language is spoken in it's language.
    public let region: String
    
    /// The language is not (fully) implemented and thus needs to be excluded from stable releases.
    public let isMissingImplementation: Bool?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case name = "name"
        case region = "region"
        case isMissingImplementation = "is_missing_implementation"
    }
}
