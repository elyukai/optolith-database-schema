//
//  MagicalArtifact.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct MagicalArtifact: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalArtifactTranslation>
}

public struct MagicalArtifactTranslation: EntitySubtype {
    /// The name of the item.
    public let name: NonEmptyString
    
    /// An auxiliary name or label of the item, if available.
    public let secondaryName: NonEmptyString?
    
    /// Note text.
    public let note: NonEmptyMarkdown?
    
    /// Special rules text.
    public let rules: NonEmptyMarkdown?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case secondaryName = "secondary_name"
        case note = "note"
        case rules = "rules"
        case errata = "errata"
    }
}
