/**
 * @main PersonalityTrait
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { PersonalityTraitPrerequisites } from "./_Prerequisite.js"
import { PersonalityTraitReference } from "./_SimpleReferences.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * A personality trait describes character aspects of a person from a certain
 * region. Higher trait levels only cover a part of the region covered by
 * lower-level traits.
 * @title Personality Trait
 */
export type PersonalityTrait = {
  /**
   * The personality trait's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The personality trait's level.
   * @integer
   * @minimum 1
   * @maximum 3
   */
  level: number

  prerequisites?: PersonalityTraitPrerequisites

  /**
   * The lower-level personality trait(s) this trait can be combined with.
   * @minItems 1
   * @uniqueItems
   */
  combination_options?: PersonalityTraitReference[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<PersonalityTraitTranslation>
}

export type PersonalityTraitTranslation = {
  /**
   * The name of the personality trait.
   */
  name: NonEmptyString

  /**
   * The effects of the personality trait. They should be sorted like they
   * are in the book.
   * @minItems 1
   */
  effects: PersonalityTraitEffect[]

  errata?: Errata
}

export type PersonalityTraitEffect = {
  /**
   * A label that is displayed and placed before the actual text.
   */
  label?: NonEmptyString

  /**
   * The effect text.
   */
  text: NonEmptyString
}

export const config: TypeConfig<PersonalityTrait, PersonalityTrait["id"], "PersonalityTrait"> = {
  name: "PersonalityTrait",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("PersonalityTrait"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
