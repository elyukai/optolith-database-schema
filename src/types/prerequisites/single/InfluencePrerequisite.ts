import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Influence Prerequisite
 */
export type InfluencePrerequisite = {
  /**
   * The influence's identifier.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * If the referenced influence must or must not be chosen.
   */
  active: boolean

  display_option?: DisplayOption
}
