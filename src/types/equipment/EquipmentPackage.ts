/**
 * @main EquipmentPackage
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../validation/filename.js"
import { EquipmentIdentifier } from "../_IdentifierGroup.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

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

  src: PublicationRefs

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

export const config: TypeConfig<EquipmentPackage> = {
  name: "EquipmentPackage",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("EquipmentPackage"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
