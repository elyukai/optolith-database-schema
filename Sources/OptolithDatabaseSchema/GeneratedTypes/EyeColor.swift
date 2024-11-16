//
//  EyeColor.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct EyeColor: LocalizableEntity {
    /// The eye color's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<EyeColorTranslation>
}

public struct EyeColorTranslation: EntitySubtype {
    /// The eye color.
    public let name: NonEmptyString
}
