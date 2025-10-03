import { Boolean, Object, Required, TypeAlias } from "tsondb/schema/def"
import { ContinentIdentifier } from "../../_Identifier.js"

export const AssociatedContinent = TypeAlias(import.meta.url, {
  name: "AssociatedContinent",
  type: () =>
    Object({
      id: Required({
        comment: "The continent’s identifier.",
        type: ContinentIdentifier(),
      }),
      is_extinct: Required({
        comment: "Is the language considered virtually extinct in this continent?",
        type: Boolean(),
      }),
    }),
})
