//
//  Attribute.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Attribute: LocalizableEntity {
    /// The attribute's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AttributeTranslation>
}

public struct AttributeTranslation: EntitySubtype {
    /// The attribute's name.
    public let name: NonEmptyString
    
    /// The abbreviation of the attribute's name.
    public let abbreviation: NonEmptyString
    
    /// The description of the attribute.
    public let description: NonEmptyString
}
