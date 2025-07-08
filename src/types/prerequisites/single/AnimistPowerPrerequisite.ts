import {
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { AnimistPowerIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const AnimistPowerPrerequisite = TypeAlias(import.meta.url, {
  name: "AnimistPowerPrerequisite",
  comment: "Requires a specific animist power to be on a minimum value.",
  type: () =>
    Object({
      id: Required({
        comment: "The animist power’s identifier.",
        type: AnimistPowerIdentifier,
      }),
      level: Optional({
        comment: "The level to which the minimum value applies.",
        type: Integer({ minimum: 2 }),
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
