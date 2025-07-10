import {
  Array,
  Boolean,
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
import { ArmorIdentifier, ArmorTypeIdentifier } from "../../_Identifier.js"
import { NestedLocaleMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { Complexity, Cost, Weight } from "./_Item.js"

export const Armor = Entity(import.meta.url, {
  name: "Armor",
  namePlural: "Armor",
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
      protection: Required({
        comment: "The PRO value.",
        type: IncludeIdentifier(Protection),
      }),
      encumbrance: Required({
        comment: "The ENC value.",
        type: IncludeIdentifier(Encumbrance),
      }),
      has_additional_penalties: Required({
        comment: "Does the armor have additional penalties (MOV -1, INI -1)?",
        type: IncludeIdentifier(HasAdditionalPenalties),
      }),
      armor_type: Required({
        comment: "The armor type..",
        type: ArmorTypeIdentifier,
      }),
      hit_zone: Optional({
        comment: "Specify if armor is only available for a specific hit zone.",
        type: IncludeIdentifier(HitZone),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "ArmorTranslation",
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
            comment: "The armor advantage text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          disadvantage: Optional({
            comment: "The armor disadvantage text.",
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

export const SecondaryArmor = TypeAlias(import.meta.url, {
  name: "SecondaryArmor",
  type: () =>
    Object({
      protection: Required({
        comment: "The PRO value.",
        type: IncludeIdentifier(Protection),
      }),
      encumbrance: Required({
        comment: "The ENC value.",
        type: IncludeIdentifier(Encumbrance),
      }),
      has_additional_penalties: Required({
        comment: "Does the armor have additional penalties (MOV -1, INI -1)?",
        type: IncludeIdentifier(HasAdditionalPenalties),
      }),
      armor_type: Required({
        comment: "The armor type..",
        type: ArmorTypeIdentifier,
      }),
      hit_zone: Optional({
        comment: "Specify if armor is only available for a specific hit zone.",
        type: IncludeIdentifier(HitZone),
      }),
      translations: NestedLocaleMap(
        Optional,
        "SecondaryArmorTranslation",
        Object(
          {
            advantage: Optional({
              comment: "The armor advantage text.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
            disadvantage: Optional({
              comment: "The armor disadvantage text.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

export const Protection = TypeAlias(import.meta.url, {
  name: "Protection",
  comment: "The PRO value.",
  type: () => Integer({ minimum: 0 }),
})

export const Encumbrance = TypeAlias(import.meta.url, {
  name: "Encumbrance",
  comment: "The ENC value.",
  type: () => Integer({ minimum: 0 }),
})

export const HasAdditionalPenalties = TypeAlias(import.meta.url, {
  name: "HasAdditionalPenalties",
  comment: "Does the armor have additional penalties (MOV -1, INI -1)?",
  type: () => Boolean(),
})

const HitZone = Enum(import.meta.url, {
  name: "HitZone",
  comment: "Specify if armor is only available for a specific hit zone.",
  values: () => ({
    Head: EnumCase({ type: IncludeIdentifier(HeadHitZone) }),
    Torso: EnumCase({ type: null }),
    Arms: EnumCase({ type: null }),
    Legs: EnumCase({ type: null }),
  }),
})

const HeadHitZone = TypeAlias(import.meta.url, {
  name: "HeadHitZone",
  type: () =>
    Object({
      combination_possibilities: Optional({
        comment:
          "In some cases, multiple armors for the same hit zone can be combined. They're listed at the item that can be combined with others.",
        type: IncludeIdentifier(HeadHitZoneCombinationPossibilities),
      }),
    }),
})

const HeadHitZoneCombinationPossibilities = TypeAlias(import.meta.url, {
  name: "HeadHitZoneCombinationPossibilities",
  type: () =>
    Object({
      armors: Required({
        comment: "A list of armors that can be combined with this armor.",
        type: Array(ArmorIdentifier, { minItems: 1, uniqueItems: true }),
      }),
      protection: Optional({
        comment:
          "The PRO value that is added to the PRO value of the other armor instead of adding the normale PRO value.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})
