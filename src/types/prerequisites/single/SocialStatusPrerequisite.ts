import { IncludeIdentifier, Object, Optional, Required, TypeAlias } from "tsondb/schema/def"
import { SocialStatusIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const SocialStatusPrerequisite = TypeAlias(import.meta.url, {
  name: "SocialStatusPrerequisite",
  comment: "Requires a minimum social status.",
  type: () =>
    Object({
      id: Required({
        comment: "The minimum social status’s identifier.",
        type: SocialStatusIdentifier,
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
