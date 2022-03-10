import { OneOrManyNumericIdentifiers } from "../../_Identifier"
import { DisplayOption } from "../DisplayOption"

/**
 * Requires a specific culture or one of a specific set of cultures.
 * @title Culture Prerequisite
 */
export type CulturePrerequisite = {
  tag: "Culture"

  id: OneOrManyNumericIdentifiers

  display_option?: DisplayOption
}
