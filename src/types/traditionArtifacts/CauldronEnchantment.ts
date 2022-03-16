/**
 * @main CauldronEnchantment
 */

import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import * as Activatable from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"

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
  brew: {
    /**
     * The brew's identifier.
     * @integer
     * @minimum 1
     * @maximum 4
     */
    id: number
  }

  cost?: Activatable.EnchantmentCost

  property: Activatable.Property

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      name: Activatable.Name

      name_in_library?: Activatable.NameInLibrary

      // input?: Activatable.Input

      effect: Activatable.Effect

      // prerequisites?: Activatable.PrerequisitesReplacement

      // prerequisites_start?: Activatable.PrerequisitesStart

      // prerequisites_end?: Activatable.PrerequisitesEnd

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

      // ap_value?: Activatable.AdventurePointsValueReplacement

      // ap_value_append?: Activatable.AdventurePointsValueAppend

      errata?: Errata
    }
  }
}
