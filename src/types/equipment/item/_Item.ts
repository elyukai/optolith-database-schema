import {
  Array,
  Boolean,
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
} from "tsondb/schema/dsl"
import type { CombatUse as CombatUseType } from "../../../../gen/types.js"
import {
  BlessedTraditionIdentifier,
  CultureIdentifier,
  MagicalTraditionIdentifier,
  ProfessionIdentifier,
  RaceIdentifier,
} from "../../_Identifier.js"
import { NestedTranslationMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { checkWeaponCombatTechniqueIntegrity } from "./_Weapon.js"
import { SecondaryArmor } from "./Armor.js"
import { ImprovisedWeapon } from "./Weapon.js"

const COMBAT_USE = "combat_use"

export const DefaultItem = (sourceUrl: string, singularName: string, pluralName?: string) =>
  Entity(sourceUrl, {
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
        [COMBAT_USE]: Optional({
          comment:
            "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
          type: IncludeIdentifier(CombatUse),
        }),
        src,
        translations: DefaultItemTranslations(singularName),
      }),
    instanceDisplayName: {},
    uniqueConstraints: [
      {
        entityMapKeyPath: "translations",
        keyPathInEntityMap: "name",
      },
    ],
    customConstraints: ({ instanceContent, ...rest }) => {
      const combatUse = (
        instanceContent as {
          [K in typeof COMBAT_USE]?: CombatUseType
        }
      ).combat_use

      if (combatUse && combatUse.kind === "Weapon") {
        return checkWeaponCombatTechniqueIntegrity(
          {
            ...rest,
            instanceContent: combatUse.Weapon,
          },
          { secondary: true },
        )
      }

      return []
    },
  })

export const DefaultItemTranslations = (singularName: string) =>
  NestedTranslationMap(
    Required,
    singularName,
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
    }),
  )

export const CombatUse = Enum(import.meta.url, {
  name: "CombatUse",
  comment:
    "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
  values: () => ({
    Weapon: EnumCase({ type: IncludeIdentifier(ImprovisedWeapon) }),
    Armor: EnumCase({ type: IncludeIdentifier(SecondaryArmor) }),
  }),
})

