/**
 * @main Language
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { LanguagePrerequisites } from "../../_Prerequisite.js"

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
  continent: {
    /**
     * The continent's identifier.
     * @integer
     * @minimum 1
     * @maximum 3
     */
    id: number

    /**
     * Is the language considered virtually extinct in this continent?
     */
    is_extinct: boolean
  }[]

  /**
   * Language-specific specializations. Either a list of possible options or a
   * indefinite description of what may be a specialization.
   */
  specializations:
    | {
      tag: "Specific"

      /**
       * A list of specific possible specializations.
       */
      list: {
        /**
         * The specialization's identifier. An unique, increasing integer.
         * @integer
         * @minimum 1
         */
        id: number

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
             * The name of the specialization.
             * @minLength 1
             */
            name: string

            /**
             * The specialization description. It will be appended to the name in
             * parenthesis.
             * @minLength 1
             */
            description?: string
          }
        }
      }[]
    }
    | {
      tag: "Indefinite"

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
           * The specializations description.
           * @minLength 1
           */
          description: string

          /**
           * An input label or placeholder text for an UI element if it differs
           * from the `description`.
           * @minLength 1
           */
          label?: string
        }
      }
    }

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
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The name of the language.
       * @minLength 1
       */
      name: string

      /**
       * A list of alternative names.
       * @minLength 1
       */
      alternative_names?: {
        /**
         * An alternative name of the language.
         * @minLength 1
         */
        name: string
      }[]

      /**
       * The description of the language.
       * @minLength 1
       */
      description?: string

      errata?: Errata
    }
  }
}

export const validateSchema = validateSchemaCreator<Language>(import.meta.url)
