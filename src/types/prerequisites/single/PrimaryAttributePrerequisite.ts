import { DisplayOption } from "../DisplayOption.js"

/**
 * @title Primary Attribute Prerequisite
 */
export type PrimaryAttributePrerequisite = {
  /**
   * Is the required primary attribute for spellcasters or blessed ones?
   */
  category: PrimaryAttributeCategory

  /**
   * Required value of the attribute
   * @integer
   * @minimum 9
   */
  value: number

  display_option?: DisplayOption
}

export type PrimaryAttributeCategory =
  | "Blessed"
  | "Magical"
