import {
  Boolean,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { CheckResultBasedModifier, CheckResultValue } from "./_ActivatableSkillCheckResultBased.js"
import { ResponsiveText, ResponsiveTextReplace } from "./_ResponsiveText.js"
import { NestedLocaleMap } from "./Locale.js"

export const DurationForOneTime = Enum(import.meta.url, {
  name: "DurationForOneTime",
  values: () => ({
    Immediate: EnumCase({ type: IncludeIdentifier(Immediate) }),
    Permanent: EnumCase({ type: IncludeIdentifier(PermanentDuration) }),
    Fixed: EnumCase({ type: IncludeIdentifier(FixedDuration) }),
    CheckResultBased: EnumCase({ type: IncludeIdentifier(CheckResultBasedDuration) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteDuration) }),
  }),
})

const Immediate = TypeAlias(import.meta.url, {
  name: "Immediate",
  type: () =>
    Object({
      maximum: Optional({
        comment: "Specified if the duration has a maximum time span.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
      translations: NestedLocaleMap(
        Optional,
        "ImmediateTranslation",
        Object({
          replacement: Optional({
            comment: "A replacement string.",
            type: IncludeIdentifier(ResponsiveTextReplace),
          }),
        })
      ),
    }),
})

const PermanentDuration = TypeAlias(import.meta.url, {
  name: "PermanentDuration",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Optional,
        "PermanentDurationTranslation",
        Object({
          replacement: Optional({
            comment: "A replacement string.",
            type: IncludeIdentifier(ResponsiveTextReplace),
          }),
        })
      ),
    }),
})

export const FixedDuration = TypeAlias(import.meta.url, {
  name: "FixedDuration",
  type: () =>
    Object({
      is_maximum: Optional({
        comment: "If the duration is the maximum duration, so it may end earlier.",
        type: Boolean(),
      }),
      value: Required({
        comment: "The (unitless) duration.",
        type: Integer({ minimum: 1 }),
      }),
      unit: Required({
        comment: "The duration unit.",
        type: IncludeIdentifier(DurationUnit),
      }),
      translations: NestedLocaleMap(
        Optional,
        "FixedDurationTranslation",
        Object(
          {
            replacement: Optional({
              comment: "A replacement string.",
              type: IncludeIdentifier(ResponsiveTextReplace),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

export const CheckResultBasedDuration = TypeAlias(import.meta.url, {
  name: "CheckResultBasedDuration",
  type: () =>
    Object({
      is_maximum: Optional({
        comment: "If the duration is the maximum duration, so it may end earlier.",
        type: Boolean(),
      }),
      base: Required({
        comment: "The base value that is derived from the check result.",
        type: IncludeIdentifier(CheckResultValue),
      }),
      modifier: Optional({
        comment: "If defined, it modifies the base value.",
        type: IncludeIdentifier(CheckResultBasedModifier),
      }),
      unit: Required({
        comment: "The duration unit.",
        type: IncludeIdentifier(DurationUnit),
      }),
      translations: NestedLocaleMap(
        Optional,
        "CheckResultBasedDurationTranslation",
        Object({
          replacement: Optional({
            comment: "A replacement string.",
            type: IncludeIdentifier(ResponsiveTextReplace),
          }),
        })
      ),
    }),
})

export const IndefiniteDuration = TypeAlias(import.meta.url, {
  name: "IndefiniteDuration",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "IndefiniteDurationTranslation",
        Object({
          description: Required({
            comment: "A description of the duration.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        })
      ),
    }),
})

export const DurationForSustained = TypeAlias(import.meta.url, {
  name: "DurationForSustained",
  type: () =>
    Object({
      maximum: Required({
        comment: "The sustained skill can be active a maximum amount of time.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
    }),
})

export const DurationUnit = Enum(import.meta.url, {
  name: "DurationUnit",
  values: () => ({
    Seconds: EnumCase({ type: null }),
    Minutes: EnumCase({ type: null }),
    Hours: EnumCase({ type: null }),
    Days: EnumCase({ type: null }),
    Weeks: EnumCase({ type: null }),
    Months: EnumCase({ type: null }),
    Years: EnumCase({ type: null }),
    Centuries: EnumCase({ type: null }),
    Actions: EnumCase({ type: null }),
    CombatRounds: EnumCase({ type: null }),
  }),
})

export const DurationUnitValue = TypeAlias(import.meta.url, {
  name: "DurationUnitValue",
  type: () =>
    Object({
      value: Required({
        comment: "The (unitless) duration value.",
        type: Integer({ minimum: 1 }),
      }),
      unit: Required({
        comment: "The unit of the `value`.",
        type: IncludeIdentifier(DurationUnit),
      }),
    }),
})
