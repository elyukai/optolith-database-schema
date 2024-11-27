//
//  AnimistPower_Tribe.swift
//  OptolithDatabaseSchema
//

public struct Tribe: LocalizableEntity {
    /// The tribe's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<TribeTranslation>

    public init(id: Int, translations: LocaleMap<TribeTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct TribeTranslation: EntitySubtype {
    /// The tribe name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
