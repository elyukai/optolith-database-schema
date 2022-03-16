/**
 * @main Blessing
 */

import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { Duration, TargetCategory } from "./_ActivatableSkill.js"

/**
 * @title Blessing
 */
export type Blessing = {
  /**
   * The blessing's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Measurable parameters of a blessing.
   */
  parameters: PerformanceParameters

  /**
   * The target category – the kind of creature or object – the skill affects.
   */
  target: TargetCategory.T

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
       * The name of the blessing.
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
      range: string

      /**
       * @deprecated
       */
      duration: string

      /**
       * @deprecated
       */
      target: string

      errata?: Errata
    }
  }
}

/**
 * Measurable parameters of a blessing.
 */
type PerformanceParameters = {
  range:
    | { tag: "Self" }
    | { tag: "Touch" }
    | {
      tag: "Fixed"

      /**
       * The range in steps/m.
       * @integer
       * @minimum 1
       */
      value: number
    }

  duration:
    | { tag: "Immediate" }
    | {
      tag: "Fixed"

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
