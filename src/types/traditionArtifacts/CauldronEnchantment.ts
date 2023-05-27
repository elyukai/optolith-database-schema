/**
 * @main CauldronEnchantment
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
 * @title Cauldron Enchantment
 */
export type CauldronEnchantment = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  maximum?: Activatable.Maximum

  prerequisites?: GeneralPrerequisites

  volume: Activatable.Volume

  /**
   * Witches can learn to brew special things in their Witch's Cauldron. These
   * brews can be categorized in different types.
   */
  brew: BrewReference

  cost?: Activatable.EnchantmentCost

  property: Activatable.Property

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<CauldronEnchantmentTranslation>
}

export type BrewReference = {
  /**
   * The brew's identifier.
   * @integer
   * @minimum 1
   * @maximum 4
   */
  id: number
}

export type CauldronEnchantmentTranslation = {
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

  errata?: Errata
}

export const config: TypeConfig<CauldronEnchantment> = {
  name: "CauldronEnchantment",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("CauldronEnchantment"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
