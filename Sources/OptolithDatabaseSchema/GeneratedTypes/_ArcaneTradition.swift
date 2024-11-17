//
//  _ArcaneTradition.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct ArcaneTradition: LocalizableEntity {
    /// The arcane tradition's identifier. An unique, increasing integer.
    public let id: Int
    
    public let prerequisites: ArcaneTraditionPrerequisites
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ArcaneTraditionTranslation>

    public init(id: Int, prerequisites: ArcaneTraditionPrerequisites, translations: LocaleMap<ArcaneTraditionTranslation>) {
        self.id = id
        self.prerequisites = prerequisites
        self.translations = translations
    }
}

public struct ArcaneTraditionTranslation: EntitySubtype {
    /// The arcane tradition's name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
