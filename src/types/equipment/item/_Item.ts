import * as DB from "tsondb/schema/dsl"
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
  DB.Entity(sourceUrl, {
    name: singularName,
    namePlural: pluralName ?? `${singularName}s`,
    type: () =>
      DB.Object({
        cost: DB.Required({
          comment: "The cost in silverthalers.",
          type: DB.IncludeIdentifier(Cost),
        }),
        weight: DB.Required({
          comment: "The weight in kg.",
          type: DB.IncludeIdentifier(Weight),
        }),
        complexity: DB.Optional({
          comment: "The complexity of crafting the item.",
          type: DB.IncludeIdentifier(Complexity),
        }),
        structure_points: DB.Required({
          comment:
            "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
          type: DB.IncludeIdentifier(StructurePoints),
        }),
        [COMBAT_USE]: DB.Optional({
          comment:
            "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
          type: DB.IncludeIdentifier(CombatUse),
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
    DB.Required,
    singularName,
    DB.Object({
      name: DB.Required({
        comment: "The item’s name.",
        type: DB.String({ minLength: 1 }),
      }),
      secondary_name: DB.Optional({
        comment: "An auxiliary name or label of the item, if available.",
        type: DB.String({ minLength: 1 }),
      }),
      note: DB.Optional({
        comment: "Note text.",
        type: DB.String({ minLength: 1, isMarkdown: true }),
      }),
      rules: DB.Optional({
        comment: "Special rules text.",
        type: DB.String({ minLength: 1, isMarkdown: true }),
      }),
      errata: DB.Optional({
        type: DB.IncludeIdentifier(Errata),
      }),
    }),
  )

export const CombatUse = DB.Enum(import.meta.url, {
  name: "CombatUse",
  comment:
    "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
  values: () => ({
    Weapon: DB.EnumCase({ type: DB.IncludeIdentifier(ImprovisedWeapon) }),
    Armor: DB.EnumCase({ type: DB.IncludeIdentifier(SecondaryArmor) }),
  }),
})

export const StructurePoints = DB.TypeAlias(import.meta.url, {
  name: "StructurePoints",
  comment:
    "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
  type: () => DB.Array(DB.IncludeIdentifier(StructurePointsComponent), { minItems: 1 }),
})

const StructurePointsComponent = DB.TypeAlias(import.meta.url, {
  name: "StructurePointsComponent",
  type: () =>
    DB.Object({
      points: DB.Required({
        comment: "The structure points.",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
})

export const Cost = DB.Enum(import.meta.url, {
  name: "Cost",
  comment: "The cost in silverthalers.",
  values: () => ({
    Free: DB.EnumCase({ type: null }),
    Various: DB.EnumCase({ type: null }),
    Invaluable: DB.EnumCase({ type: null }),
    Fixed: DB.EnumCase({ type: DB.IncludeIdentifier(FixedCost) }),
    Range: DB.EnumCase({ type: DB.IncludeIdentifier(CostRange) }),
  }),
})

const wrap_in_text = DB.Required({
  comment: "The cost get wrapped by this text using a placeholder in the text.",
  type: DB.String({ minLength: 1, pattern: /\{0\}/ }),
})

export const FixedCost = DB.TypeAlias(import.meta.url, {
  name: "FixedCost",
  type: () =>
    DB.Object({
      value: DB.Required({
        comment: "The cost in silverthalers.",
        type: DB.Float({ minimum: { value: 0, isExclusive: true } }),
      }),
      translations: NestedTranslationMap(
        DB.Optional,
        "FixedCost",
        DB.Object({
          wrap_in_text,
        }),
      ),
    }),
})

const CostRange = DB.TypeAlias(import.meta.url, {
  name: "CostRange",
  type: () =>
    DB.Object({
      from: DB.Required({
        comment: "The lower bound of the cost in silverthalers.",
        type: DB.Float({ minimum: { value: 0, isExclusive: true } }),
      }),
      to: DB.Required({
        comment: "The upper bound of the cost in silverthalers.",
        type: DB.Float({ minimum: { value: 0, isExclusive: true } }),
      }),
      translations: NestedTranslationMap(
        DB.Optional,
        "CostRange",
        DB.Object({
          wrap_in_text,
        }),
      ),
    }),
})

export const Weight = DB.TypeAlias(import.meta.url, {
  name: "Weight",
  comment: "The weight in kg.",
  type: () => DB.Float({ minimum: { value: 0, isExclusive: true }, fractionDigits: 3 }),
})

export const Complexity = DB.Enum(import.meta.url, {
  name: "Complexity",
  comment: "The complexity of crafting the item.",
  values: () => ({
    Primitive: DB.EnumCase({ type: null }),
    Simple: DB.EnumCase({ type: null }),
    Complex: DB.EnumCase({ type: DB.IncludeIdentifier(ComplexComplexity) }),
  }),
})

export const ComplexComplexity = DB.TypeAlias(import.meta.url, {
  name: "ComplexComplexity",
  type: () =>
    DB.Object({
      ap_value: DB.Required({
        comment: "The AP value for the trade secret.",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
})

export const RestrictedTo = DB.TypeAlias(import.meta.url, {
  name: "RestrictedTo",
  comment:
    "If the item is in any case restricted to a subset of characters. The differenciating aspect may be tradition, race, culture, or a profession. Each element must be applicable to a character. ",
  type: () =>
    DB.Object(
      {
        races: DB.Optional({
          comment:
            "The item is restricted to one of a list of races. If only one race is allowed, the list may only have a single element.",
          type: DB.IncludeIdentifier(RestrictedToRaces),
        }),
        cultures: DB.Optional({
          comment:
            "The item is restricted to one of a list of cultures. If only one culture is allowed, the list may only have a single element.",
          type: DB.IncludeIdentifier(RestrictedToCultures),
        }),
        professions: DB.Optional({
          comment:
            "The item is restricted to one of a list of professions. If only one profession is allowed, the list may only have a single element.",
          type: DB.IncludeIdentifier(RestrictedToProfessions),
        }),
        magicalTraditions: DB.Optional({
          comment:
            "The item is restricted to one of a list of magical traditions. If only one magical tradition is allowed, the list may only have a single element.",
          type: DB.IncludeIdentifier(RestrictedToMagicalTraditions),
        }),
        blessedTraditions: DB.Optional({
          comment:
            "The item is restricted to one of a list of blessed traditions. If only one blessed tradition is allowed, the list may only have a single element.",
          type: DB.IncludeIdentifier(RestrictedToBlessedTraditions),
        }),
      },
      { minProperties: 1 },
    ),
})

export const RestrictedToRaces = DB.TypeAlias(import.meta.url, {
  name: "RestrictedToRaces",
  comment:
    "The item is restricted to one of a list of races. If only one race is allowed, the list may only have a single element.",
  type: () =>
    DB.Object({
      scope: DB.Required({
        comment:
          "The item is restricted to one of a list of races. If only one race is allowed, the list may only have a single element.",
        type: DB.Array(RaceIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

export const RestrictedToCultures = DB.TypeAlias(import.meta.url, {
  name: "RestrictedToCultures",
  comment:
    "The item is restricted to one of a list of cultures. If only one culture is allowed, the list may only have a single element.",
  type: () =>
    DB.Object({
      scope: DB.Required({
        comment:
          "The item is restricted to one of a list of cultures. If only one culture is allowed, the list may only have a single element.",
        type: DB.Array(CultureIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

export const RestrictedToProfessions = DB.TypeAlias(import.meta.url, {
  name: "RestrictedToProfessions",
  comment:
    "The item is restricted to one of a list of professions. If only one profession is allowed, the list may only have a single element.",
  type: () =>
    DB.Object({
      scope: DB.Required({
        comment:
          "The item is restricted to one of a list of professions. If only one profession is allowed, the list may only have a single element.",
        type: DB.Array(ProfessionIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

export const RestrictedToMagicalTraditions = DB.TypeAlias(import.meta.url, {
  name: "RestrictedToMagicalTraditions",
  comment:
    "The item is restricted to one of a list of magical traditions. If only one magical tradition is allowed, the list may only have a single element.",
  type: () =>
    DB.Object({
      scope: DB.Required({
        comment:
          "The item is restricted to one of a list of magical traditions. If only one magical tradition is allowed, the list may only have a single element.",
        type: DB.Array(MagicalTraditionIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

export const RestrictedToBlessedTraditions = DB.TypeAlias(import.meta.url, {
  name: "RestrictedToBlessedTraditions",
  comment:
    "The item is restricted to one of a list of blessed traditions. If only one blessed tradition is allowed, the list may only have a single element. The item may also be declared as sanctified.",
  type: () =>
    DB.Object({
      scope: DB.Required({
        comment:
          "The item is restricted to one of a list of blessed traditions. If only one blessed tradition is allowed, the list may only have a single element.",
        type: DB.IncludeIdentifier(RestrictedToBlessedTraditionsScope),
      }),
      isSanctifiedBy: DB.Required({
        comment: "The item is sanctified by the applicable listed tradition.",
        type: DB.Boolean(),
      }),
    }),
})

export const RestrictedToBlessedTraditionsScope = DB.Enum(import.meta.url, {
  name: "RestrictedToBlessedTraditionsScope",
  comment:
    "The item is restricted to one of a list of blessed traditions. If only one blessed tradition is allowed, the list may only have a single element. Instead of providing an specific set of traditions, the restriction may also cover a category of blessed traditions.",
  values: () => ({
    Specific: DB.EnumCase({
      type: DB.Array(BlessedTraditionIdentifier(), { minItems: 1, uniqueItems: true }),
    }),
    Church: DB.EnumCase({ type: null }),
    Shamanistic: DB.EnumCase({ type: null }),
  }),
})
