/**
 * @main Element
 */

/**
 * @title Element
 */
export type Element = {
  /**
   * The element's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

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
       * The element's name.
       * @minLength 1
       */
      name: string
    }
  }
}
