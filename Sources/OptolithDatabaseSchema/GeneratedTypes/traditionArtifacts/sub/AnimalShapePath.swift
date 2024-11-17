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

    public init(id: Int, translations: LocaleMap<AnimalShapePathTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct AnimalShapePathTranslation: EntitySubtype {
    /// The animal shape path's name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
