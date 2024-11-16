//
//  PatronCategory.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct PatronCategory: LocalizableEntity {
    /// The patron category's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The list of cultures where patrons from this category can be the primary patron of.
    public let primaryPatronCultures: [CultureReference]
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PatronCategoryTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case primaryPatronCultures = "primary_patron_cultures"
        case translations = "translations"
    }
}

public struct PatronCategoryTranslation: EntitySubtype {
    /// The name of the patron category.
    public let name: NonEmptyString
}
