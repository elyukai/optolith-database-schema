/**
 * @main MagicalSign
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { PropertyReference } from "../_SimpleReferences.js"

/**
 * @title Magical Sign
 */
export type MagicalSign = {
  id: Activatable.Id

  prerequisites?: GeneralPrerequisites

  /**
   * The associated magic property.
   */
  property: PropertyReference

  /**
   * The adventure points value.
   * @integer
   * @minimum 0
   */
  ap_value: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ProtectiveWardingCircleSpecialAbilityTranslation>
}

export type ProtectiveWardingCircleSpecialAbilityTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  effect: Activatable.Effect

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<MagicalSign>(import.meta.url)
