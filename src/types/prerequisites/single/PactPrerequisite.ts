import {
  Array,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/dsl"
import { PactCategoryIdentifier, PactDomainIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const PactPrerequisite = TypeAlias(import.meta.url, {
  name: "PactPrerequisite",
  comment: "Requires a specific pact.",
  type: () =>
    Object({
      category: Required({
        comment: "The required pact category.",
        type: PactCategoryIdentifier(),
      }),
      domain: Optional({
        comment: "The required domain(s).",
        type: Array(PactDomainIdentifier(), { minItems: 1 }),
      }),
      level: Optional({
        comment: "The level to which the minimum value applies.",
        type: Integer({ minimum: 1 }),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
