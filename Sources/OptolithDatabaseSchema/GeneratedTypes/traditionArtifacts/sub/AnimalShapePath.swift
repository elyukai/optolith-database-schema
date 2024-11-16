//
//  AnimalShapePath.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct AnimalShapePath: LocalizableEntity {
    /// The animal shape path's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AnimalShapePathTranslation>
}

public struct AnimalShapePathTranslation: EntitySubtype {
    /// The animal shape path's name.
    public let name: NonEmptyString
}
