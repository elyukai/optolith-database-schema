/**
 * @main MagicalSpecialAbility
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
 * @title Magical Special Ability
 */
export type MagicalSpecialAbility = {
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
  translations: LocaleMap<MagicalSpecialAbilityTranslation>
}

export type MagicalSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  /**
   * A string that is used as a label for an input field.
   */
  input?: Activatable.Input

  rules: Activatable.Rules

  /**
   * The AP value. It is only used if the text cannot be generated from the given information.
   */
  ap_value?: Activatable.AdventurePointsValueReplacement

  errata?: Errata
}

export const config: TypeConfig<
  MagicalSpecialAbility,
  MagicalSpecialAbility["id"],
  "MagicalSpecialAbility"
> = {
  name: "MagicalSpecialAbility",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("MagicalSpecialAbility"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
