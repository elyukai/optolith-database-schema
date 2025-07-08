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
} from "tsondb/schema/def"
import { name_in_library } from "../_Activatable.js"
import { OldParameter } from "../_ActivatableSkill.js"
import { CheckResultBasedDuration, DurationUnitValue } from "../_ActivatableSkillDuration.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { AffectedTargetCategories } from "../_ActivatableSkillTargetCategory.js"
import { PropertyIdentifier, TribeIdentifier } from "../_Identifier.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { AnimistPowerPrerequisites } from "../_Prerequisite.js"
import { ResponsiveTextOptional } from "../_ResponsiveText.js"
import { SkillCheck } from "../_SkillCheck.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs, src } from "../source/_PublicationRef.js"

export const AnimistPower = Entity(import.meta.url, {
  name: "AnimistPower",
  namePlural: "AnimistPowers",
  type: () =>
    Object({
      check: Required({
        comment: "Lists the linked three attributes used to make a skill check.",
        type: IncludeIdentifier(SkillCheck),
      }),
      parameters: Required({
        comment: "Measurable parameters of an animist power.",
        type: IncludeIdentifier(AnimistPowerPerformanceParameters),
      }),
      target: Required({
        comment: "The target category – the kind of creature or object – the skill affects.",
        type: IncludeIdentifier(AffectedTargetCategories),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier,
      }),
      tribe_tradition: Required({
        comment: `The tribe traditions the animist power is available to. It may be available to all or only specific tribes.

If no tribe tradition is given, the animist power is generally available to all tribe traditions.`,
        type: Array(TribeIdentifier, { uniqueItems: true }),
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the skill.",
        type: IncludeIdentifier(AnimistPowerImprovementCost),
      }),
      prerequisites: Optional({
        comment: "The prerequisites for the animist power.",
        type: IncludeIdentifier(AnimistPowerPrerequisites),
      }),
      levels: Optional({
        comment:
          "The animist power can have multiple levels. Each level is skilled separately. A previous level must be on at least 10 so that the next higher level can be activated and skilled. A higher level cannot be skilled higher than a lower level. Each level also adds an effect text to the text of the first level.",
        type: Array(IncludeIdentifier(AnimistPowerLevel), { minItems: 1 }),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "AnimistPowerTranslation",
        Object({
          name: Required({
            comment: "The animist power’s name.",
            type: String({ minLength: 1 }),
          }),
          name_in_library,
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          prerequisites: Optional({
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

const AnimistPowerLevel = TypeAlias(import.meta.url, {
  name: "AnimistPowerLevel",
  type: () =>
    Object({
      level: Required({
        comment: "The level number.",
        type: Integer({ minimum: 2 }),
      }),
      src: Optional({
        comment: "The source references, if different than the references for level 1.",
        type: IncludeIdentifier(PublicationRefs),
      }),
      translations: NestedLocaleMap(
        Required,
        "AnimistPowerLevelTranslation",
        Object({
          effect: Required({
            comment: "An additional effect description for this level.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
        })
      ),
    }),
})

const AnimistPowerPerformanceParameters = Enum(import.meta.url, {
  name: "AnimistPowerPerformanceParameters",
  comment: "Measurable parameters of an animist power.",
  values: () => ({
    OneTime: EnumCase({ type: IncludeIdentifier(OneTimeAnimistPowerPerformanceParameters) }),
    Sustained: EnumCase({ type: IncludeIdentifier(SustainedAnimistPowerPerformanceParameters) }),
  }),
})

const OneTimeAnimistPowerPerformanceParameters = TypeAlias(import.meta.url, {
  name: "OneTimeAnimistPowerPerformanceParameters",
  type: () =>
    Object({
      cost: Required({
        comment:
          "The AE cost value, either a flat value or defined dynamically by the primary patron.",
        type: IncludeIdentifier(OneTimeAnimistPowerCost),
      }),
      duration: Required({
        comment: "The duration.",
        type: IncludeIdentifier(OneTimeAnimistPowerDuration),
      }),
    }),
})

const OneTimeAnimistPowerCost = Enum(import.meta.url, {
  name: "OneTimeAnimistPowerCost",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedAnimistPowerCost) }),
    ByPrimaryPatron: EnumCase({ type: IncludeIdentifier(AnimistPowerCostByPrimaryPatron) }),
  }),
})

const FixedAnimistPowerCost = TypeAlias(import.meta.url, {
  name: "FixedAnimistPowerCost",
  type: () =>
    Object({
      value: Required({
        comment: "The (temporary) AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      interval: Optional({
        comment: "If defined, half of the AE cost `value` has to be paid each interval.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
    }),
})

const AnimistPowerCostByPrimaryPatron = TypeAlias(import.meta.url, {
  name: "AnimistPowerCostByPrimaryPatron",
  type: () =>
    Object({
      interval: Optional({
        comment: "If defined, half of the AE cost `value` has to be paid each interval.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
      translations: NestedLocaleMap(
        Optional,
        "AnimistPowerCostByPrimaryPatronTranslation",
        Object({
          note: Required({
            comment: "A note, appended to the generated string in parenthesis.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
        })
      ),
    }),
})

const OneTimeAnimistPowerDuration = Enum(import.meta.url, {
  name: "OneTimeAnimistPowerDuration",
  values: () => ({
    Immediate: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(DurationUnitValue) }),
    CheckResultBased: EnumCase({ type: IncludeIdentifier(CheckResultBasedDuration) }),
  }),
})

const SustainedAnimistPowerPerformanceParameters = TypeAlias(import.meta.url, {
  name: "SustainedAnimistPowerPerformanceParameters",
  type: () =>
    Object({
      cost: Required({
        comment:
          "The AE cost value, either a flat value or defined dynamically by the primary patron.",
        type: IncludeIdentifier(SustainedAnimistPowerCost),
      }),
    }),
})

const SustainedAnimistPowerCost = Enum(import.meta.url, {
  name: "SustainedAnimistPowerCost",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedAnimistPowerCost) }),
    ByPrimaryPatron: EnumCase({ type: IncludeIdentifier(AnimistPowerCostByPrimaryPatron) }),
  }),
})

const AnimistPowerImprovementCost = Enum(import.meta.url, {
  name: "AnimistPowerImprovementCost",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(ImprovementCost) }),
    ByPrimaryPatron: EnumCase({ type: null }),
  }),
})
