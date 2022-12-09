/**
 * @main FamiliarsTrick
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { DurationUnit, DurationUnitValue } from "./_ActivatableSkillDuration.js"
import { LocaleMap } from "./_LocaleMap.js"
import { ResponsiveText, ResponsiveTextOptional, ResponsiveTextReplace } from "./_ResponsiveText.js"
import { AnimalTypeReference, PropertyReference } from "./_SimpleReferences.js"

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
   * The animal types this trick is available to. Either it is available to all
   * or only a list of specific animal types.
   *
   * If no animal types are given, the animal disease applies to all animal
   * types.
   */
  animal_types: AnimalTypeReference[]

  /**
   * Measurable parameters of a familiar's trick.
   */
  parameters: PerformanceParameters

  /**
   * The property of the trick.
   */
  property: Property

  /**
   * The AP value the familiar has to pay for. It may also be that a specific is
   * known by all familiar by default. In the latter case the field is not set.
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

export type Property =
  | { tag: "Fixed"; fixed: PropertyReference }
  | { tag: "Indefinite"; indefinite: IndefiniteProperty }

export type IndefiniteProperty = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<IndefinitePropertyTranslation>
}

export type IndefinitePropertyTranslation = {
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
  cost: { full: string; abbr: string }

  /**
   * @deprecated
   */
  duration: { full: string; abbr: string }

  errata?: Errata
}

/**
 * Measurable parameters of a familiar's trick.
 */
export type PerformanceParameters =
  | { tag: "OneTime"; one_time: OneTimePerformanceParameters }
  | { tag: "OneTimeInterval"; one_time_interval: OneTimeIntervalPerformanceParameters }
  | { tag: "Sustained"; sustained: SustainedPerformanceParameters }

export type OneTimePerformanceParameters = {
  cost: OneTimeCost
  duration: OneTimeDuration
}

export type OneTimeCost =
  | { tag: "Fixed"; fixed: FixedOneTimeCost }
  | { tag: "All"; all: AllOneTimeCost }
  | { tag: "Indefinite"; indefinite: IndefiniteOneTimeCost }

export type FixedOneTimeCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The interval in which you have to pay the AE cost again.
   */
  interval?: DurationUnitValue

  /**
   * All translations for the entry, identified by IETF language tag
   * (BCP47).
   */
  translations?: LocaleMap<FixedOneTimeCostTranslation>
}

export type FixedOneTimeCostTranslation = {
  /**
   * The cost have to be per a specific countable entity, e.g. `8 KP
   * per person`.
   */
  per?: ResponsiveTextOptional
}

export type AllOneTimeCost = {
  /**
   * The minimum AE the familiar has to have.
   * @integer
   * @minimum 1
   */
  minimum?: number
}

export type IndefiniteOneTimeCost = {
  /**
   * All translations for the entry, identified by IETF language tag
   * (BCP47).
   */
  translations: LocaleMap<IndefiniteOneTimeCostTranslation>
}

export type IndefiniteOneTimeCostTranslation = {
  /**
   * A description of the AE cost.
   */
  description: ResponsiveText
}

export type OneTimeDuration =
  | { tag: "Immediate"; immediate: {} }
  | { tag: "Fixed"; fixed: FixedOneTimeDuration }
  | { tag: "Indefinite"; indefinite: IndefiniteOneTimeDuration }

export type FixedOneTimeDuration = {
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
  translations?: LocaleMap<FixedOneTimeDurationTranslation>
}

export type FixedOneTimeDurationTranslation = {
  /**
   * A replacement string.
   */
  replacement?: ResponsiveTextReplace
}

export type IndefiniteOneTimeDuration = {
  /**
   * All translations for the entry, identified by IETF language tag
   * (BCP47).
   */
  translations: LocaleMap<IndefiniteOneTimeDurationTranslation>
}

export type IndefiniteOneTimeDurationTranslation = {
  /**
   * A description of the duration.
   */
  description: ResponsiveText
}

export type OneTimeIntervalPerformanceParameters = {
  cost: OneTimeIntervalCost
}

export type OneTimeIntervalCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The duration granted/added by paying the given AE cost.
   */
  interval: DurationUnitValue
}

export type SustainedPerformanceParameters = {
  cost: SustainedCost
}

export type SustainedCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The interval in which you have to pay the AE cost again.
   */
  interval: DurationUnitValue
}

export const validateSchema = validateSchemaCreator<FamiliarsTrick>(import.meta.url)
