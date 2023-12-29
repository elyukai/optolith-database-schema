/**
 * @main Element
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"

/**
 * @title Element
 */
export type Element = {
  /**
   * The element's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ElementTranslation>
}

export type ElementTranslation ={
  /**
   * The element's name.
   * @minLength 1
   */
  name: string
}

export const config: TypeConfig<Element, Element["id"], "Element"> = {
  name: "Element",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Element"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
