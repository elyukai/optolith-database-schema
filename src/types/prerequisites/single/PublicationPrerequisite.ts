import { IncludeIdentifier, Object, Optional, Required, TypeAlias } from "tsondb/schema/def"
import { PublicationIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const PublicationPrerequisite = TypeAlias(import.meta.url, {
  name: "PublicationPrerequisite",
  type: () =>
    Object({
      id: Required({
        comment: "The publication’s identifier.",
        type: PublicationIdentifier(),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
