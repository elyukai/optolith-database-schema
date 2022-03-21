/**
 * @title Activatable Skill
 */

import { SlowSkillCastingTimeUnit } from "./SkillModificationLevel.js"

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

export type FastPerformanceParameters =
  | {
    tag: "OneTime"
    casting_time: CastingTime.Fast
    cost: Cost.OneTime.T
    range: Range.T
    duration: Duration.OneTime.T
  }
  | {
    tag: "Sustained"
    casting_time: CastingTime.Fast
    cost: Cost.Sustained.T
    range: Range.T
    duration?: Duration.Sustained.T
  }

export type SlowPerformanceParameters =
  | {
    tag: "OneTime"
    casting_time: CastingTime.Slow
    cost: Cost.OneTime.T
    range: Range.T
    duration: Duration.OneTime.T
  }
  | {
    tag: "Sustained"
    casting_time: CastingTime.Slow
    cost: Cost.Sustained.T
    range: Range.T
    duration?: Duration.Sustained.T
  }

export namespace CastingTime {
  export type T<NonModifiable extends FastSkillCastingTime | SlowSkillCastingTime> = {
    /**
     * The default casting time definition.
     */
    default:
      | ModifiableCastingTime
      | NonModifiable

    /**
     * The casting time during lovemaking. In Aventurian Intimacy, you may only
     * use an activatable skill during lovemaking if it has a casting time used
     * during lovemaking.
     */
    during_lovemaking?: {
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
  }

  export type ModifiableCastingTime = {
    tag: "Modifiable"

    /**
     * The initial skill modification identifier/level.
     * @integer
     * @minimum 1
     * @maximum 6
     */
    initial_modification_level: number
  }

  export type FastSkillCastingTime = {
    tag: "NonModifiable"

    /**
     * The casting time value in actions.
     * @integer
     * @minimum 1
     */
    value: number
  }

  export type SlowSkillCastingTime = {
    tag: "NonModifiable"

    /**
     * The (unitless) casting time value.
     * @integer
     * @minimum 1
     */
    value: number

    unit: SlowSkillCastingTimeUnit
  }

  export type Fast = T<FastSkillCastingTime>

  export type Slow = T<SlowSkillCastingTime>

  export enum CastingTimeDuringLovemakingUnit {
    SeductionActions = "SeductionActions",
    Rounds = "Rounds",
  }
}

export namespace Cost {
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
         * The initial skill modification identifier/level.
         * @integer
         * @minimum 1
         * @maximum 6
         */
        initial_modification_level: number

