/**
 * @main Poison
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Poison
 */
export type Poison = {
  /**
   * The poison's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The poison's level.
   * @integer
   * @minimum 1
   */
  level:
    | { tag: "QualityLevel" }
    | {
      tag: "Fixed"

      /**
       * @integer
       * @minimum 1
       */
      value: number
    }

  /**
   * The poison's application type(s).
   * @minItems 1
   * @uniqueItems
   */
  application_type: (
    | { tag: "Weapon" }
    | { tag: "Ingestion" }
    | { tag: "Inhalation" }
    | { tag: "Contact" }
  )[]

  /**
   * The poison's source type and dependent additional values.
   */
  source_type:
    | { tag: "AnimalVenom" }
    | {
      tag: "PlantPoison"

      /**
       * The plant poison category and dependent additional values.
       */
      category:
        | { tag: "Default" }
        | {
          tag: "Intoxicant"

          /**
           * Whether the use of the intoxicant is legal or not.
           */
          legality:
            | { tag: "Legal" }
            | { tag: "Illegal" }

          /**
           * All translations for the entry, identified by IETF language tag
           * (BCP47).
           * @minProperties 1
           */
          translations: {
            /**
             * @patternProperties ^[a-z]{2}-[A-Z]{2}$
             */
            [localeId: string]: {
              /**
               * How to ingest the intoxicant.
               * @minLength 1
               */
              ingestion: string

              /**
               * The intoxicants side effects, if any.
               * @markdown
               * @minLength 1
               */
              side_effect?: string

              /**
               * What happens if the intoxicant has been overdosed.
               * @markdown
               * @minLength 1
               */
              overdose: string

              /**
               *
               * @markdown
               * @minLength 1
               */
              special?: string

              /**
               *
               * @markdown
               * @minLength 1
               */
              addiction?: string
            }
          }
        }
    }
    | { tag: "AlchemicalPoison" }
    | { tag: "MineralPoison" }

  /**
   * Use Spirit or Toughness as a modifier for the poison.
   */
  resistance:
    | { tag: "Spirit" }
    | { tag: "Toughness" }

  /**
   * The raw (ingredients) value, in silverthalers.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * Price for one dose, in silverthalers.
   * @integer
   * @minimum 1
   */
  cost: number

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
       * The name of the poison.
       * @minLength 1
       */
      name: string

      /**
       * A list of alternative names.
       * @minItems 1
       */
      alternative_names?: {
        /**
         * An alternative name of the poison.
         * @minLength 1
         */
        name: string

        /**
         * The region where this alternative name is used.
         * @minLength 1
         */
        region?: string
      }[]

      /**
       * The normal and degraded poison's effects.
       */
      effect: {
        /**
         * The poison’s effects.
         * @markdown
         * @minLength 1
         */
        default: string

        /**
         * The degraded poison’s effects.
         * @markdown
         * @minLength 1
         */
        degraded?: string
      }

      /**
       * When the poison takes effect.
       * @minLength 1
       */
      start: string

      /**
       * The normal and degraded poison's duration.
       */
      duration: {
        /**
         * The poison’s duration.
         * @markdown
         * @minLength 1
         */
        default: string

        /**
         * The degraded poison’s duration.
         * @markdown
         * @minLength 1
         */
        degraded: string
      }

      errata?: Errata
    }
  }
}

export const validateSchema = validateSchemaCreator<Poison>(import.meta.url)
