//
//  PatronCategory.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct PatronCategory: LocalizableEntity {
    /// The patron category's identifier. An unique, increasing integer.
    public let id: Int

    /// The list of cultures where patrons from this category can be the primary patron of.
    public let primaryPatronCultures: [CultureReference]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PatronCategoryTranslation>

    public init(id: Int, primaryPatronCultures: [CultureReference], translations: LocaleMap<PatronCategoryTranslation>) {
        self.id = id
        self.primaryPatronCultures = primaryPatronCultures
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case primaryPatronCultures = "primary_patron_cultures"
        case translations = "translations"
    }
}

public struct PatronCategoryTranslation: EntitySubtype {
    /// The name of the patron category.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}
