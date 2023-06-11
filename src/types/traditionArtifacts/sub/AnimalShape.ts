/**
 * @main AnimalShape
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
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

export const config: TypeConfig<AnimalShape> = {
  name: "AnimalShape",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("AnimalShape"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
