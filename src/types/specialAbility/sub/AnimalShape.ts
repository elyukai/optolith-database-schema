/**
 * @main AnimalShape
 */

/**
 * @title Animal Shape
 */
export type AnimalShape = {
  /**
   * The animal shape's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The identifier of the animal shape's path.
   * @integer
   * @minimum 1
   */
  path_id: number

  /**
   * The identifier of the animal shape's size.
   * @integer
   * @minimum 1
   */
  size_id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The animal shape name.
       * @minLength 1
       */
      name: string
    }
  }
}
