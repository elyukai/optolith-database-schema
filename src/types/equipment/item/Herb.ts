/**
 * @main Herb
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { AlternativeName } from "../../_AlternativeNames.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../../_NonEmptyString.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { EffectType, StorageLife } from "./_Herbary.js"
import { RecipeReference } from "../../_SimpleReferences.js"
import { ElixirIdentifier, HerbalAidIdentifier, HerbalPreserveIdentifier, PoisonIdentifier } from "../../_Identifier.js"

/**
 * @title Herb
 */
export type Herb = {
  /**
   * The herb's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Effect type(s) of the plant's effect(s) and usage(s).
   * @minItems 1
   * @uniqueItems
   */
  effect_types: EffectType[]

  /**
   * The herb's prevalence per landscape type.
   * @minItems 1
   * @uniqueItems
   */
  prevalence: LandscapeTypePrevalences[]

  /**
   * Modifier for plant lore check when searching for the plant.
   * @integer
   */
  search_difficulty: number

  /**
   * Modifier for plant lore check when identifying the plant.
   * @integer
   */
  identification_difficulty: number

  /**
   * Doses of plant material found with a search check per quality level.
   * @minItems 6
   * @maxItems 6
   */
  uses: number[]

  /**
   * Value per dose, in silverthalers.
   * @float
   * @minimum 0
   */
  value: number

  /**
   * Price per dose, in silverthalers.
   * @float
   * @minimum 0
   */
  cost: number

  /**
   * The recipes the herb is used in.
   * @uniqueItems
   */
  recipes?: RecipeReference[]

  /**
   * The Storage life of the raw herb.
   */
  storage_life: StorageLifeRaw

  /**
   * The preservation options and respective storage life.
   */
  preservation_methods: PreservationMethod[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<HerbTranslation>
}

/**
 * Prevalence and/or conditional prevalence(s) per landscape type.
 */
export type LandscapeTypePrevalences =
  | { tag: "PrevalenceFarNorth", prevalence_far_north: LandscapeTypePrevalence[] }
  | { tag: "PrevalenceVeld", prevalence_veld: LandscapeTypePrevalence[] }
  | { tag: "PrevalenceMarsh", prevalence_marsh: LandscapeTypePrevalence[] }
  | { tag: "PrevalenceWoods", prevalence_woods: LandscapeTypePrevalence[] }
  | { tag: "PrevalenceRainForest", prevalence_rain_forest: LandscapeTypePrevalence[] }
  | { tag: "PrevalenceMountains", prevalence_mountains: LandscapeTypePrevalence[] }
  | { tag: "PrevalenceDesert", prevalence_desert: LandscapeTypePrevalence[] }
  | { tag: "PrevalenceMaraskan", prevalence_maraskan: LandscapeTypePrevalence[] }
  | { tag: "PrevalenceAny", prevalence_any: LandscapeTypePrevalence[] }

export type LandscapeTypePrevalence = {
  /**
   * Prevalence class.
   */
  prevalence: PrevalenceClass
  /**
   * Condition or restrictions concerning the prevalence.
   */
  condition?: LocaleMap<NonEmptyString>
}

/**
 * Prevalence class from 5 (common) down to 1 (very rare)
 */
export type PrevalenceClass =
  | "Common"
  | "Occasional"
  | "NowAndThen"
  | "Rare"
  | "VeryRare"

/**
 * The Storage life of a raw herb.
 */
export type StorageLifeRaw = 
  | { tag: "Default", default: {} }
  | { tag: "Custom", custom: StorageLife }
  | { tag: "Special", special: LocaleMap<NonEmptyString> }

/**
 * The preservation options of a herb and respective storage life.
 */
export type PreservationMethod = {
  method: PreservationMethodDescription
  storage_life: StorageLife
}

/**
 * Details on the preservation method of a herb.
 */
export type PreservationMethodDescription =
| HerbalAidIdentifier
| HerbalPreserveIdentifier
| PoisonIdentifier
| ElixirIdentifier
| { tag: "Special", special: LocaleMap<NonEmptyString> }

export type HerbTranslation = {
  /**
   * The name of the herb.
   */
  name: NonEmptyString

  /**
   * A list of alternative names.
   * @minItems 1
   */
  alternative_names?: AlternativeName[]

  /**
   * The plant's description.
   */
  description?: NonEmptyString

  /**
   * The raw plant's effect(s) when touched.
   */
  effect_touch?: NonEmptyString

  /**
   * The raw plant's effect(s) when inhaled.
   */
  effect_inhale?: NonEmptyString

  /**
   * The raw plant's effect(s) when ingested.
   */
  effect_ingest?: NonEmptyString

  /**
   * Simple recipes the herb is used in.
   */
  simple_recipe?: NonEmptyString[]

  errata?: Errata
}

export const config: TypeConfig<Herb, number, "Herb"> = {
  name: "Herb",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Herb"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
