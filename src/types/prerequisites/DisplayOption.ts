/**
 * @title Display Option
 */
export type DisplayOption =
  | { tag: "Hide" }
  | {
    tag: "ReplaceWith"

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
