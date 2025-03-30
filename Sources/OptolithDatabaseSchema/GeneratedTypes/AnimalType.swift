//
//  AnimalType.swift
//  OptolithDatabaseSchema
//

public struct AnimalType: LocalizableEntity {
    /// The animal type's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AnimalTypeTranslation>

    public init(id: Int, translations: LocaleMap<AnimalTypeTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct AnimalTypeTranslation: EntitySubtype {
    /// The animal type name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
