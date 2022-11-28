import { CheckResultBased } from "./_ActivatableSkillCheckResultBased.js"
import { LocaleMap } from "./_LocaleMap.js"
import { ResponsiveText, ResponsiveTextReplace } from "./_ResponsiveText.js"

export type DurationForOneTime =
  | {
    tag: "Immediate"
    immediate: Immediate
  }
  | {
    tag: "Permanent"
    permanent: PermanentDuration
  }
  | {
    tag: "Fixed"
    fixed: FixedDuration
  }
  | {
    tag: "CheckResultBased"
    check_result_based: CheckResultBasedDuration
  }
  | {
    tag: "Indefinite"
    indefinite: IndefiniteDuration
  }

export type Immediate = {
  /**
   * Specified if the duration has a maximum time span.
   */
  maximum?: DurationUnitValue

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<ImmediateTranslation>
}

export type ImmediateTranslation = {
  /**
   * A replacement string.
   */
  replacement: ResponsiveTextReplace
}

export type PermanentDuration = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<PermanentDurationTranslation>
}

export type PermanentDurationTranslation = {
  /**
   * A replacement string.
   */
  replacement: ResponsiveTextReplace
}

export type FixedDuration = {
  /**
   * If the duration is the maximum duration, so it may end earlier.
   */
  is_maximum?: true

  /**
   * The (unitless) duration.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The duration unit.
   */
  unit: DurationUnit

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<FixedDurationTranslation>
}

export type FixedDurationTranslation = {
  /**
   * A replacement string.
   */
  replacement: ResponsiveTextReplace
}

/**
 * Defines the duration being based on a check result.
 */
export type CheckResultBasedDuration = CheckResultBased & {
  /**
   * If the duration is the maximum duration, so it may end earlier.
   */
  is_maximum?: true

  /**
   * The duration unit.
   */
  unit: DurationUnit

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<CheckResultBasedDurationTranslation>
}

export type CheckResultBasedDurationTranslation = {
  /**
   * A replacement string.
   */
  replacement: ResponsiveTextReplace
}

export type IndefiniteDuration = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<IndefiniteDurationTranslation>
}

export type IndefiniteDurationTranslation = {
  /**
   * A description of the duration.
   */
  description: ResponsiveText
}

export type DurationForSustained = {
  /**
   * The sustained skill can be active a maximum amount of time.
   */
  maximum: DurationUnitValue
}

export enum DurationUnit {
  Seconds = "Seconds",
  Minutes = "Minutes",
  Hours = "Hours",
  Days = "Days",
  Weeks = "Weeks",
  Months = "Months",
  Years = "Years",
  Centuries = "Centuries",
  Actions = "Actions",
  CombatRounds = "CombatRounds",
}

export type DurationUnitValue = {
  /**
   * The (unitless) duration value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The unit of the `value`.
   */
  unit: DurationUnit
}
