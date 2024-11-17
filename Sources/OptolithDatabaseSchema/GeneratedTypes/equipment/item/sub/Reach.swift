//
//  Reach.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Reach: LocalizableEntity {
    /// The reach's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ReachTranslation>

    public init(id: Int, translations: LocaleMap<ReachTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct ReachTranslation: EntitySubtype {
    /// The name of the reach.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
