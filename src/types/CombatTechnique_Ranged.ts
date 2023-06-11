/**
 * @main RangedCombatTechnique
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { LocaleMap } from "./_LocaleMap.js"
import { AttributeReference } from "./_SimpleReferences.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

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
   * Special rules for the combat technique that apply to all weapons in this
   * category.
   */
  special: RangedCombatTechniqueSpecialRules

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
   */
  translations: LocaleMap<RangedCombatTechniqueTranslation>
}

/**
 * Special rules for the combat technique that apply to all weapons in this
 * category.
 */
export type RangedCombatTechniqueSpecialRules = {
  has_ammunition: boolean
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

export const config: TypeConfig<RangedCombatTechnique> = {
  name: "RangedCombatTechnique",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("RangedCombatTechnique"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
