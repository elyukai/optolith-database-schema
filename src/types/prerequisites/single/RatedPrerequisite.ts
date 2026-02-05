import * as DB from "tsondb/schema/dsl"
import { RatedIdentifier } from "../../_IdentifierGroup.js"
import { DisplayOption } from "../DisplayOption.js"

export const RatedPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "RatedPrerequisite",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The rated entry’s identifier.",
        type: DB.IncludeIdentifier(RatedIdentifier),
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
