/**
 * @main CombatSpecialAbility
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Combat Special Ability
 */
export type CombatSpecialAbility = {
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
  translations: LocaleMap<CombatSpecialAbilityTranslation>
}

export type CombatSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  /**
   * A string that is used as a label for an input field.
   */
  input?: Activatable.Input

  rules: Activatable.Rules

  /**
   * @deprecated
   */
  penalty?: string

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<CombatSpecialAbility>(import.meta.url)
