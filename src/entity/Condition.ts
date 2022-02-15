/**
 * @main Condition
 */

import { Errata } from "./_Erratum"
import { PublicationRefs } from "./_PublicationRef"

/**
 * @title Condition
 */
export type Condition = {
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
   * The name of the condition.
   * @minLength 1
   */
  name: string

  /**
   * Additional rules for the condition, if applicable.
   * @markdown
   * @minLength 1
   */
  rules?: string

  /**
   * The effects for level 1 to 4.
   */
  effects: Effects

  errata?: Errata
}

/**
 * The effects on levels 1 to 4.
 */
type Effects = [Effect, Effect, Effect, Effect]

/**
 * The effect on a level.
 * @markdown
 * @minLength 1
 */
type Effect = string
