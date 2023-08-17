/**
 * @main PactGift
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../validation/filename.js"
import * as Activatable from "../_Activatable.js"
import { ActivatableIdentifier } from "../_IdentifierGroup.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Pact Gift
 */
export type PactGift = {
  id: Activatable.Id

  levels?: Activatable.Levels

  select_options?: Activatable.SelectOptions

  maximum?: Activatable.Maximum

  permanent_demonic_consumption?: PactGiftPermanentDemonicConsumption

  /**
   * This pact gift has direct influence on the existence of other entries. It
   * may add or remove entries.
   * @minItems 1
   */
  automatic_entries?: AutomaticEntry[]

  prerequisites?: GeneralPrerequisites

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<PactGiftTranslation>
}

export type PactGiftPermanentDemonicConsumption =
  | { tag: "Fixed"; fixed: FixedPactGiftPermanentDemonicConsumption }
  | { tag: "PerLevel"; per_level: PactGiftPermanentDemonicConsumptionPerLevel }

export type FixedPactGiftPermanentDemonicConsumption = {
  /**
   * The levels of *Demonic Consumption* the pact gift causes.
   * @integer
   * @minimum 1
   * @maximum 4
   */
  levels: number
}

export type PactGiftPermanentDemonicConsumptionPerLevel = {
  /**
   * The levels of *Demonic Consumption* the pact gift causes per activated
   * level of the pact gift.
   * @integer
   * @minimum 1
   * @maximum 4
   */
  levels: number
}

export type AutomaticEntry = {
  /**
   * What type of action is applied to the target entry?
   */
  action: AutomaticEntryAction

  /**
   * If an entry is added or removed, does is cost or grant adventure points
   * or is it free of charge?
   */
  apply_ap_value: boolean

  /**
   * The entry that is to be added or removed. It can be a fixed entry or a
   * selection where the player must choose one entry.
   */
  target: AutomaticEntryTarget
}

export type AutomaticEntryAction =
  | "Add"
  | "Remove"

export type AutomaticEntryTarget =
  | { tag: "Selection"; selection: AutomaticEntryTargetSelection }
  | { tag: "Fixed"; fixed: FixedAutomaticEntryTarget }

export type AutomaticEntryTargetSelection = {
  list: AutomaticEntryTargetSelectionList
}

export type AutomaticEntryTargetSelectionList =
  | "MagicalTraditions"
  | "MagicalDilettanteTraditions"

export type FixedAutomaticEntryTarget = {
  id: ActivatableIdentifier
}

export type PactGiftTranslation = {
  name: Activatable.Name

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  effect: Activatable.Effect

  errata?: Errata
}

export const config: TypeConfig<PactGift> = {
  name: "PactGift",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("PactGift"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
