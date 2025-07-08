import {
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { RatedIdentifier } from "../../_IdentifierGroup.js"
import { DisplayOption } from "../DisplayOption.js"

export const RatedPrerequisite = TypeAlias(import.meta.url, {
  name: "RatedPrerequisite",
  type: () =>
    Object({
      id: Required({
        comment: "The rated entry’s identifier.",
        type: IncludeIdentifier(RatedIdentifier),
      }),
      value: Required({
        comment: "The required minimum value.",
        type: Integer({ minimum: 0 }),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
