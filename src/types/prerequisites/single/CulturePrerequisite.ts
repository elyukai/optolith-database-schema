import { CultureIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * Requires a specific culture or one of a specific set of cultures.
 * @title Culture Prerequisite
 */
export type CulturePrerequisite = {
  /**
   * The culture's identifier.
   */
  id: CultureIdentifier

  display_option?: DisplayOption
}
