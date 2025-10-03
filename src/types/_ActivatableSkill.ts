/**
 * @title Activatable Skill
 */

import {
  Enum,
  EnumCase,
  GenIncludeIdentifier,
  GenTypeAlias,
  IncludeIdentifier,
  Object,
  Optional,
  Param,
  Required,
  String,
  TypeAlias,
  TypeArgument,
} from "tsondb/schema/def"
import { FastCastingTime, SlowCastingTime } from "./_ActivatableSkillCastingTime.js"
import { OneTimeCost, SustainedCost } from "./_ActivatableSkillCost.js"
import { DurationForOneTime, DurationForSustained } from "./_ActivatableSkillDuration.js"
import { Range } from "./_ActivatableSkillRange.js"

export const OneTimePerformanceParameters = GenTypeAlias(import.meta.url, {
  name: "OneTimePerformanceParameters",
  parameters: [Param("CastingTime")],
  type: CastingTime =>
    Object({
      casting_time: Required({
        type: TypeArgument(CastingTime),
      }),
      cost: Required({
        type: IncludeIdentifier(OneTimeCost),
      }),
      range: Required({
        type: IncludeIdentifier(Range),
      }),
      duration: Required({
        type: IncludeIdentifier(DurationForOneTime),
      }),
    }),
})

const SustainedPerformanceParameters = GenTypeAlias(import.meta.url, {
  name: "SustainedPerformanceParameters",
  parameters: [Param("CastingTime")],
  type: CastingTime =>
    Object({
      casting_time: Required({
        type: TypeArgument(CastingTime),
      }),
      cost: Required({
        type: IncludeIdentifier(SustainedCost),
      }),
      range: Required({
        type: IncludeIdentifier(Range),
      }),
      duration: Optional({
        type: IncludeIdentifier(DurationForSustained),
      }),
    }),
})

export const FastPerformanceParameters = Enum(import.meta.url, {
  name: "FastPerformanceParameters",
  values: () => ({
    OneTime: EnumCase({ type: IncludeIdentifier(FastOneTimePerformanceParameters) }),
    Sustained: EnumCase({ type: IncludeIdentifier(FastSustainedPerformanceParameters) }),
  }),
})

const FastOneTimePerformanceParameters = TypeAlias(import.meta.url, {
  name: "FastOneTimePerformanceParameters",
  type: () =>
    GenIncludeIdentifier(OneTimePerformanceParameters, [IncludeIdentifier(FastCastingTime)]),
})

const FastSustainedPerformanceParameters = TypeAlias(import.meta.url, {
  name: "FastSustainedPerformanceParameters",
  type: () =>
    GenIncludeIdentifier(SustainedPerformanceParameters, [IncludeIdentifier(FastCastingTime)]),
})

export const SlowPerformanceParameters = Enum(import.meta.url, {
  name: "SlowPerformanceParameters",
  values: () => ({
    OneTime: EnumCase({ type: IncludeIdentifier(SlowOneTimePerformanceParameters) }),
    Sustained: EnumCase({ type: IncludeIdentifier(SlowSustainedPerformanceParameters) }),
  }),
})

const SlowOneTimePerformanceParameters = TypeAlias(import.meta.url, {
  name: "SlowOneTimePerformanceParameters",
  type: () =>
    GenIncludeIdentifier(OneTimePerformanceParameters, [IncludeIdentifier(SlowCastingTime)]),
})

const SlowSustainedPerformanceParameters = TypeAlias(import.meta.url, {
  name: "SlowSustainedPerformanceParameters",
  type: () =>
    GenIncludeIdentifier(SustainedPerformanceParameters, [IncludeIdentifier(SlowCastingTime)]),
})

export const OldParameter = TypeAlias(import.meta.url, {
  name: "OldParameter",
  type: () =>
    Object({
      full: Required({
        type: String(),
      }),
      abbr: Required({
        type: String(),
      }),
    }),
})
