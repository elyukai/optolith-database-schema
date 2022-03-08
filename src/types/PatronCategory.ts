/**
 * @main PatronCategory
 */

/**
 * @title Patron Category
 */
export type PatronCategory = {
  /**
   * The patron category's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The list of cultures where patrons from this category can be the primary
   * patron of.
   * @minItems 1
   * @uniqueItems
   */
  primary_patron_cultures: {
    /**
     * The culture's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }[]

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
       * The name of the patron category.
       * @minLength 1
       */
      name: string
    }
  }
}
