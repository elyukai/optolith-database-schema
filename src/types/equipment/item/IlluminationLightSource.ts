/**
 * @main IlluminationLightSource
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { CombatUse, Complexity, Cost, DefaultItemTranslation, StructurePoints, Weight } from "./_Item.js"

export type IlluminationLightSource = {
  /**
   * The cost in silverthalers.
   */
  cost: Cost

  /**
   * The weight in kg.
   */
  weight: Weight

  /**
   * The complexity of crafting the item.
   */
  complexity?: Complexity

  /**
   * The structure points of the item. Use an array if the item consists of
   * multiple components that have individual structure points.
   */
  structure_points: StructurePoints

  /**
   * The burning time is the time how long the light source can be lit. After
   * that time you have to use a new light source.
   */
  burning_time: BurningTime

  /**
   * The item can also be used either as an improvised weapon or as an armor,
   * although this is not the primary use case of the item.
   */
  combat_use?: CombatUse

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DefaultItemTranslation>
}

export type BurningTime =
  | { tag: "Unlimited"; unlimited: {} }
  | { tag: "Limited"; limited: LimitedBurningTime }

export type LimitedBurningTime = {
  /**
   * The (unitless) time value.
   * @exclusiveMinimum 0
   */
  value: number

  /**
   * The time unit.
   */
  unit: LimitedBurningTimeUnit
}

export enum LimitedBurningTimeUnit {
  Hours = "Hours",
}

export const validateSchema = validateSchemaCreator<IlluminationLightSource>(import.meta.url)
