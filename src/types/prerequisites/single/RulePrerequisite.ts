import { ExtensionRuleIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Rule Prerequisite
 */
export type RulePrerequisite = {
  id: ExtensionRuleIdentifier

  display_option?: DisplayOption
}
