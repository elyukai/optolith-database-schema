//
//  Reach.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Reach: LocalizableEntity {
    /// The reach's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ReachTranslation>
}

public struct ReachTranslation: EntitySubtype {
    /// The name of the reach.
    public let name: NonEmptyString
}
