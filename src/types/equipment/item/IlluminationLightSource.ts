import {
  Entity,
  Enum,
  EnumCase,
  Float,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { src } from "../../source/_PublicationRef.js"
import {
  CombatUse,
  Complexity,
  Cost,
  DefaultItemTranslations,
  StructurePoints,
  Weight,
} from "./_Item.js"

export const IlluminationLightSource = Entity(import.meta.url, {
  name: "IlluminationLightSource",
  namePlural: "IlluminationLightSources",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(Cost),
      }),
      weight: Required({
        comment: "The weight in kg.",
        type: IncludeIdentifier(Weight),
      }),
      complexity: Optional({
        comment: "The complexity of crafting the item.",
        type: IncludeIdentifier(Complexity),
      }),
      structure_points: Required({
        comment:
          "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
        type: IncludeIdentifier(StructurePoints),
      }),
      burning_time: Required({
        comment:
          "The burning time is the time how long the light source can be lit. After that time you have to use a new light source.",
        type: IncludeIdentifier(BurningTime),
      }),
      combat_use: Optional({
        comment:
          "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
        type: IncludeIdentifier(CombatUse),
      }),
      src,
      translations: DefaultItemTranslations("IlluminationLightSource"),
    }),
  displayName: {},
})

const BurningTime = Enum(import.meta.url, {
  name: "BurningTime",
  values: () => ({
    Unlimited: EnumCase({ type: null }),
    Limited: EnumCase({ type: IncludeIdentifier(LimitedBurningTime) }),
  }),
})

const LimitedBurningTime = TypeAlias(import.meta.url, {
  name: "LimitedBurningTime",
  type: () =>
    Object({
      value: Required({
        comment: "The (unitless) time value.",
        type: Float({ minimum: { value: 0, isExclusive: true } }),
      }),
      unit: Required({
        comment: "The time unit.",
        type: IncludeIdentifier(LimitedBurningTimeUnit),
      }),
    }),
})

const LimitedBurningTimeUnit = Enum(import.meta.url, {
  name: "LimitedBurningTimeUnit",
  values: () => ({
    Hours: EnumCase({ type: null }),
  }),
})
