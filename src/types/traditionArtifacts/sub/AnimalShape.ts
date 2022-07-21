/**
 * @main AnimalShape
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyString } from "../../_NonEmptyString.js"

/**
 * @title Animal Shape
 */
export type AnimalShape = {
  /**
   * The animal shape's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The animal shape's path.
   */
  path: AnimalShapePathReference

  /**
   * The animal shape's size.
   */
  size: AnimalShapeSizeReference

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AnimalShapeTranslation>
}

export type AnimalShapePathReference = {
  /**
   * The identifier of the animal shape's path.
   * @integer
   * @minimum 1
   */
  id: number
}

export type AnimalShapeSizeReference = {
  /**
   * The identifier of the animal shape's size.
   * @integer
   * @minimum 1
   */
  id: number
}

export type AnimalShapeTranslation = {
  /**
   * The animal shape name.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<AnimalShape>(import.meta.url)
