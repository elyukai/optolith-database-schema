/**
 * @main CommandSpecialAbility
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../validation/filename.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Command Special Ability
 */
export type CommandSpecialAbility = {
  id: Activatable.Id

  levels?: Activatable.Levels

  usage_type: Activatable.CombatSpecialAbilityUsageType

  select_options?: Activatable.SelectOptions

  maximum?: Activatable.Maximum

  prerequisites?: GeneralPrerequisites

  combat_techniques: Activatable.ApplicableCombatTechniques

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<CommandSpecialAbilityTranslation>
}

export type CommandSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  rules: Activatable.Rules

  errata?: Errata
}

export const config: TypeConfig<
  CommandSpecialAbility,
  CommandSpecialAbility["id"],
  "CommandSpecialAbility"
> = {
  name: "CommandSpecialAbility",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("CommandSpecialAbility"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
