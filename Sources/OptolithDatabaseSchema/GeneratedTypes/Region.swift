//
//  Region.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Region: LocalizableEntity {
    /// The region's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<RegionTranslation>
}

public struct RegionTranslation: EntitySubtype {
    /// The region name.
    public let name: NonEmptyString
}
