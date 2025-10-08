import {
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
import { OldParameter } from "../_ActivatableSkill.js"
import { SlowSkillNonModifiableCastingTime } from "../_ActivatableSkillCastingTime.js"
import { CostMap } from "../_ActivatableSkillCost.js"
import { CheckResultBasedDuration, DurationUnitValue } from "../_ActivatableSkillDuration.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { AffectedTargetCategories } from "../_ActivatableSkillTargetCategory.js"
import { PropertyIdentifier } from "../_Identifier.js"
import { GeodeRitualPrerequisites } from "../_Prerequisite.js"
import { SkillCheck } from "../_SkillCheck.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const GeodeRitual = Entity(import.meta.url, {
  name: "GeodeRitual",
  namePlural: "GeodeRituals",
  type: () =>
    Object({
      check: Required({
        comment: "Lists the linked three attributes used to make a skill check.",
        type: IncludeIdentifier(SkillCheck),
      }),
      parameters: Required({
        comment: "Measurable parameters of a geode ritual.",
        type: IncludeIdentifier(GeodeRitualPerformanceParameters),
      }),
      target: Required({
        comment: "The target category – the kind of creature or object – the skill affects.",
        type: IncludeIdentifier(AffectedTargetCategories),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier(),
      }),
      prerequisites: Optional({
        comment: "The prerequisites for the geode ritual.",
        type: IncludeIdentifier(GeodeRitualPrerequisites),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "GeodeRitual",
        Object({
          name: Required({
            comment: "The geode ritual’s name.",
            type: String({ minLength: 1 }),
          }),
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          casting_time: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          range: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          target: Optional({
            isDeprecated: true,
            type: String({ minLength: 1 }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const GeodeRitualPerformanceParameters = TypeAlias(import.meta.url, {
  name: "GeodeRitualPerformanceParameters",
  comment: "Measurable parameters of a geode ritual.",
  type: () =>
    Object({
      casting_time: Required({
        comment: "The casting time.",
        type: IncludeIdentifier(SlowSkillNonModifiableCastingTime),
      }),
      cost: Required({
        comment: "The AE cost.",
        type: IncludeIdentifier(GeodeRitualCost),
      }),
      range: Required({
        comment: "The range.",
        type: IncludeIdentifier(GeodeRitualRange),
      }),
      duration: Required({
        comment: "The duration.",
        type: IncludeIdentifier(GeodeRitualDuration),
      }),
    }),
})

const GeodeRitualCost = Enum(import.meta.url, {
  name: "GeodeRitualCost",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedGeodeRitualCost) }),
    Map: EnumCase({ type: IncludeIdentifier(CostMap) }),
  }),
})

const FixedGeodeRitualCost = TypeAlias(import.meta.url, {
  name: "FixedGeodeRitualCost",
  type: () =>
    Object({
      value: Required({
        comment: "The AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const GeodeRitualRange = Enum(import.meta.url, {
  name: "GeodeRitualRange",
  values: () => ({
    Self: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(FixedGeodeRitualRange) }),
  }),
})

const FixedGeodeRitualRange = TypeAlias(import.meta.url, {
  name: "FixedGeodeRitualRange",
  type: () =>
    Object({
      value: Required({
        comment: "The range in steps/m.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const GeodeRitualDuration = Enum(import.meta.url, {
  name: "GeodeRitualDuration",
  values: () => ({
    Immediate: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(DurationUnitValue) }),
    CheckResultBased: EnumCase({ type: IncludeIdentifier(CheckResultBasedDuration) }),
  }),
})
