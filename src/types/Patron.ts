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
} from "tsondb/schema/dsl"
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

export const Patron = Entity(import.meta.url, {
  name: "Patron",
  namePlural: "Patrons",
  type: () =>
    Object({
      category: Required({
        comment: "The patron’s category.",
        type: PatronCategoryIdentifier(),
      }),
      skills: Required({
        comment: "The patron-specific skills.",
        type: Array(SkillIdentifier(), { minItems: 3, maxItems: 3 }),
      }),
      culture: Required({
        comment:
          "The patron is only available to a certain set of cultures. It may be available to all, it may be available to only specific ones (intersection) and it may be available to all except specific ones to the listed cultures (difference).",
        type: IncludeIdentifier(PatronCulture),
      }),
      powers: Optional({
        comment:
          "The patron-specific powers. Used by animist power Animal Powers I–III and should only be present on animal patrons.",
        type: IncludeIdentifier(AnimalPowers),
      }),
      ae_cost: Optional({
        comment: "The patron-specific AE cost. Used by several animist forces for animal patrons.",
        type: Integer({ minimum: 2, multipleOf: 2 }),
      }),
      improvement_cost: Optional({
        comment:
          "The patron-specific improvement cost. Used by several animist forces for animal patrons.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      common_advantages: Optional({
        comment: `The patron may grant common advantages that are taken into account during character creation.

*Source:* Geisterwald & Knochenklippen, p. 6-7`,
        type: Array(AdvantageIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
      common_disadvantages: Optional({
        comment: `The patron may grant common disadvantages that are taken into account during character creation.

*Source:* Geisterwald & Knochenklippen, p. 6-7`,
        type: Array(DisadvantageIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
      common_spellworks: Optional({
        comment: `The animist may learn spellworks common for this patron.

*Source:* Geisterwald & Knochenklippen, p. 6-7`,
        type: Array(IncludeIdentifier(SpellworkIdentifier), { minItems: 1, uniqueItems: true }),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Patron",
        Object({
          name: Required({
            comment: "The patron’s name.",
            type: String({ minLength: 1 }),
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

const PatronCulture = TypeAlias(import.meta.url, {
  name: "PatronCulture",
  comment:
    "The patron cultures the patron is or is not part of. If the patron is part of all patron cultures, the set should be empty and the operation should be difference.",
  type: () =>
    Object({
      set: Required({
        type: Array(TribeIdentifier(), { uniqueItems: true }),
      }),
      operation: Optional({
        type: IncludeIdentifier(PatronCultureOperation),
      }),
    }),
})

const PatronCultureOperation = Enum(import.meta.url, {
  name: "PatronCultureOperation",
  comment:
    "The set operation to combine the set of all patron cultures with the specified set of patron cultures: If they should intersect, the patron is only part of the given cultures. If they should differ, the patron is only part of the cultures that are not given.",
  values: () => ({
    Intersection: EnumCase({ type: null }),
    Difference: EnumCase({ type: null }),
  }),
})

const AnimalPowers = TypeAlias(import.meta.url, {
  name: "AnimalPowers",
  type: () =>
    Object({
      level1: Required({
        type: IncludeIdentifier(AnimalPowersLevel1),
      }),
      level2: Required({
        type: IncludeIdentifier(AnimalPowersLevel2),
      }),
      level3: Required({
        type: IncludeIdentifier(AnimalPowersLevel3),
      }),
    }),
})

const AdvantageAnimalPower = TypeAlias(import.meta.url, {
  name: "AdvantageAnimalPower",
  type: () =>
    Object({
      id: Required({
        comment: "The advantage’s identifier.",
        type: AdvantageIdentifier(),
      }),
      level: Optional({
        comment: "It grants a higher level of the advantage.",
        type: Integer({ minimum: 2 }),
      }),
      option: Optional({
        comment: "It grants a specific general option of the advantage.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const SkillAnimalPower = TypeAlias(import.meta.url, {
  name: "SkillAnimalPower",
  type: () =>
    Object({
      id: Required({
        comment: "The skill’s identifier.",
        type: SkillIdentifier(),
      }),
      points: Required({
        comment: "The points that gets added to the skill’s rating.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const AnimalPowerLevel1 = Enum(import.meta.url, {
  name: "AnimalPowerLevel1",
  values: () => ({
    Advantage: EnumCase({ type: IncludeIdentifier(AdvantageAnimalPower) }),
    Skill: EnumCase({ type: IncludeIdentifier(SkillAnimalPower) }),
  }),
})

const AnimalPowersLevel1 = TypeAlias(import.meta.url, {
  name: "AnimalPowersLevel1",
  type: () => Array(IncludeIdentifier(AnimalPowerLevel1), { minItems: 1, uniqueItems: true }),
})

const CombatAnimalPower = TypeAlias(import.meta.url, {
  name: "CombatAnimalPower",
  type: () =>
    Object({
      id: Required({
        comment: "The combat value.",
        type: IncludeIdentifier(CombatAnimalPowerType),
      }),
      value: Optional({
        comment: "The value that gets added to the combat value.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const CombatAnimalPowerType = Enum(import.meta.url, {
  name: "CombatAnimalPowerType",
  values: () => ({
    Attack: EnumCase({ type: null }),
    Parry: EnumCase({ type: null }),
    RangedCombat: EnumCase({ type: null }),
    Dodge: EnumCase({ type: null }),
    DamagePoints: EnumCase({ type: null }),
    Protection: EnumCase({ type: null }),
  }),
})

const AnimalPowerLevel2 = Enum(import.meta.url, {
  name: "AnimalPowerLevel2",
  values: () => ({
    Combat: EnumCase({ type: IncludeIdentifier(CombatAnimalPower) }),
  }),
})

const AnimalPowersLevel2 = TypeAlias(import.meta.url, {
  name: "AnimalPowersLevel2",
  type: () => Array(IncludeIdentifier(AnimalPowerLevel2), { minItems: 1, uniqueItems: true }),
})

const AttributeAnimalPower = TypeAlias(import.meta.url, {
  name: "AttributeAnimalPower",
  type: () =>
    Object({
      id: Required({
        comment: "The attribute’s identifier.",
        type: AttributeIdentifier(),
      }),
      value: Required({
        comment: "The value that gets added to the attribute.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const AnimalPowerLevel3 = Enum(import.meta.url, {
  name: "AnimalPowerLevel3",
  values: () => ({
    Attribute: EnumCase({ type: IncludeIdentifier(AttributeAnimalPower) }),
  }),
})

const AnimalPowersLevel3 = TypeAlias(import.meta.url, {
  name: "AnimalPowersLevel3",
  type: () => Array(IncludeIdentifier(AnimalPowerLevel3), { minItems: 1, uniqueItems: true }),
})
