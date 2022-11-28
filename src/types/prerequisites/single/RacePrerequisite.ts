import { RaceIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * Requires a specific race or one of a specific set of races. You can also
 * provide an object to say whether the hero must meet one of the races or
 * if the entry does not allow one of the races.
 * @title Race Prerequisite
 */
export type RacePrerequisite = {
  /**
   * The race's identifier.
   */
  id: RaceIdentifier

  active: boolean

  display_option?: DisplayOption
}
