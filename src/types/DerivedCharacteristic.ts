import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"
import { AttributeIdentifier } from "./_Identifier.ts"
import { MathOperation } from "./_MathExpression.ts"
import { DerivedCharacteristicPrerequisites } from "./_Prerequisite.js"
import { src } from "./source/_PublicationRef.js"

export const DerivedCharacteristic = DB.Entity(import.meta.url, {
  name: "DerivedCharacteristic",
  namePlural: "DerivedCharacteristics",
  type: () =>
    DB.Object({
      position: DB.Required({
        comment:
          "The position of the derived characteristic in lists. This has to be a unique value.",
        type: DB.Integer({ minimum: 0 }),
      }),
      calculation: DB.Required({
        comment: "Instructions for calculating the derived characteristic’s value.",
        type: DB.Object({
          base: DB.Required({
            comment: "The base value for the calculation.",
            type: DB.IncludeIdentifier(BaseCalculation),
          }),
        }),
      }),
      prerequisites: DB.Optional({
        type: DB.IncludeIdentifier(DerivedCharacteristicPrerequisites),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "DerivedCharacteristic",
        DB.Object({
          name: DB.Required({
            comment: "The derived characteristic’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          abbreviation: DB.Required({
            comment: "The derived characteristic’s abbreviation.",
            type: DB.String({ minLength: 1 }),
          }),
          calculation: DB.Optional({
            comment: "Possible calculation strings for the final value.",
            type: DB.IncludeIdentifier(CalculationTranslation),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  sortOrder: {
    keyPath: "position",
  },
  uniqueConstraints: [
    {
      keyPath: "position",
    },
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "abbreviation",
    },
  ],
})

const RaceBaseCalculationValue = DB.Enum(import.meta.url, {
  name: "RaceBaseCalculationValue",
  values: () => ({
    LifePoints: DB.EnumCase({ type: null }),
    Spirit: DB.EnumCase({ type: null }),
    Toughness: DB.EnumCase({ type: null }),
    Movement: DB.EnumCase({ type: null }),
  }),
})

const BaseCalculationValue = DB.Enum(import.meta.url, {
  name: "BaseCalculationValue",
  values: () => ({
    Constant: DB.EnumCase({ type: DB.Integer() }),
    Attribute: DB.EnumCase({ type: AttributeIdentifier() }),
    RaceBaseValue: DB.EnumCase({
      displayName: "Base Value from Race",
      type: DB.IncludeIdentifier(RaceBaseCalculationValue),
    }),
  }),
})

const BaseCalculation = DB.TypeAlias(import.meta.url, {
  name: "BaseCalculation",
  type: () => DB.GenIncludeIdentifier(MathOperation, [DB.IncludeIdentifier(BaseCalculationValue)]),
})

const CalculationTranslation = DB.TypeAlias(import.meta.url, {
  name: "CalculationTranslation",
  type: () =>
    DB.Object({
      default: DB.Required({
        comment: "The default calculation string.",
        type: DB.String({ minLength: 1 }),
      }),
      half_primary: DB.Optional({
        comment: "The calculation string if only half of the primary attribute is used.",
        type: DB.String({ minLength: 1 }),
      }),
      no_primary: DB.Optional({
        comment: "The calculation string if no primary attribute is used.",
        type: DB.String({ minLength: 1 }),
      }),
    }),
})
