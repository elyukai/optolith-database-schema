/**
 * Herbary-related types.
 */

import { PlainGeneralPrerequisites } from "../../_Prerequisite.js"

/**
 * Effect type categories of a plant or recipe.
 */
export enum EffectType {
  Healing = "Healing",
  Poison = "Poison",
  PhysicalEffect = "PhysicalEffect",
  PsychicEffect = "PsychicEffect",
  Beneficial = "Beneficial",
  Defensive = "Defensive",
  Supernatural = "Supernatural",
}

export enum LaboratoryLevel {
  ArchaicLaboratory = "ArchaicLaboratory",
  WitchKitchen = "WitchKitchen",
  AlchemistsLaboratory = "AlchemistsLaboratory",
}

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
