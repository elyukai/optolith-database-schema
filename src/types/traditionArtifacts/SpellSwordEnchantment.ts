/**
 * @main SpellSwordEnchantment
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Spell-Sword Enchantment
 */
export type SpellSwordEnchantment = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  maximum?: Activatable.Maximum

  prerequisites?: GeneralPrerequisites

  volume: Activatable.Volume

  cost?: Activatable.EnchantmentCost

  property: Activatable.Property

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<SpellSwordEnchantmentTranslation>
}

export type SpellSwordEnchantmentTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  effect: Activatable.Effect

  /**
   * @deprecated
   */
  volume: string

  /**
   * @deprecated
   */
  aeCost?: string

  /**
   * @deprecated
   */
  bindingCost?: string

  /**
   * The AP value. It is only used if the text cannot be generated from the
   * given information.
   */
  ap_value?: Activatable.AdventurePointsValueReplacement

  errata?: Errata
}

export const validateSchema = validateSchemaCreator<SpellSwordEnchantment>(import.meta.url)
