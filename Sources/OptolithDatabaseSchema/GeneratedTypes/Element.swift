//
//  Element.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Element: LocalizableEntity {
    /// The element's identifier. An unique, increasing integer.
    public let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ElementTranslation>

    public init(id: Int, translations: LocaleMap<ElementTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct ElementTranslation: EntitySubtype {
    /// The element's name.
    public let name: String

    public init(name: String) {
        self.name = name
    }
}
