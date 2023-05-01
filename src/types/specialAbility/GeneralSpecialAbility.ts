/**
 * @main GeneralSpecialAbility
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title General Special Ability
 */
export type GeneralSpecialAbility = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  maximum?: Activatable.Maximum

  prerequisites?: GeneralPrerequisites

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<GeneralSpecialAbilityTranslation>
}

export type GeneralSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  /**
   * A string that is used as a label for an input field.
   */
  input?: Activatable.Input

  rules: Activatable.Rules

  /**
   * A string that gets appended to the default AP Value text with a preceding
   * space. This always happens if present, even if the generated AP Value text
   * is replaced.
   */
  ap_value_append?: Activatable.AdventurePointsValueAppend

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<GeneralSpecialAbility>(import.meta.url)
