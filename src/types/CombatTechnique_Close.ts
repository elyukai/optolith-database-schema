/**
 * @main CloseCombatTechnique
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { LocaleMap } from "./_LocaleMap.js"
import { AttributeReference } from "./_SimpleReferences.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

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
   * Special rules for the combat technique that apply to all weapons in this category.
   */
  special: CloseCombatTechniqueSpecialRules

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
  translations: LocaleMap<CloseCombatTechniqueTranslation>
}

/**
 * Special rules for the combat technique that apply to all weapons in this category.
 */
export type CloseCombatTechniqueSpecialRules = {
  /**
   * Is parrying possible with this combat technique?
   */
  can_parry: boolean

  has_damage_threshold: boolean

  has_reach: boolean

  has_length: boolean

  has_shield_size: boolean
}

export type CloseCombatTechniqueTranslation = {
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

export const config: TypeConfig<
  CloseCombatTechnique,
  CloseCombatTechnique["id"],
  "CloseCombatTechnique"
> = {
  name: "CloseCombatTechnique",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("CloseCombatTechnique"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
