/**
 * @main CloseCombatTechnique
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { ImprovementCost } from "./_ImprovementCost.js"

/**
 * @title Close Combat Technique
 */
export type CloseCombatTechnique = {
  /**
   * The close combat technique's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Special rules for the combat technique that apply to all weapons in this
   * category.
   */
  special: {
    /**
     * Is parrying possible with this combat technique?
     */
    parrying: Parrying
  }

  /**
   * The primary attribute(s).
   * @minItems 1
   * @maxItems 2
   * @uniqueItems
   */
  primary_attribute: PrimaryAttribute[]

  /**
   * The *Breaking Point Rating* of the respective combat technique.
   * @integer
   * @minimum 1
   */
  breaking_point_rating: number

  improvement_cost: ImprovementCost

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
       * The name of the condition.
       * @minLength 1
       */
      name: string

      /**
       * Additional rules for the condition, if applicable.
       * @markdown
       * @minLength 1
       */
      special?: string

      errata?: Errata
    }
  }
}

/**
 * Is parrying possible with this combat technique?
 */
type Parrying =
  | { tag: "Possible" }
  | { tag: "Impossible" }

/**
 * The attribute's identifier.
 * @integer
 * @minimum 1
 */
type PrimaryAttribute = number

export const validateSchema = validateSchemaCreator<CloseCombatTechnique>(import.meta.url)
