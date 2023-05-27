/**
 * @main DerivedCharacteristic
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { LocaleMap } from "./_LocaleMap.js"
import { DerivedCharacteristicPrerequisites } from "./_Prerequisite.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Derived Characteristic
 */
export type DerivedCharacteristic = {
  /**
   * An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  prerequisites?: DerivedCharacteristicPrerequisites

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DerivedCharacteristicTranslation>
}

export type DerivedCharacteristicTranslation = {
  /**
   * The characteristic's name.
   * @minLength 1
   */
  name: string

  /**
   * The characteristic's abbreviation.
   * @minLength 1
   */
  abbreviation: string

  /**
   * Possible calculation strings for the final value.
   */
  calculation?: CalculationTranslation
}

/**
 * Possible calculation strings for the final value.
 */
export type CalculationTranslation = {
  /**
   * The default calculation string.
   * @minLength 1
   */
  default: string;

  /**
   * The calculation string if only half of the primary attribute is used.
   * @minLength 1
   */
  half_primary?: string;

  /**
   * The calculation string if no primary attribute is used.
   * @minLength 1
   */
  no_primary?: string;
}

export const config: TypeConfig<DerivedCharacteristic> = {
  name: "DerivedCharacteristic",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("DerivedCharacteristic"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
