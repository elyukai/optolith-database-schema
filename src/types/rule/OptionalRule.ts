/**
 * @main OptionalRule
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../_NonEmptyString.js"
import { Relevance } from "./_Rule.js"

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
   * The relevance of the optional rule for Optolith. It may be that it
   * influences character creating but it may also just influnce the character
   * sheet. If it is linked to systems in Optolith, it may be specified if this
   * rule has not been implemented in Optolith yet.
   */
  relevance: Relevance

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
