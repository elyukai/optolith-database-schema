import * as DB from "tsondb/schema/dsl"
import { ProfessionIdentifier } from "../../_Identifier.ts"
import { DisplayOption } from "../DisplayOption.ts"

export const ProfessionPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "ProfessionPrerequisite",
  comment: "Requires a specific profession.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The profession’s identifier.",
        type: ProfessionIdentifier(),
      }),
      displayOption: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
