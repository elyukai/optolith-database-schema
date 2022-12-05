/**
 * @main DerivedCharacteristic
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { LocaleMap } from "./_LocaleMap.js"
import { DerivedCharacteristicPrerequisites } from "./_Prerequisite.js"

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

export const validateSchema = validateSchemaCreator<DerivedCharacteristic>(import.meta.url)
