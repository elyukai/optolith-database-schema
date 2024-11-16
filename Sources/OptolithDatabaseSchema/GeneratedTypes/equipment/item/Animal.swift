//
//  Animal.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Animal: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DefaultItemTranslation>
}
