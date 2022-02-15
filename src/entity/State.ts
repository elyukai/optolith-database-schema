/**
 * @main State
 */

import { Errata } from "./_Erratum"
import { PublicationRefs } from "./_PublicationRef"

/**
 * @title State
 */
export type State = {
  /**
   * An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: Translation
  }
}

type Translation = {
  /**
   * The name of the state.
   * @minLength 1
   */
  name: string

  /**
   * The description of the state.
   * @markdown
   * @minLength 1
   */
  description: string

  errata?: Errata
}
