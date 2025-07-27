/**
 * @title Activatable Skill
 */

import FileDB

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
  }

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
  }

@ModelEnum
public enum FastPerformanceParameters {
    case OneTime(IncludeIdentifier(FastOneTimePerformanceParameters))
    case Sustained(IncludeIdentifier(FastSustainedPerformanceParameters))
}

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

@ModelEnum
public enum SlowPerformanceParameters {
    case OneTime(IncludeIdentifier(SlowOneTimePerformanceParameters))
    case Sustained(IncludeIdentifier(SlowSustainedPerformanceParameters))
}

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

@Embedded
public struct OldParameter {
      full: Required({
        type: String(),
      }),
      abbr: Required({
        type: String(),
      }),
  }
