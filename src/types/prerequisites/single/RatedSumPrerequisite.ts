import {
  Array,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/dsl"
import { SkillIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const RatedSumPrerequisite = TypeAlias(import.meta.url, {
  name: "RatedSumPrerequisite",
  type: () =>
    Object({
      sum: Required({
        comment: "The minimum required sum of the targets’ ratings.",
        type: Integer({ minimum: 0 }),
      }),
      targets: Required({
        comment: "The targets that are included in calculating the sum.",
        type: Array(SkillIdentifier(), { minItems: 2 }),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
