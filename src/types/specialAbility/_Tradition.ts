import { NonEmptyString } from "../_NonEmptyString.js"

export type SpecialRule = {
  /**
   * An optional label that is displayed and placed before the actual text.
   */
  label?: NonEmptyString

  /**
   * The text of a special rule.
   */
  text: NonEmptyString
}
