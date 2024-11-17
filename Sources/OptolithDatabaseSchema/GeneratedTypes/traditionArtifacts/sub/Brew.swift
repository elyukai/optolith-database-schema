//
//  Brew.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Brew: LocalizableEntity {
    /// The brew's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<BrewTranslation>

    public init(id: Int, translations: LocaleMap<BrewTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct BrewTranslation: EntitySubtype {
    /// The brew name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
