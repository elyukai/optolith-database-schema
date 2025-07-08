import {
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"

export const CheckResultValue = Enum(import.meta.url, {
  name: "CheckResultValue",
  comment: "Defines the derived (unitless) value.",
  values: () => ({
    QualityLevels: EnumCase({ type: null }),
    SkillPoints: EnumCase({ type: null }),
  }),
})

const CheckResultArithmetic = Enum(import.meta.url, {
  name: "CheckResultArithmetic",
  comment: "Defines how the the `value` is set off against the check result.",
  values: () => ({
    Multiply: EnumCase({ type: null }),
    Divide: EnumCase({ type: null }),
  }),
})

export const CheckResultBasedModifier = TypeAlias(import.meta.url, {
  name: "CheckResultBasedModifier",
  type: () =>
    Object({
      arithmetic: Required({
        comment: "The arithmetic how to apply the `value` to the `base`.",
        type: IncludeIdentifier(CheckResultArithmetic),
      }),
      value: Required({
        comment: "The value that is applied to the `base` using the defined `arithmetic`.",
        type: Integer({ minimum: 2 }),
      }),
    }),
})

export const CheckResultBased = TypeAlias(import.meta.url, {
  name: "CheckResultBased",
  comment: "Defines a parameter being based on a check result.",
  type: () =>
    Object({
      base: Required({
        comment: "The base value that is derived from the check result.",
        type: IncludeIdentifier(CheckResultValue),
      }),
      modifier: Optional({
        comment: "If defined, it modifies the base value.",
        type: IncludeIdentifier(CheckResultBasedModifier),
      }),
    }),
})
