/**
 * @main Advantage
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import * as Activatable from "./_Activatable.js"
import { LocaleMap } from "./_LocaleMap.js"
import { AdvantageDisadvantagePrerequisites } from "./_Prerequisite.js"

/**
 * @title Advantage
 */
export type Advantage = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  maximum?: Activatable.Maximum

  prerequisites?: AdvantageDisadvantagePrerequisites

  ap_value: Activatable.AdventurePointsValueAdvantagesDisadvantages

  /**
   * Does this advantage count towards the maximum of AP to be spent on
   * advantages?
   */
  has_maximum_spent_influence: boolean

  /**
   * Does this advantage exclusively applies to arcane spellworks and not
   * to magical actions and magical applications?
   */
  is_exclusive_to_arcane_spellworks: boolean

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<AdvantageTranslation>
}

export type AdvantageTranslation = {
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

export const validateSchema = validateSchemaCreator<Advantage>(import.meta.url)
