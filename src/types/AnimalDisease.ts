/**
 * @main AnimalDisease
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { Cause, DiseaseTranslation, Resistance } from "./_Disease.js"
import { LocaleMap } from "./_LocaleMap.js"

/**
 * @title Animal Disease
 */
export type AnimalDisease = {
  /**
   * The animal disease's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The animal disease's level.
   * @integer
   * @minimum 1
   */
  level: number

  /**
   * Depending on the disease, apply Spirit or Toughness as a penalty to the
   * disease roll. It may also happen that the lower of both is applied as a
   * penalty.
   */
  resistance: Resistance

  /**
   * What causes the disease? The GM rolls 1D20 to see if a character gets
   * infected. If the infection check succeeds, the GM makes a disease check to
   * determine the severity of the infection.
   * @minItems 1
   */
  cause: Cause[]

  /**
   * The animal types this disease applies to.
   */
  animal_types: AnimalTypes

  /**
   * If and at which chance the disease can be communicated to intelligent
   * creatures.
   */
  communicability_to_intelligent_creatures: CommunicabilityToIntelligentCreatures

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<DiseaseTranslation>
}

/**
 * The animal types this disease applies to.
 */
export type AnimalTypes =
  | { tag: "All" }
  | {
    tag: "Specific"

    /**
     * The list of specific animal types this disease applies to.
     * @minItems 1
     */
    list: AnimalType[]
  }

export type AnimalType = {
  /**
   * The animal type's identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

/**
 * If and at which chance the disease can be communicated to intelligent
 * creatures.
 */
export type CommunicabilityToIntelligentCreatures =
  | { tag: "NonCommunicable" }
  | {
    tag: "Communicable"

    /**
     * What causes the communication? The GM rolls 1D20 to see if a character
     * gets infected. If the infection check succeeds, the GM makes a disease
     * check to determine the severity of the infection.
     * @minItems 1
     */
    cause: Cause[]
  }

export const validateSchema = validateSchemaCreator<AnimalDisease>(import.meta.url)
