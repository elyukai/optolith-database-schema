/**
 * @main FocusRule
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"

/**
 * @title Focus Rule
 */
export type FocusRule = {
  /**
   * The focus rule's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The focus rule's subject's identifier.
   * @integer
   * @minimum 1
   */
  subject_id: number

  /**
   * The focus rule's level.
   * @integer
   * @minimum 1
   * @maximum 4
   */
  level: number

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
       * The name of the focus rule.
       * @minLength 1
       */
      name: string

      /**
       * The description of the focus rule.
       * @markdown
       * @minLength 1
       */
      description: string

      errata?: Errata
    }
  }
}
