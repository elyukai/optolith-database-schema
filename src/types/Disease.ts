/**
 * @main Disease
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Disease
 */
export type Disease = {
  /**
   * The disease's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The disease's level.
   * @integer
   * @minimum 1
   */
  level: number

  /**
   * Depending on the disease, apply Spirit or Toughness as a penalty to the
   * disease roll. It may also happen that the lower of both is applied as a
   * penalty.
   */
  resistance:
    | { tag: "Spirit" }
    | { tag: "Toughness" }
    | { tag: "LowerOfSpiritAndToughness" }

  /**
   * What causes the disease? The GM rolls 1D20 to see if a character gets
   * infected. If the infection check succeeds, the GM makes a disease check to
   * determine the severity of the infection.
   * @minItems 1
   */
  cause: {
    /**
     * The chance to get infected by this cause, in percent.
     * @integer
     * @minimum 5
     * @multipleOf 5
     * @maximum 100
     */
    chance?: number

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
         * The name of the cause.
         * @minLength 1
         */
        name: string

        /**
         * The chance to get infected by this cause. If present for this
         * language, this overrides the universal `chance` field; they cannot be
         * used at the same time.
         * @minLength 1
         */
        chance?: string
      }
    }
  }[]

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
       * The name of the disease.
       * @minLength 1
       */
      name: string

      /**
       * A list of alternative names.
       * @minItems 1
       */
      alternative_names?: {
        /**
         * An alternative name of the disease.
         * @minLength 1
         */
        name: string

        /**
         * The region where this alternative name is used.
         * @minLength 1
         */
        region?: string
      }[]

      /**
       * The disease’s progress, in detail.
       * @markdown
       * @minLength 1
       */
      progress: string

      /**
       * After infection, how much time passes before symptoms appear?
       * @minLength 1
       */
      incubation_time: string

      /**
       * The damage caused by the disease. If the disease check fails, apply the
       * lessened effects.
       */
      damage: {
        /**
         * The disease’s default damage. In the source, it's the text before the
         * slash.
         * @markdown
         * @minLength 1
         */
        default: string

        /**
         * The disease’s lessened damage. In the source, it's the text after the
         * slash.
         * @markdown
         * @minLength 1
         */
        lessened?: string
      }

      /**
       * The duration of the disease. If the disease check fails, use the
       * lessened duration.
       */
      duration: {
        /**
         * The default duration of the disease. In the source, it's the text
         * before the slash.
         * @markdown
         * @minLength 1
         */
        default: string

        /**
         * The lessened duration of the disease. In the source, it's the text
         * after the slash.
         * @markdown
         * @minLength 1
         */
        lessened?: string
      }

      /**
       * Special information about the disease.
       * @markdown
       * @minLength 1
       */
      special?: string

      /**
       * Methods known to lessen the disease’s progress or relieve symptoms.
       * @markdown
       * @minLength 1
       */
      treatment: string

      /**
       * Known remedies for the disease.
       * @markdown
       * @minLength 1
       */
      cure: string

      errata?: Errata
    }
  }
}

export const validateSchema = validateSchemaCreator<Disease>(import.meta.url)
