import { IncludeIdentifier, Object, Optional, Required, TypeAlias } from "tsondb/schema/dsl"
import { ExtensionRuleIdentifier } from "../../_IdentifierGroup.js"
import { DisplayOption } from "../DisplayOption.js"

export const RulePrerequisite = TypeAlias(import.meta.url, {
  name: "RulePrerequisite",
  comment: "Requires a specific extension rule (focus rule or optional rule) to be used/active.",
  type: () =>
    Object({
      id: Required({
        type: IncludeIdentifier(ExtensionRuleIdentifier),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})
