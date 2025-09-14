import {
  Array,
  Boolean,
  BooleanType,
  Entity,
  Enum,
  EnumCase,
  Float,
  GenIncludeIdentifier,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NestedLocaleMap } from "../../Locale.js"
import { AlternativeName } from "../../_AlternativeNames.js"
import { Dice } from "../../_Dice.js"
import { Reduceable, Resistance } from "../../_DiseasePoison.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { EffectType, LaboratoryLevel, RecipeTradeSecret } from "./_Herbary.js"

export const Poison = Entity(import.meta.url, {
  name: "Poison",
  namePlural: "Poisons",
  type: () =>
    Object({
      application_type: Required({
        comment: "The poison’s application type(s).",
        type: Array(IncludeIdentifier(PoisonApplicationType), { minItems: 1, uniqueItems: true }),
      }),
      source_type: Required({
        comment: "The poison’s source type and dependent additional values.",
        type: IncludeIdentifier(PoisonSourceType),
      }),
      resistance: Required({
        comment: "Use Spirit or Toughness as a modifier for the poison.",
        type: IncludeIdentifier(Resistance),
      }),
      start: Required({
        comment: "When the poison takes effect.",
        type: IncludeIdentifier(PoisonStart),
      }),
      duration: Required({
        comment: "The normal and degraded poison’s duration.",
        type: GenIncludeIdentifier(Reduceable, [IncludeIdentifier(PoisonDuration)]),
      }),
      value: Optional({
        comment: "The raw (ingredients) value, in silverthalers.",
        type: Integer({ minimum: 1 }),
      }),
      cost: Required({
        comment: "Price for one dose, in silverthalers.",
        type: IncludeIdentifier(PoisonCost),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "PoisonTranslation",
        Object({
          name: Required({
            comment: "The name of the poison.",
            type: String({ minLength: 1 }),
          }),
          alternative_names: Optional({
            comment: "A list of alternative names.",
            type: Array(IncludeIdentifier(AlternativeName), { minItems: 1 }),
          }),
          effect: Required({
            comment: "The normal and degraded poison’s effects.",
            type: GenIncludeIdentifier(Reduceable, [String({ minLength: 1, isMarkdown: true })]),
          }),
          notes: Optional({
            comment: "Notes on the poison’s special features.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const PoisonApplicationType = Enum(import.meta.url, {
  name: "PoisonApplicationType",
  values: () => ({
    Weapon: EnumCase({ type: null }),
    Ingestion: EnumCase({ type: null }),
    Inhalation: EnumCase({ type: null }),
    Contact: EnumCase({ type: null }),
  }),
})

const PoisonStart = Enum(import.meta.url, {
  name: "PoisonStart",
  values: () => ({
    Immediate: EnumCase({ type: null }),
    Constant: EnumCase({ type: IncludeIdentifier(ConstantPoisonTime) }),
    DiceBased: EnumCase({ type: IncludeIdentifier(DiceBasedPoisonTime) }),
  }),
})

const PoisonDuration = Enum(import.meta.url, {
  name: "PoisonDuration",
  values: () => ({
    Instant: EnumCase({ type: null }),
    Constant: EnumCase({ type: IncludeIdentifier(ConstantPoisonTime) }),
    DiceBased: EnumCase({ type: IncludeIdentifier(DiceBasedPoisonTime) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefinitePoisonTime) }),
  }),
})

const PoisonCost = Enum(import.meta.url, {
  name: "PoisonCost",
  values: () => ({
    None: EnumCase({ type: IncludeIdentifier(NoPoisonCost) }),
    Constant: EnumCase({ type: Float({ minimum: { value: 0, isExclusive: true } }) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefinitePoisonCost) }),
  }),
})

export const NoPoisonCost = TypeAlias(import.meta.url, {
  name: "NoPoisonCost",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Optional,
        "NoPoisonCostTranslation",
        Object({
          description: Required({
            comment: "A description of the cost.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
        })
      ),
    }),
})

export const IndefinitePoisonCost = TypeAlias(import.meta.url, {
  name: "IndefinitePoisonCost",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "IndefinitePoisonCostTranslation",
        Object({
          description: Required({
            comment: "A description of the cost.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
        })
      ),
    }),
})

export const ConstantPoisonTime = TypeAlias(import.meta.url, {
  name: "ConstantPoisonTime",
  type: () =>
    Object({
      value: Required({
        type: Integer({ minimum: 1 }),
      }),
      unit: Required({
        type: IncludeIdentifier(PoisonTimeUnit),
      }),
    }),
})

export const DiceBasedPoisonTime = TypeAlias(import.meta.url, {
  name: "DiceBasedPoisonTime",
  type: () =>
    Object({
      dice: Required({
        type: IncludeIdentifier(Dice),
      }),
      flat: Optional({
        comment: "The value to add to the result of the dice roll(s).",
        type: Integer(),
      }),
      unit: Required({
        type: IncludeIdentifier(PoisonTimeUnit),
      }),
    }),
})

const PoisonTimeUnit = Enum(import.meta.url, {
  name: "PoisonTimeUnit",
  values: () => ({
    CombatRounds: EnumCase({ type: null }),
    Minutes: EnumCase({ type: null }),
    Hours: EnumCase({ type: null }),
    Days: EnumCase({ type: null }),
  }),
})

export const IndefinitePoisonTime = TypeAlias(import.meta.url, {
  name: "IndefinitePoisonTime",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Optional,
        "IndefinitePoisonTimeTranslation",
        Object(
          {
            description: Optional({
              comment: "A description of the duration.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

const PoisonSourceType = Enum(import.meta.url, {
  name: "PoisonSourceType",
  values: () => ({
    AnimalVenom: EnumCase({ type: IncludeIdentifier(AnimalVenom) }),
    AlchemicalPoison: EnumCase({ type: IncludeIdentifier(AlchemicalPoison) }),
    MineralPoison: EnumCase({ type: IncludeIdentifier(MineralPoison) }),
    PlantPoison: EnumCase({ type: IncludeIdentifier(PlantPoison) }),
    DemonicPoison: EnumCase({ type: IncludeIdentifier(DemonicPoison) }),
  }),
})

export const AnimalVenom = TypeAlias(import.meta.url, {
  name: "AnimalVenom",
  type: () =>
    Object({
      level: Required({
        comment: "The poison’s level.",
        type: Integer({ minimum: 1, maximum: 6 }),
      }),
      is_extractable: Required({
        comment: "If `false`, the poison cannot be extracted.",
        type: Boolean(),
      }),
    }),
})

export const AlchemicalPoison = TypeAlias(import.meta.url, {
  name: "AlchemicalPoison",
  type: () =>
    Object({
      effect_types: Required({
        comment: "Effect type(s) of an alchemical poison.",
        type: Array(IncludeIdentifier(EffectType), { minItems: 1, uniqueItems: true }),
      }),
      cost_per_ingredient_level: Required({
        comment: "The cost per ingredient level in silverthalers.",
        type: Integer({ minimum: 1 }),
      }),
      laboratory: Required({
        comment: "The laboratory level needed to brew the poison.",
        type: IncludeIdentifier(LaboratoryLevel),
      }),
      brewing_difficulty: Required({
        comment: "The brewing difficulty, which represents the challenge of creating a poison.",
        type: Integer(),
      }),
      trade_secret: Required({
        comment: "AP value and prerequisites of the poison recipe’s trade secret.",
        type: IncludeIdentifier(RecipeTradeSecret),
      }),
      intoxicant: Optional({
        comment: "Additional information if the poison is an intoxicant.",
        type: IncludeIdentifier(Intoxicant),
      }),
      translations: NestedLocaleMap(
        Required,
        "AlchemicalPoisonTranslation",
        Object({
          typical_ingredients: Required({
            comment: "A list of typical ingredients.",
            type: Array(String({ minLength: 1 }), { minItems: 1, uniqueItems: true }),
          }),
          brewing_process_prerequisites: Optional({
            comment: "Prerequsites for the brewing process, if any.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
        })
      ),
    }),
})

export const MineralPoison = TypeAlias(import.meta.url, {
  name: "MineralPoison",
  type: () =>
    Object({
      level: Required({
        comment: "The poison’s level.",
        type: Integer({ minimum: 1, maximum: 6 }),
      }),
    }),
})

export const PlantPoison = TypeAlias(import.meta.url, {
  name: "PlantPoison",
  type: () =>
    Object({
      effect_types: Required({
        comment: "Effect type(s) of a plant poison.",
        type: Array(IncludeIdentifier(EffectType), { minItems: 1, uniqueItems: true }),
      }),
      level: Required({
        comment: "The poison’s level.",
        type: Integer({ minimum: 1, maximum: 6 }),
      }),
      intoxicant: Optional({
        comment: "Additional information if the poison is an intoxicant.",
        type: IncludeIdentifier(Intoxicant),
      }),
    }),
})

export const DemonicPoison = TypeAlias(import.meta.url, {
  name: "DemonicPoison",
  type: () =>
    Object({
      level: Required({
        comment: "The poison’s level.",
        type: IncludeIdentifier(DemonicPoisonLevel),
      }),
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
    }),
})

const DemonicPoisonLevel = Enum(import.meta.url, {
  name: "DemonicPoisonLevel",
  values: () => ({
    QualityLevel: EnumCase({ type: IncludeIdentifier(QualityLevelDemonicPoisonLevel) }),
    Constant: EnumCase({ type: IncludeIdentifier(ConstantDemonicPoisonLevel) }),
  }),
})

export const QualityLevelDemonicPoisonLevel = TypeAlias(import.meta.url, {
  name: "QualityLevelDemonicPoisonLevel",
  type: () =>
    Object({
      source: Required({
        type: IncludeIdentifier(QualityLevelDemonicPoisonLevelSource),
      }),
    }),
})

const QualityLevelDemonicPoisonLevelSource = Enum(import.meta.url, {
  name: "QualityLevelDemonicPoisonLevelSource",
  values: () => ({
    Spellwork: EnumCase({ type: null }),
  }),
})

export const ConstantDemonicPoisonLevel = TypeAlias(import.meta.url, {
  name: "ConstantDemonicPoisonLevel",
  type: () =>
    Object({
      value: Required({
        comment: "The poison’s level.",
        type: Integer({ minimum: 1, maximum: 6 }),
      }),
    }),
})

export const Intoxicant = TypeAlias(import.meta.url, {
  name: "Intoxicant",
  type: () =>
    Object({
      legality: Required({
        comment:
          "Whether the use of the intoxicant is legal or not, usually from the perspective of most middle-Aventurian an northern-Aventurian nations.",
        type: IncludeIdentifier(IntoxicantLegality),
      }),
      addiction: Optional({
        comment:
          "The chance of getting addicted after an ingestion in addition to the maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.",
        type: IncludeIdentifier(IntoxicantAddiction),
      }),
      translations: NestedLocaleMap(
        Required,
        "IntoxicantTranslation",
        Object({
          ingestion: Required({
            comment: "How to ingest the intoxicant.",
            type: String({ minLength: 1 }),
          }),
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
          special: Optional({
            comment: "Special information about the intoxicant.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
        })
      ),
    }),
})

export const IntoxicantLegality = TypeAlias(import.meta.url, {
  name: "IntoxicantLegality",
  comment:
    "Whether the use of the intoxicant is legal or not, usually from the perspective of most middle-Aventurian an northern-Aventurian nations.",
  type: () =>
    Object({
      is_legal: Required({
        type: BooleanType(),
      }),
    }),
})

export const IntoxicantAddiction = TypeAlias(import.meta.url, {
  name: "IntoxicantAddiction",
  comment:
    "The chance of getting addicted after an ingestion in addition to the maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.",
  type: () =>
    Object({
      chance: Required({
        comment: "The chance of getting addicted after an ingestion in percent.",
        type: Integer({ minimum: 0, maximum: 100, multipleOf: 5 }),
      }),
      interval: Required({
        comment:
          "The maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.",
        type: IncludeIdentifier(IntoxicantAddictionInterval),
      }),
    }),
})

const IntoxicantAddictionInterval = Enum(import.meta.url, {
  name: "IntoxicantAddictionInterval",
  comment:
    "The maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms.",
  values: () => ({
    Constant: EnumCase({ type: IncludeIdentifier(ConstantIntoxicantAddictionInterval) }),
    DiceBased: EnumCase({ type: IncludeIdentifier(DiceBasedIntoxicantAddictionInterval) }),
  }),
})

export const ConstantIntoxicantAddictionInterval = TypeAlias(import.meta.url, {
  name: "ConstantIntoxicantAddictionInterval",
  type: () =>
    Object({
      value: Required({
        comment: "The interval value in days.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

export const DiceBasedIntoxicantAddictionInterval = TypeAlias(import.meta.url, {
  name: "DiceBasedIntoxicantAddictionInterval",
  type: () =>
    Object({
      dice: Required({
        comment: "The dice that define the interval value in days.",
        type: IncludeIdentifier(Dice),
      }),
    }),
})
