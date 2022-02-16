/**
 * @main CloseCombatTechnique
 */

import { Errata } from "./_Erratum"
import { ImprovementCost } from "./_ImprovementCost"
import { PublicationRefs } from "./_PublicationRef"

/**
 * @title Close Combat Technique
 */
export type CloseCombatTechnique = {
  /**
   * An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Special rules for the combat technique that apply to all weapons in this
   * category.
   */
  special: Special;

  /**
   * The primary attribute(s).
   * @minItems 1
   * @maxItems 2
   * @uniqueItems
   */
  primary_attribute: PrimaryAttribute[];

  /**
   * The *Breaking Point Rating* of the respective combat technique.
   * @integer
   * @minimum 1
   */
  breaking_point_rating: number;

  improvement_cost: ImprovementCost;

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: Translation
  }
}

/**
 * Special rules for the combat technique that apply to all weapons in this
 * category.
 */
type Special = {
  /**
   * Is parrying possible with this combat technique?
   */
  parrying: Parrying
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

type Translation = {
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
  special?: string;

  errata?: Errata
}
