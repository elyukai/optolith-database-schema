import {
  Array,
  Entity,
  Enum,
  EnumCase,
  Float,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NestedLocaleMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"

export const DefaultItem = (singularName: string, pluralName?: string) =>
  Entity(import.meta.url, {
    name: singularName,
    namePlural: pluralName ?? `${singularName}s`,
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
        combat_use: Optional({
          comment:
            "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
          type: IncludeIdentifier(CombatUse),
        }),
        src,
        translations: NestedLocaleMap(
          Required,
          "CultureTranslation",
          Object({
            name: Required({
              comment: "The item’s name.",
              type: String({ minLength: 1 }),
            }),
            secondary_name: Optional({
              comment: "An auxiliary name or label of the item, if available.",
              type: String({ minLength: 1 }),
            }),
            note: Optional({
              comment: "Note text.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
            rules: Optional({
              comment: "Special rules text.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
            errata: Optional({
              type: IncludeIdentifier(Errata),
            }),
          })
        ),
      }),
    displayName: {},
  })

const CombatUse = Enum(import.meta.url, {
  name: "CombatUse",
  comment:
    "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
  values: () => ({
    Weapon: EnumCase({ type: IncludeIdentifier(SecondaryWeapon) }),
    Armor: EnumCase({ type: IncludeIdentifier(SecondaryArmor) }),
  }),
})

const StructurePoints = TypeAlias(import.meta.url, {
  name: "StructurePoints",
  comment:
    "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
  type: () => Array(IncludeIdentifier(StructurePointsComponent), { minItems: 1 }),
})

const StructurePointsComponent = TypeAlias(import.meta.url, {
  name: "StructurePointsComponent",
  type: () =>
    Object({
      points: Required({
        comment: "The structure points.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const Cost = Enum(import.meta.url, {
  name: "Cost",
  comment: "The cost in silverthalers.",
  values: () => ({
    Free: EnumCase({ type: null }),
    Various: EnumCase({ type: null }),
    Invaluable: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(FixedCost) }),
    Range: EnumCase({ type: IncludeIdentifier(CostRange) }),
  }),
})

const wrap_in_text = Required({
  comment: "The cost get wrapped by this text using a placeholder in the text.",
  type: String({ minLength: 1, pattern: /\{0\}/ }),
})

const FixedCost = TypeAlias(import.meta.url, {
  name: "FixedCost",
  type: () =>
    Object({
      value: Required({
        comment: "The cost in silverthalers.",
        type: Float({ minimum: { value: 0, isExclusive: true } }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "FixedCostTranslation",
        Object({
          wrap_in_text,
        })
      ),
    }),
})

const CostRange = TypeAlias(import.meta.url, {
  name: "CostRange",
  type: () =>
    Object({
      from: Required({
        comment: "The lower bound of the cost in silverthalers.",
        type: Float({ minimum: { value: 0, isExclusive: true } }),
      }),
      to: Required({
        comment: "The upper bound of the cost in silverthalers.",
        type: Float({ minimum: { value: 0, isExclusive: true } }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "CostRangeTranslation",
        Object({
          wrap_in_text,
        })
      ),
    }),
})

const Weight = TypeAlias(import.meta.url, {
  name: "Weight",
  comment: "The weight in kg.",
  type: () => Float({ minimum: { value: 0, isExclusive: true } }),
})

const Complexity = Enum(import.meta.url, {
  name: "Complexity",
  comment: "The complexity of crafting the item.",
  values: () => ({
    Primitive: EnumCase({ type: null }),
    Simple: EnumCase({ type: null }),
    Complex: EnumCase({ type: IncludeIdentifier(ComplexComplexity) }),
  }),
})

const ComplexComplexity = TypeAlias(import.meta.url, {
  name: "ComplexComplexity",
  type: () =>
    Object({
      ap_value: Required({
        comment: "The AP value for the trade secret.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})
