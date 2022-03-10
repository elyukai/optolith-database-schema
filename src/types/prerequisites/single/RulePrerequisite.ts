import { ExtensionRuleIdentifier } from "../../_Identifier"
import { DisplayOption } from "../DisplayOption"

/**
 * @title Rule Prerequisite
 */
export type RulePrerequisite = {
  tag: "Rule"

  id: ExtensionRuleIdentifier

  display_option?: DisplayOption
}
