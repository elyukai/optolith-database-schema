/**
 * @main HerbalAid
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
import { HerbReference } from "../../_SimpleReferences.js"

/**
 * @title HerbalAid
 */
export type HerbalAid = {
  /**
   * The aid's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number
  
  /**
   * The main ingredient, a herb.
   */
  main_ingredient: HerbReference

  /**
   * An alternative main ingredient, a herb.
   */
  alternative_main_ingredient?: HerbReference

  /**
  * Modifier for plant lore check when making the aid.
  * @integer
  */
  production_difficulty: number

  /**
  * All translations for the entry, identified by IETF language tag (BCP47).
  */
  translation: LocaleMap<HerbalAidTranslation>
}

export type HerbalAidTranslation = {
  /**
   * Name of the preservation method.
   */
  name: NonEmptyString
  /**
   * Description of the production method and/or effect.
   */
  description: NonEmptyString

  /**
  * Ingredients beside the main ingredient.
  * @minItems 1
  */
  additional_ingredients?: NonEmptyString[]

  /**
   * Tools and aids used in the production process.
   */
  typical_tools: NonEmptyString[]

  errata?: Errata

  src: PublicationRefs
}

export const config: TypeConfig<HerbalAid, number, "HerbalAid"> = {
  name: "HerbalAid",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("HerbalAid"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}