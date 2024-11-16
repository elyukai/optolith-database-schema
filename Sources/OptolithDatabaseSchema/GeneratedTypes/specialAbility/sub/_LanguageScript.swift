//
//  _LanguageScript.swift
//  OptolithDatabaseSchema
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
