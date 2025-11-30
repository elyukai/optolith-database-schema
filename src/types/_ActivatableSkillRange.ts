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
import { SkillModificationLevelIdentifier } from "./_Identifier.js"
import { ResponsiveTextOptional, ResponsiveTextReplace } from "./_ResponsiveText.js"
import { NestedTranslationMap } from "./Locale.js"

export const Range = TypeAlias(import.meta.url, {
  name: "Range",
  type: () =>
    Object({
      value: Required({
        comment: "The range value.",
        type: IncludeIdentifier(RangeValue),
      }),
      translations: NestedTranslationMap(
        Optional,
        "Range",
        Object(
          {
            note: Optional({
              comment:
                "A note, appended to the generated string in parenthesis. If the generated is modified using `replacement`, the note is appended to the modifier string.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
            replacement: Optional({
              comment:
                "A replacement string. If `note` is provided, it is appended to the replaced string.",
              type: IncludeIdentifier(ResponsiveTextReplace),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const RangeValue = Enum(import.meta.url, {
  name: "RangeValue",
  values: () => ({
    Modifiable: EnumCase({ type: IncludeIdentifier(ModifiableRange) }),
    Sight: EnumCase({ type: null }),
    Self: EnumCase({ type: null }),
    Global: EnumCase({ comment: "German: *dereumfassend*", type: null }),
    Touch: EnumCase({ type: null }),
    Fixed: EnumCase({ type: IncludeIdentifier(FixedRange) }),
    CheckResultBased: EnumCase({ type: IncludeIdentifier(CheckResultBasedRange) }),
  }),
})

const ModifiableRange = TypeAlias(import.meta.url, {
  name: "ModifiableRange",
  type: () =>
    Object({
      is_maximum: Optional({
        comment: "If `true`, the range is a maximum range.",
        type: Boolean(),
      }),
      initial_modification_level: Required({
        comment: "The initial skill modification identifier/level.",
        type: SkillModificationLevelIdentifier(),
      }),
      is_radius: Optional({
        comment: "If `true`, the range is a radius.",
        type: Boolean(),
      }),
    }),
})

export const FixedRange = TypeAlias(import.meta.url, {
  name: "FixedRange",
  type: () =>
    Object({
      is_maximum: Optional({
        comment: "If `true`, the range is a maximum range.",
        type: Boolean(),
      }),
      value: Required({
        comment: "The (unitless) range value.",
        type: Integer({ minimum: 1 }),
      }),
      unit: Required({
        comment: "The unit of the `value`.",
        type: IncludeIdentifier(RangeUnit),
      }),
      is_radius: Optional({
        comment: "If `true`, the range is a radius.",
        type: Boolean(),
      }),
    }),
})

const CheckResultBasedRange = TypeAlias(import.meta.url, {
  name: "CheckResultBasedRange",
  type: () =>
    Object({
      is_maximum: Optional({
        comment: "If the range is the maximum range.",
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
        type: IncludeIdentifier(RangeUnit),
      }),
      is_radius: Optional({
        comment: "If `true`, the range is a radius.",
        type: Boolean(),
      }),
    }),
})

const RangeUnit = Enum(import.meta.url, {
  name: "RangeUnit",
  values: () => ({
    Steps: EnumCase({ type: null }),
    Miles: EnumCase({ type: null }),
  }),
})