export const StructurePoints = TypeAlias(import.meta.url, {
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

export const Cost = Enum(import.meta.url, {
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

export const FixedCost = TypeAlias(import.meta.url, {
  name: "FixedCost",
  type: () =>
    Object({
      value: Required({
        comment: "The cost in silverthalers.",
        type: Float({ minimum: { value: 0, isExclusive: true } }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "FixedCost",
        Object({
          wrap_in_text,
        }),
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
      translations: NestedTranslationMap(
        Optional,
        "CostRange",
        Object({
          wrap_in_text,
        }),
      ),
    }),
})

export const Weight = TypeAlias(import.meta.url, {
  name: "Weight",
  comment: "The weight in kg.",
  type: () => Float({ minimum: { value: 0, isExclusive: true }, fractionDigits: 3 }),
})

export const Complexity = Enum(import.meta.url, {
  name: "Complexity",
  comment: "The complexity of crafting the item.",
  values: () => ({
    Primitive: EnumCase({ type: null }),
    Simple: EnumCase({ type: null }),
    Complex: EnumCase({ type: IncludeIdentifier(ComplexComplexity) }),
  }),
})

export const ComplexComplexity = TypeAlias(import.meta.url, {
  name: "ComplexComplexity",
  type: () =>
    Object({
      ap_value: Required({
        comment: "The AP value for the trade secret.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

export const RestrictedTo = TypeAlias(import.meta.url, {
  name: "RestrictedTo",
  comment:
    "If the item is in any case restricted to a subset of characters. The differenciating aspect may be tradition, race, culture, or a profession. Each element must be applicable to a character. ",
  type: () =>
    Object(
      {
        races: Optional({
          comment:
            "The item is restricted to one of a list of races. If only one race is allowed, the list may only have a single element.",
          type: IncludeIdentifier(RestrictedToRaces),
        }),
        cultures: Optional({
          comment:
            "The item is restricted to one of a list of cultures. If only one culture is allowed, the list may only have a single element.",
          type: IncludeIdentifier(RestrictedToCultures),
        }),
        professions: Optional({
          comment:
            "The item is restricted to one of a list of professions. If only one profession is allowed, the list may only have a single element.",
          type: IncludeIdentifier(RestrictedToProfessions),
        }),
        magicalTraditions: Optional({
          comment:
            "The item is restricted to one of a list of magical traditions. If only one magical tradition is allowed, the list may only have a single element.",
          type: IncludeIdentifier(RestrictedToMagicalTraditions),
        }),
        blessedTraditions: Optional({
          comment:
            "The item is restricted to one of a list of blessed traditions. If only one blessed tradition is allowed, the list may only have a single element.",
          type: IncludeIdentifier(RestrictedToBlessedTraditions),
        }),
      },
      { minProperties: 1 },
    ),
})

export const RestrictedToRaces = TypeAlias(import.meta.url, {
  name: "RestrictedToRaces",
  comment:
    "The item is restricted to one of a list of races. If only one race is allowed, the list may only have a single element.",
  type: () =>
    Object({
      scope: Required({
        comment:
          "The item is restricted to one of a list of races. If only one race is allowed, the list may only have a single element.",
        type: Array(RaceIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

export const RestrictedToCultures = TypeAlias(import.meta.url, {
  name: "RestrictedToCultures",
  comment:
    "The item is restricted to one of a list of cultures. If only one culture is allowed, the list may only have a single element.",
  type: () =>
    Object({
      scope: Required({
        comment:
          "The item is restricted to one of a list of cultures. If only one culture is allowed, the list may only have a single element.",
        type: Array(CultureIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

export const RestrictedToProfessions = TypeAlias(import.meta.url, {
  name: "RestrictedToProfessions",
  comment:
    "The item is restricted to one of a list of professions. If only one profession is allowed, the list may only have a single element.",
  type: () =>
    Object({
      scope: Required({
        comment:
          "The item is restricted to one of a list of professions. If only one profession is allowed, the list may only have a single element.",
        type: Array(ProfessionIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

export const RestrictedToMagicalTraditions = TypeAlias(import.meta.url, {
  name: "RestrictedToMagicalTraditions",
  comment:
    "The item is restricted to one of a list of magical traditions. If only one magical tradition is allowed, the list may only have a single element.",
  type: () =>
    Object({
      scope: Required({
        comment:
          "The item is restricted to one of a list of magical traditions. If only one magical tradition is allowed, the list may only have a single element.",
        type: Array(MagicalTraditionIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

export const RestrictedToBlessedTraditions = TypeAlias(import.meta.url, {
  name: "RestrictedToBlessedTraditions",
  comment:
    "The item is restricted to one of a list of blessed traditions. If only one blessed tradition is allowed, the list may only have a single element. The item may also be declared as sanctified.",
  type: () =>
    Object({
      scope: Required({
        comment:
          "The item is restricted to one of a list of blessed traditions. If only one blessed tradition is allowed, the list may only have a single element.",
        type: IncludeIdentifier(RestrictedToBlessedTraditionsScope),
      }),
      isSanctifiedBy: Required({
        comment: "The item is sanctified by the applicable listed tradition.",
        type: Boolean(),
      }),
    }),
})

export const RestrictedToBlessedTraditionsScope = Enum(import.meta.url, {
  name: "RestrictedToBlessedTraditionsScope",
  comment:
    "The item is restricted to one of a list of blessed traditions. If only one blessed tradition is allowed, the list may only have a single element. Instead of providing an specific set of traditions, the restriction may also cover a category of blessed traditions.",
  values: () => ({
    Specific: EnumCase({
      type: Array(BlessedTraditionIdentifier(), { minItems: 1, uniqueItems: true }),
    }),
    Church: EnumCase({ type: null }),
    Shamanistic: EnumCase({ type: null }),
  }),
})
