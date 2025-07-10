import { IncludeIdentifier, Object, Optional, Required, TypeAlias } from "tsondb/schema/def"
import { CultureIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const CulturePrerequisite = TypeAlias(import.meta.url, {
  name: "CulturePrerequisite",
  comment: "Requires a specific culture or one of a specific set of cultures.",
  type: () =>
    Object({
      id: Required({
        comment: "The culture’s identifier.",
        type: CultureIdentifier(),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
