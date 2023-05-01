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
   * If the text is a sentence or sentence-like fragment, this property ensures
   * it is integrated into the prerequisite string correctly.
   *
   * A standalone sentence is connected to the previous prerequisite string with
   * a period and a period is also added at the end of the sentence
   * automatically, if it is not present. A connected sentence is connected to
   * the previous prerequisite string with a semicolon and a period is not added
   * to the end of the sentence. In this case, if there are prerequisites after
   * this one, they will be connected using a semicolon again, unless a
   * different punctuation mark is present at the end of the given text.
   */
  sentence_type?: SentenceType

  /**
   * If the text does not represent an actual prerequisite but a prerequisite
   * for the use of certain aspects or the entry the prerequisite is associated
   * with, or something like that, this property is set to `true`.
   *
   * If all prerequisites of an entry are marked as meta, the entry is
   * considered to have no prerequisites and thus the string `none` must be
   * rendered before the list of meta prerequisites.
   *
   * This is the only use case for this property.
   */
  is_meta?: true

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<TextPrerequisiteTranslation>
}

export enum TextVerificationRule {
  Pass = "Pass",
  Deny = "Deny",
}

export enum SentenceType {
  Standalone = "Standalone",
  Connected = "Connected",
}

export type TextPrerequisiteTranslation = NonEmptyMarkdown
