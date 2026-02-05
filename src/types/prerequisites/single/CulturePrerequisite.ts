import * as DB from "tsondb/schema/dsl"
import { CultureIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const CulturePrerequisite = DB.TypeAlias(import.meta.url, {
  name: "CulturePrerequisite",
  comment: "Requires a specific culture or one of a specific set of cultures.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The culture’s identifier.",
        type: CultureIdentifier(),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
