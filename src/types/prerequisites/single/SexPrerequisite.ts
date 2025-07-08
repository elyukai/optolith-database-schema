import { IncludeIdentifier, Object, Optional, Required, TypeAlias } from "tsondb/schema/def"
import { BinarySex } from "../../_Sex.js"
import { DisplayOption } from "../DisplayOption.js"

export const SexPrerequisite = TypeAlias(import.meta.url, {
  name: "SexPrerequisite",
  comment: "Requires a specific sex.",
  type: () =>
    Object({
      id: Required({
        type: IncludeIdentifier(BinarySex),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
