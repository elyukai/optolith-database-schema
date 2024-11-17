//
//  Vehicle.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Vehicle: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DefaultItemTranslation>

    public init(cost: Cost, src: PublicationRefs, translations: LocaleMap<DefaultItemTranslation>) {
        self.cost = cost
        self.src = src
        self.translations = translations
    }
}
