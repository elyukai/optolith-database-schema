//
//  AnimalType.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct AnimalType: LocalizableEntity {
    /// The animal type's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AnimalTypeTranslation>
}

public struct AnimalTypeTranslation: EntitySubtype {
    /// The animal type name.
    public let name: NonEmptyString
}
