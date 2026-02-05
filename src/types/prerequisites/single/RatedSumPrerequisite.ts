import * as DB from "tsondb/schema/dsl"
import { SkillIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const RatedSumPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "RatedSumPrerequisite",
  type: () =>
    DB.Object({
      sum: DB.Required({
        comment: "The minimum required sum of the targets’ ratings.",
        type: DB.Integer({ minimum: 0 }),
      }),
      targets: DB.Required({
        comment: "The targets that are included in calculating the sum.",
        type: DB.Array(SkillIdentifier(), { minItems: 2 }),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
