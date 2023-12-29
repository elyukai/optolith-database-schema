/**
 * @main AnimalShapeSize
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyString } from "../../_NonEmptyString.js"

/**
 * @title Animal Shape Size
 */
export type AnimalShapeSize = {
  /**
   * The animal shape's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The volume points the animal shape needs.
   * @integer
   * @minimum 1
   */
  volume: number

  /**
   * The adventure point value of the animal shape.
   * @integer
   * @minimum 1
   */
  ap_value: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AnimalShapeSizeTranslation>
}

export type AnimalShapeSizeTranslation = {
  /**
   * The animal shape size name.
   */
  name: NonEmptyString
}

export const config: TypeConfig<AnimalShapeSize, AnimalShapeSize["id"], "AnimalShapeSize"> = {
  name: "AnimalShapeSize",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("AnimalShapeSize"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
