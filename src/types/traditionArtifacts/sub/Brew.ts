/**
 * @main Brew
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyString } from "../../_NonEmptyString.js"

/**
 * @title Brew
 */
export type Brew = {
  /**
   * The brew's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<BrewTranslation>
}

export type BrewTranslation = {
  /**
   * The brew name.
   */
  name: NonEmptyString
}

export const config: TypeConfig<Brew> = {
  name: "Brew",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Brew"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
