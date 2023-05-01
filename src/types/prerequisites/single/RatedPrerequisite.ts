import { RatedIdentifier } from "../../_IdentifierGroup.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Rated Prerequisite
 */
export type RatedPrerequisite = {
  /**
   * The rated entry's identifier.
   */
  id: RatedIdentifier

  /**
   * The required minimum value.
   * @integer
   * @minimum 0
   */
  value: number

  display_option?: DisplayOption
}
