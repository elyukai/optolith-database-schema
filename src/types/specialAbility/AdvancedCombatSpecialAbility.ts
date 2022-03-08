/**
 * @main AdvancedCombatSpecialAbility
 */

import { Errata } from "../source/_Erratum"
import { PublicationRefs } from "../source/_PublicationRef"
import * as Activatable from "../_Activatable"

/**
 * @title Advanced Combat Special Ability
 */
export type AdvancedCombatSpecialAbility = {
  id: Activatable.Id

  levels?: Activatable.Levels

  // max?: Activatable.Maximum

  usage_type: Activatable.CombatSpecialAbilityType

  // select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  // prerequisites?: Prerequisite.GroupCollection.General

  combat_techniques: Activatable.ApplicableCombatTechniques

  ap_value: Activatable.AdventurePointsValue

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
      name: Activatable.Name

      name_in_library?: Activatable.NameInLibrary

      // input?: Activatable.Input

      rules: Activatable.Rules

      // penalty?: Activatable.Penalty

      // prerequisites?: Activatable.PrerequisitesReplacement

      // prerequisites_start?: Activatable.PrerequisitesStart

      // prerequisites_end?: Activatable.PrerequisitesEnd

      // ap_value?: Activatable.AdventurePointsValueReplacement

      // ap_value_append?: Activatable.AdventurePointsValueAppend

      errata?: Errata
    }
  }
}
