/**
 * @main TradeSecret
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../../_NonEmptyString.js"
import { GeneralPrerequisites } from "../../_Prerequisite.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"

/**
 * @title Trade Secret
 */
export type TradeSecret = {
  /**
   * The trade secret's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The adventure points value of the trade secret.
   * @integer
   * @minimum 1
   */
  ap_value: number

  /**
   * Is this trade secret considered secret knowledge?
   */
  is_secret_knowledge: boolean

  prerequisites?: GeneralPrerequisites

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<TradeSecretTranslation>
}

export type TradeSecretTranslation = {
  /**
   * The name of the trade secret.
   */
  name: NonEmptyString

  /**
   * The description of the trade secret.
   */
  description?: NonEmptyMarkdown

  errata?: Errata
}

export const config: TypeConfig<TradeSecret, TradeSecret["id"], "TradeSecret"> = {
  name: "TradeSecret",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("TradeSecret"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
