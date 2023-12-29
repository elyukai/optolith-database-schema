/**
 * @main SkillStyleSpecialAbility
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../validation/filename.js"
import * as Activatable from "../_Activatable.js"
import { AdvancedSkillSpecialAbilityIdentifier } from "../_Identifier.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

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

  errata?: Errata
}

export const config: TypeConfig<SkillStyleSpecialAbility, SkillStyleSpecialAbility["id"], "SkillStyleSpecialAbility"> = {
  name: "SkillStyleSpecialAbility",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("SkillStyleSpecialAbility"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
