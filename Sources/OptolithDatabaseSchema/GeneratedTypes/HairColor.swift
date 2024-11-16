//
//  HairColor.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct HairColor: LocalizableEntity {
    /// The hair color's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<HairColorTranslation>
}

public struct HairColorTranslation: EntitySubtype {
    /// The hair color.
    public let name: NonEmptyString
}
