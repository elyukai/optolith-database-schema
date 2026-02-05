import * as DB from "tsondb/schema/dsl"
import { BinarySex } from "../../_Sex.js"
import { DisplayOption } from "../DisplayOption.js"

export const SexPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "SexPrerequisite",
  comment: "Requires a specific sex.",
  type: () =>
    DB.Object({
      id: DB.Required({
        type: DB.IncludeIdentifier(BinarySex),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
