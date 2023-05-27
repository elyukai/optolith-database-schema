/**
 * @main Script
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { AlternativeName } from "../../_AlternativeNames.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyString } from "../../_NonEmptyString.js"
import { LanguageReference } from "../../_SimpleReferences.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { AssociatedContinent } from "./_LanguageScript.js"

/**
 * @title Script
 */
export type Script = {
  /**
   * The script's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The script's adventure point value.
   * @integer
   * @minimum 2
   * @multipleOf 2
   */
  ap_value: number

  /**
   * A list of languages that use this script.
   */
  associated_languages: LanguageReference[]

  /**
   * The continents this script is present on.
   * @minItems 1
   */
  continent: AssociatedContinent[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ScriptTranslation>
}

export type ScriptTranslation = {
  /**
   * The name of the language.
   */
  name: NonEmptyString

  /**
   * A list of alternative names.
   * @minItems 1
   */
  alternative_names?: AlternativeName[]

  /**
   * The description of the alphabet.
   */
  alphabet?: NonEmptyString

  errata?: Errata
}

export const config: TypeConfig<Script> = {
  name: "Script",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Script"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
