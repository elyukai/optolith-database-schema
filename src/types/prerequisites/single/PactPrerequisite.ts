import * as DB from "tsondb/schema/dsl"
import { PactCategoryIdentifier, PactDomainIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const PactPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "PactPrerequisite",
  comment: "Requires a specific pact.",
  type: () =>
    DB.Object({
      category: DB.Required({
        comment: "The required pact category.",
        type: PactCategoryIdentifier(),
      }),
      domain: DB.Optional({
        comment: "The required domain(s).",
        type: DB.Array(PactDomainIdentifier(), { minItems: 1 }),
      }),
      level: DB.Optional({
        comment: "The level to which the minimum value applies.",
        type: DB.Integer({ minimum: 1 }),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
