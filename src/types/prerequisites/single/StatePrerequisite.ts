import * as DB from "tsondb/schema/dsl"
import { StateIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const StatePrerequisite = DB.TypeAlias(import.meta.url, {
  name: "StatePrerequisite",
  comment: "Requires a specific state to be active.",
  type: () =>
    DB.Object({
      id: DB.Required({
        type: StateIdentifier(),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
