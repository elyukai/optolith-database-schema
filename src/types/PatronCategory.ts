/**
 * @main PatronCategory
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { CultureReference } from "./_SimpleReferences.js"

/**
 * @title Patron Category
 */
export type PatronCategory = {
  /**
   * The patron category's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The list of cultures where patrons from this category can be the primary
   * patron of.
   * @minItems 1
   * @uniqueItems
   */
  primary_patron_cultures: CultureReference[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<PatronCategoryTranslation>
}

export type PatronCategoryTranslation = {
  /**
   * The name of the patron category.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<PatronCategory>(import.meta.url)
