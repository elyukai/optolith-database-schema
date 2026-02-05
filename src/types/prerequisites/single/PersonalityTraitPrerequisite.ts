import {
  Boolean,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/dsl"
import { PersonalityTraitIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const PersonalityTraitPrerequisite = TypeAlias(import.meta.url, {
  name: "PersonalityTraitPrerequisite",
  type: () =>
    Object({
      id: Required({
        comment: "The personality trait’s identifier.",
        type: PersonalityTraitIdentifier(),
      }),
      active: Required({
        comment:
          "If checked, the prerequisite **must** be present. If not checked, prerequisite **must not** be present.",
        type: Boolean(),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
