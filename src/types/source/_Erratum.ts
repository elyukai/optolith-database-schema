/**
 * @main Errata
 */

import * as DB from "tsondb/schema/dsl"

export const Errata = DB.TypeAlias(import.meta.url, {
  name: "Errata",
  comment: "A list of errata for the entry in the specific language.",
  type: () => DB.Array(DB.IncludeIdentifier(Erratum), { minItems: 1 }),
})

export const Erratum = DB.TypeAlias(import.meta.url, {
  name: "Erratum",
  type: () =>
    DB.Object({
      date: DB.Required({
        comment: "The date when the change was confirmed and applied to the entry.",
        type: DB.Date(),
      }),
      description: DB.Required({
        comment: "A description of what changed.",
        type: DB.String({ minLength: 1 }),
      }),
    }),
})
