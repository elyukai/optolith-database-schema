/**
 * @main FamiliarsTrick
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { OldParameter } from "./_ActivatableSkill.js"
import { DurationUnit, DurationUnitValue } from "./_ActivatableSkillDuration.js"
import { LocaleMap } from "./_LocaleMap.js"
import { ResponsiveText, ResponsiveTextOptional, ResponsiveTextReplace } from "./_ResponsiveText.js"
import { AnimalTypeReference, PropertyReference } from "./_SimpleReferences.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Familiar's Trick
 */
export type FamiliarsTrick = {
  /**
   * The familiar's trick's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The animal types this trick is available to. Either it is available to all or only a list of specific animal types.
   *
   * If no animal types are given, the animal disease applies to all animal types.
   */
  animal_types: AnimalTypeReference[]

  /**
   * Measurable parameters of a familiar's trick.
   */
  parameters: FamiliarsTrickPerformanceParameters

  /**
   * The property of the trick.
   */
  property: FamiliarsTrickProperty

  /**
   * The AP value the familiar has to pay for. It may also be that a specific is known by all familiar by default. In the latter case the field is not set.
   * @integer
   * @minimum 1
   */
  ap_value?: number

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<FamiliarsTrickTranslation>
}

export type FamiliarsTrickProperty =
  | { tag: "Fixed"; fixed: PropertyReference }
  | { tag: "Indefinite"; indefinite: IndefiniteFamiliarsTrickProperty }

export type IndefiniteFamiliarsTrickProperty = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<IndefiniteFamiliarsTrickPropertyTranslation>
}

export type IndefiniteFamiliarsTrickPropertyTranslation = {
  /**
   * A description of the property.
   */
  description: ResponsiveText
}

export type FamiliarsTrickTranslation = {
  /**
   * The name of the familiar's trick.
   * @minLength 1
   */
  name: string

  /**
   * The effect description.
   * @markdown
   * @minLength 1
   */
  effect: string

  /**
   * @deprecated
   */
  cost: OldParameter

  /**
   * @deprecated
   */
  duration: OldParameter

  errata?: Errata
}

/**
 * Measurable parameters of a familiar's trick.
 */
export type FamiliarsTrickPerformanceParameters =
  | { tag: "OneTime"; one_time: FamiliarsTrickOneTimePerformanceParameters }
  | {
      tag: "OneTimeInterval"
      one_time_interval: FamiliarsTrickOneTimeIntervalPerformanceParameters
    }
  | { tag: "Sustained"; sustained: FamiliarsTrickSustainedPerformanceParameters }

export type FamiliarsTrickOneTimePerformanceParameters = {
  cost: FamiliarsTrickOneTimeCost
  duration: FamiliarsTrickOneTimeDuration
}

export type FamiliarsTrickOneTimeCost =
  | { tag: "Fixed"; fixed: FamiliarsTrickFixedOneTimeCost }
  | { tag: "All"; all: FamiliarsTrickAllOneTimeCost }
  | { tag: "Indefinite"; indefinite: FamiliarsTrickIndefiniteOneTimeCost }

export type FamiliarsTrickFixedOneTimeCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  ae_value: number

  /**
   * The LP cost value.
   * @integer
   * @minimum 1
   */
  lp_value?: number

  /**
   * The interval in which you have to pay the AE cost again.
   */
  interval?: DurationUnitValue

  /**
   * All translations for the entry, identified by IETF language tag
   * (BCP47).
   */
  translations?: LocaleMap<FamiliarsTrickFixedOneTimeCostTranslation>
}

export type FamiliarsTrickFixedOneTimeCostTranslation = {
  /**
   * The cost have to be per a specific countable entity, e.g. `8 KP per person`.
   */
  per?: ResponsiveTextOptional
}

export type FamiliarsTrickAllOneTimeCost = {
  /**
   * The minimum AE the familiar has to have.
   * @integer
   * @minimum 1
   */
  minimum?: number
}

export type FamiliarsTrickIndefiniteOneTimeCost = {
  /**
   * All translations for the entry, identified by IETF language tag
   * (BCP47).
   */
  translations: LocaleMap<FamiliarsTrickIndefiniteOneTimeCostTranslation>
}

export type FamiliarsTrickIndefiniteOneTimeCostTranslation = {
  /**
   * A description of the AE cost.
   */
  description: ResponsiveText
}

export type FamiliarsTrickOneTimeDuration =
  | { tag: "Immediate"; immediate: {} }
  | { tag: "Fixed"; fixed: FamiliarsTrickFixedOneTimeDuration }
  | { tag: "Indefinite"; indefinite: FamiliarsTrickIndefiniteOneTimeDuration }

export type FamiliarsTrickFixedOneTimeDuration = {
  /**
   * If the duration is the maximum duration, so it may end earlier.
   */
  is_maximum?: boolean

  /**
   * The (unitless) duration.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The duration unit.
   */
  unit: DurationUnit

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<FamiliarsTrickFixedOneTimeDurationTranslation>
}

export type FamiliarsTrickFixedOneTimeDurationTranslation = {
  /**
   * A replacement string.
   */
  replacement?: ResponsiveTextReplace
}

export type FamiliarsTrickIndefiniteOneTimeDuration = {
  /**
   * All translations for the entry, identified by IETF language tag
   * (BCP47).
   */
  translations: LocaleMap<FamiliarsTrickIndefiniteOneTimeDurationTranslation>
}

export type FamiliarsTrickIndefiniteOneTimeDurationTranslation = {
  /**
   * A description of the duration.
   */
  description: ResponsiveText
}

export type FamiliarsTrickOneTimeIntervalPerformanceParameters = {
  cost: FamiliarsTrickOneTimeIntervalCost
}

export type FamiliarsTrickOneTimeIntervalCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  ae_value: number

  /**
   * The LP cost value.
   * @integer
   * @minimum 1
   */
  lp_value?: number

  /**
   * The duration granted/added by paying the given AE cost.
   */
  interval: DurationUnitValue
}

export type FamiliarsTrickSustainedPerformanceParameters = {
  cost: FamiliarsTrickSustainedCost
}

export type FamiliarsTrickSustainedCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  ae_value: number

  /**
   * The LP cost value.
   * @integer
   * @minimum 1
   */
  lp_value?: number

  /**
   * The interval in which you have to pay the AE cost again, if any.
   */
  interval?: DurationUnitValue
}

export const config: TypeConfig<FamiliarsTrick, FamiliarsTrick["id"], "FamiliarsTrick"> = {
  name: "FamiliarsTrick",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("FamiliarsTrick"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
