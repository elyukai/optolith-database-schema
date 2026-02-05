import * as DB from "tsondb/schema/dsl"
import { EnhancementIdentifier } from "../../_Identifier.js"

export const EnhancementPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "EnhancementPrerequisite",
  comment: "Requires a specific enhancement from a skill.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The required enhancement.",
        type: EnhancementIdentifier(),
      }),
    }),
})
