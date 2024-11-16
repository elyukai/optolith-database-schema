//
//  Poison.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Poison: LocalizableEntity {
    /// The poison's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The poison's application type(s).
    public let applicationType: [PoisonApplicationType]
    
    /// The poison's source type and dependent additional values.
    public let sourceType: PoisonSourceType
    
    /// Use Spirit or Toughness as a modifier for the poison.
    public let resistance: Resistance
    
    /// When the poison takes effect.
    public let start: PoisonStart
    
    /// The normal and degraded poison's duration.
    public let duration: Reduceable<PoisonDuration>
    
    /// The raw (ingredients) value, in silverthalers.
    public let value: Int
    
    /// Price for one dose, in silverthalers.
    public let cost: Int
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PoisonTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case applicationType = "application_type"
        case sourceType = "source_type"
        case resistance = "resistance"
        case start = "start"
        case duration = "duration"
        case value = "value"
        case cost = "cost"
        case src = "src"
        case translations = "translations"
    }
}

public enum PoisonApplicationType: String, EntitySubtype {
    case weapon = "Weapon"
    case ingestion = "Ingestion"
    case inhalation = "Inhalation"
    case contact = "Contact"
}

@DiscriminatedEnum
public enum PoisonStart: EntitySubtype {
    case immediate
    case constant(ConstantPoisonTime)
    case diceBased(DiceBasedPoisonTime)
}

@DiscriminatedEnum
public enum PoisonDuration: EntitySubtype {
    case instant
    case constant(ConstantPoisonTime)
    case diceBased(DiceBasedPoisonTime)
    case indefinite(IndefinitePoisonTime)
}

public struct ConstantPoisonTime: EntitySubtype {
    public let value: Double
    
    public let unit: PoisonTimeUnit
}

public struct DiceBasedPoisonTime: EntitySubtype {
    public let dice: Dice
    
    public let unit: PoisonTimeUnit
}

public enum PoisonTimeUnit: String, EntitySubtype {
    case combatRounds = "CombatRounds"
    case minutes = "Minutes"
    case hours = "Hours"
    case days = "Days"
}

public struct IndefinitePoisonTime: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefinitePoisonTimeTranslation>
}

public struct IndefinitePoisonTimeTranslation: EntitySubtype {
    /// A description of the duration.
    public let description: NonEmptyMarkdown
}

@DiscriminatedEnum
public enum PoisonSourceType: EntitySubtype {
    case animalVenom(AnimalVenom)
    case alchemicalPoison(AlchemicalPoison)
    case mineralPoison(MineralPoison)
    case plantPoison(PlantPoison)
    case demonicPoison(DemonicPoison)
}

public struct AnimalVenom: EntitySubtype {
    /// The poison’s level.
    public let level: Int
    
    /// If `false`, the poison cannot be extracted.
    public let isExtractable: Bool?    
    
    private enum CodingKeys: String, CodingKey {
        case level = "level"
        case isExtractable = "is_extractable"
    }
}

public struct AlchemicalPoison: EntitySubtype {
    /// Effect type(s) of an alchemical poison.
    public let effectTypes: [EffectType]
    
    /// The cost per ingredient level in silverthalers.
    public let costPerIngredientLevel: Double
    
    /// The laboratory level needed to brew the elixir.
    public let laboratory: LaboratoryLevel
    
    /// The brewing difficulty, which represents the challenge of creating an elixir.
    public let brewingDifficulty: Int
    
    /// AP value and prerequisites of the elixir recipe’s trade secret.
    public let tradeSecret: RecipeTradeSecret
    
    /// Additional information if the poison is an intoxicant.
    public let intoxicant: Intoxicant?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AlchemicalPoisonTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case effectTypes = "effect_types"
        case costPerIngredientLevel = "cost_per_ingredient_level"
        case laboratory = "laboratory"
        case brewingDifficulty = "brewing_difficulty"
        case tradeSecret = "trade_secret"
        case intoxicant = "intoxicant"
        case translations = "translations"
    }
}

public struct AlchemicalPoisonTranslation: EntitySubtype {
    /// A list of typical ingredients.
    public let typicalIngredients: [NonEmptyString]
    
    /// Prerequsites for the brewing process, if any.
    public let brewingProcessPrerequisites: NonEmptyMarkdown?    
    
    private enum CodingKeys: String, CodingKey {
        case typicalIngredients = "typical_ingredients"
        case brewingProcessPrerequisites = "brewing_process_prerequisites"
    }
}

