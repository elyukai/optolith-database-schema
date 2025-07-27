import FileDB

@Model
public struct Poison {

  /// The poison’s application type(s).
  let application_type: Array(IncludeIdentifier(PoisonApplicationType), { minItems: 1, uniqueItems: true })

  /// The poison’s source type and dependent additional values.
  @Relationship(PoisonSourceType)
  let source_type: PoisonSourceType.ID

  /// Use Spirit or Toughness as a modifier for the poison.
  @Relationship(Resistance)
  let resistance: Resistance.ID

  /// When the poison takes effect.
  @Relationship(PoisonStart)
  let start: PoisonStart.ID

  /// The normal and degraded poison’s duration.
  let duration: GenIncludeIdentifier(Reduceable, [IncludeIdentifier(PoisonDuration)])

  /// The raw (ingredients) value, in silverthalers.
  let value: Integer({ minimum: 1 })

  /// Price for one dose, in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // PoisonTranslation

        /// The name of the poison.
        let name: String({ minLength: 1 })

        /// A list of alternative names.
        let alternative_names: Array(IncludeIdentifier(AlternativeName), { minItems: 1 })?

        /// The normal and degraded poison’s effects.
        let effect: GenIncludeIdentifier(Reduceable, [String({ minLength: 1, isMarkdown: true })])

        /// Notes on the poison’s special features.
        let notes: String({ minLength: 1, isMarkdown: true })?

        let errata: Errata?
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
    case Constant(IncludeIdentifier(ConstantPoisonTime))
    case DiceBased(IncludeIdentifier(DiceBasedPoisonTime))
}

@ModelEnum
public enum PoisonDuration {
    case Instant
    case Constant(IncludeIdentifier(ConstantPoisonTime))
    case DiceBased(IncludeIdentifier(DiceBasedPoisonTime))
    case Indefinite(IncludeIdentifier(IndefinitePoisonTime))
}

@Embedded
public struct ConstantPoisonTime {
      value: Required({
        type: Integer({ minimum: 1 }),
      }),
      unit: Required({
        type: IncludeIdentifier(PoisonTimeUnit),
      }),
  }

@Embedded
public struct DiceBasedPoisonTime {
      dice: Required({
        type: IncludeIdentifier(Dice),
      }),
      unit: Required({
        type: IncludeIdentifier(PoisonTimeUnit),
      }),
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
    @Relationship
    let translations: [String: Translation]

    struct Translation { // IndefinitePoisonTimeTranslation

        /// A description of the duration.
        let description: String({ minLength: 1, isMarkdown: true })?
        })
      ),
  }

@ModelEnum
public enum PoisonSourceType {
    case AnimalVenom(IncludeIdentifier(AnimalVenom))
    case AlchemicalPoison(IncludeIdentifier(AlchemicalPoison))
    case MineralPoison(IncludeIdentifier(MineralPoison))
    case PlantPoison(IncludeIdentifier(PlantPoison))
    case DemonicPoison(IncludeIdentifier(DemonicPoison))
}

@Embedded
public struct AnimalVenom {

  /// The poison’s level.
  let level: Integer({ minimum: 1, maximum: 6 })

  /// If `false`, the poison cannot be extracted.
  let is_extractable: Boolean()
  }

@Embedded
public struct AlchemicalPoison {

  /// Effect type(s) of an alchemical poison.
  let effect_types: Array(IncludeIdentifier(EffectType), { minItems: 1, uniqueItems: true })

  /// The cost per ingredient level in silverthalers.
  let cost_per_ingredient_level: Integer({ minimum: 1 })

  /// The laboratory level needed to brew the poison.
  @Relationship(LaboratoryLevel)
  let laboratory: LaboratoryLevel.ID

  /// The brewing difficulty, which represents the challenge of creating a poison.
  let brewing_difficulty: Integer()

  /// AP value and prerequisites of the poison recipe’s trade secret.
  @Relationship(RecipeTradeSecret)
  let trade_secret: RecipeTradeSecret.ID
  /// Additional information if the poison is an intoxicant.
  @Relationship(Intoxicant)
  let intoxicant: Intoxicant.ID?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // AlchemicalPoisonTranslation

