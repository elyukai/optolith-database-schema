import {
  Array,
  Boolean,
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { AttributeIdentifier } from "./_Identifier.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { NestedLocaleMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const CloseCombatTechnique = Entity(import.meta.url, {
  name: "CloseCombatTechnique",
  namePlural: "CloseCombatTechniques",
  type: () =>
    Object({
      special: Required({
        comment:
          "Special rules for the combat technique that apply to all weapons in this category.",
        type: IncludeIdentifier(CloseCombatTechniqueSpecialRules),
      }),
      primary_attribute: Required({
        comment: "The primary attribute(s).",
        type: Array(AttributeIdentifier(), { minItems: 1, maxItems: 2, uniqueItems: true }),
      }),
      breaking_point_rating: Required({
        comment: "The *Breaking Point Rating* of the respective combat technique.",
        type: Integer({ minimum: 1 }),
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the combat technique.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "CloseCombatTechniqueTranslation",
        Object({
          name: Required({
            comment: "The combat technique’s name.",
            type: String({ minLength: 1 }),
          }),
          special: Optional({
            comment: "Additional rules for the combat technique, if applicable.",
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

const CloseCombatTechniqueSpecialRules = TypeAlias(import.meta.url, {
  name: "CloseCombatTechniqueSpecialRules",
  comment: "Special rules for the combat technique that apply to all weapons in this category.",
  type: () =>
    Object({
      can_parry: Required({
        comment: "Is parrying possible with this combat technique?",
        type: Boolean(),
      }),
      has_damage_threshold: Required({ type: Boolean() }),
      has_reach: Required({ type: Boolean() }),
      has_length: Required({ type: Boolean() }),
      has_shield_size: Required({ type: Boolean() }),
    }),
})

export const RangedCombatTechnique = Entity(import.meta.url, {
  name: "RangedCombatTechnique",
  namePlural: "RangedCombatTechniques",
  type: () =>
    Object({
      special: Required({
        comment:
          "Special rules for the combat technique that apply to all weapons in this category.",
        type: IncludeIdentifier(RangedCombatTechniqueSpecialRules),
      }),
      primary_attribute: Required({
        comment: "The primary attribute(s).",
        type: Array(AttributeIdentifier(), { minItems: 1, maxItems: 2, uniqueItems: true }),
      }),
      breaking_point_rating: Required({
        comment: "The *Breaking Point Rating* of the respective combat technique.",
        type: Integer({ minimum: 1 }),
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the combat technique.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "RangedCombatTechniqueTranslation",
        Object({
          name: Required({
            comment: "The combat technique’s name.",
            type: String({ minLength: 1 }),
          }),
          special: Optional({
            comment: "Additional rules for the combat technique, if applicable.",
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

const RangedCombatTechniqueSpecialRules = TypeAlias(import.meta.url, {
  name: "RangedCombatTechniqueSpecialRules",
  comment: "Special rules for the combat technique that apply to all weapons in this category.",
  type: () =>
    Object({
      has_ammunition: Required({ type: Boolean() }),
    }),
})
