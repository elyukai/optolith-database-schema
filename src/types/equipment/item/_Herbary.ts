/**
 * Herbary-related types.
 */

import { PlainGeneralPrerequisites } from "../../_Prerequisite.js"

/**
 * Effect type categories of a plant or recipe.
 */
export type EffectType =
  | "Healing"
  | "Poison"
  | "PhysicalEffect"
  | "PsychicEffect"
  | "Beneficial"
  | "Defensive"
  | "Supernatural"

export type LaboratoryLevel =
  | "ArchaicLaboratory"
  | "WitchKitchen"
  | "AlchemistsLaboratory"

export type RecipeTradeSecret = {
  /**
   * The AP value of the trade secret.
   */
  ap_value: number

  /**
   * The prerequisites of the trade secret, if any.
   */
  prerequisites?: PlainGeneralPrerequisites
}
