/**
 * @main Poison
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { AlternativeName } from "../../_AlternativeNames.js"
import { Dice } from "../../_Dice.js"
import { Reduceable, Resistance } from "../../_DiseasePoison.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../../_NonEmptyString.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { EffectType, LaboratoryLevel, RecipeTradeSecret } from "./_Herbary.js"

/**
 * @title Poison
 */
export type Poison = {
  /**
   * The poison's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The poison's application type(s).
   * @minItems 1
   * @uniqueItems
   */
  application_type: PoisonApplicationType[]

  /**
   * The poison's source type and dependent additional values.
   */
  source_type: PoisonSourceType

  /**
   * Use Spirit or Toughness as a modifier for the poison.
   */
  resistance: Resistance

  /**
   * When the poison takes effect.
   */
  start: PoisonStart

  /**
   * The normal and degraded poison's duration.
   */
  duration: Reduceable<PoisonDuration>

  /**
   * The raw (ingredients) value, in silverthalers.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * Price for one dose, in silverthalers.
   * @integer
   * @minimum 1
   */
  cost: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<PoisonTranslation>
}

export type PoisonApplicationType =
  | "Weapon"
  | "Ingestion"
  | "Inhalation"
  | "Contact"

export type PoisonStart =
  | { tag: "Immediate", immediate: {} }
  | { tag: "Constant", constant: ConstantPoisonTime }
  | { tag: "DiceBased", dice_based: DiceBasedPoisonTime }

export type PoisonDuration =
  | { tag: "Constant", constant: ConstantPoisonTime }
  | { tag: "DiceBased", dice_based: DiceBasedPoisonTime }
  | { tag: "Indefinite", indefinite: IndefinitePoisonTime }

export type ConstantPoisonTime = {
  value: number
  unit: PoisonTimeUnit
}

export type DiceBasedPoisonTime = {
  dice: Dice
  unit: PoisonTimeUnit
}

export type PoisonTimeUnit =
  | "CombatRounds"
  | "Minutes"
  | "Hours"
  | "Days"

export type IndefinitePoisonTime = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<IndefinitePoisonTimeTranslation>
}

export type IndefinitePoisonTimeTranslation = {
  /**
   * A description of the duration.
   */
  description: NonEmptyMarkdown
}

export type PoisonSourceType =
  | { tag: "AnimalVenom"; animal_venom: AnimalVenom }
  | { tag: "AlchemicalPoison"; alchemical_poison: AlchemicalPoison }
  | { tag: "MineralPoison"; mineral_poison: MineralPoison }
  | { tag: "PlantPoison"; plant_poison: PlantPoison }
  | { tag: "DemonicPoison"; demonic_poison: DemonicPoison }

export type AnimalVenom = {
  /**
   * The poison’s level.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  level: number

  /**
   * If `false`, the poison cannot be extracted.
   */
  is_extractable?: false
}

export type AlchemicalPoison = {
  /**
   * Effect type(s) of an alchemical poison.
   * @minItems 1
   * @uniqueItems
   */
  effect_types: EffectType[]

  /**
   * The cost per ingredient level in silverthalers.
   */
  cost_per_ingredient_level: number

  /**
   * The laboratory level needed to brew the elixir.
   */
  laboratory: LaboratoryLevel

  /**
   * The brewing difficulty, which represents the challenge of creating an
   * elixir.
   * @integer
   */
  brewing_difficulty: number

  /**
   * AP value and prerequisites of the elixir recipe’s trade secret.
   */
  trade_secret: RecipeTradeSecret

  /**
   * Additional information if the poison is an intoxicant.
   */
  intoxicant?: Intoxicant

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AlchemicalPoisonTranslation>
}

export type AlchemicalPoisonTranslation = {
  /**
   * A list of typical ingredients.
   * @minItems 1
   * @uniqueItems
   */
  typical_ingredients: NonEmptyString[]

  /**
   * Prerequsites for the brewing process, if any.
   */
  brewing_process_prerequisites?: NonEmptyMarkdown
}

