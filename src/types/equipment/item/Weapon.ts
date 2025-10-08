import {
  Array,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  NestedEntityMap,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import {
  BlessedTraditionIdentifier,
  CultureIdentifier,
  MagicalTraditionIdentifier,
  RaceIdentifier,
} from "../../_Identifier.js"
import { CloseCombatTechnique, RangedCombatTechnique } from "../../CombatTechnique.js"
import { NestedTranslationMap } from "../../Locale.js"
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
      complexity: Optional({
        comment: "The complexity of crafting the item.",
        type: IncludeIdentifier(Complexity),
      }),
      structure_points: Optional({
        comment:
          "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
        type: IncludeIdentifier(StructurePoints),
      }),
      melee_uses: Optional({
        comment:
          "A list of stat blocks for each close combat technique this weapon can be used with.",
        type: NestedEntityMap({
          name: "MeleeWeaponUse",
          namePlural: "MeleeWeaponUses",
          secondaryEntity: CloseCombatTechnique,
          type: IncludeIdentifier(MeleeWeapon),
        }),
      }),
      ranged_uses: Optional({
        comment:
          "A list of stat blocks for each ranged combat technique this weapon can be used with.",
        type: NestedEntityMap({
          name: "RangedWeaponUse",
          namePlural: "RangedWeaponUses",
          secondaryEntity: RangedCombatTechnique,
          type: IncludeIdentifier(RangedWeapon),
        }),
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
        type: Array(MagicalTraditionIdentifier(), { minItems: 1 }),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Weapon",
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
      melee_uses: Optional({
        comment:
          "A list of stat blocks for each close combat technique this weapon can be used with.",
        type: NestedEntityMap({
          name: "ImprovisedMeleeWeaponUse",
          namePlural: "ImprovisedMeleeWeaponUses",
          secondaryEntity: CloseCombatTechnique,
          type: IncludeIdentifier(MeleeWeapon),
        }),
      }),
      ranged_uses: Optional({
        comment:
          "A list of stat blocks for each ranged combat technique this weapon can be used with.",
        type: NestedEntityMap({
          name: "ImprovisedRangedWeaponUse",
          namePlural: "ImprovisedRangedWeaponUses",
          secondaryEntity: RangedCombatTechnique,
          type: IncludeIdentifier(RangedWeapon),
        }),
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
        type: Array(MagicalTraditionIdentifier(), { minItems: 1 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "ImprovisedWeapon",
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

export const SanctifiedBy = TypeAlias(import.meta.url, {
  name: "SanctifiedBy",
  comment: "If the weapon is sanctified by a god and thus restricted to it's Blessed Ones.",
  type: () => Array(BlessedTraditionIdentifier(), { minItems: 1 }),
})

const RestrictedToCultures = Enum(import.meta.url, {
  name: "RestrictedToCultures",
  comment:
    "Define if during character creation this weapon can only be bought by characters of a specific race or culture.",
  values: () => ({
    CulturesOfRace: EnumCase({ type: RaceIdentifier() }),
    Cultures: EnumCase({ type: IncludeIdentifier(RestrictedToSpecificCultures) }),
  }),
})

const RestrictedToSpecificCultures = TypeAlias(import.meta.url, {
  name: "RestrictedToSpecificCultures",
  type: () =>
    Object({
      list: Required({
        type: Array(CultureIdentifier(), { minItems: 1 }),
      }),
    }),
})
