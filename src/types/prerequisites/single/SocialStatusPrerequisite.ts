import * as DB from "tsondb/schema/dsl"
import { SocialStatusIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const SocialStatusPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "SocialStatusPrerequisite",
  comment: "Requires a minimum social status.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The minimum social status’s identifier.",
        type: SocialStatusIdentifier(),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
