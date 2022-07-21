/**
 * @main Jewelry
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../../_NonEmptyString.js"
import { Complexity, Cost, StructurePoints, Weight } from "./_Item.js"

export type Jewelry = {
  /**
   * The cost in silverthalers.
   */
  cost: JewelryMaterialDifference<Cost>

  /**
   * The weight in kg.
   */
  weight: JewelryMaterialDifference<Weight>

  /**
   * The complexity of crafting the item.
   */
  complexity: Complexity

  /**
   * The structure points of the item. Use an array if the item consists of
   * multiple components that have individual structure points.
   */
  structure_points: StructurePoints

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<JewelryTranslation>
}

/**
 * Jewelry has different cost based on the material.
 */
export type JewelryMaterialDifference<T> = {
  bronze: T
  silver: T
  gold: T
}

export type JewelryTranslation = {
  /**
   * The name of the item.
   */
  name: NonEmptyString

  /**
   * An auxiliary name or label of the item, if available.
   */
  secondary_name?: NonEmptyString

  /**
   * Note text.
   */
  note?: NonEmptyMarkdown

  /**
   * Special rules text.
   */
  rules?: NonEmptyMarkdown

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<Jewelry>(import.meta.url)
