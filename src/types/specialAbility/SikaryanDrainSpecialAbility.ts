/**
 * @main SikaryanDrainSpecialAbility
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../validation/filename.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Sikaryan Drain Special Ability
 */
export type SikaryanDrainSpecialAbility = {
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
  translations: LocaleMap<SikaryanDrainSpecialAbilityTranslation>
}

export type SikaryanDrainSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  rules: Activatable.Rules

  /**
   * The AP value. It is only used if the text cannot be generated from the
   * given information.
   */
  ap_value?: Activatable.AdventurePointsValueReplacement

  errata?: Errata
}

export const config: TypeConfig<SikaryanDrainSpecialAbility> = {
  name: "SikaryanDrainSpecialAbility",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("SikaryanDrainSpecialAbility"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
