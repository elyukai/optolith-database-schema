export type AssociatedContinent = {
  /**
   * The continent's identifier.
   * @integer
   * @minimum 1
   * @maximum 3
   */
  id: number

  /**
   * Is the language considered virtually extinct in this continent?
   */
  is_extinct: boolean
}
