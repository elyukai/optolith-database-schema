/**
 * @main MagicalRune
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { CheckResultBasedDuration } from "../_ActivatableSkillDuration.js"
import { Effect } from "../_ActivatableSkillEffect.js"
import { CloseCombatTechniqueIdentifier } from "../_Identifier.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"
import { ResponsiveText, ResponsiveTextOptional } from "../_ResponsiveText.js"
import { PropertyReference } from "../_SimpleReferences.js"
import { SkillCheck } from "../_SkillCheck.js"

/**
 * @title Magical Rune
 */
export type MagicalRune = {
  /**
   * The magical rune's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  option?: MagicalRuneOption

  /**
   * Lists the linked three attributes used to make a skill check.
   */
  check: SkillCheck

  /**
   * In some cases, the target's Spirit or Toughness is applied as a penalty.
   */
  check_penalty?: MagicalRuneCheckPenalty

  /**
   * Measurable parameters of a magical rune.
   */
  parameters: MagicalRunePerformanceParameters

  /**
   * The associated property.
   */
  property: PropertyReference

  /**
   * States which column is used to improve the skill.
   */
  improvement_cost: ImprovementCost

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<MagicalRuneTranslation>
}

export type MagicalRuneTranslation = {
  /**
   * The name of the magical rune.
   *
   * If the rune has an option, the option’s name will/should not be included in
   * the name as well as its surrounding parenthesis. It will/should be combined
   * on demand.
   */
  name: NonEmptyString

  /**
   * The native name of the magical rune.
   */
  native_name: NonEmptyString

  /**
   * The effect description may be either a plain text or a text that is
   * divided by a list of effects for each quality level. It may also be a
   * list for each two quality levels.
   */
  effect: Effect

  /**
   * @deprecated
   */
  cost: { full: string; abbr: string }

  /**
   * @deprecated
   */
  crafting_time: {
    slow: { full: string; abbr: string }
    fast: { full: string; abbr: string }
  }

  /**
   * @deprecated
   */
  duration: {
    slow: { full: string; abbr: string }
    fast: { full: string; abbr: string }
  }

  errata?: Errata
}

export type MagicalRuneCheckPenalty =
  | { tag: "CloseCombatTechnique"; close_combat_technique: MagicalRuneCloseCombatTechniqueCheckPenalty }

export type MagicalRuneCloseCombatTechniqueCheckPenalty = {
  /**
   * A map from close combat techniques to their modifiers.
   * @minItems 1
   */
  map: MagicalRuneCloseCombatTechniqueCheckPenaltyMapping[]

  rest: MagicalRuneCloseCombatTechniqueCheckPenaltyRest
}

export type MagicalRuneCloseCombatTechniqueCheckPenaltyMapping = {
  /**
   * The close combat technique's identifier.
   */
  combat_technique_id: CloseCombatTechniqueIdentifier

  /**
   * The check modifier for the specified close combat technique.
   * @integer
   */
  modifier: number
}

export type MagicalRuneCloseCombatTechniqueCheckPenaltyRest = {
  /**
   * The check modifier for close combat techniques not specified in `map`.
   * @integer
   */
  modifier: number
}

/**
 * Measurable parameters of a magical rune.
 */
export type MagicalRunePerformanceParameters = {
  /**
   * The AE cost.
   */
  cost: MagicalRuneCost

  /**
   * The crafting time.
   */
  crafting_time: MagicalRuneCraftingTime

  /**
   * The duration.
   */
  duration: MagicalRuneDuration
}

export type MagicalRuneCost =
  | { tag: "Single"; single: SingleMagicalRuneCost }
  | { tag: "Disjunction"; disjunction: MagicalRuneCostDisjunction }

export type SingleMagicalRuneCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<SingleMagicalRuneCostTranslation>
}

export type SingleMagicalRuneCostTranslation = {
  /**
   * A note, appended to the generated string in parenthesis.
   */
  note: ResponsiveTextOptional
}

export type MagicalRuneCostDisjunction = {
  /**
   * A set of possible AE cost values.
   * @minItems 2
   */
  list: SingleMagicalRuneCost[]
}

export type MagicalRuneCraftingTime = {
  /**
   * The (unitless) crafting time.
   */
  value: 1 | 2 | 4

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<MagicalRuneCraftingTimeTranslation>
}

export type MagicalRuneCraftingTimeTranslation = {
  /**
   * The crafting time has to be per a specific countable entity, e.g. `8
   * action per person`.
   */
  per: ResponsiveText
}

export type MagicalRuneDuration = {
  /**
   * The duration on slow rune application.
   */
  slow: CheckResultBasedDuration

  /**
   * The duration on fast rune application.
   */
  fast: CheckResultBasedDuration
}

export type MagicalRuneOption = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<MagicalRuneOptionTranslation>
}

export type MagicalRuneOptionTranslation = {
  /**
   * The name of the option.
   *
   * The surrounding parenthesis will/should not be included, they will/should
   * be generated.
   */
  name: NonEmptyString
}

export const validateSchema = validateSchemaCreator<MagicalRune>(import.meta.url)
