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
import { EffectType } from "./_Herbary.js"
import { RecipeReference } from "../../_SimpleReferences.js"

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
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * Price per dose, in silverthalers.
   * @integer
   * @minimum 1
   */
  cost: number

  /**
   * The recipes the herb is used in.
   * @uniqueItems
   */
  recipes: RecipeReference[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<HerbTranslation>
}

export type LandscapeTypePrevalences =
  | { tag: "PrevalenceFarNorth", prevalence_far_north: LandscapeTypePrevalence[] }
  | { tag: "PevalenceVeld", prevalence_veld: LandscapeTypePrevalence[] }
  | { tag: "PevalenceMarsh", prevalence_marsh: LandscapeTypePrevalence[] }
  | { tag: "PevalenceWoods", prevalence_woods: LandscapeTypePrevalence[] }
  | { tag: "PevalenceRainForest", prevalence_rain_forest: LandscapeTypePrevalence[] }
  | { tag: "PevalenceMountains", prevalence_mountains: LandscapeTypePrevalence[] }
  | { tag: "PevalenceDesert", prevalence_desert: LandscapeTypePrevalence[] }
  | { tag: "PevalenceMaraskan", prevalence_maraskan: LandscapeTypePrevalence[] }

export type LandscapeTypePrevalence = {
  /**
   * Simple or conditional prevalence(s) in a certain landscape.
   * @minItems 1
   */
  prevalence: PrevalenceClass
  condition?: NonEmptyString
}

export type PrevalenceClass =
  | "Common"
  | "Occasional"
  | "NowAndThen"
  | "Rare"
  | "VeryRare"

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
   * Additional remarks on the prevalence per landscape type of the herb.
   */
  prevalence_remarks?: NonEmptyString

  /**
   * Description of the plant's regional prevalence.
   */
  prevalence_regions: NonEmptyString

  /**
   * Description of traditonal use of and legends about the herb.
   */
  legend_tradition: NonEmptyString

  errata?: Errata
}

export const config: TypeConfig<Herb, number, "Herb"> = {
  name: "Herb",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Herb"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
