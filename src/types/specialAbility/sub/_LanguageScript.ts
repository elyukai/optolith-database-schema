import { ContinentIdentifier } from "../../_Identifier"

export type AssociatedContinent = {
  /**
   * The continent's identifier.
   */
  id: ContinentIdentifier

  /**
   * Is the language considered virtually extinct in this continent?
   */
  is_extinct: boolean
}
