/**
 * @main Tribe
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../validation/filename.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"

/**
 * @title Tribe
 */
export type Tribe = {
  /**
   * The tribe's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<TribeTranslation>
}

export type TribeTranslation = {
  /**
   * The tribe name.
   */
  name: NonEmptyString
}

export const config: TypeConfig<Tribe> = {
  name: "Tribe",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Tribe"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
