//
//  AnimistPower_Tribe.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Tribe: LocalizableEntity {
    /// The tribe's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<TribeTranslation>
}

public struct TribeTranslation: EntitySubtype {
    /// The tribe name.
    public let name: NonEmptyString
}
