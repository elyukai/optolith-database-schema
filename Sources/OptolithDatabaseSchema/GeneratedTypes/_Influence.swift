//
//  _Influence.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Influence: LocalizableEntity {
    /// The influence's identifier. An unique, increasing integer.
    public let id: Int
    
    public let prerequisites: InfluencePrerequisites
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<InfluenceTranslation>
}

public struct InfluenceTranslation: EntitySubtype {
    /// The influence name.
    public let name: NonEmptyString
    
    /// The effects of the influence. They should be sorted like they are in the book.
    public let effects: [InfluenceEffect]
    
    public let errata: Errata?
}

public struct InfluenceEffect: EntitySubtype {
    /// An optional label that is displayed and placed before the actual text.
    public let label: NonEmptyString?
    
    /// The effect text.
    public let text: NonEmptyString
}
