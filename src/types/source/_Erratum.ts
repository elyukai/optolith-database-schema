/**
 * @main Errata
 */

import {
  Array,
  Date,
  IncludeIdentifier,
  Object,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NonEmptyMarkdown } from "../_NonEmptyString.js"

export const Errata = TypeAlias(import.meta.url, {
  name: "Errata",
  comment: "A list of errata for the entry in the specific language.",
  type: () => Array(IncludeIdentifier(Erratum), { minItems: 1 }),
})

/**
 * A list of errata for the entry in the specific language.
 * @title Errata
 * @minItems 1
 */
export type Errata = Erratum[]

export const Erratum = TypeAlias(import.meta.url, {
  name: "Erratum",
  type: () =>
    Object({
      date: Required({
        comment: "The date when the change was confirmed and applied to the entry.",
        type: Date(),
      }),
      description: Required({
        comment: "A description of what changed.",
        type: String({ minLength: 1 }),
      }),
    }),
})

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
