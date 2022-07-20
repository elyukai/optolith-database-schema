/**
 * @main Element
 */

import { validateSchemaCreator } from "../validation/schema.js"
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
   * @minProperties 1
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

export const validateSchema = validateSchemaCreator<Element>(import.meta.url)
