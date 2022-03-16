import { ExtensionRuleIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Rule Prerequisite
 */
export type RulePrerequisite = {
  tag: "Rule"

  id: ExtensionRuleIdentifier

  display_option?: DisplayOption
}
