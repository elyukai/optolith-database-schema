import { IncludeIdentifier, Object, Optional, Required, TypeAlias } from "tsondb/schema/def"
import { StateIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const StatePrerequisite = TypeAlias(import.meta.url, {
  name: "StatePrerequisite",
  comment: "Requires a specific state to be active.",
  type: () =>
    Object({
      id: Required({
        type: StateIdentifier(),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
