import { StateIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * Requires a specific state or one of a specific set of states.
 * @title State Prerequisite
 */
export type StatePrerequisite = {
  id: StateIdentifier

  display_option?: DisplayOption
}
