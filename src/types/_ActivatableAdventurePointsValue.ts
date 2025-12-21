import {
  ArrayType as Array,
  EnumDecl as Enum,
  EnumCaseDecl as EnumCase,
  GenIncludeIdentifierType as GenIncludeIdentifier,
  IncludeIdentifier,
  IntegerType as Integer,
  ObjectType as Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { ActivatableIdentifier } from "./_IdentifierGroup.js"
import { MathOperation } from "./_MathExpression.js"
import { BySizeCategory } from "./_SizeCategory.js"
import { NestedTranslationMap } from "./Locale.js"

const AdventurePointsValue = Enum(import.meta.url, {
  name: "AdventurePointsValue",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedAdventurePointsValue) }),
    ByLevel: EnumCase({ type: IncludeIdentifier(AdventurePointsValueByLevel) }),
    DerivedFromSelection: EnumCase({
      type: IncludeIdentifier(AdventurePointsDerivedFromSelection),
    }),
    DependingOnActive: EnumCase({
      type: IncludeIdentifier(AdventurePointsDependingOnActive),
    }),
    DependingOnActiveInstances: EnumCase({
      type: IncludeIdentifier(AdventurePointsDependingOnActiveInstances),
    }),
    Indefinite: EnumCase({ type: null }),
  }),
})

export const ap_value = Required({
  comment: "The adventure points value.",
  type: IncludeIdentifier(AdventurePointsValue),
})

export const ap_value_l10n = Optional({
  comment: "The adventure points value.",
  isDeprecated: true,
  type: String({ minLength: 1 }),
})

export const ap_value_append = Optional({
  comment: "The string to append to the generated AP value text.",
  isDeprecated: true,
  type: String({ minLength: 1 }),
})

export const FixedAdventurePointsValue = TypeAlias(import.meta.url, {
  name: "FixedAdventurePointsValue",
  comment:
    "A fixed adventure points value. If the entry has levels, this is the cost per level as well.",
  type: () => IncludeIdentifier(AdventurePointsSingleValue),
})

const AdventurePointsValueByLevel = TypeAlias(import.meta.url, {
  name: "AdventurePointsValueByLevel",
  comment: "An entry with levels may have different costs for each level.",
  type: () =>
    Object({
      list: Required({
        comment:
          "The list of adventure point values, where the position in the list corresponds to the level (i.e. the first value is for level I, the second value is for level II, and so on). The length of the list must match the amount of levels the special ability has.",
        type: Array(IncludeIdentifier(AdventurePointsSingleValue), { minItems: 2 }),
      }),
      additionalBySizeCategory: Optional({
        comment:
          "Values may be added to each level based on the size category of the character. Negative values mean that the AP value is lowered.",
        type: GenIncludeIdentifier(BySizeCategory, [Integer()]),
      }),
    }),
})

const AdventurePointsDerivedFromSelection = TypeAlias(import.meta.url, {
  name: "AdventurePointsDerivedFromSelection",
  comment:
    "The adventure points value is derived from the selection of the special ability. Its display value may be able to be derived from the given information for the select options. If that is not the case or the generated text would not match the original one, a replacement text can be provided.",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Optional,
        "AdventurePointsDerivedFromSelection",
        Object(
          {
            listPrepend: Optional({
              comment: "Place a string between the `for` and the grouped option names.",
              type: String({ minLength: 1 }),
            }),
            replacement: Optional({
              comment:
                "A replacement for the generated text if it would not match the original one.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const AdventurePointsSingleValue = TypeAlias(import.meta.url, {
  name: "AdventurePointsSingleValue",
  comment: "A single adventure points value.",
  type: () => Integer({ minimum: 0 }),
})

export const AdventurePointsDependingOnActive = TypeAlias(import.meta.url, {
  name: "AdventurePointsDependingOnActive",
  comment: "The adventure points cost depends on if an instance of an entry is active.",
  type: () =>
    Object({
      id: Required({
        comment: "The identifier of the entry to that decides which AP value to pick.",
        type: IncludeIdentifier(ActivatableIdentifier),
      }),
      active: Required({
        comment: "The adventure points value if an instance of the referenced entry is active.",
        type: IncludeIdentifier(AdventurePointsSingleValue),
      }),
      inactive: Required({
        comment: "The adventure points value if no instance of the referenced entry is active.",
        type: IncludeIdentifier(AdventurePointsSingleValue),
      }),
    }),
})

export const AdventurePointsDependingOnActiveInstances = Enum(import.meta.url, {
  name: "AdventurePointsDependingOnActiveInstances",
  comment:
    "The adventure points cost depends on how many instances of the entry are already active.",
  values: () => ({
    Threshold: EnumCase({
      type: IncludeIdentifier(AdventurePointsDependingOnActiveInstancesThreshold),
    }),
    Expression: EnumCase({
      type: IncludeIdentifier(AdventurePointsDependingOnActiveInstancesExpression),
    }),
  }),
})

const AdventurePointsDependingOnActiveInstancesThreshold = TypeAlias(import.meta.url, {
  name: "AdventurePointsDependingOnActiveInstancesThreshold",
  comment:
    "The adventure points cost depends on how many instances of the entry are already active.",
  type: () =>
    Object({
      normal: Required({
        comment: "The normal adventure points value.",
        type: Integer({ minimum: 0 }),
      }),
      threshold: Required({
        comment: "The number of active instances **after** which the alternative cost applies.",
        type: Integer({ minimum: 1 }),
      }),
      alternative: Required({
        comment: "The alternative adventure points value.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})

const AdventurePointsDependingOnActiveInstancesExpression = TypeAlias(import.meta.url, {
  name: "AdventurePointsDependingOnActiveInstancesExpression",
  comment:
    "The adventure points cost depends on how many instances of the entry are already active.",
  type: () =>
    GenIncludeIdentifier(MathOperation, [
      IncludeIdentifier(AdventurePointsDependingOnActiveInstancesExpressionValue),
    ]),
})

const AdventurePointsDependingOnActiveInstancesExpressionValue = Enum(import.meta.url, {
  name: "AdventurePointsDependingOnActiveInstancesExpressionValue",
  comment: `The type of value allowed in the expression to calculate the AP value.`,
  values: () => ({
    Constant: EnumCase({
      comment: "A constant integer value.",
      type: Integer(),
    }),
    Active: EnumCase({
      comment: "The number of active instances.",
      type: null,
    }),
  }),
})
