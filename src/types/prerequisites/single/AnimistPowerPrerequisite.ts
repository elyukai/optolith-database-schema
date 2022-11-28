import { AnimistPowerIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

/**
 * Requires a specific animist power to be on a minimum value.
 * @title Animist Power Prerequisite
 */
export type AnimistPowerPrerequisite = {
  /**
   * The animist power's identifier.
   */
  id: AnimistPowerIdentifier

  /**
   * The level to which the minimum value applies.
   * @integer
   * @minimum 2
   * @default 1
   */
  level?: number

  /**
   * The required minimum value.
   * @integer
   * @minimum 0
   */
  value: number

  display_option?: DisplayOption
}
