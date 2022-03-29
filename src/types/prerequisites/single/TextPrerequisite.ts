/**
 * A prerequisite that is either not verifyable in general – e.g. roleplay or
 * background information – or the referenced entities were not made available
 * for use yet – e.g. races –, but which should be displayed, because it is part
 * of the prerequisite string from the sources.
 * @title Text Prerequisite
 */
export type TextPrerequisite = {
  tag: "Text"

  /**
   * The method how the prerequisite should be verified. Either is passes all
   * verification text or it denies all verification tests. The latter results
   * in the associated entry to never be available for purchase.
   */
  verification:
    | { tag: "Pass" }
    | { tag: "Deny" }

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     * @minLength 1
     */
    [localeId: string]: string
  }
}
