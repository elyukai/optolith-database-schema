import * as DB from "tsondb/schema/dsl"
import { PublicationIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const PublicationPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "PublicationPrerequisite",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The publication’s identifier.",
        type: PublicationIdentifier(),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
