/**
 * @main Poison
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { AlternativeName, Reduceable, Resistance } from "./_DiseasePoison.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "./_NonEmptyString.js"

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
   * The poison's level.
   * @integer
   * @minimum 1
   */
  level: PoisonLevel

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
   * @minProperties 1
   */
  translations: LocaleMap<PoisonTranslation>
}

export type PoisonLevel =
  | { tag: "QualityLevel" }
  | { tag: "Fixed"; fixed: FixedPoisonLevel }

export type FixedPoisonLevel = {
  /**
   * @integer
   * @minimum 1
   */
  value: number
}

export type PoisonApplicationType =
  | { tag: "Weapon" }
  | { tag: "Ingestion" }
  | { tag: "Inhalation" }
  | { tag: "Contact" }

export type PoisonSourceType =
  | { tag: "AnimalVenom" }
  | { tag: "AlchemicalPoison" }
  | { tag: "MineralPoison" }
  | { tag: "PlantPoison"; plant_poison: PlantPoison }

export type PlantPoison = {
  /**
   * The plant poison category and dependent additional values.
   */
  category: PlantPoisonCategory
}

export type PlantPoisonCategory =
  | { tag: "Default" }
  | { tag: "Intoxicant"; intoxicant: Intoxicant }

export type Intoxicant = {
  /**
   * Whether the use of the intoxicant is legal or not.
   */
  legality: IntoxicantLegality

  /**
   * All translations for the entry, identified by IETF language tag
   * (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<IntoxicantTranslation>
}

export type IntoxicantLegality = {
  is_legal: boolean
}

export type IntoxicantTranslation = {
  /**
   * How to ingest the intoxicant.
   */
  ingestion: NonEmptyString

  /**
   * The intoxicants side effects, if any.
   */
  side_effect?: NonEmptyMarkdown

  /**
   * What happens if the intoxicant has been overdosed.
   */
  overdose: NonEmptyMarkdown

  /**
   *
   */
  special?: NonEmptyMarkdown

  /**
   *
   */
  addiction?: NonEmptyMarkdown
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

  /**
   * When the poison takes effect.
   * @minLength 1
   */
  start: string

  /**
   * The normal and degraded poison's duration.
   */
  duration: Reduceable

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<Poison>(import.meta.url)
