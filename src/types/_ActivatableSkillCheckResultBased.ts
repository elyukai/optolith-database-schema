/**
 * Defines the derived (unitless) value.
 */
export type CheckResultValue =
  | { tag: "QualityLevels" }
  | { tag: "SkillPoints" }

/**
 * Defines how the the `value` is set off against the check result.
 */
export type CheckResultArithmetic =
  | { tag: "Multiply" }
  | { tag: "Divide" }

export type CheckResultBasedModifier = {
  /**
   * The arithmetic how to apply the `value` to the `base`.
   */
  arithmetic: CheckResultArithmetic

  /**
   * The value that is applied to the `base` using the defined `arithmetic`.
   * @integer
   * @minimum 2
   */
  value: number
}

/**
 * Defines a parameter being based on a check result.
 */
export type CheckResultBased = {
  /**
   * The base value that is derived from the check result.
   */
  base: CheckResultValue

  /**
   * If defined, it modifies the base value.
   */
  modifier?: CheckResultBasedModifier
}
