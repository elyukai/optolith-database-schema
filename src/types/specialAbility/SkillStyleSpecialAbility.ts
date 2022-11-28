/**
 * @main SkillStyleSpecialAbility
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import * as Activatable from "../_Activatable.js"
import { AdvancedSkillSpecialAbilityIdentifier } from "../_Identifier.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"

/**
 * @title Skill Style Special Ability
 */
export type SkillStyleSpecialAbility = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  maximum?: Activatable.Maximum

  advanced: Activatable.AdvancedSpecialAbilities<AdvancedSkillSpecialAbilityIdentifier>

  prerequisites?: GeneralPrerequisites

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<SkillStyleSpecialAbilityTranslation>
}

export type SkillStyleSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  rules: Activatable.Rules

  // advanced_append?: Activatable.AdvancedSpecialAbilitiesAppend

  // prerequisites?: Activatable.PrerequisitesReplacement

  // prerequisites_start?: Activatable.PrerequisitesStart

  // prerequisites_end?: Activatable.PrerequisitesEnd

  // ap_value?: Activatable.AdventurePointsValueReplacement

  // ap_value_append?: Activatable.AdventurePointsValueAppend

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<SkillStyleSpecialAbility>(import.meta.url)
