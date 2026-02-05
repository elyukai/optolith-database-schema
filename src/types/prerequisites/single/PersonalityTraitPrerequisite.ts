import * as DB from "tsondb/schema/dsl"
import { PersonalityTraitIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const PersonalityTraitPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "PersonalityTraitPrerequisite",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The personality trait’s identifier.",
        type: PersonalityTraitIdentifier(),
      }),
      active: DB.Required({
        comment:
          "If checked, the prerequisite **must** be present. If not checked, prerequisite **must not** be present.",
        type: DB.Boolean(),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})
