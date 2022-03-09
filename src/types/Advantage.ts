/**
 * @main Advantage
 */

import { Errata } from "./source/_Erratum"
import { PublicationRefs } from "./source/_PublicationRef"
import * as Activatable from "./_Activatable"

/**
 * @title Advantage
 */
export type Advantage = {
  id: Activatable.Id

  levels?: Activatable.Levels

  // select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  maximum?: Activatable.Maximum

  // prerequisites?: Prerequisite.GroupCollection.AdvantageDisadvantage

  ap_value: Activatable.AdventurePointsValue

  /**
   * Does this advantage not count towards the maximum of AP to be spent
   * on advantages?
   */
  has_no_maximum_spent_influence?: true

  /**
   * Does this advantage exclusively applies to arcane spellworks but not
   * to magical actions and applications?
   */
  is_exclusive_to_arcane_spellworks?: true

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

      /**
       * The range.
       * @markdown
       * @minLength 1
       */
      range?: string

      // prerequisites?: Activatable.PrerequisitesReplacement

      // prerequisites_start?: Activatable.PrerequisitesStart

      // prerequisites_end?: Activatable.PrerequisitesEnd

      // ap_value?: Activatable.AdventurePointsValueReplacement

      // ap_value_append?: Activatable.AdventurePointsValueAppend

      errata?: Errata
    }
  }
}
