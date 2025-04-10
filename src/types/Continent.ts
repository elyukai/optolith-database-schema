/**
 * @main Continent
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"

/**
 * Continents are mostly referenced to in languages and scripts that occur on a specific continent.
 * @title Continent
 */
export type Continent = {
  /**
   * The continent's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ContinentTranslation>
}

export type ContinentTranslation = {
  /**
   * The continent name.
   * @minLength 1
   */
  name: string
}

export const config: TypeConfig<Continent, Continent["id"], "Continent"> = {
  name: "Continent",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Continent"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
