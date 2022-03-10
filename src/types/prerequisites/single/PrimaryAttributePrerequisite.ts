import { DisplayOption } from "../DisplayOption"

/**
 * @title Primary Attribute Prerequisite
 */
export type PrimaryAttributePrerequisite = {
  tag: "PrimaryAttribute"

  /**
   * Is the required primary attribute for spellcasters or blessed ones?
   */
  category:
    | { tag: "Blessed" }
    | { tag: "Magical" }

  /**
   * Required value of the attribute
   * @integer
   * @minimum 9
   */
  value: number

  display_option?: DisplayOption
}
