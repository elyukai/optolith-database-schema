/**
 * @title Activatable Skill
 */

/**
 *
 */
export namespace Effect {
  /**
   * The effect description may be either a plain text or a text that is divided
   * by a list of effects for each quality level. It may also be a list for each
   * two quality levels.
   */
  export type T =
    | {
      tag: "Plain"

      /**
       * The effect description.
       * @markdown
       * @minLength 1
       */
      text: string
    }
    | {
      tag: "ForEachQualityLevel"

      /**
       * The effect description before the list of effects for each quality
       * level.
       * @markdown
       * @minLength 1
       */
      text_before: string

      /**
       * The list of effects for each quality level.
       */
      quality_levels: [QualityLevel1, QualityLevel2, QualityLevel3, QualityLevel4, QualityLevel5, QualityLevel6]

      /**
       * The effect description after the list of effects for each quality
       * level.
       * @markdown
       * @minLength 1
       */
      text_after?: string
    }
    | {
      tag: "ForEachTwoQualityLevels"

      /**
       * The effect description before the list of effects for each quality
       * level.
       * @markdown
       * @minLength 1
       */
      text_before: string

      /**
       * The list of effects for each two quality levels.
       */
      quality_levels: [QualityLevel1To2, QualityLevel3To4, QualityLevel5To6]

      /**
       * The effect description after the list of effects for each quality
       * level.
       * @markdown
       * @minLength 1
       */
      text_after?: string
    }

  /**
   * Effect at QL 1.
   * @markdown
   * @minLength 1
   */
  type QualityLevel1 = string

  /**
   * Effect at QL 2.
   * @markdown
   * @minLength 1
   */
  type QualityLevel2 = string

  /**
   * Effect at QL 3.
   * @markdown
   * @minLength 1
   */
  type QualityLevel3 = string

  /**
   * Effect at QL 4.
   * @markdown
   * @minLength 1
   */
  type QualityLevel4 = string

  /**
   * Effect at QL 5.
   * @markdown
   * @minLength 1
   */
  type QualityLevel5 = string

  /**
   * Effect at QL 6.
   * @markdown
   * @minLength 1
   */
  type QualityLevel6 = string

  /**
   * Effect at QL 1–2.
   * @markdown
   * @minLength 1
   */
  type QualityLevel1To2 = string

  /**
   * Effect at QL 3–4.
   * @markdown
   * @minLength 1
   */
  type QualityLevel3To4 = string

  /**
   * Effect at QL 5–6.
   * @markdown
   * @minLength 1
   */
  type QualityLevel5To6 = string
}

export type PerformanceParameters =
  | {
    tag: "OneTime"
    casting_time: CastingTime.T
    cost: Cost.OneTime.T
    range: Range.T
    duration: Duration.OneTime.T
  }
  | {
    tag: "Sustained"
    casting_time: CastingTime.T
    cost: Cost.Sustained.T
    range: Range.T
    duration: Duration.Sustained.T
  }

export namespace CastingTime {
  export type T =
    | DefaultCastingTime
    | AventurianIntimacyCastingTime

  /**
   * The default casting time definition.
   */
  export type DefaultCastingTime = {
    tag: "Default"

    /**
     * The skill modification increment identifier/level.
     * @integer
     * @minimum 1
     * @maximum 6
     */
    modification_id: number

    /**
     * Is the casting time modifiable?
     * @default true
     */
    is_modifiable: boolean
  }

  /**
   * In Aventurian Intimacy, you may only use an activatable skill during
   * lovemaking if it has a casting time used during lovemaking.
   */
  export type AventurianIntimacyCastingTime = {
    tag: "Intimacy"

    /**
     * The casting time before lovemaking (the normal casting time).
     */
    before_lovemaking: CastingTimeBeforeLovemaking

    /**
     * The casting time during lovemaking.
     */
    during_lovemaking: CastingTimeDuringLovemaking
  }

    /**
     * The casting time before lovemaking (the normal casting time).
     */
  export type CastingTimeBeforeLovemaking = {
    /**
     * The skill modification increment identifier/level.
     * @integer
     * @minimum 1
     * @maximum 6
     */
    modification_id: number

    /**
     * Is the casting time modifiable?
     * @default true
     */
    is_modifiable: boolean
  }

