/**
 * @main TargetCategory
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { TargetCategoryIdentifier } from "./_Identifier.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Target Category
 */
export type TargetCategory = {
  /**
   * The target category's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * A superordinate target category, if present.
   */
  parent?: TargetCategoryParent

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<TargetCategoryTranslation>
}

/**
 * A superordinate target category, if present.
 */
export type TargetCategoryParent = {
  /**
   * The identifier of the superordinate target category.
   */
  id: TargetCategoryIdentifier
}

export type TargetCategoryTranslation = {
  /**
   * The target category name.
   */
  name: NonEmptyString
}

export const config: TypeConfig<TargetCategory> = {
  name: "TargetCategory",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("TargetCategory"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
