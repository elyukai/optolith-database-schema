/**
 * @main OptionalRule
 */

import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Optional Rule
 */
export type OptionalRule = {
  /**
   * The optional rule's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The relevance of the optional rule for Optolith. It may be that it
   * influences character creating but it may also just influnce the character
   * sheet. If it is linked to systems in Optolith, it may be specified if this
   * rule has not been implemented in Optolith yet.
   */
  relevance: Relevance

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
       * The name of the optional rule.
       * @minLength 1
       */
      name: string

      /**
       * The description of the optional rule.
       * @markdown
       * @minLength 1
       */
      description: string

      errata?: Errata
    }
  }
}

/**
 * The relevance of the optional rule for Optolith. It may be that it influences
 * character creating but it may also just influnce the character sheet. If it
 * is linked to systems in Optolith, it may be specified if this rule has not
 * been implemented in Optolith yet.
 */
type Relevance =
  | { tag: "Extraneous" }
  | {
    tag: "Linked"

    /**
     * Does the optional rule have an impact on character creation or character
     * sheet and this effect has not been implemented in Optolith yet? If
     * `true`, the optional rule cannot be activated.
     */
    isMissingImplementation?: boolean
  }
