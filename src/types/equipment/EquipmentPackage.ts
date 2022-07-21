/**
 * @main EquipmentPackage
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { EquipmentIdentifier } from "../_Identifier.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"

/**
 * @title Equipment Package
 */
export type EquipmentPackage = {
  /**
   * The equipment package's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All items in the package. You have to provide the item (template)
   * identifier and you can optionally provide the number of how often an item
   * is included in the package.
   * @minItems 2
   */
  items: EquipmentPackageItem[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<EquipmentPackageTranslation>
}

export type EquipmentPackageItem = {
  /**
   * The item's identifier.
   */
  id: EquipmentIdentifier

  /**
   * The number of how often the item is included in the package.
   * @integer
   * @minimum 2
   * @default 1
   */
  number?: number
}

export type EquipmentPackageTranslation = {
  /**
   * The name of the equipment package.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<EquipmentPackage>(import.meta.url)
