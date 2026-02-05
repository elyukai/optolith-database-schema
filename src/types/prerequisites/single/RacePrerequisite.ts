import * as DB from "tsondb/schema/dsl"
import { RaceIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const RacePrerequisite = DB.TypeAlias(import.meta.url, {
  name: "RacePrerequisite",
  comment:
    "Requires a specific race or one of a specific set of races. You can also provide an object to say whether the hero must meet one of the races or if the entry does not allow one of the races.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The race’s identifier.",
        type: RaceIdentifier(),
      }),
      active: DB.Required({
        type: DB.Boolean(),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
