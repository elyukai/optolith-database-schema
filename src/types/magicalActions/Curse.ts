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
import { IndefiniteOneTimeCost } from "../_ActivatableSkillCost.js"
import { CheckResultBasedDuration, DurationUnitValue } from "../_ActivatableSkillDuration.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { PropertyIdentifier } from "../_Identifier.js"
import { ResponsiveText, ResponsiveTextOptional } from "../_ResponsiveText.js"
import { SkillCheck, SkillCheckPenalty } from "../_SkillCheck.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const Curse = Entity(import.meta.url, {
  name: "Curse",
  namePlural: "Curses",
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
        comment: "Measurable parameters of a curse.",
        type: IncludeIdentifier(CursePerformanceParameters),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier,
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "CurseTranslation",
        Object({
          name: Required({
            comment: "The curse’s name.",
            type: String({ minLength: 1 }),
          }),
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
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const CursePerformanceParameters = TypeAlias(import.meta.url, {
  name: "CursePerformanceParameters",
  comment: "Measurable parameters of a curse.",
  type: () =>
    Object({
      cost: Required({
        comment: "The AE cost.",
        type: IncludeIdentifier(CurseCost),
      }),
      duration: Required({
        comment: "The duration.",
        type: IncludeIdentifier(CurseDuration),
      }),
    }),
})

const CurseCost = Enum(import.meta.url, {
  name: "CurseCost",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedCurseCost) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteOneTimeCost) }),
  }),
})

const FixedCurseCost = TypeAlias(import.meta.url, {
  name: "FixedCurseCost",
  type: () =>
    Object({
      value: Required({
        comment: "The (temporary) AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "FixedCurseCostTranslation",
        Object(
          {
            per: Optional({
              comment:
                "The cost have to be per a specific countable entity, e.g. `8 KP per person`.",
              type: IncludeIdentifier(ResponsiveText),
            }),
            note: Optional({
              comment: "A note, appended to the generated string in parenthesis.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

const CurseDuration = Enum(import.meta.url, {
  name: "CurseDuration",
  values: () => ({
    Immediate: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(DurationUnitValue) }),
    CheckResultBased: EnumCase({ type: IncludeIdentifier(CheckResultBasedDuration) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteCurseDuration) }),
  }),
})

const IndefiniteCurseDuration = TypeAlias(import.meta.url, {
  name: "IndefiniteCurseDuration",
  type: () =>
    Object({
      maximum: Optional({
        comment: "Specified if the duration has a maximum time span.",
        type: IncludeIdentifier(MaximumIndefiniteCurseDuration),
      }),
      translations: NestedLocaleMap(
        Required,
        "IndefiniteCurseDurationTranslation",
        Object({
          description: Required({
            comment: "A description of the duration.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        })
      ),
    }),
})

const MaximumIndefiniteCurseDuration = Enum(import.meta.url, {
  name: "MaximumIndefiniteCurseDuration",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(DurationUnitValue) }),
    CheckResultBased: EnumCase({ type: IncludeIdentifier(CheckResultBasedDuration) }),
  }),
})
