/**
 * @main FocusRule
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../_NonEmptyString.js"
import { FocusRuleSubjectReference } from "../_SimpleReferences.js"

/**
 * @title Focus Rule
 */
export type FocusRule = {
  /**
   * The focus rule's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The associated subject.
   */
  subject: FocusRuleSubjectReference

  /**
   * The focus rule's level.
   * @integer
   * @minimum 1
   * @maximum 4
   */
  level: number

  /**
   * Has the focus rule not been implemented in Optolith yet? This is also true
   * if the focus rule does not (currently) apply to any Optolith feature.
   */
  is_missing_implementation: boolean

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<FocusRuleTranslation>
}

export type FocusRuleTranslation = {
  /**
   * The name of the focus rule.
   */
  name: NonEmptyString

  /**
   * The description of the focus rule.
   */
  description: NonEmptyMarkdown

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<FocusRule>(import.meta.url)
