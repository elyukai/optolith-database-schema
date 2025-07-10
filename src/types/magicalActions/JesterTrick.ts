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
import { CheckResultBasedDuration, DurationUnit } from "../_ActivatableSkillDuration.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { AffectedTargetCategories } from "../_ActivatableSkillTargetCategory.js"
import { PropertyIdentifier } from "../_Identifier.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const JesterTrick = Entity(import.meta.url, {
  name: "JesterTrick",
  namePlural: "JesterTricks",
  type: () =>
    Object({
      check: Required({
        comment: "Lists the linked three attributes used to make a skill check.",
        type: IncludeIdentifier(SkillCheck),
      }),
      check_penalty: Optional({
        comment: "In some cases, the target's Spirit or Toughness is applied as a penalty.",
        type: IncludeIdentifier(SkillCheckPenalty),
      }),
      parameters: Required({
        comment: "Measurable parameters of a jester trick.",
        type: IncludeIdentifier(JesterTrickPerformanceParameters),
      }),
      target: Required({
        comment: "The target category – the kind of creature or object – the skill affects.",
        type: IncludeIdentifier(AffectedTargetCategories),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier(),
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the skill.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "JesterTrickTranslation",
        Object({
          name: Required({
            comment: "The jester trick’s name.",
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

export const JesterTrickPerformanceParameters = TypeAlias(import.meta.url, {
  name: "JesterTrickPerformanceParameters",
  comment: "Measurable parameters of a jester trick.",
  type: () =>
    Object({
      casting_time: Required({
        comment: "The casting time.",
        type: IncludeIdentifier(JesterTrickCastingTime),
      }),
      cost: Required({
        comment: "The AE cost.",
        type: IncludeIdentifier(JesterTrickCost),
      }),
      range: Required({
        comment: "The range.",
        type: IncludeIdentifier(JesterTrickRange),
      }),
      duration: Required({
        comment: "The duration.",
        type: IncludeIdentifier(JesterTrickDuration),
      }),
    }),
})

export const JesterTrickCastingTime = TypeAlias(import.meta.url, {
  name: "JesterTrickCastingTime",
  type: () =>
    Object({
      value: Required({
        comment: "The casting time in actions.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

export const JesterTrickCost = TypeAlias(import.meta.url, {
  name: "JesterTrickCost",
  type: () =>
    Object({
      value: Required({
        comment: "The AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const JesterTrickRange = Enum(import.meta.url, {
  name: "JesterTrickRange",
  values: () => ({
    Touch: EnumCase({ type: null }),
    Self: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(FixedJesterTrickRange) }),
  }),
})

export const FixedJesterTrickRange = TypeAlias(import.meta.url, {
  name: "FixedJesterTrickRange",
  type: () =>
    Object({
      value: Required({
        comment: "The range in steps/m.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

export const JesterTrickDuration = Enum(import.meta.url, {
  name: "JesterTrickDuration",
  values: () => ({
    Immediate: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(FixedJesterTrickDuration) }),
    CheckResultBased: EnumCase({ type: IncludeIdentifier(CheckResultBasedDuration) }),
  }),
})

const FixedJesterTrickDuration = TypeAlias(import.meta.url, {
  name: "FixedJesterTrickDuration",
  type: () =>
    Object({
      value: Required({
        comment: "The (unitless) duration.",
        type: Integer({ minimum: 2 }),
      }),
      unit: Required({
        comment: "The duration unit.",
        type: IncludeIdentifier(DurationUnit),
      }),
    }),
})
