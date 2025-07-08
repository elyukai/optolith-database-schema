import {
  Array,
  Boolean,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { ActivatableIdentifier, RequirableSelectOptionIdentifier } from "../../_IdentifierGroup.js"
import { Preconditions } from "../ConditionalPrerequisites.js"
import { DisplayOption } from "../DisplayOption.js"

export const ActivatablePrerequisite = TypeAlias(import.meta.url, {
  name: "ActivatablePrerequisite",
  comment: "Requires a specific advantage, disadvantage or special ability.",
  type: () =>
    Object({
      id: Required({
        comment: "The activatable entry’s identifier.",
        type: IncludeIdentifier(ActivatableIdentifier),
      }),
      active: Required({
        comment: "If the required entry should be required to be active or inactive.",
        type: Boolean(),
      }),
      level: Optional({
        comment: "The required minimum level of the entry.",
        type: Integer({ minimum: 1 }),
      }),
      options: Optional({
        comment:
          "Required select options. Order is important. Typically, you only need the first array index, though.",
        type: Array(IncludeIdentifier(RequirableSelectOptionIdentifier), { minItems: 1 }),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
      when: Optional({
        type: IncludeIdentifier(Preconditions),
      }),
    }),
})
