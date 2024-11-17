//
//  Jewelry.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Jewelry: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: JewelryMaterialDifference<Cost>
    
    /// The weight in kg.
    public let weight: JewelryMaterialDifference<Weight>
    
    /// The complexity of crafting the item.
    public let complexity: Complexity
    
    /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
    public let structurePoints: StructurePoints
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<JewelryTranslation>

    public init(cost: JewelryMaterialDifference<Cost>, weight: JewelryMaterialDifference<Weight>, complexity: Complexity, structurePoints: StructurePoints, src: PublicationRefs, translations: LocaleMap<JewelryTranslation>) {
        self.cost = cost
        self.weight = weight
        self.complexity = complexity
        self.structurePoints = structurePoints
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case weight = "weight"
        case complexity = "complexity"
        case structurePoints = "structure_points"
        case src = "src"
        case translations = "translations"
    }
}

/// Jewelry has different cost based on the material.
public struct JewelryMaterialDifference<T: EntitySubtype>: EntitySubtype {
    public let bronze: T
    
    public let silver: T
    
    public let gold: T

    public init(bronze: T, silver: T, gold: T) {
        self.bronze = bronze
        self.silver = silver
        self.gold = gold
    }
}

public struct JewelryTranslation: EntitySubtype {
    /// The name of the item.
    public let name: NonEmptyString
    
    /// An auxiliary name or label of the item, if available.
    public let secondaryName: NonEmptyString?
    
    /// Note text.
    public let note: NonEmptyMarkdown?
    
    /// Special rules text.
    public let rules: NonEmptyMarkdown?
    
    public let errata: Errata?

    public init(name: NonEmptyString, secondaryName: NonEmptyString? = nil, note: NonEmptyMarkdown? = nil, rules: NonEmptyMarkdown? = nil, errata: Errata? = nil) {
        self.name = name
        self.secondaryName = secondaryName
        self.note = note
        self.rules = rules
        self.errata = errata
    }    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case secondaryName = "secondary_name"
        case note = "note"
        case rules = "rules"
        case errata = "errata"
    }
}
