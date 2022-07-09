/**
 * All translations for the entry, identified by IETF language tag (BCP47).
 * @minProperties 1
 */
export type LocaleMap<T> = {
  /**
   * @patternProperties ^[a-z]{2}-[A-Z]{2}$
   */
  [locale: string]: T
}
