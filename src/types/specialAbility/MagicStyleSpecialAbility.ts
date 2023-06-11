/**
 * @main MagicStyleSpecialAbility
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../validation/filename.js"
import * as Activatable from "../_Activatable.js"
import { AdvancedMagicalSpecialAbilityIdentifier } from "../_Identifier.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Magic Style Special Ability
 */
export type MagicStyleSpecialAbility = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  maximum?: Activatable.Maximum

  advanced: Activatable.AdvancedSpecialAbilities<AdvancedMagicalSpecialAbilityIdentifier>

  prerequisites?: GeneralPrerequisites

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<MagicStyleSpecialAbilityTranslation>
}

export type MagicStyleSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  rules: Activatable.Rules

  errata?: Errata
}

export const config: TypeConfig<MagicStyleSpecialAbility> = {
  name: "MagicStyleSpecialAbility",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("MagicStyleSpecialAbility"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
