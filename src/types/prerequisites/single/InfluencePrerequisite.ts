import { InfluenceIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Influence Prerequisite
 */
export type InfluencePrerequisite = {
  /**
   * The influence's identifier.
   */
  id: InfluenceIdentifier

  /**
   * If the referenced influence must or must not be chosen.
   */
  active: boolean

  display_option?: DisplayOption
}
