import {
  Array,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { OldParameter } from "./_ActivatableSkill.js"
import { IndefiniteOneTimeCost } from "./_ActivatableSkillCost.js"
import {
  DurationUnitValue,
  FixedDuration,
  IndefiniteDuration,
} from "./_ActivatableSkillDuration.js"
import { AnimalTypeIdentifier, PropertyIdentifier } from "./_Identifier.js"
import { ResponsiveText, ResponsiveTextOptional } from "./_ResponsiveText.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const FamiliarsTrick = Entity(import.meta.url, {
  name: "FamiliarsTrick",
  namePlural: "FamiliarsTricks",
  type: () =>
    Object({
      animal_types: Required({
        comment: `The animal types this trick is available to. Either it is available to all or only a list of specific animal types.

If no animal types are given, the animal disease applies to all animal types.`,
        type: Array(AnimalTypeIdentifier(), { uniqueItems: true }),
      }),
      parameters: Required({
        comment: "Measurable parameters of a familiar’s trick.",
        type: IncludeIdentifier(FamiliarsTrickPerformanceParameters),
      }),
      property: Required({
        comment: "The associated property.",
        type: IncludeIdentifier(FamiliarsTrickProperty),
      }),
      ap_value: Optional({
        comment:
          "The AP value the familiar has to pay for. It may also be that a specific is known by all familiar by default. In the latter case the field is not set.",
        type: Integer({ minimum: 1 }),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "FamiliarsTrick",
        Object({
          name: Required({
            comment: "The familiar’s trick’s name.",
            type: String({ minLength: 1 }),
          }),
          effect: Required({
            comment: "The effect description.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  displayName: {},
})

const FamiliarsTrickProperty = Enum(import.meta.url, {
  name: "FamiliarsTrickProperty",
  values: () => ({
    Fixed: EnumCase({ type: PropertyIdentifier() }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteFamiliarsTrickProperty) }),
  }),
})

const IndefiniteFamiliarsTrickProperty = TypeAlias(import.meta.url, {
  name: "IndefiniteFamiliarsTrickProperty",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Optional,
        "IndefiniteFamiliarsTrickProperty",
        Object({
          description: Required({
            comment: "A description of the property.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})

const FamiliarsTrickPerformanceParameters = Enum(import.meta.url, {
  name: "FamiliarsTrickPerformanceParameters",
  comment: "Measurable parameters of a familiar’s trick.",
  values: () => ({
    OneTime: EnumCase({ type: IncludeIdentifier(FamiliarsTrickOneTimePerformanceParameters) }),
    OneTimeInterval: EnumCase({
      type: IncludeIdentifier(FamiliarsTrickOneTimeIntervalPerformanceParameters),
    }),
    Sustained: EnumCase({ type: IncludeIdentifier(FamiliarsTrickSustainedPerformanceParameters) }),
  }),
})

const FamiliarsTrickOneTimePerformanceParameters = TypeAlias(import.meta.url, {
  name: "FamiliarsTrickOneTimePerformanceParameters",
  type: () =>
    Object({
      cost: Required({
        type: IncludeIdentifier(FamiliarsTrickOneTimeCost),
      }),
      duration: Required({
        type: IncludeIdentifier(FamiliarsTrickOneTimeDuration),
      }),
    }),
})

const FamiliarsTrickOneTimeCost = Enum(import.meta.url, {
  name: "FamiliarsTrickOneTimeCost",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FamiliarsTrickFixedOneTimeCost) }),
    All: EnumCase({ type: IncludeIdentifier(FamiliarsTrickAllOneTimeCost) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteOneTimeCost) }),
  }),
})

const FamiliarsTrickFixedOneTimeCost = TypeAlias(import.meta.url, {
  name: "FamiliarsTrickFixedOneTimeCost",
  type: () =>
    Object({
      ae_value: Required({
        comment: "The AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      lp_value: Optional({
        comment: "The LP cost value.",
        type: Integer({ minimum: 1 }),
      }),
      interval: Optional({
        comment: "The interval in which you have to pay the AE cost again.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
      translations: NestedTranslationMap(
        Optional,
        "FamiliarsTrickFixedOneTimeCost",
        Object(
          {
            per: Optional({
              comment:
                "The cost have to be per a specific countable entity, e.g. `8 KP per person`.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const FamiliarsTrickAllOneTimeCost = TypeAlias(import.meta.url, {
  name: "FamiliarsTrickAllOneTimeCost",
  type: () =>
    Object({
      minimum: Optional({
        comment: "The minimum AE the familiar has to have/spend.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const FamiliarsTrickOneTimeDuration = Enum(import.meta.url, {
  name: "FamiliarsTrickOneTimeDuration",
  values: () => ({
    Immediate: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(FixedDuration) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteDuration) }),
  }),
})

const FamiliarsTrickOneTimeIntervalPerformanceParameters = TypeAlias(import.meta.url, {
  name: "FamiliarsTrickOneTimeIntervalPerformanceParameters",
  type: () =>
    Object({
      cost: Required({
        type: IncludeIdentifier(FamiliarsTrickOneTimeIntervalCost),
      }),
    }),
})

const FamiliarsTrickOneTimeIntervalCost = TypeAlias(import.meta.url, {
  name: "FamiliarsTrickOneTimeIntervalCost",
  type: () =>
    Object({
      ae_value: Required({
        comment: "The AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      lp_value: Optional({
        comment: "The LP cost value.",
        type: Integer({ minimum: 1 }),
      }),
      interval: Required({
        comment: "The duration granted/added by paying the given AE cost.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
    }),
})

const FamiliarsTrickSustainedPerformanceParameters = TypeAlias(import.meta.url, {
  name: "FamiliarsTrickSustainedPerformanceParameters",
  type: () =>
    Object({
      cost: Required({
        type: IncludeIdentifier(FamiliarsTrickSustainedCost),
      }),
    }),
})

const FamiliarsTrickSustainedCost = TypeAlias(import.meta.url, {
  name: "FamiliarsTrickSustainedCost",
  type: () =>
    Object({
      ae_value: Required({
        comment: "The AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      lp_value: Optional({
        comment: "The LP cost value.",
        type: Integer({ minimum: 1 }),
      }),
      interval: Optional({
        comment: "The interval in which you have to pay the AE cost again.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
    }),
})
