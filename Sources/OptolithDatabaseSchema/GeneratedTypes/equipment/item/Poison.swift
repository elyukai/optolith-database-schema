//
//  Poison.swift
//  OptolithDatabaseSchema
//

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

    public init(id: Int, applicationType: [PoisonApplicationType], sourceType: PoisonSourceType, resistance: Resistance, start: PoisonStart, duration: Reduceable<PoisonDuration>, value: Int, cost: Int, src: PublicationRefs, translations: LocaleMap<PoisonTranslation>) {
        self.id = id
        self.applicationType = applicationType
        self.sourceType = sourceType
        self.resistance = resistance
        self.start = start
        self.duration = duration
        self.value = value
        self.cost = cost
        self.src = src
        self.translations = translations
    }

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

public enum PoisonStart: EntitySubtype {
    case immediate
    case constant(ConstantPoisonTime)
    case diceBased(DiceBasedPoisonTime)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case immediate = "immediate"
        case constant = "constant"
        case diceBased = "dice_based"
    }

    private enum Discriminator: String, Decodable {
        case immediate = "Immediate"
        case constant = "Constant"
        case diceBased = "DiceBased"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .immediate:
            self = .immediate
        case .constant:
            self = .constant(try container.decode(ConstantPoisonTime.self, forKey: .constant))
        case .diceBased:
            self = .diceBased(try container.decode(DiceBasedPoisonTime.self, forKey: .diceBased))
        }
    }
}

public enum PoisonDuration: EntitySubtype {
    case instant
    case constant(ConstantPoisonTime)
    case diceBased(DiceBasedPoisonTime)
    case indefinite(IndefinitePoisonTime)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case instant = "instant"
        case constant = "constant"
        case diceBased = "dice_based"
        case indefinite = "indefinite"
    }

    private enum Discriminator: String, Decodable {
        case instant = "Instant"
        case constant = "Constant"
        case diceBased = "DiceBased"
        case indefinite = "Indefinite"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .instant:
            self = .instant
        case .constant:
            self = .constant(try container.decode(ConstantPoisonTime.self, forKey: .constant))
        case .diceBased:
            self = .diceBased(try container.decode(DiceBasedPoisonTime.self, forKey: .diceBased))
        case .indefinite:
            self = .indefinite(try container.decode(IndefinitePoisonTime.self, forKey: .indefinite))
        }
    }
}

public struct ConstantPoisonTime: EntitySubtype {
    public let value: Double

    public let unit: PoisonTimeUnit

    public init(value: Double, unit: PoisonTimeUnit) {
        self.value = value
        self.unit = unit
    }
}

public struct DiceBasedPoisonTime: EntitySubtype {
    public let dice: Dice

    public let unit: PoisonTimeUnit

    public init(dice: Dice, unit: PoisonTimeUnit) {
        self.dice = dice
        self.unit = unit
    }
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

    public init(translations: LocaleMap<IndefinitePoisonTimeTranslation>) {
        self.translations = translations
    }
}

public struct IndefinitePoisonTimeTranslation: EntitySubtype {
    /// A description of the duration.
    public let description: NonEmptyMarkdown

    public init(description: NonEmptyMarkdown) {
        self.description = description
    }
}

public enum PoisonSourceType: EntitySubtype {
    case animalVenom(AnimalVenom)
    case alchemicalPoison(AlchemicalPoison)
    case mineralPoison(MineralPoison)
    case plantPoison(PlantPoison)
    case demonicPoison(DemonicPoison)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case animalVenom = "animal_venom"
        case alchemicalPoison = "alchemical_poison"
        case mineralPoison = "mineral_poison"
        case plantPoison = "plant_poison"
        case demonicPoison = "demonic_poison"
    }

    private enum Discriminator: String, Decodable {
        case animalVenom = "AnimalVenom"
        case alchemicalPoison = "AlchemicalPoison"
        case mineralPoison = "MineralPoison"
        case plantPoison = "PlantPoison"
        case demonicPoison = "DemonicPoison"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .animalVenom:
            self = .animalVenom(try container.decode(AnimalVenom.self, forKey: .animalVenom))
        case .alchemicalPoison:
            self = .alchemicalPoison(try container.decode(AlchemicalPoison.self, forKey: .alchemicalPoison))
        case .mineralPoison:
            self = .mineralPoison(try container.decode(MineralPoison.self, forKey: .mineralPoison))
        case .plantPoison:
            self = .plantPoison(try container.decode(PlantPoison.self, forKey: .plantPoison))
        case .demonicPoison:
            self = .demonicPoison(try container.decode(DemonicPoison.self, forKey: .demonicPoison))
        }
    }
}

public struct AnimalVenom: EntitySubtype {
    /// The poison’s level.
    public let level: Int

    /// If `false`, the poison cannot be extracted.
    public let isExtractable: Bool?

    public init(level: Int, isExtractable: Bool? = nil) {
        self.level = level
        self.isExtractable = isExtractable
    }

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

    public init(effectTypes: [EffectType], costPerIngredientLevel: Double, laboratory: LaboratoryLevel, brewingDifficulty: Int, tradeSecret: RecipeTradeSecret, intoxicant: Intoxicant? = nil, translations: LocaleMap<AlchemicalPoisonTranslation>) {
        self.effectTypes = effectTypes
        self.costPerIngredientLevel = costPerIngredientLevel
        self.laboratory = laboratory
        self.brewingDifficulty = brewingDifficulty
        self.tradeSecret = tradeSecret
        self.intoxicant = intoxicant
        self.translations = translations
    }

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

