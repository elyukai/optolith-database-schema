/**
 * @main AnimalShapePath
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyString } from "../../_NonEmptyString.js"

/**
 * @title Animal Shape Path
 */
 export type AnimalShapePath = {
  /**
   * The animal shape path's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AnimalShapePathTranslation>
}

export type AnimalShapePathTranslation = {
  /**
   * The animal shape path's name.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<AnimalShapePath>(import.meta.url)
