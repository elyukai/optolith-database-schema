//
//  State.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct State: LocalizableEntity {
    /// The state's identifier. An unique, increasing integer.
    public let id: Int

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<StateTranslation>

    public init(id: Int, src: PublicationRefs, translations: LocaleMap<StateTranslation>) {
        self.id = id
        self.src = src
        self.translations = translations
    }
}

public struct StateTranslation: EntitySubtype {
    /// The name of the state.
    public let name: NonEmptyString

    /// The description of the state.
    public let description: NonEmptyMarkdown

    public let errata: Errata?

    public init(name: NonEmptyString, description: NonEmptyMarkdown, errata: Errata? = nil) {
        self.name = name
        self.description = description
        self.errata = errata
    }
}
