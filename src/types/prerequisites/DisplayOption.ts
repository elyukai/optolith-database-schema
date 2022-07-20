import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"

/**
 * @title Display Option
 */
export type DisplayOption =
  | { tag: "Hide" }
  | {
    tag: "ReplaceWith"

    /**
     * All translations for the entry, identified by IETF language tag (BCP47).
     */
    translations: LocaleMap<NonEmptyString>
  }
