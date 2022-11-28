import { ExtensionRuleIdentifier } from "../../_IdentifierGroup.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Rule Prerequisite
 */
export type RulePrerequisite = {
  id: ExtensionRuleIdentifier

  display_option?: DisplayOption
}
