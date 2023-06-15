import { CheckResultBased } from "./_ActivatableSkillCheckResultBased.js"
import { LocaleMap } from "./_LocaleMap.js"
import { ResponsiveTextOptional, ResponsiveTextReplace } from "./_ResponsiveText.js"

export type Range = {
  value: RangeValue

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<RangeTranslation>
}

export type RangeValue =
  | { tag: "Modifiable"; modifiable: ModifiableRange }
  | { tag: "Sight"; sight: {} }
  | { tag: "Self"; self: {} }
  /**
   * German: *dereumfassend*
   */
  | { tag: "Global"; global: {} }
  | { tag: "Touch"; touch: {} }
  | { tag: "Fixed"; fixed: FixedRange }
  | { tag: "CheckResultBased"; check_result_based: CheckResultBasedRange }

export type ModifiableRange = {
  /**
   * If `true`, the range is a maximum range.
   */
  is_maximum?: true

  /**
   * The initial skill modification identifier/level.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  initial_modification_level: number

  /**
   * If `true`, the range is a radius.
   */
  is_radius?: true
}

export type FixedRange = {
  /**
   * If `true`, the range is a maximum range.
   */
  is_maximum?: true

  /**
   * The (unitless) range value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The unit of the `value`.
   */
  unit: RangeUnit

  /**
   * If `true`, the range is a radius.
   */
  is_radius?: true
}

/**
 * Defines the range being based on a check result.
 */
export type CheckResultBasedRange = CheckResultBased & {
  /**
   * If the range is the maximum range.
   */
  is_maximum?: true

  /**
   * The duration unit.
   */
  unit: RangeUnit

  /**
   * If `true`, the range is a radius.
   */
  is_radius?: true
}

/**
 * @minProperties 1
 */
export type RangeTranslation = {
  /**
   * A note, appended to the generated string in parenthesis. If the
   * generated is modified using `replacement`, the note is appended to
   * the modifier string.
   */
  note?: ResponsiveTextOptional

  /**
   * A replacement string. If `note` is provided, it is appended to the
   * replaced string.
   */
  replacement?: ResponsiveTextReplace
}

export type RangeUnit =
  | "Steps"
  | "Miles"
