import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"

/**
 * @title Display Option
 */
export type DisplayOption =
  | { tag: "Hide"; hide: {} }
  | { tag: "ReplaceWith"; replace_with: ReplacementDisplayOption }

export type ReplacementDisplayOption = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<NonEmptyString>
}
