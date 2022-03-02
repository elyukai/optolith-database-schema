/**
 * @main Guideline
 */

/**
 * @title Guideline
 */
 export type Guideline = {
  /**
   * The region's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Maximum number of spells that can be exchanged.
   * @integer
   * @minimum 0
   */
  spellwork_changes_allowed: number

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
       * The guideline name.
       * @minLength 1
       */
      name: string
    }
  }
}
