/**
 * @main TargetCategory
 */

/**
 * @title Target Category
 */
export type TargetCategory = {
  /**
   * The target category's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The identifier of a superordinate target category, if present.
   * @integer
   * @minimum 1
   */
  parent_id: number

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
       * The target category name.
       * @minLength 1
       */
      name: string
    }
  }
}
