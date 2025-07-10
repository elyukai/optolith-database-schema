import {
  Array,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  ReferenceIdentifier,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import {
  BlessedTraditionIdentifier,
  CultureIdentifier,
  MagicalTraditionIdentifier,
  RaceIdentifier,
  WeaponUseIdentifier,
} from "../../_Identifier.js"
import { NestedLocaleMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { Complexity, Cost, StructurePoints, Weight } from "./_Item.js"
import { MeleeWeapon } from "./_MeleeWeapon.js"
import { RangedWeapon } from "./_RangedWeapon.js"

export const Weapon = Entity(import.meta.url, {
  name: "Weapon",
  namePlural: "Weapons",
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
      complexity: Required({
        comment: "The complexity of crafting the item.",
        type: IncludeIdentifier(Complexity),
      }),
      structure_points: Optional({
        comment:
          "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
        type: IncludeIdentifier(StructurePoints),
      }),
      uses: Required({
        comment: "A list of stat blocks for each combat technique this weapon can be used with.",
        type: Array(ReferenceIdentifier(WeaponUse), { minItems: 1 }),
      }),
      sanctified_by: Optional({
        comment: "If the weapon is sanctified by a god and thus restricted to it's Blessed Ones.",
        type: IncludeIdentifier(SanctifiedBy),
      }),
      restricted_to_cultures: Optional({
        comment:
          "Define if during character creation this weapon can only be bought by characters of a specific race or culture.",
        type: IncludeIdentifier(RestrictedToCultures),
      }),
      restricted_to_traditions: Optional({
        comment:
          "Define if during character creation this weapon can only be bought by characters of specific magical or blessed traditions.",
        type: Array(MagicalTraditionIdentifier, { minItems: 1 }),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "WeaponTranslation",
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
          advantage: Optional({
            comment: "The weapon advantage text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          disadvantage: Optional({
            comment: "The weapon disadvantage text.",
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

export const ImprovisedWeapon = TypeAlias(import.meta.url, {
  name: "ImprovisedWeapon",
  type: () =>
    Object({
      uses: Required({
        comment: "A list of stat blocks for each combat technique this weapon can be used with.",
        type: Array(WeaponUseIdentifier, { minItems: 1 }),
      }),
      sanctified_by: Optional({
        comment: "If the weapon is sanctified by a god and thus restricted to it's Blessed Ones.",
        type: IncludeIdentifier(SanctifiedBy),
      }),
      restricted_to_cultures: Optional({
        comment:
          "Define if during character creation this weapon can only be bought by characters of a specific race or culture.",
        type: IncludeIdentifier(RestrictedToCultures),
      }),
      restricted_to_traditions: Optional({
        comment:
          "Define if during character creation this weapon can only be bought by characters of specific magical or blessed traditions.",
        type: Array(MagicalTraditionIdentifier, { minItems: 1 }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "ImprovisedWeaponTranslation",
        Object(
          {
            advantage: Optional({
              comment: "The weapon advantage text.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
            disadvantage: Optional({
              comment: "The weapon disadvantage text.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

export const WeaponUse = Entity(import.meta.url, {
  name: "WeaponUse",
  namePlural: "WeaponUses",
  type: () =>
    Object({
      values: Required({
        type: IncludeIdentifier(WeaponUseValues),
      }),
    }),
})

const WeaponUseValues = Enum(import.meta.url, {
  name: "WeaponUseValues",
  comment:
    "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
  values: () => ({
    Melee: EnumCase({ type: IncludeIdentifier(MeleeWeapon) }),
    Ranged: EnumCase({ type: IncludeIdentifier(RangedWeapon) }),
  }),
})

export const SanctifiedBy = TypeAlias(import.meta.url, {
  name: "SanctifiedBy",
  comment: "If the weapon is sanctified by a god and thus restricted to it's Blessed Ones.",
  type: () => Array(BlessedTraditionIdentifier, { minItems: 1 }),
})

const RestrictedToCultures = Enum(import.meta.url, {
  name: "RestrictedToCultures",
  comment:
    "Define if during character creation this weapon can only be bought by characters of a specific race or culture.",
  values: () => ({
    CulturesOfRace: EnumCase({ type: RaceIdentifier }),
    Cultures: EnumCase({ type: IncludeIdentifier(RestrictedToSpecificCultures) }),
  }),
})

const RestrictedToSpecificCultures = TypeAlias(import.meta.url, {
  name: "RestrictedToSpecificCultures",
  type: () =>
    Object({
      list: Required({
        type: Array(CultureIdentifier, { minItems: 1 }),
      }),
    }),
})