        /**
         * The part of the cost value that has to be spent permanently.
         * @integer
         * @minimum 1
         */
        permanent_value?: number
      }
      | {
        tag: "NonModifiable"

        /**
         * If `true`, the non-modifiable value is a minimum value.
         */
        is_minimum?: boolean

        /**
         * The AE cost value.
         * @integer
         * @minimum 1
         */
        value: number

        /**
         * The part of the cost value that has to be spent permanently.
         * @integer
         * @minimum 1
         */
        permanent_value?: number

        /**
         * The cost have to be per a specific countable entity, e.g. `8 KP per
         * person`.
         */
        per?: {
          /**
           * If defined, the minimum total AE that have to be spent casting the
           * skill.
           */
          minimum_total?: number

          /**
           * All translations for the entry, identified by IETF language tag
           * (BCP47).
           * @minProperties 1
           */
          translations: {
            /**
             * @patternProperties ^[a-z]{2}-[A-Z]{2}$
             */
            [localeId: string]: {
              /**
               * The full countable entity name.
               * @minLength 1
               */
              default: string

              /**
               * The compressed countable entity name.
               * @minLength 1
               */
              compressed: string
            }
          }
        }

        /**
         * All translations for the entry, identified by IETF language tag
         * (BCP47).
         * @minProperties 1
         */
        translations?: {
          /**
           * @patternProperties ^[a-z]{2}-[A-Z]{2}$
           * @minProperties 1
           */
          [localeId: string]: {
            /**
             * A note, appended to the generated string in parenthesis.
             */
            note?: {
              /**
               * The full note.
               * @minLength 1
               */
              default: string

              /**
               * A compressed note, if applicable. If not specified it should not
               * be displayed in small location.
               * @minLength 1
               */
              compressed?: string
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
       * All translations for the entry, identified by IETF language tag (BCP47).
       * @minProperties 1
       */
      translations?: {
        /**
         * @patternProperties ^[a-z]{2}-[A-Z]{2}$
         */
        [localeId: string]: {
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
      }
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
      permanent_value?: number

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
    }
  }

  export namespace Sustained {
    export type T =
      | {
        tag: "Modifiable"

        /**
         * The initial skill modification identifier/level.
         * @integer
         * @minimum 1
         * @maximum 6
         */
        initial_modification_level: number

        /**
         * The sustain interval.
         */
        interval: Duration.UnitValue
      }
      | {
        tag: "NonModifiable"

        /**
         * If `true`, the non-modifiable value is a minimum value.
         */
        is_minimum?: boolean

        /**
         * The AE cost value.
         * @integer
         * @minimum 1
         */
        value: number

        /**
         * The sustain interval.
         */
        interval: Duration.UnitValue
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
         */
        note: {
          /**
           * The full note.
           * @minLength 1
           */
          default: string

          /**
           * A compressed note, if applicable. If not specified it should not
           * be displayed in small location.
           * @minLength 1
           */
          compressed?: string
        }
      }
    }
  }

  export type RangeValue =
    | {
      tag: "Modifiable"

      /**
       * The initial skill modification identifier/level.
       * @integer
       * @minimum 1
       * @maximum 6
       */
      initial_modification_level: number
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
      tag: "Fixed"

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
      tag: "CheckResultBased"

      /**
       * The base value that is derived from the check result.
       */
      base: Duration.CheckResultValue

      /**
       * If defined, it modifies the base value.
       */
      modifier?: {
        /**
         * The arithmetic how to apply the `value` to the `base`.
         */
        arithmetic: Duration.CheckResultArithmetic

        /**
         * The value that is applied to the `base` using the defined `arithmetic`.
         * @integer
         * @minimum 2
         */
        value: number
      }

      /**
       * The range unit.
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
        tag: "Fixed"

        /**
         * If the duration is the maximum duration, so it may end earlier.
         */
        is_maximum?: boolean

        /**
         * The (unitless) duration.
         * @integer
         * @minimum 1
         */
        value: number

        /**
         * The duration unit.
         */
        unit: Duration.Unit

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
        tag: "CheckResultBased"

        /**
         * If the duration is the maximum duration, so it may end earlier.
         */
        is_maximum?: boolean

        /**
         * The base value that is derived from the check result.
         */
        base: Duration.CheckResultValue

        /**
         * If defined, it modifies the base value.
         */
        modifier?: {
          /**
           * The arithmetic how to apply the `value` to the `base`.
           */
          arithmetic: Duration.CheckResultArithmetic

          /**
           * The value that is applied to the `base` using the defined
           * `arithmetic`.
           * @integer
           * @minimum 2
           */
          value: number
        }

        /**
         * The duration unit.
         */
        unit: Duration.Unit

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
             */
            description: {
              /**
               * The full description of the duration.
               * @minLength 1
               */
              default: string

              /**
               * A compressed description of the duration for use in small areas
               * (e.g. on character sheet).
               * @minLength 1
               */
              compressed: string
            }
          }
        }
      }
  }

  /**
   * Defines the duration being based on a check result.
   */
  export type CheckResultBased = {
    /**
     * The base value that is derived from the check result.
     */
    base: CheckResultValue

    /**
     * If defined, it modifies the base value.
     */
    modifier?: {
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
     * The duration unit.
     */
    unit: Unit
  }

  /**
   * Defines the duration being based on a check result.
   */
  export type CheckResultBasedTagged = {
    tag: "CheckResultBased"

    /**
     * The base value that is derived from the check result.
     */
    base: CheckResultValue

    /**
     * If defined, it modifies the base value.
     */
    modifier?: {
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
     * The duration unit.
     */
    unit: Unit
  }

  export type CheckResultBasedTaggedAnimistPower = {
    tag: "CheckResultBased"

    /**
     * If the duration is the maximum duration, so it may end earlier.
     */
    is_maximum?: boolean

    /**
     * The base value that is derived from the check result.
     */
    base: Duration.CheckResultValue

    /**
     * If defined, it modifies the base value.
     */
    modifier?: {
      /**
       * The arithmetic how to apply the `value` to the `base`.
       */
      arithmetic: Duration.CheckResultArithmetic

      /**
       * The value that is applied to the `base` using the defined
       * `arithmetic`.
       * @integer
       * @minimum 2
       */
      value: number
    }

    /**
     * The duration unit.
     */
    unit: Duration.Unit
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
       * The sustained skill can be active a maximum amount of time.
       */
      maximum: UnitValue
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
    Centuries = "Centuries",
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