  /**
   * The casting time during lovemaking.
   */
  export type CastingTimeDuringLovemaking = {
    /**
     * The (unitless) duration value.
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
}

export namespace Cost {
  export type Minimum =
    | RelativeMinimum
    | AbsoluteMinimum

  /**
   * The cost `value` represents a minimum value, so that the minimum value
   * itself may be modified by other cost display modifiers. E.g., it may be
   * rendered as `at least 1 AE per person`.
   */
  export type RelativeMinimum = {
    tag: "Relative"
  }

  /**
   * There is an absolute minimum value that is not influenced by other cost
   * modifications. E.g., it may be rendered as `1 AE per person, at least 4
   * AE`.
   */
  export type AbsoluteMinimum = {
    tag: "Absolute"

    /**
     * @integer
     * @minimum 1
     */
    value: number
  }

  export namespace OneTime {
    export type T =
      | {
        tag: "Single"

        value: Single
      }
      | {
        tag: "Conjunction"

        /**
         * @minItems 2
         */
        list: Single[]
      }
      | {
        tag: "Disjunction"

        /**
         * @minItems 2
         */
        list: Single[]
      }
      | {
        tag: "Map"

        map: Map
      }

    export type Single =
      | {
        tag: "Modifiable"

        /**
         * The skill modification increment identifier/level.
         * @integer
         * @minimum 1
         * @maximum 6
         */
        modification_id: number

        /**
         * The part of the cost value that has to be spent permanently.
         * @integer
         * @minimum 1
         */
        permanent?: number
      }
      | {
        tag: "NonModifiable"

        /**
         * A minimum cost value. It may be rendered relative to the actual cost
         * `value` or may be an absolute value, not affected by other
         * modifications of this cost value.
         */
        minimum?: Minimum

        /**
         * @integer
         * @minimum 1
         */
        value: number

        /**
         * The part of the cost value that has to be spent permanently.
         * @integer
         * @minimum 1
         */
        permanent?: number

        /**
         * All translations for the entry, identified by IETF language tag (BCP47).
         * @minProperties 1
         */
        translations?: {
          /**
           * @patternProperties ^[a-z]{2}-[A-Z]{2}$
           * @minProperties 1
           */
          [localeId: string]: {
            /**
             * The cost have to be per a specific countable entity, e.g. `8 KP
             * per person`
             * @minLength 1
             */
            per?: string

            /**
             * A note, appended to the generated string in parenthesis.
             * @minLength 1
             */
            note?: string
          }
        }
      }
      | {
        tag: "Indefinite"

        /**
         * All translations for the entry, identified by IETF language tag (BCP47).
         * @minProperties 1
         */
        translations: {
          /**
           * @patternProperties ^[a-z]{2}-[A-Z]{2}$
           */
          [localeId: string]: {
            /**
             * A description of where the cost come from.
             */
            description: {
              /**
               * The full description of where the cost come from.
               * @minLength 1
               */
              default: string

              /**
               * A compressed description of where the cost come from for use in
               * small areas (e.g. on character sheet).
               * @minLength 1
               */
              compressed: string
            }
          }
        }
      }

    /**
     * A content that is `2/4/8/16 AE for an item the size of a
     * cup/chest/door/castle gate` may be respresented as the following map:
     *
     * ```yaml
     * options:
     *   - value: 2
     *     label: "cup"
     *   - value: 4
     *     label: "chest"
     *   - value: 8
     *     label: "door"
     *   - value: 16
     *     label: "castle gate"
     * for_append: "an item the size of a"
     * ```
     *
     * This will generate the exact same string as seen above – given it is set
     * for a spellwork and thus `AE` is used.
     */
    export type Map = {
      /**
       * The possible costs and associated labels.
       * @minItems 2
       */
      options: MapOption[]

      /**
       * Place a string between the `for` and the grouped map option labels.
       */
      list_prepend?: string

      /**
       * Place a string after the grouped map option labels.
       */
      list_append?: string

      /**
       * If the string from the book cannot be generated using the default
       * generation technique, use this string. All options still need to be
       * inserted propertly, since it may be used by in-game tools to provide a
       * selection to players.
       */
      replacement?: string
    }

    export type MapOption = {
      /**
       * The full cost value for this option.
       * @integer
       * @minimum 1
       */
      value: number

      /**
       * The part of the `value` that has to be paid permanently.
       * @integer
       * @minimum 0
       */
      permanent?: number

      /**
       * The description of the option for cost string generation.
       * @minLength 1
       */
      label: string

      /**
       * The description of the option if used standalone. Only used if
       * different from `label`.
       * @minLength 1
       */
      label_standalone?: string
    }
  }

  export namespace Sustained {
    export type T =
      | {
        tag: "Modifiable"

        /**
         * The skill modification increment identifier/level.
         * @integer
         * @minimum 1
         * @maximum 6
         */
        modification_id: number
      }
      | {
        tag: "NonModifiable"

        /**
         * A minimum cost value. It may be rendered relative to the actual cost
         * `value` and cost interval or may be an absolute value, affecting the
         * sum of the initial cost and the cost per interval.
         */
        minimum?: Minimum

        /**
         * @integer
         * @minimum 1
         */
        value: number
      }
  }
}

export namespace Range {
  export type T = {
    value: RangeValue

    /**
     * All translations for the entry, identified by IETF language tag (BCP47).
     * @minProperties 1
     */
    translations?: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       */
      [localeId: string]: {
        /**
         * A note, appended to the generated string in parenthesis.
         * @minLength 1
         */
        note: string
      }
    }
  }

