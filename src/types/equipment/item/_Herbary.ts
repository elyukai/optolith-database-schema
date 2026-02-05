/**
 * Herbary-related types.
 */

import * as DB from "tsondb/schema/dsl"
import { PlainGeneralPrerequisites } from "../../_Prerequisite.js"

export const EffectType = DB.Enum(import.meta.url, {
  name: "EffectType",
  comment: "Effect type categories of a plant or recipe.",
  values: () => ({
    Healing: DB.EnumCase({ type: null }),
    Poison: DB.EnumCase({ type: null }),
    PhysicalEffect: DB.EnumCase({ type: null }),
    PsychicEffect: DB.EnumCase({ type: null }),
    Beneficial: DB.EnumCase({ type: null }),
    Defensive: DB.EnumCase({ type: null }),
    Supernatural: DB.EnumCase({ type: null }),
  }),
})

export const LaboratoryLevel = DB.Enum(import.meta.url, {
  name: "LaboratoryLevel",
  values: () => ({
    ArchaicLaboratory: DB.EnumCase({ type: null }),
    WitchKitchen: DB.EnumCase({ type: null }),
    AlchemistsLaboratory: DB.EnumCase({ type: null }),
  }),
})

export const RecipeTradeSecret = DB.TypeAlias(import.meta.url, {
  name: "RecipeTradeSecret",
  type: () =>
    DB.Object({
      ap_value: DB.Required({
        comment: "The AP value of the trade secret.",
        type: DB.Integer({ minimum: 0 }),
      }),
      prerequisites: DB.Optional({
        comment: "The prerequisites of the trade secret, if any.",
        type: DB.IncludeIdentifier(PlainGeneralPrerequisites),
      }),
    }),
})