export type MineralPoison = {
  /**
   * The poison’s level.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  level: number
}

export type PlantPoison = {
  /**
   * Effect type(s) of a plant poison.
   * @minItems 1
   * @uniqueItems
   */
  effect_types: EffectType[]

  /**
   * The poison’s level.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  level: number

  /**
   * Additional information if the poison is an intoxicant.
   */
  intoxicant?: Intoxicant
}

export type DemonicPoison = {
  /**
   * The poison’s level.
   */
  level: DemonicPoisonLevel

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<DemonicPoisonTranslation>
}

export type DemonicPoisonLevel =
  | { tag: "QualityLevel"; quality_level: QualityLevelDemonicPoisonLevel }
  | { tag: "Constant"; constant: ConstantDemonicPoisonLevel }

export type QualityLevelDemonicPoisonLevel = {
  source: QualityLevelDemonicPoisonLevelSource
}

export type QualityLevelDemonicPoisonLevelSource =
  | "Spellwork"


export type ConstantDemonicPoisonLevel = {
  /**
   * The poison’s level.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  value: number
}

/**
 * @minProperties 1
 */
export type DemonicPoisonTranslation = {
  /**
   * A note, if any.
   */
  note?: NonEmptyMarkdown
}

export type Intoxicant = {
  /**
   * Whether the use of the intoxicant is legal or not, usually from the
   * perspective of most middle-Aventurian an northern-Aventurian nations.
   */
  legality: IntoxicantLegality

  /**
   * The chance of getting addicted after an ingestion in addition to the
   * maximum interval at which it, while addicted, must be ingested to not
   * suffer from withdrawal symptoms.
   */
  addiction?: IntoxicantAddiction

  /**
   * All translations for the entry, identified by IETF language tag
   * (BCP47).
   */
  translations: LocaleMap<IntoxicantTranslation>
}

/**
 * Whether the use of the intoxicant is legal or not, usually from the
 * perspective of most middle-Aventurian an northern-Aventurian nations.
 */
export type IntoxicantLegality = {
  is_legal: boolean
}

/**
 * The chance of getting addicted after an ingestion in addition to the maximum
 * interval at which it, while addicted, must be ingested to not suffer from
 * withdrawal symptoms.
 */
export type IntoxicantAddiction = {
  /**
   * The chance of getting addicted after an ingestion.
   */
  chance: number

  /**
   * The maximum interval at which it, while addicted, must be ingested to not
   * suffer from withdrawal symptoms.
   */
  interval: IntoxicantAddictionInterval
}

/**
 * The maximum interval at which it, while addicted, must be ingested to not
 * suffer from withdrawal symptoms.
 */
export type IntoxicantAddictionInterval =
  | { tag: "Constant", constant: ConstantIntoxicantAddictionInterval }
  | { tag: "DiceBased", dice_based: DiceBasedIntoxicantAddictionInterval }

export type ConstantIntoxicantAddictionInterval = {
  /**
   * The interval value in days.
   */
  value: number
}

export type DiceBasedIntoxicantAddictionInterval = {
  /**
   * The dice that define the interval value in days.
   */
  dice: Dice
}

export type IntoxicantTranslation = {
  /**
   * How to ingest the intoxicant.
   */
  ingestion: NonEmptyString

  /**
   * The intoxicants side effects that always happen, no matter whether the
   * intoxicant has the default or the reduced effect.
   */
  side_effect?: NonEmptyMarkdown

  /**
   * What happens if the intoxicant has been overdosed, that is, it has been
   * ingested another time within the duration.
   */
  overdose: NonEmptyMarkdown

  /**
   * Special information about the intoxicant.
   */
  special?: NonEmptyMarkdown
}

export type PoisonTranslation = {
  /**
   * The name of the poison.
   */
  name: NonEmptyString

  /**
   * A list of alternative names.
   * @minItems 1
   */
  alternative_names?: AlternativeName[]

  /**
   * The normal and degraded poison's effects.
   */
  effect: Reduceable

  errata?: Errata
}

export const config: TypeConfig<Poison> = {
  name: "Poison",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Poison"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
