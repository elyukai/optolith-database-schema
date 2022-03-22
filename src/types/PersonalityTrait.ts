/**
 * @main PersonalityTrait
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { PersonalityTraitPrerequisites } from "./_Prerequisite.js"

/**
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
  combination_options?: {
    /**
     * The referenced personality trait's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The name of the personality trait.
       * @minLength 1
       */
      name: string

      /**
       * The effects of the personality trait. They should be sorted like they
       * are in the book.
       * @minItems 1
       */
      effects: {
        /**
         * A label that is displayed and placed before the actual text.
         * @minLength 1
         */
        label?: string

        /**
         * The effect text.
         * @minLength 1
         */
        text: string
      }[]

      errata?: Errata
    }
  }
}

export const validateSchema = validateSchemaCreator<PersonalityTrait>(import.meta.url)
