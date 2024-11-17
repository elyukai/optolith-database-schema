//
//  Condition.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Condition: LocalizableEntity {
    /// The condition's identifier. An unique, increasing integer.
    public let id: Int
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ConditionTranslation>

    public init(id: Int, src: PublicationRefs, translations: LocaleMap<ConditionTranslation>) {
        self.id = id
        self.src = src
        self.translations = translations
    }
}

public struct ConditionTranslation: EntitySubtype {
    /// The condition's name.
    public let name: NonEmptyString
    
    /// Additional rules for the condition, if applicable.
    public let rules: NonEmptyMarkdown?
    
    /// The effects for level 1 to 4.
    public let effects: [NonEmptyMarkdown]
    
    public let errata: Errata?

    public init(name: NonEmptyString, rules: NonEmptyMarkdown? = nil, effects: [NonEmptyMarkdown], errata: Errata? = nil) {
        self.name = name
        self.rules = rules
        self.effects = effects
        self.errata = errata
    }
}
