import * as DB from "tsondb/schema/dsl"
import { InfluenceIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const InfluencePrerequisite = DB.TypeAlias(import.meta.url, {
  name: "InfluencePrerequisite",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The influence’s identifier.",
        type: InfluenceIdentifier(),
      }),
      active: DB.Required({
        comment: "If the referenced influence must or must not be chosen.",
        type: DB.Boolean(),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
