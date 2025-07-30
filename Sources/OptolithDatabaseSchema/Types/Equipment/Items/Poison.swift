import FileDB

@Model
public struct Poison {
    /// The poison’s application type(s).
    @MinItems(1)
    @UniqueItems
    let application_type: [PoisonApplicationType]

    /// The poison’s source type and dependent additional values.
    let source_type: PoisonSourceType

    /// Use Spirit or Toughness as a modifier for the poison.
    let resistance: Resistance

    /// When the poison takes effect.
    let start: PoisonStart

    /// The normal and degraded poison’s duration.
    let duration: Reduceable<PoisonDuration>

    /// The raw (ingredients) value, in silverthalers.
    @Minimum(1)
    let value: Int

    /// Price for one dose, in silverthalers.
    let cost: Cost

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // PoisonTranslation
        /// The name of the poison.
        @MinLength(1)
        let name: String

        /// A list of alternative names.
        @MinItems(1)
        let alternative_names: [AlternativeName]?

        /// The normal and degraded poison’s effects.
        let effect: ReduceableNonEmptyMarkdown

        /// Notes on the poison’s special features.
        @MinLength(1)
        @Markdown
        let notes: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@ModelEnum
public enum PoisonApplicationType {
    case Weapon
    case Ingestion
    case Inhalation
    case Contact
}

@ModelEnum
public enum PoisonStart {
    case Immediate
    case Constant(ConstantPoisonTime)
    case DiceBased(DiceBasedPoisonTime)
}

@ModelEnum
public enum PoisonDuration {
    case Instant
    case Constant(ConstantPoisonTime)
    case DiceBased(DiceBasedPoisonTime)
    case Indefinite(IndefinitePoisonTime)
}

@Embedded
public struct ConstantPoisonTime {
    @Minimum(1)
    let value: Int

    let unit: PoisonTimeUnit
}

@Embedded
public struct DiceBasedPoisonTime {
    let dice: Dice

    let unit: PoisonTimeUnit
}

@ModelEnum
public enum PoisonTimeUnit {
    case CombatRounds
    case Minutes
    case Hours
    case Days
}

@Embedded
public struct IndefinitePoisonTime {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // IndefinitePoisonTimeTranslation
        /// A description of the duration.
        @MinLength(1)
        @Markdown
        let description: String?
    }
}

@ModelEnum
public enum PoisonSourceType {
    case AnimalVenom(AnimalVenom)
    case AlchemicalPoison(AlchemicalPoison)
    case MineralPoison(MineralPoison)
    case PlantPoison(PlantPoison)
    case DemonicPoison(DemonicPoison)
}

@Embedded
public struct AnimalVenom {
    /// The poison’s level.
    @Minimum(1)
    @Maximum(6)
    let level: Int

    /// If `false`, the poison cannot be extracted.
    let is_extractable: Bool
}

@Embedded
public struct AlchemicalPoison {
    /// Effect type(s) of an alchemical poison.
    @MinItems(1)
    @UniqueItems
    let effect_types: [EffectType]

    /// The cost per ingredient level in silverthalers.
    @Minimum(1)
    let cost_per_ingredient_level: Int

    /// The laboratory level needed to brew the poison.
    let laboratory: LaboratoryLevel

    /// The brewing difficulty, which represents the challenge of creating a poison.
    let brewing_difficulty: Int

    /// AP value and prerequisites of the poison recipe’s trade secret.
    let trade_secret: RecipeTradeSecret

    /// Additional information if the poison is an intoxicant.
    let intoxicant: Intoxicant?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // AlchemicalPoisonTranslation
        /// A list of typical ingredients.
        @MinItems(1)
        @UniqueItems
        let typical_ingredients: [TypicalIngredientDescriptionForAlchemicalPoison]

        /// Prerequsites for the brewing process, if any.
        @MinLength(1)
        @Markdown
        let brewing_process_prerequisites: String?
    }
}

@TypeAlias
public struct TypicalIngredientDescriptionForAlchemicalPoison {
    @MinLength(1)
    let text: String
}

@Embedded
public struct MineralPoison {
    /// The poison’s level.
    @Minimum(1)
    @Maximum(6)
    let level: Int
}

@Embedded
public struct PlantPoison {
    /// Effect type(s) of a plant poison.
    @MinItems(1)
    @UniqueItems
    let effect_types: [EffectType]

    /// The poison’s level.
    @Minimum(1)
    @Maximum(6)
    let level: Int

    /// Additional information if the poison is an intoxicant.
    let intoxicant: Intoxicant?
}

@Embedded
public struct DemonicPoison {
    /// The poison’s level.
    let level: DemonicPoisonLevel

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation {  // DemonicPoisonTranslation
        /// A note, if any.
        @MinLength(1)
        @Markdown
        let note: String?
    }
}

@ModelEnum
public enum DemonicPoisonLevel {
    case QualityLevel(QualityLevelDemonicPoisonLevel)
    case Constant(ConstantDemonicPoisonLevel)
}

@Embedded
public struct QualityLevelDemonicPoisonLevel {
    let source: QualityLevelDemonicPoisonLevelSource
}

@ModelEnum
public enum QualityLevelDemonicPoisonLevelSource {
    case Spellwork
}

@Embedded
public struct ConstantDemonicPoisonLevel {
    /// The poison’s level.
    @Minimum(1)
    @Maximum(6)
    let value: Int
}

@Embedded
public struct Intoxicant {
    /// Whether the use of the intoxicant is legal or not, usually from the perspective of most middle-Aventurian an northern-Aventurian nations.
    let legality: IntoxicantLegality

    /// The chance of getting addicted after an ingestion in addition to the maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
    let addiction: IntoxicantAddiction?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // IntoxicantTranslation
        /// How to ingest the intoxicant.
        @MinLength(1)
        let ingestion: String

        /// The intoxicants side effects that always happen, no matter whether the intoxicant has the default or the reduced effect.
        @MinLength(1)
        @Markdown
        let side_effect: String?

        /// What happens if the intoxicant has been overdosed, that is, it has been ingested another time within the duration.
        @MinLength(1)
        @Markdown
        let overdose: String

        /// Special information about the intoxicant.
        @MinLength(1)
        @Markdown
        let special: String?
    }
}

/// Whether the use of the intoxicant is legal or not, usually from the perspective of most middle-Aventurian an northern-Aventurian nations.
@Embedded
public struct IntoxicantLegality {
    let is_legal: Bool
}

/// The chance of getting addicted after an ingestion in addition to the maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
@Embedded
public struct IntoxicantAddiction {
    /// The chance of getting addicted after an ingestion.
    let chance: Int

    /// The maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
    let interval: IntoxicantAddictionInterval
}

/// The maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
@ModelEnum
public enum IntoxicantAddictionInterval {
    case Constant(ConstantIntoxicantAddictionInterval)
    case DiceBased(DiceBasedIntoxicantAddictionInterval)
}

@Embedded
public struct ConstantIntoxicantAddictionInterval {
    /// The interval value in days.
    @Minimum(1)
    let value: Int
}

@Embedded
public struct DiceBasedIntoxicantAddictionInterval {
    /// The dice that define the interval value in days.
    let dice: Dice
}
