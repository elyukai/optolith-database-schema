//
//  GemOrPreciousStone.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct GemOrPreciousStone: LocalizableEntity {
    /// The cost in silverthalers per 10 karat.
    public let cost: Cost
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<GemOrPreciousStoneTranslation>
}

public struct GemOrPreciousStoneTranslation: EntitySubtype {
    /// The name of the item.
    public let name: NonEmptyString
    
    /// An auxiliary name or label of the item, if available.
    public let secondaryName: NonEmptyString?
    
    /// The color of the gem or stone.
    public let color: NonEmptyString
    
    /// Note text.
    public let note: NonEmptyMarkdown?
    
    /// Special rules text.
    public let rules: NonEmptyMarkdown?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case secondaryName = "secondary_name"
        case color = "color"
        case note = "note"
        case rules = "rules"
        case errata = "errata"
    }
}