    public init(typicalIngredients: [NonEmptyString], brewingProcessPrerequisites: NonEmptyMarkdown? = nil) {
        self.typicalIngredients = typicalIngredients
        self.brewingProcessPrerequisites = brewingProcessPrerequisites
    }

    private enum CodingKeys: String, CodingKey {
        case typicalIngredients = "typical_ingredients"
        case brewingProcessPrerequisites = "brewing_process_prerequisites"
    }
}

public struct MineralPoison: EntitySubtype {
    /// The poison’s level.
    public let level: Int

    public init(level: Int) {
        self.level = level
    }
}

public struct PlantPoison: EntitySubtype {
    /// Effect type(s) of a plant poison.
    public let effectTypes: [EffectType]

    /// The poison’s level.
    public let level: Int

    /// Additional information if the poison is an intoxicant.
    public let intoxicant: Intoxicant?

    public init(effectTypes: [EffectType], level: Int, intoxicant: Intoxicant? = nil) {
        self.effectTypes = effectTypes
        self.level = level
        self.intoxicant = intoxicant
    }

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

    public init(level: DemonicPoisonLevel, translations: LocaleMap<DemonicPoisonTranslation>? = nil) {
        self.level = level
        self.translations = translations
    }
}

public enum DemonicPoisonLevel: EntitySubtype {
    case qualityLevel(QualityLevelDemonicPoisonLevel)
    case constant(ConstantDemonicPoisonLevel)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case qualityLevel = "quality_level"
        case constant = "constant"
    }

    private enum Discriminator: String, Decodable {
        case qualityLevel = "QualityLevel"
        case constant = "Constant"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .qualityLevel:
            self = .qualityLevel(try container.decode(QualityLevelDemonicPoisonLevel.self, forKey: .qualityLevel))
        case .constant:
            self = .constant(try container.decode(ConstantDemonicPoisonLevel.self, forKey: .constant))
        }
    }
}

public struct QualityLevelDemonicPoisonLevel: EntitySubtype {
    public let source: QualityLevelDemonicPoisonLevelSource

    public init(source: QualityLevelDemonicPoisonLevelSource) {
        self.source = source
    }
}

public enum QualityLevelDemonicPoisonLevelSource: String, EntitySubtype {
    case spellwork = "Spellwork"
}

public struct ConstantDemonicPoisonLevel: EntitySubtype {
    /// The poison’s level.
    public let value: Int

    public init(value: Int) {
        self.value = value
    }
}

public struct DemonicPoisonTranslation: EntitySubtype {
    /// A note, if any.
    public let note: NonEmptyMarkdown?

    public init(note: NonEmptyMarkdown? = nil) {
        self.note = note
    }
}

public struct Intoxicant: EntitySubtype {
    /// Whether the use of the intoxicant is legal or not, usually from the perspective of most middle-Aventurian an northern-Aventurian nations.
    public let legality: IntoxicantLegality

    /// The chance of getting addicted after an ingestion in addition to the maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
    public let addiction: IntoxicantAddiction?

    /// All translations for the entry, identified by IETF language tag
    /// (BCP47).
    public let translations: LocaleMap<IntoxicantTranslation>

    public init(legality: IntoxicantLegality, addiction: IntoxicantAddiction? = nil, translations: LocaleMap<IntoxicantTranslation>) {
        self.legality = legality
        self.addiction = addiction
        self.translations = translations
    }
}

/// Whether the use of the intoxicant is legal or not, usually from the perspective of most middle-Aventurian an northern-Aventurian nations.
public struct IntoxicantLegality: EntitySubtype {
    public let isLegal: Bool

    public init(isLegal: Bool) {
        self.isLegal = isLegal
    }

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

    public init(chance: Double, interval: IntoxicantAddictionInterval) {
        self.chance = chance
        self.interval = interval
    }
}

/// The maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
public enum IntoxicantAddictionInterval: EntitySubtype {
    case constant(ConstantIntoxicantAddictionInterval)
    case diceBased(DiceBasedIntoxicantAddictionInterval)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case constant = "constant"
        case diceBased = "dice_based"
    }

    private enum Discriminator: String, Decodable {
        case constant = "Constant"
        case diceBased = "DiceBased"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .constant:
            self = .constant(try container.decode(ConstantIntoxicantAddictionInterval.self, forKey: .constant))
        case .diceBased:
            self = .diceBased(try container.decode(DiceBasedIntoxicantAddictionInterval.self, forKey: .diceBased))
        }
    }
}

public struct ConstantIntoxicantAddictionInterval: EntitySubtype {
    /// The interval value in days.
    public let value: Double

    public init(value: Double) {
        self.value = value
    }
}

public struct DiceBasedIntoxicantAddictionInterval: EntitySubtype {
    /// The dice that define the interval value in days.
    public let dice: Dice

    public init(dice: Dice) {
        self.dice = dice
    }
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

    public init(ingestion: NonEmptyString, sideEffect: NonEmptyMarkdown? = nil, overdose: NonEmptyMarkdown, special: NonEmptyMarkdown? = nil) {
        self.ingestion = ingestion
        self.sideEffect = sideEffect
        self.overdose = overdose
        self.special = special
    }

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

    public init(name: NonEmptyString, alternativeNames: [AlternativeName]? = nil, effect: Reduceable<NonEmptyMarkdown>, notes: NonEmptyString? = nil, errata: Errata? = nil) {
        self.name = name
        self.alternativeNames = alternativeNames
        self.effect = effect
        self.notes = notes
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case alternativeNames = "alternative_names"
        case effect = "effect"
        case notes = "notes"
        case errata = "errata"
    }
}