  export type RangeValue =
    | {
      tag: "Modifiable"

      /**
       * The skill modification increment identifier/level.
       * @integer
       * @minimum 1
       * @maximum 6
       */
      modification_id: number

      /**
       * Is the casting time modifiable?
       * @default true
       */
      is_modifiable: boolean
    }
    | { tag: "Sight" }
    | { tag: "Self" }
    | {
      /**
       * German: *dereumfassend*
       */
      tag: "Global"
    }
    | {
      tag: "Constant"

      /**
       * The (unitless) range value.
       * @integer
       * @minimum 1
       */
      value: number

      /**
       * The unit of the `value`.
       */
      unit: Unit
    }
    | {
      tag: "MultipliedQualityLevel"

      /**
       * The value that multiplies the quality level to form the final (unitless)
       * range value.
       * @integer
       * @minimum 1
       */
      multiplier: number

      /**
       * The unit of the value resulting from multiplying the quality level with
       * the `multiplier`.
       */
      unit: Unit
    }

  export enum Unit {
    Steps = "Steps",
    Miles = "Miles",
  }
}

export namespace Duration {
  export namespace OneTime {
    export type T =
      | {
        tag: "Immediate"

        /**
         * Specified if the duration has a maximum time span.
         */
        maximum?: UnitValue

        /**
         * All translations for the entry, identified by IETF language tag (BCP47).
         * @minProperties 1
         */
        translations?: {
          /**
           * @patternProperties ^[a-z]{2}-[A-Z]{2}$
           */
          [localeId: string]: {
            /**
             * A replacement string.
             */
            replacement: {
              /**
               * The full replacement string. It must contain `$1`, which is
               * going to be replaced with the generated duration string, so
               * additional information can be provided without duplicating
               * concrete numeric values.
               * @minLength 1
               * @pattern \$1
               */
              default: string

              /**
               * A compressed replacement string for use in small areas (e.g. on
               * character sheet). It must contain `$1`, which is going to be
               * replaced with the generated duration string, so additional
               * information can be provided without duplicating concrete
               * numeric values.
               * @minLength 1
               * @pattern \$1
               */
              compressed: string
            }
          }
        }
      }
      | {
        tag: "Permanent"

        /**
         * All translations for the entry, identified by IETF language tag (BCP47).
         * @minProperties 1
         */
        translations?: {
          /**
           * @patternProperties ^[a-z]{2}-[A-Z]{2}$
           */
          [localeId: string]: {
            /**
             * A replacement string.
             */
            replacement: {
              /**
               * The full replacement string. It must contain `$1`, which is
               * going to be replaced with the generated duration string, so
               * additional information can be provided without duplicating
               * concrete numeric values.
               * @minLength 1
               * @pattern \$1
               */
              default: string

              /**
               * A compressed replacement string for use in small areas (e.g. on
               * character sheet). It must contain `$1`, which is going to be
               * replaced with the generated duration string, so additional
               * information can be provided without duplicating concrete
               * numeric values.
               * @minLength 1
               * @pattern \$1
               */
              compressed: string
            }
          }
        }
      }
      | {
        tag: "Numeric"

        /**
         * The duration value. If `check_result` is defined and this is `1`, it
         * is used as the unit for the value derived from the check result in
         * rendered text output.
         */
        value: UnitValue

        /**
         * If defined, the check result affects the duration in the defined way.
         */
        check_result?: CheckResult

        /**
         * Is the duration indefinite, but has a maximum time span?
         */
        is_maximum?: boolean

        /**
         * All translations for the entry, identified by IETF language tag (BCP47).
         * @minProperties 1
         */
        translations?: {
          /**
           * @patternProperties ^[a-z]{2}-[A-Z]{2}$
           */
          [localeId: string]: {
            /**
             * A replacement string.
             */
            replacement: {
              /**
               * The full replacement string. It must contain `$1`, which is
               * going to be replaced with the generated duration string, so
               * additional information can be provided without duplicating
               * concrete numeric values.
               * @minLength 1
               * @pattern \$1
               */
              default: string

              /**
               * A compressed replacement string for use in small areas (e.g. on
               * character sheet). It must contain `$1`, which is going to be
               * replaced with the generated duration string, so additional
               * information can be provided without duplicating concrete
               * numeric values.
               * @minLength 1
               * @pattern \$1
               */
              compressed: string
            }
          }
        }
      }
      | {
        tag: "Indefinite"

        /**
         * All translations for the entry, identified by IETF language tag (BCP47).
         * @minProperties 1
         */
        translations: {
          /**
           * @patternProperties ^[a-z]{2}-[A-Z]{2}$
           */
          [localeId: string]: {
            /**
             * A description of the duration.
             * @minLength 1
             */
            description: string
          }
        }
      }
  }

