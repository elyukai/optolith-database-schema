/**
 * @main Errata
 */

import { NonEmptyMarkdown } from "../_NonEmptyString.js"

/**
 * A list of errata for the entry in the specific language.
 * @title Errata
 * @minItems 1
 */
export type Errata = Erratum[]

/**
 * @title Erratum
 */
export type Erratum = {
  /**
   * The date when the change was confirmed and applied to the entry.
   * @format date
   */
  date: string

  /**
   * A description of what changed.
   * @markdown
   * @minLength 1
   */
  description: NonEmptyMarkdown
}
