//
//  Elixir.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Elixir: LocalizableEntity {
    /// The elixir's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The cost per ingredient level in silverthalers.
    public let costPerIngredientLevel: Double
    
    /// The laboratory level needed to brew the elixir.
    public let laboratory: LaboratoryLevel
    
    /// The brewing difficulty, which represents the challenge of creating an elixir.
    public let brewingDifficulty: Int
    
    /// AP value and prerequisites of the elixir recipe’s trade secret.
    public let tradeSecret: RecipeTradeSecret
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ElixirTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case costPerIngredientLevel = "cost_per_ingredient_level"
        case laboratory = "laboratory"
        case brewingDifficulty = "brewing_difficulty"
        case tradeSecret = "trade_secret"
        case src = "src"
        case translations = "translations"
    }
}

public struct ElixirTranslation: EntitySubtype {
    /// The name of the elixir.
    public let name: NonEmptyString
    
    /// A list of alternative names.
    public let alternativeNames: [AlternativeName]?
    
    /// A list of typical ingredients.
    public let typicalIngredients: [NonEmptyString]
    
    /// Prerequsites for the brewing process, if any.
    public let brewingProcessPrerequisites: NonEmptyMarkdown?
    
    /// The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on.
    public let qualityLevels: [NonEmptyMarkdown]
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case alternativeNames = "alternative_names"
        case typicalIngredients = "typical_ingredients"
        case brewingProcessPrerequisites = "brewing_process_prerequisites"
        case qualityLevels = "quality_levels"
        case errata = "errata"
    }
}
