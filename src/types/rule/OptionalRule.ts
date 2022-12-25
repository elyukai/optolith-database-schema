/**
 * @main OptionalRule
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../_NonEmptyString.js"

/**
 * @title Optional Rule
 */
export type OptionalRule = {
  /**
   * The optional rule's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Has the focus rule not been implemented in Optolith yet? This is also true
   * if the focus rule does not (currently) apply to any Optolith feature.
   */
  is_missing_implementation: boolean

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<OptionalRuleTranslation>
}

export type OptionalRuleTranslation = {
  /**
   * The name of the optional rule.
   */
  name: NonEmptyString

  /**
   * The description of the optional rule.
   */
  description: NonEmptyMarkdown

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<OptionalRule>(import.meta.url)
