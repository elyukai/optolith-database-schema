//
//  _LanguageScript.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct AssociatedContinent: EntitySubtype {
    /// The continent's identifier.
    public let id: ContinentIdentifier
    
    /// Is the language considered virtually extinct in this continent?
    public let isExtinct: Bool    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case isExtinct = "is_extinct"
    }
}
