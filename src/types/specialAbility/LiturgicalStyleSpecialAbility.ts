/**
 * @main LiturgicalStyleSpecialAbility
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import * as Activatable from "../_Activatable.js"
import { AdvancedKarmaSpecialAbilityIdentifier } from "../_Identifier.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"

/**
 * @title Liturgical Style Special Ability
 */
export type LiturgicalStyleSpecialAbility = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  maximum?: Activatable.Maximum

  advanced: Activatable.AdvancedSpecialAbilities<AdvancedKarmaSpecialAbilityIdentifier>

  prerequisites?: GeneralPrerequisites

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<LiturgicalStyleSpecialAbilityTranslation>
}

export type LiturgicalStyleSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  rules: Activatable.Rules

  // advanced_append?: Activatable.AdvancedSpecialAbilitiesAppend

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<LiturgicalStyleSpecialAbility>(import.meta.url)
