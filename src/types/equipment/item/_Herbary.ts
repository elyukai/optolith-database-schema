/**
 * Herbary-related types.
 */

import {
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/dsl"
import { PlainGeneralPrerequisites } from "../../_Prerequisite.js"

export const EffectType = Enum(import.meta.url, {
  name: "EffectType",
  comment: "Effect type categories of a plant or recipe.",
  values: () => ({
    Healing: EnumCase({ type: null }),
    Poison: EnumCase({ type: null }),
    PhysicalEffect: EnumCase({ type: null }),
    PsychicEffect: EnumCase({ type: null }),
    Beneficial: EnumCase({ type: null }),
    Defensive: EnumCase({ type: null }),
    Supernatural: EnumCase({ type: null }),
  }),
})

export const LaboratoryLevel = Enum(import.meta.url, {
  name: "LaboratoryLevel",
  values: () => ({
    ArchaicLaboratory: EnumCase({ type: null }),
    WitchKitchen: EnumCase({ type: null }),
    AlchemistsLaboratory: EnumCase({ type: null }),
  }),
})

export const RecipeTradeSecret = TypeAlias(import.meta.url, {
  name: "RecipeTradeSecret",
  type: () =>
    Object({
      ap_value: Required({
        comment: "The AP value of the trade secret.",
        type: Integer({ minimum: 0 }),
      }),
      prerequisites: Optional({
        comment: "The prerequisites of the trade secret, if any.",
        type: IncludeIdentifier(PlainGeneralPrerequisites),
      }),
    }),
})
