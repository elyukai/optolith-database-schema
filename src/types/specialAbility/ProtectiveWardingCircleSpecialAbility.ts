/**
 * @main ProtectiveWardingCircleSpecialAbility
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../validation/filename.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyMarkdown } from "../_NonEmptyString.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Protective Warding Circle Special Ability
 */
export type ProtectiveWardingCircleSpecialAbility = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  maximum?: Activatable.Maximum

  prerequisites?: GeneralPrerequisites

  /**
   * The cost in AE.
   * @integer
   * @minimum 0
   */
  cost: number

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ProtectiveWardingCircleSpecialAbilityTranslation>
}

export type ProtectiveWardingCircleSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  /**
   * The rules for the protective circle variant.
   */
  protective_circle: NonEmptyMarkdown

  /**
   * The rules for the warding circle variant.
   */
  warding_circle: NonEmptyMarkdown

  errata?: Errata
}

export const config: TypeConfig<ProtectiveWardingCircleSpecialAbility> = {
  name: "ProtectiveWardingCircleSpecialAbility",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("ProtectiveWardingCircleSpecialAbility"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
