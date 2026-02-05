import * as DB from "tsondb/schema/dsl"
import { ContinentIdentifier } from "../../_Identifier.js"

export const AssociatedContinent = DB.TypeAlias(import.meta.url, {
  name: "AssociatedContinent",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The continent’s identifier.",
        type: ContinentIdentifier(),
      }),
      is_extinct: DB.Required({
        comment: "Is the language considered virtually extinct in this continent?",
        type: DB.Boolean(),
      }),
    }),
})
