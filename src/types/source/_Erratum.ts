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

export const Errata = TypeAlias(import.meta.url, {
  name: "Errata",
  comment: "A list of errata for the entry in the specific language.",
  type: () => Array(IncludeIdentifier(Erratum), { minItems: 1 }),
})

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
