/**
 * @main PatronCategory
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
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
   * The list of cultures where patrons from this category can be the primary patron of.
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

export const config: TypeConfig<PatronCategory, PatronCategory["id"], "PatronCategory"> = {
  name: "PatronCategory",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("PatronCategory"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
