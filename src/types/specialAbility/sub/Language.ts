/**
 * @main Language
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { AlternativeName } from "../../_AlternativeNames.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyString } from "../../_NonEmptyString.js"
import { LanguagePrerequisites } from "../../_Prerequisite.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { AssociatedContinent } from "./_LanguageScript.js"

/**
 * @title Language
 */
export type Language = {
  /**
   * The language's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The continents this language is present on.
   * @minItems 1
   */
  continent: AssociatedContinent[]

  /**
   * Language-specific specializations. Either a list of possible options or a
   * indefinite description of what may be a specialization.
   */
  specializations?: Specializations

  prerequisites?: LanguagePrerequisites

  /**
   * The maximum possible level of the language. Only specified if lower than
   * default of 3.
   * @minimum 1
   * @maximum 2
   * @default 3
   */
  max_level?: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<LanguageTranslation>
}

export type Specializations =
  | { tag: "Specific"; specific: SpecificSpecializations }
  | { tag: "Indefinite"; indefinite: IndefiniteSpecializations }

export type SpecificSpecializations = {
  /**
   * A list of specific possible specializations.
   * @minItems 1
   */
  list: SpecificSpecialization[]
}

export type SpecificSpecialization = {
  /**
   * The specialization's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<SpecificSpecializationTranslation>
}

export type SpecificSpecializationTranslation = {
  /**
   * The name of the specialization.
   */
  name: NonEmptyString

  /**
   * The specialization description. It will be appended to the name in
   * parenthesis.
   */
  description?: NonEmptyString
}

export type IndefiniteSpecializations = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<IndefiniteSpecializationsTranslation>
}

export type IndefiniteSpecializationsTranslation = {
  /**
   * The specializations description.
   */
  description: NonEmptyString

  /**
   * An input label or placeholder text for an UI element if it differs
   * from the `description`.
   */
  label?: NonEmptyString
}

export type LanguageTranslation = {
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
   * The description of the language.
   */
  description?: NonEmptyString

  errata?: Errata
}

export const config: TypeConfig<Language> = {
  name: "Language",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Language"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
