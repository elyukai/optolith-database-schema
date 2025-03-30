//
//  Attribute.swift
//  OptolithDatabaseSchema
//

public struct Attribute: LocalizableEntity {
    /// The attribute's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AttributeTranslation>

    public init(id: Int, translations: LocaleMap<AttributeTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct AttributeTranslation: EntitySubtype {
    /// The attribute's name.
    public let name: NonEmptyString

    /// The abbreviation of the attribute's name.
    public let abbreviation: NonEmptyString

    /// The description of the attribute.
    public let description: NonEmptyString

    public init(name: NonEmptyString, abbreviation: NonEmptyString, description: NonEmptyString) {
        self.name = name
        self.abbreviation = abbreviation
        self.description = description
    }
}
