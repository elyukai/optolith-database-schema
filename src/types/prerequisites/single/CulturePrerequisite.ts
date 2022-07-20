import { OneOrManyNumericIdentifiers } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * Requires a specific culture or one of a specific set of cultures.
 * @title Culture Prerequisite
 */
export type CulturePrerequisite = {
  id: OneOrManyNumericIdentifiers

  display_option?: DisplayOption
}
