import { OneOrManyNumericIdentifiers } from "../../_Identifier"
import { DisplayOption } from "../DisplayOption"

/**
 * Requires a specific state or one of a specific set of states.
 * @title State Prerequisite
 */
export type StatePrerequisite = {
  tag: "Culture"

  id: OneOrManyNumericIdentifiers

  display_option?: DisplayOption
}
