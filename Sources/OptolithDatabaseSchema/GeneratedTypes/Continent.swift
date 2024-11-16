//
//  Continent.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// Continents are mostly referenced to in languages and scripts that occur on a specific continent.
public struct Continent: LocalizableEntity {
    /// The continent's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ContinentTranslation>
}

public struct ContinentTranslation: EntitySubtype {
    /// The continent name.
    public let name: String
}
