import {
  Enum,
  EnumCase,
  GenEnum,
  GenIncludeIdentifier,
  GenTypeAlias,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Param,
  Required,
  TypeAlias,
  TypeArgument,
} from "tsondb/schema/def"
import { SlowSkillCastingTimeUnit } from "./SkillModificationLevel.js"
import { SkillModificationLevelIdentifier } from "./_Identifier.js"

export const CastingTime = GenEnum(import.meta.url, {
  name: "CastingTime",
  parameters: [Param("NonModifiable")],
  values: NonModifiable => ({
    Modifiable: EnumCase({ type: IncludeIdentifier(ModifiableCastingRange) }),
    NonModifiable: EnumCase({ type: TypeArgument(NonModifiable) }),
  }),
})

const ModifiableCastingRange = TypeAlias(import.meta.url, {
  name: "ModifiableCastingRange",
  type: () =>
    Object({
      initial_modification_level: Required({
        comment: "The initial skill modification identifier/level.",
        type: SkillModificationLevelIdentifier,
      }),
    }),
})

export const CastingTimeIncludingLovemaking = GenTypeAlias(import.meta.url, {
  name: "CastingTimeIncludingLovemaking",
  comment: `The casting time may have two different values: One for use in “normal” time, i. e. actions, combat rounds and others, and one for use during lovemaking, which is a rule set from Aventurian Intimacy.

There must always be at least one casting time value.`,
  parameters: [Param("NonModifiable")],
  type: NonModifiable =>
    Object(
      {
        default: Optional({
          comment: "The default casting time definition.",
          type: GenIncludeIdentifier(CastingTime, [TypeArgument(NonModifiable)]),
        }),
        during_lovemaking: Optional({
          comment:
            "The casting time during lovemaking. In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking.",
          type: IncludeIdentifier(CastingTimeDuringLovemaking),
        }),
      },
      { minProperties: 1 }
    ),
})

export const CastingTimeDuringLovemaking = TypeAlias(import.meta.url, {
  name: "CastingTimeDuringLovemaking",
  comment:
    "The casting time during lovemaking. In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking.",
  type: () =>
    Object({
      value: Required({
        comment: "The (unitless) casting time value.",
        type: Integer({ minimum: 1 }),
      }),
      unit: Required({
        comment: "The unit of the `value`.",
        type: IncludeIdentifier(CastingTimeDuringLovemakingUnit),
      }),
    }),
})

const CastingTimeDuringLovemakingUnit = Enum(import.meta.url, {
  name: "CastingTimeDuringLovemakingUnit",
  values: () => ({
    SeductionActions: EnumCase({ type: null }),
    Rounds: EnumCase({ type: null }),
  }),
})

const FastSkillNonModifiableCastingTime = TypeAlias(import.meta.url, {
  name: "FastSkillNonModifiableCastingTime",
  type: () =>
    Object({
      actions: Required({
        comment: "The casting time value in actions.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

export const SlowSkillNonModifiableCastingTime = TypeAlias(import.meta.url, {
  name: "SlowSkillNonModifiableCastingTime",
  type: () =>
    Object({
      value: Required({
        comment: "The (unitless) casting time value.",
        type: Integer({ minimum: 1 }),
      }),
      unit: Required({
        comment: "The unit of the `value`.",
        type: IncludeIdentifier(SlowSkillCastingTimeUnit),
      }),
    }),
})

export const FastCastingTime = TypeAlias(import.meta.url, {
  name: "FastCastingTime",
  type: () =>
    GenIncludeIdentifier(CastingTimeIncludingLovemaking, [
      IncludeIdentifier(FastSkillNonModifiableCastingTime),
    ]),
})

export const SlowCastingTime = TypeAlias(import.meta.url, {
  name: "SlowCastingTime",
  type: () =>
    GenIncludeIdentifier(CastingTimeIncludingLovemaking, [
      IncludeIdentifier(SlowSkillNonModifiableCastingTime),
    ]),
})
