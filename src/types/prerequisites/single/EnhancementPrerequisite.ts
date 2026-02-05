import { Object, Required, TypeAlias } from "tsondb/schema/dsl"
import { EnhancementIdentifier } from "../../_Identifier.js"

export const EnhancementPrerequisite = TypeAlias(import.meta.url, {
  name: "EnhancementPrerequisite",
  comment: "Requires a specific enhancement from a skill.",
  type: () =>
    Object({
      id: Required({
        comment: "The required enhancement.",
        type: EnhancementIdentifier(),
      }),
    }),
})
