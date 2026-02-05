import {
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Required,
  TypeAlias,
} from "tsondb/schema/dsl"
import { src } from "../../source/_PublicationRef.js"
import { Cost, DefaultItemTranslations, FixedCost, Weight } from "./_Item.js"

export const AnimalCare = Entity(import.meta.url, {
  name: "AnimalCare",
  namePlural: "AnimalCare",
  type: () =>
    Object({
      type: Required({
        comment: "Values depending on whether the animal care is feed.",
        type: IncludeIdentifier(AnimalCareType),
      }),
      src,
      translations: DefaultItemTranslations("AnimalCare"),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})

const AnimalCareType = Enum(import.meta.url, {
  name: "AnimalCareType",
  comment: "Values depending on whether the animal care is feed.",
  values: () => ({
    General: EnumCase({ type: IncludeIdentifier(GeneralAnimalCare) }),
    Feed: EnumCase({ type: IncludeIdentifier(AnimalFeed) }),
  }),
})

const GeneralAnimalCare = TypeAlias(import.meta.url, {
  name: "GeneralAnimalCare",
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
    }),
})

const AnimalFeed = TypeAlias(import.meta.url, {
  name: "AnimalFeed",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(AnimalFeedCost),
      }),
    }),
})

const AnimalFeedCost = Enum(import.meta.url, {
  name: "AnimalFeedCost",
  values: () => ({
    PerWeek: EnumCase({ type: IncludeIdentifier(FixedCost) }),
  }),
})
