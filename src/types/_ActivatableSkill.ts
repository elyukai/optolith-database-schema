/**
 * @title Activatable Skill
 */

import { FastCastingTime, SlowCastingTime } from "./_ActivatableSkillCastingTime.js"
import { OneTimeCost, SustainedCost } from "./_ActivatableSkillCost.js"
import { DurationForOneTime, DurationForSustained } from "./_ActivatableSkillDuration.js"
import { Range } from "./_ActivatableSkillRange.js"

export type OneTimePerformanceParameters<CastingTime> = {
  casting_time: CastingTime
  cost: OneTimeCost
  range: Range
  duration: DurationForOneTime
}

export type SustainedPerformanceParameters<CastingTime> = {
  casting_time: CastingTime
  cost: SustainedCost
  range: Range
  duration?: DurationForSustained
}

export type FastPerformanceParameters =
  | {
    tag: "OneTime"
    one_time: FastOneTimePerformanceParameters
  }
  | {
    tag: "Sustained"
    sustained: FastSustainedPerformanceParameters
  }

export type FastOneTimePerformanceParameters = OneTimePerformanceParameters<FastCastingTime>

export type FastSustainedPerformanceParameters = SustainedPerformanceParameters<FastCastingTime>

export type SlowPerformanceParameters =
  | {
    tag: "OneTime"
    one_time: SlowOneTimePerformanceParameters
  }
  | {
    tag: "Sustained"
    sustained: SlowSustainedPerformanceParameters
  }

export type SlowOneTimePerformanceParameters = OneTimePerformanceParameters<SlowCastingTime>

export type SlowSustainedPerformanceParameters = SustainedPerformanceParameters<SlowCastingTime>
