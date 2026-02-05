import * as DB from "tsondb/schema/dsl"
import { AnimistPowerIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const AnimistPowerPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "AnimistPowerPrerequisite",
  comment: "Requires a specific animist power to be on a minimum value.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The animist power’s identifier.",
        type: AnimistPowerIdentifier(),
      }),
      level: DB.Optional({
        comment: "The level to which the minimum value applies.",
        type: DB.Integer({ minimum: 2 }),
      }),
      value: DB.Required({
        comment: "The required minimum value.",
        type: DB.Integer({ minimum: 0 }),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
