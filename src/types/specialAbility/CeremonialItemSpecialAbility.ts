/**
 * @main CeremonialItemSpecialAbility
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Ceremonial Item Special Ability
 */
export type CeremonialItemSpecialAbility = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  maximum?: Activatable.Maximum

  aspect?: Activatable.Aspect

  prerequisites?: GeneralPrerequisites

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<CeremonialItemSpecialAbilityTranslation>
}

export type CeremonialItemSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  effect: Activatable.Effect

  /**
   * The prerequisites text. It is only used if the text cannot be generated
   * from the given information.
   */
  prerequisites?: Activatable.PrerequisitesReplacement

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<CeremonialItemSpecialAbility>(import.meta.url)
