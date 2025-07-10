import {
  Boolean,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { RaceIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const RacePrerequisite = TypeAlias(import.meta.url, {
  name: "RacePrerequisite",
  comment:
    "Requires a specific race or one of a specific set of races. You can also provide an object to say whether the hero must meet one of the races or if the entry does not allow one of the races.",
  type: () =>
    Object({
      id: Required({
        comment: "The race’s identifier.",
        type: RaceIdentifier(),
      }),
      active: Required({
        type: Boolean(),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