public struct MineralPoison: EntitySubtype {
    /// The poison’s level.
    public let level: Int
}

public struct PlantPoison: EntitySubtype {
    /// Effect type(s) of a plant poison.
    public let effectTypes: [EffectType]
    
    /// The poison’s level.
    public let level: Int
    
    /// Additional information if the poison is an intoxicant.
    public let intoxicant: Intoxicant?    
    
    private enum CodingKeys: String, CodingKey {
        case effectTypes = "effect_types"
        case level = "level"
        case intoxicant = "intoxicant"
    }
}

public struct DemonicPoison: EntitySubtype {
    /// The poison’s level.
    public let level: DemonicPoisonLevel
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DemonicPoisonTranslation>?
}

@DiscriminatedEnum
public enum DemonicPoisonLevel: EntitySubtype {
    case qualityLevel(QualityLevelDemonicPoisonLevel)
    case constant(ConstantDemonicPoisonLevel)
}

public struct QualityLevelDemonicPoisonLevel: EntitySubtype {
    public let source: QualityLevelDemonicPoisonLevelSource
}

public enum QualityLevelDemonicPoisonLevelSource: String, EntitySubtype {
    case spellwork = "Spellwork"
}

public struct ConstantDemonicPoisonLevel: EntitySubtype {
    /// The poison’s level.
    public let value: Int
}

public struct DemonicPoisonTranslation: EntitySubtype {
    /// A note, if any.
    public let note: NonEmptyMarkdown?
}

public struct Intoxicant: EntitySubtype {
    /// Whether the use of the intoxicant is legal or not, usually from the perspective of most middle-Aventurian an northern-Aventurian nations.
    public let legality: IntoxicantLegality
    
    /// The chance of getting addicted after an ingestion in addition to the maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
    public let addiction: IntoxicantAddiction?
    
    /// All translations for the entry, identified by IETF language tag
    /// (BCP47).
    public let translations: LocaleMap<IntoxicantTranslation>
}

/// Whether the use of the intoxicant is legal or not, usually from the perspective of most middle-Aventurian an northern-Aventurian nations.
public struct IntoxicantLegality: EntitySubtype {
    public let isLegal: Bool    
    
    private enum CodingKeys: String, CodingKey {
        case isLegal = "is_legal"
    }
}

/// The chance of getting addicted after an ingestion in addition to the maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
public struct IntoxicantAddiction: EntitySubtype {
    /// The chance of getting addicted after an ingestion.
    public let chance: Double
    
    /// The maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
    public let interval: IntoxicantAddictionInterval
}

/// The maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
@DiscriminatedEnum
public enum IntoxicantAddictionInterval: EntitySubtype {
    case constant(ConstantIntoxicantAddictionInterval)
    case diceBased(DiceBasedIntoxicantAddictionInterval)
}

public struct ConstantIntoxicantAddictionInterval: EntitySubtype {
    /// The interval value in days.
    public let value: Double
}

public struct DiceBasedIntoxicantAddictionInterval: EntitySubtype {
    /// The dice that define the interval value in days.
    public let dice: Dice
}

public struct IntoxicantTranslation: EntitySubtype {
    /// How to ingest the intoxicant.
    public let ingestion: NonEmptyString
    
    /// The intoxicants side effects that always happen, no matter whether the intoxicant has the default or the reduced effect.
    public let sideEffect: NonEmptyMarkdown?
    
    /// What happens if the intoxicant has been overdosed, that is, it has been ingested another time within the duration.
    public let overdose: NonEmptyMarkdown
    
    /// Special information about the intoxicant.
    public let special: NonEmptyMarkdown?    
    
    private enum CodingKeys: String, CodingKey {
        case ingestion = "ingestion"
        case sideEffect = "side_effect"
        case overdose = "overdose"
        case special = "special"
    }
}

public struct PoisonTranslation: EntitySubtype {
    /// The name of the poison.
    public let name: NonEmptyString
    
    /// A list of alternative names.
    public let alternativeNames: [AlternativeName]?
    
    /// The normal and degraded poison's effects.
    public let effect: Reduceable<NonEmptyMarkdown>
    
    /// Notes on the poison's special features.
    public let notes: NonEmptyString?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case alternativeNames = "alternative_names"
        case effect = "effect"
        case notes = "notes"
        case errata = "errata"
    }
}
