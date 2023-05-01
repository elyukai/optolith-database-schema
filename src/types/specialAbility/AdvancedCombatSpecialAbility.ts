/**
 * @main AdvancedCombatSpecialAbility
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"

/**
 * @title Advanced Combat Special Ability
 */
export type AdvancedCombatSpecialAbility = {
  id: Activatable.Id

  levels?: Activatable.Levels

  usage_type: Activatable.CombatSpecialAbilityUsageType

  select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  maximum?: Activatable.Maximum

  penalty?: Activatable.Penalty

  prerequisites?: GeneralPrerequisites

  combat_techniques: Activatable.ApplicableCombatTechniques

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<AdvancedCombatSpecialAbilityTranslation>
}

export type AdvancedCombatSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  rules: Activatable.Rules

  /**
   * @deprecated
   */
  penalty?: string

  /**
   * The AP value. It is only used if the text cannot be generated from the
   * given information.
   */
  ap_value?: Activatable.AdventurePointsValueReplacement

  /**
   * A string that gets appended to the default AP Value text with a preceding
   * space. This always happens if present, even if the generated AP Value text
   * is replaced.
   */
  ap_value_append?: Activatable.AdventurePointsValueAppend

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<AdvancedCombatSpecialAbility>(import.meta.url)
