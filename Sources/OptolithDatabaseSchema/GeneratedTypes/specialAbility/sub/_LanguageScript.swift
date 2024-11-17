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

    public init(id: ContinentIdentifier, isExtinct: Bool) {
        self.id = id
        self.isExtinct = isExtinct
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case isExtinct = "is_extinct"
    }
}
