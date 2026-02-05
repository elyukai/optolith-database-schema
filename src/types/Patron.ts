import * as DB from "tsondb/schema/dsl"
import {
  AdvantageIdentifier,
  AttributeIdentifier,
  DisadvantageIdentifier,
  PatronCategoryIdentifier,
  SkillIdentifier,
  TribeIdentifier,
} from "./_Identifier.js"
import { SpellworkIdentifier } from "./_IdentifierGroup.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { NestedTranslationMap } from "./Locale.js"
import { src } from "./source/_PublicationRef.js"

export const Patron = DB.Entity(import.meta.url, {
  name: "Patron",
  namePlural: "Patrons",
  type: () =>
    DB.Object({
      category: DB.Required({
        comment: "The patron’s category.",
        type: PatronCategoryIdentifier(),
      }),
      skills: DB.Required({
        comment: "The patron-specific skills.",
        type: DB.Array(SkillIdentifier(), { minItems: 3, maxItems: 3 }),
      }),
      culture: DB.Required({
        comment:
          "The patron is only available to a certain set of cultures. It may be available to all, it may be available to only specific ones (intersection) and it may be available to all except specific ones to the listed cultures (difference).",
        type: DB.IncludeIdentifier(PatronCulture),
      }),
      powers: DB.Optional({
        comment:
          "The patron-specific powers. Used by animist power Animal Powers I–III and should only be present on animal patrons.",
        type: DB.IncludeIdentifier(AnimalPowers),
      }),
      ae_cost: DB.Optional({
        comment: "The patron-specific AE cost. Used by several animist forces for animal patrons.",
        type: DB.Integer({ minimum: 2, multipleOf: 2 }),
      }),
      improvement_cost: DB.Optional({
        comment:
          "The patron-specific improvement cost. Used by several animist forces for animal patrons.",
        type: DB.IncludeIdentifier(ImprovementCost),
      }),
      common_advantages: DB.Optional({
        comment: `The patron may grant common advantages that are taken into account during character creation.

*Source:* Geisterwald & Knochenklippen, p. 6-7`,
        type: DB.Array(AdvantageIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
      common_disadvantages: DB.Optional({
        comment: `The patron may grant common disadvantages that are taken into account during character creation.

*Source:* Geisterwald & Knochenklippen, p. 6-7`,
        type: DB.Array(DisadvantageIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
      common_spellworks: DB.Optional({
        comment: `The animist may learn spellworks common for this patron.

*Source:* Geisterwald & Knochenklippen, p. 6-7`,
        type: DB.Array(DB.IncludeIdentifier(SpellworkIdentifier), {
          minItems: 1,
          uniqueItems: true,
        }),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "Patron",
        DB.Object({
          name: DB.Required({
            comment: "The patron’s name.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})

const PatronCulture = DB.TypeAlias(import.meta.url, {
  name: "PatronCulture",
  comment:
    "The patron cultures the patron is or is not part of. If the patron is part of all patron cultures, the set should be empty and the operation should be difference.",
  type: () =>
    DB.Object({
      set: DB.Required({
        type: DB.Array(TribeIdentifier(), { uniqueItems: true }),
      }),
      operation: DB.Optional({
        type: DB.IncludeIdentifier(PatronCultureOperation),
      }),
    }),
})

const PatronCultureOperation = DB.Enum(import.meta.url, {
  name: "PatronCultureOperation",
  comment:
    "The set operation to combine the set of all patron cultures with the specified set of patron cultures: If they should intersect, the patron is only part of the given cultures. If they should differ, the patron is only part of the cultures that are not given.",
  values: () => ({
    Intersection: DB.EnumCase({ type: null }),
    Difference: DB.EnumCase({ type: null }),
  }),
})

const AnimalPowers = DB.TypeAlias(import.meta.url, {
  name: "AnimalPowers",
  type: () =>
    DB.Object({
      level1: DB.Required({
        type: DB.IncludeIdentifier(AnimalPowersLevel1),
      }),
      level2: DB.Required({
        type: DB.IncludeIdentifier(AnimalPowersLevel2),
      }),
      level3: DB.Required({
        type: DB.IncludeIdentifier(AnimalPowersLevel3),
      }),
    }),
})

const AdvantageAnimalPower = DB.TypeAlias(import.meta.url, {
  name: "AdvantageAnimalPower",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The advantage’s identifier.",
        type: AdvantageIdentifier(),
      }),
      level: DB.Optional({
        comment: "It grants a higher level of the advantage.",
        type: DB.Integer({ minimum: 2 }),
      }),
      option: DB.Optional({
        comment: "It grants a specific general option of the advantage.",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
})

const SkillAnimalPower = DB.TypeAlias(import.meta.url, {
  name: "SkillAnimalPower",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The skill’s identifier.",
        type: SkillIdentifier(),
      }),
      points: DB.Required({
        comment: "The points that gets added to the skill’s rating.",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
})

const AnimalPowerLevel1 = DB.Enum(import.meta.url, {
  name: "AnimalPowerLevel1",
  values: () => ({
    Advantage: DB.EnumCase({ type: DB.IncludeIdentifier(AdvantageAnimalPower) }),
    Skill: DB.EnumCase({ type: DB.IncludeIdentifier(SkillAnimalPower) }),
  }),
})

const AnimalPowersLevel1 = DB.TypeAlias(import.meta.url, {
  name: "AnimalPowersLevel1",
  type: () => DB.Array(DB.IncludeIdentifier(AnimalPowerLevel1), { minItems: 1, uniqueItems: true }),
})

const CombatAnimalPower = DB.TypeAlias(import.meta.url, {
  name: "CombatAnimalPower",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The combat value.",
        type: DB.IncludeIdentifier(CombatAnimalPowerType),
      }),
      value: DB.Optional({
        comment: "The value that gets added to the combat value.",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
})

const CombatAnimalPowerType = DB.Enum(import.meta.url, {
  name: "CombatAnimalPowerType",
  values: () => ({
    Attack: DB.EnumCase({ type: null }),
    Parry: DB.EnumCase({ type: null }),
    RangedCombat: DB.EnumCase({ type: null }),
    Dodge: DB.EnumCase({ type: null }),
    DamagePoints: DB.EnumCase({ type: null }),
    Protection: DB.EnumCase({ type: null }),
  }),
})

const AnimalPowerLevel2 = DB.Enum(import.meta.url, {
  name: "AnimalPowerLevel2",
  values: () => ({
    Combat: DB.EnumCase({ type: DB.IncludeIdentifier(CombatAnimalPower) }),
  }),
})

const AnimalPowersLevel2 = DB.TypeAlias(import.meta.url, {
  name: "AnimalPowersLevel2",
  type: () => DB.Array(DB.IncludeIdentifier(AnimalPowerLevel2), { minItems: 1, uniqueItems: true }),
})

const AttributeAnimalPower = DB.TypeAlias(import.meta.url, {
  name: "AttributeAnimalPower",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The attribute’s identifier.",
        type: AttributeIdentifier(),
      }),
      value: DB.Required({
        comment: "The value that gets added to the attribute.",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
})

const AnimalPowerLevel3 = DB.Enum(import.meta.url, {
  name: "AnimalPowerLevel3",
  values: () => ({
    Attribute: DB.EnumCase({ type: DB.IncludeIdentifier(AttributeAnimalPower) }),
  }),
})

const AnimalPowersLevel3 = DB.TypeAlias(import.meta.url, {
  name: "AnimalPowersLevel3",
  type: () => DB.Array(DB.IncludeIdentifier(AnimalPowerLevel3), { minItems: 1, uniqueItems: true }),
})
