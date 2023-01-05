import { DurationUnitValue } from "./_ActivatableSkillDuration.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { ResponsiveText, ResponsiveTextOptional, ResponsiveTextReplace } from "./_ResponsiveText.js"

export type OneTimeCost =
  | {
    tag: "Single"
    single: SingleOneTimeCost
  }
  | {
    tag: "Conjunction"
    conjunction: MultipleOneTimeCosts
  }
  | {
    tag: "Disjunction"
    disjunction: MultipleOneTimeCosts
  }
  | {
    tag: "Map"
    map: CostMap
  }

export type SingleOneTimeCost =
  | {
    tag: "Modifiable"
    modifiable: ModifiableOneTimeCost
  }
  | {
    tag: "NonModifiable"
    non_modifiable: NonModifiableOneTimeCost
  }
  | {
    tag: "Indefinite"
    indefinite: IndefiniteOneTimeCost
  }

/**
 * @minItems 2
 */
export type MultipleOneTimeCosts = SingleOneTimeCost[]

export type ModifiableOneTimeCost = {
  /**
   * The initial skill modification identifier/level.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  initial_modification_level: number

  /**
   * The part of the cost value that has to be spent permanently.
   * @integer
   * @minimum 1
   */
  permanent_value?: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<ModifiableOneTimeCostTranslation>
}

export type ModifiableOneTimeCostTranslation = {
  /**
   * A replacement string.
   */
  replacement: ResponsiveTextReplace
}

export type NonModifiableOneTimeCost = {
  /**
   * If `true`, the non-modifiable value is a minimum value.
   */
  is_minimum?: boolean

  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The part of the cost value that has to be spent permanently.
   * @integer
   * @minimum 1
   */
  permanent_value?: number

  /**
   * The cost have to be per a specific countable entity, e.g. `8 KP per
   * person`.
   */
  per?: NonModifiableOneTimeCostPerCountable

  /**
   * All translations for the entry, identified by IETF language tag
   * (BCP47).
   */
  translations?: LocaleMap<NonModifiableOneTimeCostTranslation>
}

export type NonModifiableOneTimeCostPerCountable = {
  /**
   * If defined, the minimum total AE that have to be spent casting the
   * skill.
   */
  minimum_total?: number

  /**
   * All translations for the entry, identified by IETF language tag
   * (BCP47).
   */
  translations: LocaleMap<NonModifiableOneTimeCostPerCountableTranslation>
}

export type NonModifiableOneTimeCostPerCountableTranslation = {
  /**
   * The countable entity name.
   */
  countable: ResponsiveText
}

export type NonModifiableOneTimeCostTranslation = {
  /**
   * A note, appended to the generated string in parenthesis.
   */
  note: ResponsiveTextOptional
}

export type IndefiniteOneTimeCost = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<IndefiniteOneTimeCostTranslation>
}

export type IndefiniteOneTimeCostTranslation = {
  /**
   * A description of where the cost come from.
   */
  description: ResponsiveText
}

/**
 * A content that is `2/4/8/16 AE for an item the size of a
 * cup/chest/door/castle gate` may be respresented as the following map:
 *
 * ```yaml
 * options:
 *   - value: 2
 *     label: "cup"
 *   - value: 4
 *     label: "chest"
 *   - value: 8
 *     label: "door"
 *   - value: 16
 *     label: "castle gate"
 * for_append: "an item the size of a"
 * ```
 *
 * This will generate the exact same string as seen above – given it is set
 * for a spellwork and thus `AE` is used.
 */
export type CostMap = {
  /**
   * The possible costs and associated labels.
   * @minItems 2
   */
  options: CostMapOption[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<CostMapTranslation>
}

export type CostMapOption = {
  /**
   * The full cost value for this option.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The part of the `value` that has to be paid permanently.
   * @integer
   * @minimum 0
   */
  permanent_value?: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<CostMapOptionTranslation>
}

export type CostMapOptionTranslation = {
  /**
   * The description of the option for cost string generation.
   */
  label: NonEmptyString

  /**
   * The description of the option if used standalone. Only used if
   * different from `label`.
   */
  label_standalone?: NonEmptyString
}

export type CostMapTranslation = {
  /**
   * Place a string between the `for` and the grouped map option labels.
   */
  list_prepend?: NonEmptyString

  /**
   * Place a string after the grouped map option labels.
   */
  list_append?: NonEmptyString

  /**
   * If the string from the book cannot be generated using the default
   * generation technique, use this string. All options still need to be
   * inserted propertly, since it may be used by in-game tools to provide a
   * selection to players.
   */
  replacement?: NonEmptyString
}

export type SustainedCost =
  | {
    tag: "Modifiable"
    modifiable: ModifiableSustainedCost
  }
  | {
    tag: "NonModifiable"
    non_modifiable: NonModifiableSustainedCost
  }

export type ModifiableSustainedCost = {
  /**
   * The initial skill modification identifier/level.
   * @integer
   * @minimum 1
   * @maximum 6
   */
  initial_modification_level: number

  /**
   * The sustain interval.
   */
  interval: DurationUnitValue
}

export type NonModifiableSustainedCost = {
  /**
   * If `true`, the non-modifiable value is a minimum value.
   */
  is_minimum?: boolean

  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The cost have to be per a specific countable entity, e.g. `8 KP per
   * person per 5 minutes`.
   */
  per?: NonModifiableSustainedCostPerCountable

  /**
   * The sustain interval.
   */
  interval: DurationUnitValue
}

export type NonModifiableSustainedCostPerCountable = {
  /**
   * If defined, the minimum total AE that have to be spent casting the
   * skill.
   */
  minimum_total?: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<NonModifiableSustainedCostPerCountableTranslation>
}

export type NonModifiableSustainedCostPerCountableTranslation = {
  /**
   * The countable entity name.
   */
  countable: ResponsiveText
}
