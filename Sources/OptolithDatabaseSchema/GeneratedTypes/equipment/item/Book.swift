//
//  Book.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Book: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost
    
    /// The weight in kg.
    public let weight: Weight
    
    /// The complexity of crafting the item.
    public let complexity: Complexity
    
    /// The structure points of the item. Use an array if the item consists of
    /// multiple components that have individual structure points.
    public let structurePoints: StructurePoints
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<BookTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case weight = "weight"
        case complexity = "complexity"
        case structurePoints = "structure_points"
        case src = "src"
        case translations = "translations"
    }
}

public struct BookTranslation: EntitySubtype {
    /// The name of the item.
    public let name: NonEmptyString
    
    /// An auxiliary name or label of the item, if available.
    public let secondaryName: NonEmptyString?
    
    /// The language the book is written in.
    public let language: NonEmptyString
    
    /// The script that was used for the book.
    public let script: NonEmptyString
    
    /// Note text.
    public let note: NonEmptyMarkdown?
    
    /// Special rules text.
    public let rules: NonEmptyMarkdown?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case secondaryName = "secondary_name"
        case language = "language"
        case script = "script"
        case note = "note"
        case rules = "rules"
        case errata = "errata"
    }
}
