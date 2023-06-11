/**
 * @main AnimalShapePath
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
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

export const config: TypeConfig<AnimalShapePath> = {
  name: "AnimalShapePath",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("AnimalShapePath"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
