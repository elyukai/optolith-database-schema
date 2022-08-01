import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyMarkdown } from "../../_NonEmptyString.js"

/**
 * A prerequisite that is either not verifyable in general – e.g. roleplay or
 * background information – or the referenced entities were not made available
 * for use yet – e.g. races –, but which should be displayed, because it is part
 * of the prerequisite string from the sources.
 * @title Text Prerequisite
 */
export type TextPrerequisite = {
  /**
   * The method how the prerequisite should be verified. Either is passes all
   * verification text or it denies all verification tests. The latter results
   * in the associated entry to never be available for purchase.
   */
  verification: TextVerificationRule

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<TextPrerequisiteTranslation>
}

export enum TextVerificationRule {
  Pass = "Pass",
  Deny = "Deny",
}

export type TextPrerequisiteTranslation = NonEmptyMarkdown
