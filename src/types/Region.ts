/**
 * @main Region
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * @title Region
 */
export type Region = {
  /**
   * The region's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<RegionTranslation>
}

export type RegionTranslation = {
  /**
   * The region name.
   */
  name: NonEmptyString
}

export const config: TypeConfig<Region> = {
  name: "Region",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Region"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