        /// A list of typical ingredients.
        let typical_ingredients: Array(String({ minLength: 1 }), { minItems: 1, uniqueItems: true })

        /// Prerequsites for the brewing process, if any.
        let brewing_process_prerequisites: String({ minLength: 1, isMarkdown: true })?
        })
      ),
  }

@Embedded
public struct MineralPoison {

  /// The poison’s level.
  let level: Integer({ minimum: 1, maximum: 6 })
  }

@Embedded
public struct PlantPoison {

  /// Effect type(s) of a plant poison.
  let effect_types: Array(IncludeIdentifier(EffectType), { minItems: 1, uniqueItems: true })

  /// The poison’s level.
  let level: Integer({ minimum: 1, maximum: 6 })
  /// Additional information if the poison is an intoxicant.
  @Relationship(Intoxicant)
  let intoxicant: Intoxicant.ID?
  }

@Embedded
public struct DemonicPoison {

  /// The poison’s level.
  @Relationship(DemonicPoisonLevel)
  let level: DemonicPoisonLevel.ID
      translations: NestedLocaleMap(
        Optional,
        "DemonicPoisonTranslation",
        Object(
          {
            note: Optional({
              comment: "A note, if any.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
          },
          { minProperties: 1 }
        )
      ),
  }

@ModelEnum
public enum DemonicPoisonLevel {
    case QualityLevel(IncludeIdentifier(QualityLevelDemonicPoisonLevel))
    case Constant(IncludeIdentifier(ConstantDemonicPoisonLevel))
}

@Embedded
public struct QualityLevelDemonicPoisonLevel {
      source: Required({
        type: IncludeIdentifier(QualityLevelDemonicPoisonLevelSource),
      }),
  }

@ModelEnum
public enum QualityLevelDemonicPoisonLevelSource {
    case Spellwork
}

@Embedded
public struct ConstantDemonicPoisonLevel {

  /// The poison’s level.
  let value: Integer({ minimum: 1, maximum: 6 })
  }

@Embedded
public struct Intoxicant {

  /// Whether the use of the intoxicant is legal or not, usually from the perspective of most middle-Aventurian an northern-Aventurian nations.
  @Relationship(IntoxicantLegality)
  let legality: IntoxicantLegality.ID
  /// The chance of getting addicted after an ingestion in addition to the maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
  @Relationship(IntoxicantAddiction)
  let addiction: IntoxicantAddiction.ID?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // IntoxicantTranslation

        /// How to ingest the intoxicant.
        let ingestion: String({ minLength: 1 })
          side_effect: Optional({
            comment:
              "The intoxicants side effects that always happen, no matter whether the intoxicant has the default or the reduced effect.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          overdose: Required({
            comment:
              "What happens if the intoxicant has been overdosed, that is, it has been ingested another time within the duration.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),

        /// Special information about the intoxicant.
        let special: String({ minLength: 1, isMarkdown: true })?
        })
      ),
  }

/// Whether the use of the intoxicant is legal or not, usually from the perspective of most middle-Aventurian an northern-Aventurian nations.
@Embedded
public struct IntoxicantLegality {
      is_legal: Required({
        type: BooleanType(),
      }),
  }

/// The chance of getting addicted after an ingestion in addition to the maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
@Embedded
public struct IntoxicantAddiction {

  /// The chance of getting addicted after an ingestion.
  let chance: Integer()

  /// The maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
  @Relationship(IntoxicantAddictionInterval)
  let interval: IntoxicantAddictionInterval.ID
  }

/// The maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.
@ModelEnum
public enum IntoxicantAddictionInterval {
    case Constant(IncludeIdentifier(ConstantIntoxicantAddictionInterval))
    case DiceBased(IncludeIdentifier(DiceBasedIntoxicantAddictionInterval))
}

@Embedded
public struct ConstantIntoxicantAddictionInterval {

  /// The interval value in days.
  let value: Integer({ minimum: 1 })
  }

@Embedded
public struct DiceBasedIntoxicantAddictionInterval {

  /// The dice that define the interval value in days.
  @Relationship(Dice)
  let dice: Dice.ID
  }