  /**
   * Defines how the check result affects the duration in the defined way.
   */
  export type CheckResult = {
    value: CheckResultValue
    arithmetic: CheckResultArithmetic
  }

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

  export namespace Sustained {
    export type T = {
      /**
       * The interval.
       */
      interval: UnitValue

      /**
       * Specified if the sustained skill can be active a maximum amount of
       * time.
       */
      maximum?: UnitValue
    }
  }

  export enum Unit {
    Seconds = "Seconds",
    Minutes = "Minutes",
    Hours = "Hours",
    Days = "Days",
    Weeks = "Weeks",
    Months = "Months",
    Years = "Years",
    CombatRounds = "CombatRounds",
  }

  export type UnitValue = {
    /**
     * The (unitless) duration value.
     * @integer
     * @minimum 1
     */
    value: number

    /**
     * The unit of the `value`.
     */
    unit: Duration.Unit
  }
}

export namespace TargetCategory {
  export type T =
    | { tag: "All" }
    | {
      tag: "Specific"

      /**
       * @minItems 1
       */
      list: {
        id: Identifier

        /**
         * All translations for the entry, identified by IETF language tag (BCP47).
         * @minProperties 1
         */
        translations?: {
          /**
           * @patternProperties ^[a-z]{2}-[A-Z]{2}$
           */
          [localeId: string]: {
            /**
             * A note, appended to the generated string in parenthesis.
             * @minLength 1
             */
            note: string
          }
        }
      }[]
    }

  type Identifier =
    | { tag: "Self" }
    | { tag: "Zone" }
    | { tag: "LiturgicalChantsAndCeremonies" }
    | {
      tag: "Predefined"

      /**
       * The target category reference identifier.
       * @integer
       * @minimum 1
       * @maximum 24
       */
      id: number
    }
}
