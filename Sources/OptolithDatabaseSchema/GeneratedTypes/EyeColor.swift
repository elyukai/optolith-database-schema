//
//  EyeColor.swift
//  OptolithDatabaseSchema
//

public struct EyeColor: LocalizableEntity {
    /// The eye color's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<EyeColorTranslation>

    public init(id: Int, translations: LocaleMap<EyeColorTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct EyeColorTranslation: EntitySubtype {
    /// The eye color.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
