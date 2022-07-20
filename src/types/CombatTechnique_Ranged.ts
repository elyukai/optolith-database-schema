/**
 * @main RangedCombatTechnique
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { LocaleMap } from "./_LocaleMap.js"
import { AttributeReference } from "./_SimpleReferences.js"

/**
 * @title Ranged Combat Technique
 */
export type RangedCombatTechnique = {
  /**
   * The ranged combat technique's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The primary attribute(s).
   * @minItems 1
   * @maxItems 2
   * @uniqueItems
   */
  primary_attribute: AttributeReference[]

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
  translations: LocaleMap<RangedCombatTechniqueTranslation>
}

export type RangedCombatTechniqueTranslation = {
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

export const validateSchema = validateSchemaCreator<RangedCombatTechnique>(import.meta.url)
