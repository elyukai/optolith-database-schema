//
//  Property.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Property: LocalizableEntity {
    /// The property's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The property check's attributes. Only the properties from the Core Rules
    /// have defined property checks.
    public let check: SkillCheck?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PropertyTranslation>
}

public struct PropertyTranslation: EntitySubtype {
    /// The property's name.
    public let name: NonEmptyString
}
