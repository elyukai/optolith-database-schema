//
//  Element.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Element: LocalizableEntity {
    /// The element's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ElementTranslation>
}

public struct ElementTranslation: EntitySubtype {
    /// The element's name.
    public let name: String
}
