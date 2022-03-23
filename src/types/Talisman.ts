/**
 * @main Talisman
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Talisman
 */
export type Talisman = {
  /**
   * The talisman's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The tradition(s) the talisman belongs to.
   * @minItems 1
   */
  tradition: {
    /**
     * The blessed traditions's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }[]

  /**
   * The talisman type.
   */
  type:
    | { tag: "MainTalisman" }
    | { tag: "Talisman" }
    | { tag: "MinorTalisman" }
    | { tag: "Regalia" }
    | { tag: "PowerfulTalisman" }

  /**
   * The AP value for the required trade secret.
   * @integer
   * @minimum 5
   * @multipleOf 5
   */
  ap_value: number

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
       * The name of the talisman.
       * @minLength 1
       */
      name: string

      /**
       * The effect description.
       * @markdown
       * @minLength 1
       */
      description: string

      /**
       * The activation parameters.
       */
      activation: {
        /**
         * The KP cost.
         * @minLength 1
         */
        cost: string

        /**
         * The duration.
         * @minLength 1
         */
        duration: string
      }

      errata?: Errata
    }
  }
}

export const validateSchema = validateSchemaCreator<Talisman>(import.meta.url)
