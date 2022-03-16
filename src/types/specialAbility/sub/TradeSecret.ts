/**
 * @main TradeSecret
 */

import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { GeneralPrerequisites } from "../../_Prerequisite.js"

/**
 * @title Trade Secret
 */
export type TradeSecret = {
  /**
   * The trade secret's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The adventure points value of the trade secret.
   * @integer
   * @minimum 1
   */
  ap_value: number

  /**
   * Is this trade secret considered secret knowledge?
   */
  is_secret_knowledge: boolean

  prerequisites?: GeneralPrerequisites

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
       * The name of the trade secret.
       * @minLength 1
       */
      name: string

      /**
       * The description of the trade secret.
       * @markdown
       * @minLength 1
       */
      description?: string

      errata?: Errata
    }
  }
}
