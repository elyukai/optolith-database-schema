//
//  Condition.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Condition: LocalizableEntity {
    /// The condition's identifier. An unique, increasing integer.
    public let id: Int
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ConditionTranslation>
}

public struct ConditionTranslation: EntitySubtype {
    /// The condition's name.
    public let name: NonEmptyString
    
    /// Additional rules for the condition, if applicable.
    public let rules: NonEmptyMarkdown?
    
    /// The effects for level 1 to 4.
    public let effects: [NonEmptyMarkdown]
    
    public let errata: Errata?
}
