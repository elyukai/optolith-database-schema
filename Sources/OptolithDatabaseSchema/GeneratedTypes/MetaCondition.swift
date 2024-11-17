//
//  MetaCondition.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// Meta Conditions are rule elements that work like conditions in the sense that they have four levels with different effects, but which are not explicitly listed as conditions.
public struct MetaCondition: LocalizableEntity {
    /// The meta condition's identifier. An unique, increasing integer.
    public let id: Int
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MetaConditionTranslation>

    public init(id: Int, src: PublicationRefs, translations: LocaleMap<MetaConditionTranslation>) {
        self.id = id
        self.src = src
        self.translations = translations
    }
}

public struct MetaConditionTranslation: EntitySubtype {
    /// The meta condition's name.
    public let name: NonEmptyString
    
    /// Additional rules for the meta condition, if applicable.
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
