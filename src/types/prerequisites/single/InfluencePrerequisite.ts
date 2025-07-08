import {
  Boolean,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { InfluenceIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const InfluencePrerequisite = TypeAlias(import.meta.url, {
  name: "InfluencePrerequisite",
  type: () =>
    Object({
      id: Required({
        comment: "The influence’s identifier.",
        type: InfluenceIdentifier,
      }),
      active: Required({
        comment: "If the referenced influence must or must not be chosen.",
        type: Boolean(),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
