/**
 * @main HerbalPreserve
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyString } from "../../_NonEmptyString.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { StorageLife } from "./_Herbary.js"
import { HerbReference } from "../../_SimpleReferences.js"

/**
 * @title HerbalPreserve
 */
export type HerbalPreserve = {
  /**
   * The preserve's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number
  
  /**
   * The main ingredient, a herb.
  */
  main_ingredient: HerbReference

  /**
  * The storage life of the product.
  */
  storage_life: StorageLife
  
  /**
  * All translations for the entry, identified by IETF language tag (BCP47).
  */
  translation: LocaleMap<HerbalPreserveTranslation>

  src: PublicationRefs
}
  
export type HerbalPreserveTranslation = {
  /**
  * Name of the preservation method.
  */
  name: NonEmptyString
  
  /**
  * Description of the preservation method.
  */
  preparation: NonEmptyString
  
  /**
  * Alternative effect of the product.
  */
  alternative_effect: NonEmptyString

  errata?: Errata
}

export const config: TypeConfig<HerbalPreserve, number, "HerbalPreserve"> = {
  name: "HerbalPreserve",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("HerbalPreserve"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}