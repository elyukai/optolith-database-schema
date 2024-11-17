//
//  ToolOfTheTrade.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct ToolOfTheTrade: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost

    /// The weight in kg.
    public let weight: Weight

    /// The complexity of crafting the item.
    public let complexity: Complexity?

    /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
    public let structurePoints: StructurePoints?

    /// Additional information if the item is a laboratory.
    public let laboratory: Laboratory?

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ToolOfTheTradeTranslation>

    public init(cost: Cost, weight: Weight, complexity: Complexity? = nil, structurePoints: StructurePoints? = nil, laboratory: Laboratory? = nil, src: PublicationRefs, translations: LocaleMap<ToolOfTheTradeTranslation>) {
        self.cost = cost
        self.weight = weight
        self.complexity = complexity
        self.structurePoints = structurePoints
        self.laboratory = laboratory
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case weight = "weight"
        case complexity = "complexity"
        case structurePoints = "structure_points"
        case laboratory = "laboratory"
        case src = "src"
        case translations = "translations"
    }
}

public struct Laboratory: EntitySubtype {
    public let level: LaboratoryLevel

    public init(level: LaboratoryLevel) {
        self.level = level
    }
}

public struct ToolOfTheTradeTranslation: EntitySubtype {
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
