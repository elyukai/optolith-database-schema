/**
 * @main FamiliarSpecialAbility
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"

/**
 * @title Familiar Special Ability
 */
export type FamiliarSpecialAbility = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  maximum?: Activatable.Maximum

  prerequisites?: GeneralPrerequisites

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<FamiliarSpecialAbilityTranslation>
}

export type FamiliarSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  effect: Activatable.Effect

  // prerequisites?: Activatable.PrerequisitesReplacement

  // prerequisites_start?: Activatable.PrerequisitesStart

  // prerequisites_end?: Activatable.PrerequisitesEnd

  // ap_value?: Activatable.AdventurePointsValueReplacement

  // ap_value_append?: Activatable.AdventurePointsValueAppend

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<FamiliarSpecialAbility>(import.meta.url)
