/**
 * @main FamiliarsTrick
 */

import { Errata } from "./source/_Erratum"
import { PublicationRefs } from "./source/_PublicationRef"
import { Duration } from "./_ActivatableSkill"

/**
 * @title Familiar's Trick
 */
export type FamiliarsTrick = {
  /**
   * The familiar's trick's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The animal types this trick is available to. Either it is available to all
   * or only a list of specific animal types.
   */
  animal_types:
    | { tag: "All" }
    | {
      tag: "Specific"

      /**
       * The list of specific animal types.
       * @minItems 1
       */
      list: {
        /**
         * The animal type's identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }[]
    }

  /**
   * Measurable parameters of a familiar's trick.
   */
  parameters: PerformanceParameters

  /**
   * The property of the trick.
   */
  property:
    | {
      tag: "Fixed"

      /**
       * The property's identifier.
       * @integer
       * @minimum 1
       */
      id: number
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
           * A description of the property.
           */
          description: {
            /**
             * The full description of the property.
             * @minLength 1
             */
            default: string

            /**
             * A compressed description of the property for use in small areas
             * (e.g. on character sheet).
             * @minLength 1
             */
            compressed: string
          }
        }
      }
    }

  /**
   * The AP value the familiar has to pay for. It may also be that a specific is
   * known by all familiar by default.
   */
  ap_value:
    | {
      tag: "Fixed"

      /**
       * The adventure points value.
       * @integer
       * @minimum 1
       */
      value: number
    }
    | { tag: "Default" }

  src: PublicationRefs

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
       * The name of the familiar's trick.
       * @minLength 1
       */
      name: string

      /**
       * The effect description.
       * @markdown
       * @minLength 1
       */
      effect: string

      /**
       * @deprecated
       */
      cost: { full: string; abbr: string }

      /**
       * @deprecated
       */
      duration: { full: string; abbr: string }

      errata?: Errata
    }
  }
}

/**
 * Measurable parameters of a familiar's trick.
 */
type PerformanceParameters =
  | {
    tag: "OneTime"

    cost:
      | {
        tag: "Fixed"

        /**
         * The AE cost value.
         * @integer
         * @minimum 1
         */
        value: number

        /**
         * The interval in which you have to pay the AE cost again.
         */
        interval?: Duration.UnitValue

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
             * The cost have to be per a specific countable entity, e.g. `8 KP
             * per person`.
             */
            per?: {
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
      }
      | {
        tag: "All"

        /**
         * The minimum AE the familiar has to have.
         * @integer
         * @minimum 1
         */
        minimum?: number
      }
      | {
        tag: "Indefinite"

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
             * A description of the AE cost.
             */
            description: {
              /**
               * The full description of the AE cost.
               * @minLength 1
               */
              default: string

              /**
               * A compressed description of the AE cost for use in small areas
               * (e.g. on character sheet).
               * @minLength 1
               */
              compressed: string
            }
          }
        }
      }

    duration:
      | { tag: "Immediate" }
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
           * @minProperties 1
           */
          [localeId: string]: {
            /**
             * A replacement string.
             */
            replacement?: {
              /**
               * The full replacement string. It can contain `$1`, which is
               * going to be replaced with the generated duration string, so
               * additional information can be provided without duplicating
               * concrete numeric values.
               * @minLength 1
               */
              default: string

              /**
               * A compressed replacement string for use in small areas (e.g. on
               * character sheet). It can contain `$1`, which is going to be
               * replaced with the generated duration string, so additional
               * information can be provided without duplicating concrete
               * numeric values.
               * @minLength 1
               */
              compressed: string
            }
          }
        }
      }
      | {
        tag: "Indefinite"

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
  | {
    tag: "OneTimeInterval"

    cost: {
      /**
       * The AE cost value.
       * @integer
       * @minimum 1
       */
      value: number

      /**
       * The duration granted/added by paying the given AE cost.
       */
      interval: Duration.UnitValue
    }
  }
  | {
    tag: "Sustained"

    cost: {
      /**
       * The AE cost value.
       * @integer
       * @minimum 1
       */
      value: number

      /**
       * The interval in which you have to pay the AE cost again.
       */
      interval: Duration.UnitValue
    }
  }
