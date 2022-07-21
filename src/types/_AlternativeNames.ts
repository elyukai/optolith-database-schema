import { NonEmptyString } from "./_NonEmptyString.js"

export type AlternativeName = {
  /**
   * An alternative name of the disease.
   */
  name: NonEmptyString

  /**
   * The region where this alternative name is used.
   */
  region?: NonEmptyString
}
