/**
 * @main Reach
 */

import { TypeConfig } from "../../../../typeConfig.js"
import { todo } from "../../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../../validation/filename.js"
import { LocaleMap } from "../../../_LocaleMap.js"
import { NonEmptyString } from "../../../_NonEmptyString.js"

/**
 * @title Reach
 */
export type Reach = {
  /**
   * The reach's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ReachTranslation>
}

export type ReachTranslation = {
  /**
   * The name of the reach.
   */
  name: NonEmptyString
}

export const config: TypeConfig<Reach, Reach["id"], "Reach"> = {
  name: "Reach",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Reach"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
