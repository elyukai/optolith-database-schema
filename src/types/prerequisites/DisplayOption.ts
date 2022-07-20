import { LocaleMap } from "../_LocaleMap"

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
    translations: LocaleMap<NonEmptyString>
  }

/**
 * @minLength 1
 */
type NonEmptyString = string
