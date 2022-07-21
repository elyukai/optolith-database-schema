/**
 * @main AnimalCare
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { Cost, DefaultItemTranslation, FixedCost, Weight } from "./_Item.js"

export type AnimalCare = {
  /**
   * Values depending on whether the animal care is feed.
   */
  type: AnimalCareType

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DefaultItemTranslation>
}

/**
 * Values depending on whether the animal care is feed.
 */
export type AnimalCareType =
  | { tag: "General"; general: GeneralAnimalCare }
  | { tag: "Feed"; feed: AnimalFeed }

export type GeneralAnimalCare = {
  /**
   * The cost in silverthalers.
   */
  cost: Cost

  /**
   * The weight in kg.
   */
  weight: Weight
}

export type AnimalFeed = {
  /**
   * The cost in silverthalers.
   */
  cost: AnimalFeedCost
}

export type AnimalFeedCost =
  | { tag: "PerWeek"; per_week: FixedCost }

export const validateSchema = validateSchemaCreator<AnimalCare>(import.meta.url)
