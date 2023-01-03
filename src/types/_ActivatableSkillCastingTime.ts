import { SlowSkillCastingTimeUnit } from "./SkillModificationLevel.js"

export type CastingTime<NonModifiable extends Object> =
  | {
    tag: "Modifiable"
    modifiable: ModifiableCastingTime
  }
  | {
    tag: "NonModifiable"
    non_modifiable: NonModifiable
  }

export type ModifiableCastingTime = {
  /**
   * The initial skill modification identifier/level.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  initial_modification_level: number
}

/**
 * The casting time may have two different values: One for use in “normal” time,
 * i. e. actions, combat rounds and others, and one for use during lovemaking,
 * which is a rule set from Aventurian Intimacy.
 *
 * There must always be at least one casting time value.
 * @minProperties 1
 */
export type CastingTimeIncludingLovemaking<NonModifiable extends Object> = {
  /**
   * The default casting time definition.
   */
  default?: CastingTime<NonModifiable>

  /**
   * The casting time during lovemaking. In Aventurian Intimacy, you may only
   * use an activatable skill during lovemaking if it has a casting time used
   * during lovemaking.
   */
  during_lovemaking?: CastingTimeDuringLovemaking
}

/**
 * The casting time during lovemaking. In Aventurian Intimacy, you may only use
 * an activatable skill during lovemaking if it has a casting time used during
 * lovemaking.
 */
export type CastingTimeDuringLovemaking = {
  /**
   * The (unitless) casting time value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The unit of the `value`.
   */
  unit: CastingTimeDuringLovemakingUnit
}

export enum CastingTimeDuringLovemakingUnit {
  SeductionActions = "SeductionActions",
  Rounds = "Rounds",
}

export type FastSkillNonModifiableCastingTime = {
  /**
   * The casting time value in actions.
   * @integer
   * @minimum 1
   */
  actions: number
}

export type SlowSkillNonModifiableCastingTime = {
  /**
   * The (unitless) casting time value.
   * @integer
   * @minimum 1
   */
  value: number

  unit: SlowSkillCastingTimeUnit
}

export type FastCastingTime = CastingTimeIncludingLovemaking<FastSkillNonModifiableCastingTime>

export type SlowCastingTime = CastingTimeIncludingLovemaking<SlowSkillNonModifiableCastingTime>
