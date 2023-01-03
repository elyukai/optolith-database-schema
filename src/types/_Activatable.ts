/**
 * General type specifications used by multiple activatable entries.
 * @title Activatable
 */

import { DisplayOption } from "./prerequisites/DisplayOption.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { SelectOptionCategory, SkillApplicationOrUse } from "./_ActivatableSelectOptionCategory.js"
import { DurationUnitValue } from "./_ActivatableSkillDuration.js"
import { MagicalTraditionIdentifier, PatronIdentifier, SkillIdentifier } from "./_Identifier.js"
import { AdvancedSpecialAbilityRestrictedOptionIdentifier, CombatRelatedSpecialAbilityIdentifier, CombatTechniqueIdentifier, VolumePointsOptionReferenceIdentifier } from "./_IdentifierGroup.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "./_NonEmptyString.js"
import { GeneralPrerequisites } from "./_Prerequisite.js"
import { ResponsiveText, ResponsiveTextOptional } from "./_ResponsiveText.js"
import { AdvancedSpecialAbilityReference, AspectReference, CloseCombatTechniqueReference, CombatTechniqueReference, PropertyReference, RaceReference, RangedCombatTechniqueReference, SkillReference, WeaponReference } from "./_SimpleReferences.js"

/**
 * The activatable entry's identifier. An unique, increasing integer.
 * @integer
 * @minimum 0
 */
export type Id = number

/**
 * The name of the activatable entry.
 * @minLength 1
 */
export type Name = string

/**
 * The full name of the entry as stated in the sources. Only use when `name`
 * needs to be different from full name for text generation purposes.
 * @minLength 1
 */
export type NameInLibrary = string

/**
 * Number of available levels.
 * @integer
 * @minimum 2
 */
export type Levels = number

/**
 * The number stating how often you can buy the entry. The **default** depends on
 * the entry type:
 *
 * - **Advantage:** `1` in all cases (as specified in the **Core Rules**)
 * - **Disadvantage:** `1` in all cases (as specified in the **Core Rules**)
 * - **Special Abilities:** `1` if no options can be selected, otherwise the
 *   number of possible options
 *
 * The maximum is only set if it differs from the defaults specified above.
 * @integer
 * @minimum 1
 */
export type Maximum = number

/**
 * Definitions for possible options for the activatable entry. They can either
 * be derived from entry categories or be defined explicitly. Both can happen as
 * well, but if there is an explicitly defined select option and a derived
 * select option has the same identifier (which may only happen if skill or
 * combat technique identifiers are used for explicit select options), the
 * explicit definition overwrites the derived option.
 *
 * Note that this is only a full definition of options for simple logic that can
 * be made explicit using the more detailed configuration for both derived
 * categories and explicit options. There are quite a few entries whose option
 * logic cannot be fully represented here, so that it needs to be implemented
 * manually.
 * @minProperties 1
 */
export type SelectOptions = {
  /**
   * An entry category with optional further configuration. All available
   * entries from the specified categories will be included as separate select
   * options. You can also specify a set of groups that should only be
   * included. Groups not mentioned will be excluded then.
   */
  derived?: SelectOptionCategory

  /**
   * A list of explicit select options. If the identifier has a specific type,
   * its entry is the base of this select option, where values defined here
   * override values from the base. Define the `src` property if the options
   * are not derived from the rules text of the advantage/disadvantage/special
   * ability but instead are listed in a separate block and/or on a separate
   * page.
   * @minItems 1
   */
  explicit?: ExplicitSelectOption[]
}

export type ExplicitSelectOption =
  | { tag: "General"; general: ExplicitGeneralSelectOption }
  | { tag: "Skill"; skill: ExplicitSkillSelectOption }
  | { tag: "CombatTechnique"; combat_technique: ExplicitCombatTechniqueSelectOption }

export type ExplicitGeneralSelectOption = {
  /**
   * The option's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Sometimes, professions use specific text selections that are not
   * contained in described lists. This ensures you can use them for
   * professions only. They are not going to be displayed as options to the
   * user.
   */
  profession_only?: true

  /**
   * Registers new applications, which get enabled once this entry is
   * activated with its respective select option. It specifies an entry-unique
   * identifier and the skill it belongs to. A translation can be left out if
   * its name equals the name of the origin select option.
   */
  skill_applications?: SkillApplications

  /**
   * Registers uses, which get enabled once this entry is activated with its
   * respective select option. It specifies an entry-unique identifier and the
   * skill it belongs to. A translation can be left out if its name equals the
   * name of the origin select option.
   */
  skill_uses?: SkillUses

  prerequisites?: GeneralPrerequisites

  /**
   * Specific AP cost for the select option.
   * @integer
   * @minimum 1
   */
  ap_value?: number

  src?: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ExplicitGeneralSelectOptionTranslation>
}

export type ExplicitGeneralSelectOptionTranslation = {
  /**
   * The name of the select option.
   * @minLength 1
   */
  name: string

  /**
   * The name of the select option when displayed in a generated
   * profession text.
   * @minLength 1
   */
  name_in_profession?: string

  /**
   * The description of the select option. Useful for Bad Habits, Trade
   * Secrets and other entries where a description is available.
   * @markdown
   * @minLength 1
   */
  description?: string

  errata?: Errata
}

export type ExplicitSkillSelectOption = {
  /**
   * The skill's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: SkillIdentifier

  /**
   * Registers new applications, which get enabled once this entry is
   * activated with its respective select option. It specifies an entry-unique
   * identifier and the skill it belongs to. A translation can be left out if
   * its name equals the name of the origin select option.
   * @minItems 1
   */
  skill_applications?: SkillApplicationOrUse[]

  /**
   * Registers uses, which get enabled once this entry is activated with its
   * respective select option. It specifies an entry-unique identifier and the
   * skill it belongs to. A translation can be left out if its name equals the
   * name of the origin select option.
   * @minItems 1
   */
  skill_uses?: SkillApplicationOrUse[]

  prerequisites?: GeneralPrerequisites

  /**
   * Specific AP cost for the select option.
   * @integer
   * @minimum 1
   */
  ap_value?: number

  src?: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<ExplicitSkillSelectOptionTranslation>
}

/**
 * @minProperties 1
 */
export type ExplicitSkillSelectOptionTranslation = {
  errata?: Errata
}

export type ExplicitCombatTechniqueSelectOption = {
  /**
   * The combat technique's identifier.
   */
  id: CombatTechniqueIdentifier

  prerequisites?: GeneralPrerequisites

  /**
   * Specific AP cost for the select option.
   * @integer
   * @minimum 1
   */
  ap_value?: number

  src?: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<ExplicitCombatTechniqueSelectOptionTranslation>
}

/**
 * @minProperties 1
 */
export type ExplicitCombatTechniqueSelectOptionTranslation = {
  errata?: Errata
}

// "Options": {
//   "$comment": "Unfinished generalized options handling.",
//   "type": "array",
//   "minItems": 1,
//   "items": {
//     "oneOf": [
//       {
//         "type": "object",
//         "properties": {
//           "type": { "const": "List" },
//           "value": {
//             "type": "object",
//             "properties": {
//               "list": {
//                 "oneOf": [
//                   {
//                     "type": "object",
//                     "properties": {
//                       "type": { "const": "Generate" },
//                       "value": { "$ref": "#/definitions/SelectOptionCategories" }
//                     },
//                     "required": ["type", "value"],
//                     "additionalProperties": false
//                   },
//                   {
//                     "type": "object",
//                     "properties": {
//                       "type": { "const": "Explicit" },
//                       "value": { "$ref": "#/definitions/SelectOptions" }
//                     },
//                     "required": ["type", "value"],
//                     "additionalProperties": false
//                   }
//                 ]
//               },
//               "multiple": {
//                 "description": "Sometimes, multiple options from a single list have to or can be chosen. Its possible to define a number of options that have to be selected or a range of numbers of options that can be selected.",
//                 "oneOf": [
//                   {
//                     "type": "object",
//                     "properties": {
//                       "type": { "const": "Fixed" },
//                       "value": {
//                         "description": "The number of options that have to be selected.",
//                         "type": "integer",
//                         "minimum": 2
//                       }
//                     },
//                     "required": ["type", "value"],
//                     "additionalProperties": false
//                   },
//                   {
//                     "type": "object",
//                     "properties": {
//                       "type": { "const": "Range" },
//                       "value": {
//                         "type": "object",
//                         "properties": {
//                           "min": {
//                             "description": "The minimum number of options that need to be selected. If left empty it defaults to 1.",
//                             "type": "integer",
//                             "minimum": 2
//                           },
//                           "max": {
//                             "description": "The maximum number of options that need to be selected.",
//                             "type": "integer",
//                             "minimum": 2
//                           }
//                         },
//                         "required": ["max"],
//                         "additionalProperties": false
//                       }
//                     },
//                     "required": ["type", "value"],
//                     "additionalProperties": false
//                   }
//                 ]
//               }
//             },
//             "required": ["list"],
//             "additionalProperties": false
//           }
//         },
//         "required": ["type", "value"],
//         "additionalProperties": false
//       },
//       {
//         "type": "object",
//         "properties": {
//           "type": { "const": "TextInput" },
//           "value": {
//             "type": "object",
//             "properties": {
//               "label": {
//                 "type": "object",
//                 "description": "All translations for the entry, identified by IETF language tag (BCP47).",
//                 "patternProperties": {
//                   "^[a-z]{2}-[A-Z]{2}$": {
//                     "description": "The text input label.",
//                     "type": "string",
//                     "minLength": 1
//                   }
//                 },
//                 "minProperties": 1,
//                 "additionalProperties": false
//               }
//             },
//             "required": ["label"],
//             "additionalProperties": false
//           }
//         },
//         "required": ["type", "value"],
//         "additionalProperties": false
//       }
//     ]
//   }
// },

/**
 * The rule text.
 */
export type Rules = NonEmptyMarkdown

/**
 * The effect description.
 */
export type Effect = NonEmptyMarkdown

/**
 * The definition of how the combat special ability can be used in combat.
 */
export enum CombatSpecialAbilityUsageType {
  Passive = "Passive",
  BasicManeuver = "BasicManeuver",
  SpecialManeuver = "SpecialManeuver",
}

/**
 * The definition of if the combat special ability can be used when armed or
 * when unarmed.
 */
export enum CombatSpecialAbilityType {
  Armed = "Armed",
  Unarmed = "Unarmed",
}

/**
 * Registers new skill applications, which get enabled once this entry is
 * activated. It specifies an entry-unique identifier and the skill it belongs
 * to. A translation can be left out if its name equals the name of the origin
 * activatable entry.
 * @minItems 1
 */
export type SkillApplications = SkillApplication[]

export type SkillApplication = {
  /**
   * The application's identifier. An entry-unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The skill(s) this application belongs to.
   */
  skill: SkillApplicationAssociatedSkill

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<SkillApplicationTranslation>
}

export type SkillApplicationAssociatedSkill =
  | { tag: "Single"; single: SkillReference }
  | { tag: "Multiple"; multiple: SkillApplicationAssociatedSkills }

export type SkillApplicationAssociatedSkills = {
  /**
   * The skills this application belongs to.
   * @minItems 2
   */
  list: SkillReference[]

  /**
   * If an application applies to multiple skills, it may need to ensure the
   * respective skill is on a certain skill rating if the activatable entry
   * cannot ensure this prerequisite.
   * @integer
   * @minimum 1
   */
  required_skill_rating?: number
}

export type SkillApplicationTranslation = {
  /**
   * The name of the application if different from the activatable entry's name.
   */
  name: NonEmptyString
}

/**
 * Registers uses, which get enabled once this entry is activated. It specifies
 * an entry-unique identifier and the skill it belongs to. A translation can be
 * left out if its name equals the name of the origin activatable entry.
 * @minItems 1
 */
export type SkillUses = SkillUse[]

export type SkillUse = {
  /**
   * The use's identifier. An entry-unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The skill(s) this use belongs to.
   */
  skill: SkillUseAssociatedSkill

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<SkillUseTranslation>
}

export type SkillUseAssociatedSkill =
  | { tag: "Single"; single: SkillReference }
  | { tag: "Multiple"; multiple: SkillUseAssociatedSkills }

export type SkillUseAssociatedSkills = {
  /**
   * The skills this use belongs to.
   * @minItems 2
   */
  list: SkillReference[]
}

export type SkillUseTranslation = {
  /**
   * The name of the use if different from the activatable entry's name.
   */
  name: NonEmptyString
}

/**
 * The penalty the special ability gives when used.
 */
export type Penalty =
  | { tag: "Single"; single: SinglePenalty }
  | { tag: "ByHandedness"; by_handedness: PenaltyByHandedness }
  | { tag: "ByActivation"; by_activation: PenaltyByActivation }
  | { tag: "Selection"; selection: PenaltySelection }
  | { tag: "ByLevel"; by_level: PenaltyByLevel }
  | { tag: "ByAttack"; by_attack: PenaltyByAttack }
  | { tag: "DependsOnHitZone"; depends_on_hit_zone: {} }

export type SinglePenalty = {
  /**
   * The penalty value.
   * @integer
   */
  value: number

  /**
   * Set to `true` if the penalty applies to the parry instead of the attack.
   */
  applies_to_parry?: true
}

export type PenaltyByHandedness = {
  /**
   * The penalty value for one-handed weapons.
   * @integer
   */
  one_handed: number

  /**
   * The penalty value for two-handed weapons.
   * @integer
   */
  two_handed: number

  /**
   * Set to `true` if the penalty applies to the parry instead of the attack.
   */
  applies_to_parry?: true
}

export type PenaltyByActivation = {
  /**
   * The penalty value if the entry has been bought by the character.
   * @integer
   */
  active: number

  /**
   * The penalty value if the entry has not been bought by the character.
   * @integer
   */
  inactive: number

  /**
   * Set to `true` if the penalty applies to the parry instead of the attack.
   */
  applies_to_parry?: true
}

export type PenaltySelection = {
  options: PenaltySelectionOptions
}

export type PenaltySelectionOptions =
  | { tag: "Specific"; specific: SpecificPenaltySelectionOptions }
  | { tag: "Range"; range: PenaltySelectionOptionsRange }

export type SpecificPenaltySelectionOptions = {
  /**
   * The list of specific penalty options.
   * @minItems 2
   * @uniqueItems
   */
  list: SpecificPenaltySelectionOption[]
}

export type SpecificPenaltySelectionOption = {
  /**
   * The penalty value.
   * @integer
   */
  value: number
}

export type PenaltySelectionOptionsRange = {
  /**
   * The minimum penalty value.
   * @integer
   */
  minimum: number

  /**
   * The maximum penalty value.
   * @integer
   */
  maximum: number
}

export type PenaltyByLevel = {
  /**
   * A continuous range of penalties for each level. The first element is the
   * penalty for the first level, the second element is the penalty for the
   * second level, and so on.
   * @minItems 2
   */
  levels: PenaltyByLevelLevel[]

  /**
   * The combat-related special ability of which the level defines the penalty
   * instead.
   */
  external?: PenaltyByExternalLevel
}

export type PenaltyByLevelLevel = {
  /**
   * The penalty value for this level.
   * @integer
   */
  value: number
}

/**
 * The combat-related special ability of which the level defines the penalty
 * instead.
 */
export type PenaltyByExternalLevel = {
  /**
   * The identifier of the combat-related special ability of which the level
   * defines the penalty instead.
   */
  id: CombatRelatedSpecialAbilityIdentifier
}

export type PenaltyByAttack = {
  /**
   * A list of penalties for subsequent attacks. The first element is the
   * penalty for the first attack, the second element is the penalty for the
   * second attack, and so on. The order of the first element may be changed
   * using `initial_order`, so that e.g. if set to `2`, the first element is
   * the penalty for the second attack, the second element is the penalty for
   * the third attack, and so on.
   * @minItems 1
   */
  list: PenaltyByAttackOrderItem[]

  /**
   * The order of the first element in the `list` of penalties.
   */
  initial_order?: number

  /**
   * Set if a predefined different word should be used instead of the word
   * `attack` for display purposes.
   */
  attack_replacement?: PenaltyByAttackReplacement
}

export type PenaltyByAttackOrderItem = {
  /**
   * The penalty value for this order.
   * @integer
   */
  value: number
}

/**
 * Set if a predefined different word should be used instead of the word
 * `attack` for display purposes.
 */
export enum PenaltyByAttackReplacement {
  Throw = "Throw",
}

export type EnchantmentCost =
  | { tag: "ArcaneEnergyCost"; arcane_energy_cost: ArcaneEnergyCost }
  | { tag: "BindingCost"; binding_cost: BindingCost }

/**
 * The AE Cost.
 */
export type ArcaneEnergyCost =
  | { tag: "Fixed"; fixed: FixedArcaneEnergyCost }
  | { tag: "PerCountable"; per_countable: ArcaneEnergyCostPerCountable }
  | { tag: "Interval"; interval: IntervalArcaneEnergyCost }
  | { tag: "ActivationAndHalfInterval"; activation_and_half_interval: ActivationAndHalfIntervalArcaneEnergyCost }
  | { tag: "Indefinite"; indefinite: IndefiniteArcaneEnergyCost }
  | { tag: "Disjunction"; disjunction: ArcaneEnergyCostDisjunction }
  | { tag: "Variable"; variable: {} }

export type FixedArcaneEnergyCost = {
  /**
   * The AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * Set to `true` if the AE costs are permanent.
   * @integer
   * @minimum 1
   */
  is_permanent?: true

  /**
   * Specified if the AE cost `value` has to be paid for each time interval.
   */
  interval?: DurationUnitValue

  /**
   * The AE cost are per level of the enchantment. It may either be displayed
   * in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1
   * AE for level I; 2 AE for level II`).
   */
  per_level?: FixedArcaneEnergyCostPerLevel

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<FixedArcaneEnergyCostTranslation>
}

/**
 * The AE cost are per level of the enchantment. It may either be displayed
 * in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1
 * AE for level I; 2 AE for level II`).
 */
export enum FixedArcaneEnergyCostPerLevel {
  Compressed = "Compressed",
  Verbose = "Verbose",
}

/**
 * @minProperties 1
 */
export type FixedArcaneEnergyCostTranslation = {
  /**
   * A note, appended to the generated option string in parenthesis.
   */
  note?: ResponsiveTextOptional
}

export type ArcaneEnergyCostPerCountable = {
  /**
   * The AE cost value that has to be per a specific countable entity.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * If defined, in addition to the cost per entity you have to pay a flat
   * amount, regardless of the entity count.
   * @integer
   * @minimum 1
   */
  base_value?: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ArcaneEnergyCostPerCountableTranslation>
}

export type ArcaneEnergyCostPerCountableTranslation = {
  /**
   * The cost have to be per a specific countable entity, e.g. `8 AE per
   * person`.
   */
  per: ResponsiveText

  /**
   * A note, appended to the generated string in parenthesis.
   */
  note?: ResponsiveTextOptional
}

export type IntervalArcaneEnergyCost = {
  /**
   * The AE cost value that has to be payed each interval.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The time interval for which the AE cost `value` has to be paid.
   */
  interval: DurationUnitValue
}

export type ActivationAndHalfIntervalArcaneEnergyCost = {
  /**
   * The AE cost value that has to be payed for activation. Half of this value
   * has to be payed each interval.
   * @integer
   * @minimum 2
   * @multipleOf 2
   */
  value: number

  /**
   * The time interval for which the AE cost `value` has to be paid.
   */
  interval: DurationUnitValue
}

export type IndefiniteArcaneEnergyCost = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<IndefiniteArcaneEnergyCostTranslation>
}

export type IndefiniteArcaneEnergyCostTranslation = {
  /**
   * A description of where the cost come from.
   */
  description: ResponsiveText
}

export type ArcaneEnergyCostDisjunction = {
  /**
   * Specified if the selected AE cost option has to be paid for each time
   * interval.
   */
  interval?: ArcaneEnergyCostDisjunctionInterval

  /**
   * The possible AE cost values.
   */
  options: ArcaneEnergyCostDisjunctionOption[]
}

export type ArcaneEnergyCostDisjunctionInterval = {
  /**
   * The interval itself.
   */
  value: DurationUnitValue

  /**
   * The AE cost value for activation.
   * @integer
   * @minimum 1
   */
  activation_value: number

  /**
   * Set to `true` if the action where the enchantment is casted does
   * **not** as a part of the first interval that has to be payed, so that
   * the first interval payment needs to be done after the activation.
   *
   * This works different than other sustained spells, since for them the
   * end of the cast usually already counts as part of the first interval.
   */
  after_activation: boolean
}

export type ArcaneEnergyCostDisjunctionOption = {
  /**
   * A possible AE cost value.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<ArcaneEnergyCostDisjunctionOptionTranslation>
}

/**
 * @minProperties 1
 */
export type ArcaneEnergyCostDisjunctionOptionTranslation = {
  /**
   * A note, appended to the generated option string in parenthesis.
   */
  note?: ResponsiveTextOptional
}

export type NoArcaneEnergyCost = {
  /**
   * All translations for the entry, identified by IETF language tag
   * (BCP47).
   */
  translations?: LocaleMap<NoArcaneEnergyCostTranslation>
}

/**
 * @minProperties 1
 */
export type NoArcaneEnergyCostTranslation = {
  /**
   * A note, appended to the generated string in parenthesis.
   */
  note?: ResponsiveTextOptional
}

/**
 * The volume points the enchantment needs.
 */
export type Volume =
  | { tag: "Fixed"; fixed: FixedVolume }
  | { tag: "PerLevel"; per_level: VolumePerLevel }
  | { tag: "ByLevel"; by_level: VolumeByLevel }
  | { tag: "Map"; map: VolumeMap }

export type FixedVolume = {
  /**
   * The volume points.
   * @integer
   * @minimum 0
   */
  points: number
}

export type VolumePerLevel = {
  /**
   * The volume points per level.
   * @integer
   * @minimum 1
   */
  points: number
}

export type VolumeByLevel = {
  /**
   * The volume points for each level. The first element is the volume points
   * for the first level, the second element is the volume points for the
   * second level, and so on.
   * @minItems 2
   */
  list: VolumeByLevelItem[]
}

export type VolumeByLevelItem = {
  /**
   * The volume points for this level.
   * @integer
   * @minimum 0
   */
  points: number
}

/**
 * A content that is `3/4/5 Points for Chimera, Daimonid, Golems, Undead /
 * Fairies, Ghosts / Demons, Elementals` may be respresented as the following
 * map:
 *
 * ```yaml
 * options:
 *   - points: 3
 *     associated_options:
 *       - id:
 *           tag: General
 *           value: # ...
 *       # ...
 *     translations:
 *       en-US:
 *         label: "Chimera, Daimonid, Golems, Undead"
 *         label_standalone: "Chimera/Daimonid/Golems/Undead"
 *   - points: 4
 *     associated_options:
 *       - id:
 *           tag: General
 *           value: # ...
 *       # ...
 *     translations:
 *       en-US:
 *         label: "Fairies, Ghosts"
 *         label_standalone: "Fairies/Ghosts"
 *   - points: 5
 *     associated_options:
 *       - id:
 *           tag: General
 *           value: # ...
 *       # ...
 *     translations:
 *       en-US:
 *         label: "Demons, Elementals"
 *         label_standalone: "Demons/Elementals"
 * ```
 *
 * This will generate the exact same string as seen above. The associated
 * options are not present in the example, but they link to the options the
 * volume specification is meant for.
 */
export type VolumeMap = {
  /**
   * The possible costs and associated labels.
   * @minItems 2
   */
  options: VolumeMapOption[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<VolumeMapTranslation>
}

/**
 * @minProperties 1
 */
export type VolumeMapTranslation = {
  /**
   * Place a string between the `for` and the grouped map option labels.
   */
  list_prepend?: string

  /**
   * Place a string after the grouped map option labels.
   */
  list_append?: string

  /**
   * If the string from the book cannot be generated using the default
   * generation technique, use this string. All options still need to be
   * inserted propertly, since it may be used by in-game tools to provide a
   * selection to players.
   */
  replacement?: string
}

export type VolumeMapOption = {
  /**
   * The full permanent AE cost value for this option.
   * @integer
   * @minimum 1
   */
  points: number

  /**
   * Links to the options this volume specification is meant for.
   */
  associated_options: VolumeMapOptionAssociatedOption[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<VolumeMapOptionTranslation>
}

export type VolumeMapOptionAssociatedOption = {
  /**
   * The option's identifier.
   */
  id: VolumePointsOptionReferenceIdentifier
}

export type VolumeMapOptionTranslation = {
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

/**
 * The binding cost for an enchantment.
 */
export type BindingCost =
  | { tag: "Fixed"; fixed: FixedBindingCost }
  | { tag: "PerLevel"; per_level: BindingCostPerLevel }
  | { tag: "Map"; map: BindingCostMap }

export type FixedBindingCost = {
  /**
   * The permanent AE cost.
   *
   * If the enchantment has multiple levels, it is only applied for the first
   * level.
   * @integer
   * @minimum 1
   */
  permanent_value: number
}

export type BindingCostPerLevel = {
  /**
   * The permanent AE cost per level.
   * @integer
   * @minimum 1
   */
  permanent_value: number
}

/**
 * A content that is `2/4/8 permanent AE for spell-swords with the combat
 * technique Daggers, Swords, or Two-Handed Swords` may be respresented as the
 * following map:
 *
 * ```yaml
 * options:
 *   - permanent_value: 2
 *     translations:
 *       en-US:
 *         label: "Daggers"
 *         label_standalone: "Dagger"
 *   - permanent_value: 4
 *     translations:
 *       en-US:
 *         label: "Swords"
 *         label_standalone: "Sword"
 *   - permanent_value: 8
 *     translations:
 *       en-US:
 *         label: "Two-Handed Swords"
 *         label_standalone: "Two-Handed Sword"
 * list_prepend: "spell-swords with the combat technique"
 * ```
 *
 * This will generate the exact same string as seen above.
 */
export type BindingCostMap = {
  /**
   * The possible costs and associated labels.
   * @minItems 2
   */
  options: VolumeMapOption[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<BindingCostMapTranslation>
}

/**
 * @minProperties 1
 */
export type BindingCostMapTranslation = {
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

export type BindingCostMapOption = {
  /**
   * The full permanent AE cost value for this option.
   * @integer
   * @minimum 1
   */
  permanent_value: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<BindingCostMapOptionTranslation>
}

export type BindingCostMapOptionTranslation = {
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

/**
 * The magic property's identifier. `DependingOnProperty` can only be used if
 * the special ability has an option to select a property.
 */
export type Property =
  | { tag: "DependingOnSelection"; depending_on_selection: {} }
  | { tag: "Fixed"; fixed: PropertyReference }

/**
 * The blessed aspect.
 */
export type Aspect = AspectReference

/**
 * A reference to an advanced special ability.
 */
export type AdvancedSpecialAbility<Identifier> =
  | { tag: "General"; general: AdvancedSpecialAbilityReference<Identifier> }
  | { tag: "RestrictOptions"; restrict_options: RestrictAdvancedSpecialAbilityOptions<Identifier> }
  | { tag: "OneOf"; one_of: OneOfAdvancedSpecialAbilityOptions<Identifier> }
  | { tag: "DeriveFromExternalOption"; derive_from_external_option: AdvancedSpecialAbilityDerivedFromExternalOption<Identifier> }

export type RestrictAdvancedSpecialAbilityOptions<Identifier> = {
  /**
   * The advanced special ability’s identifier.
   */
  id: Identifier

  /**
   * Specify the select option(s) that only are allowed for the referenced
   * advanced special ability; others are disallowed.
   * @minItems 1
   */
  option: AdvancedSpecialAbilityRestrictedOptionIdentifier[]
}

export type OneOfAdvancedSpecialAbilityOptions<Identifier> = {
  /**
   * The possible advanced special abilities.
   */
  options: AdvancedSpecialAbilityReference<Identifier>

  /**
   * Do have to choose the advanced special ability when buying the style
   * special ability? Otherwise the decision can be made later.
   */
  is_selection_required_on_purchase: boolean

  display_option?: DisplayOption
}

export type AdvancedSpecialAbilityDerivedFromExternalOption<Identifier> = {
  /**
   * The possible advanced special abilities.
   */
  external_entry: MagicalTraditionIdentifier

  /**
   * Map options from the external entry to allowed advanced special abilities.
   * @minItems 1
   */
  map: AdvancedSpecialAbilityDerivedFromExternalOptionMapping<Identifier>[]

  display_option?: DisplayOption
}

/**
 * Mapping from an option of the external entry to an allowed advanced special
 * ability.
 * @minItems 1
 */
export type AdvancedSpecialAbilityDerivedFromExternalOptionMapping<Identifier> = {
  /**
   * The select option's identifier.
   */
  from_option: PatronIdentifier

  /**
   * The advanced special ability's identifier.
   */
  to_advanced: AdvancedSpecialAbilityReference<Identifier>
}

export type AdvancedSpecialAbilityDerivedExternalEntryId = MagicalTraditionIdentifier

export type AdvancedSpecialAbilityDerivedExternalEntryOptionId = PatronIdentifier

/**
 * The Advanced Special Abilities for the respective Style Special Ability.
 * Sometimes, only a specific select option or a set of select options of an
 * entry is allowed, which can be modelled by the option property. It can also
 * be that you can choose from a set of special abilities, but then you can't
 * specify an option.
 */
export type AdvancedSpecialAbilities<Identifier> = [
  AdvancedSpecialAbility<Identifier>,
  AdvancedSpecialAbility<Identifier>,
  AdvancedSpecialAbility<Identifier>,
]

export type ApplicableCombatTechniques =
  | { tag: "None"; none: {} }
  | { tag: "DependingOnCombatStyle"; depending_on_combat_style: {} }
  | { tag: "All"; all: AllApplicableCombatTechniques }
  | { tag: "AllClose"; all_close: AllApplicableCloseCombatTechniques }
  | { tag: "AllRanged"; all_ranged: AllApplicableRangedCombatTechniques }
  | { tag: "Specific"; specific: SpecificApplicableCombatTechniques }

export type AllApplicableCombatTechniques = {
  /**
   * @minItems 1
   */
  restrictions?: ApplicableAllCombatTechniquesRestriction[]
}

export type AllApplicableCloseCombatTechniques = {
  /**
   * @minItems 1
   */
  restrictions?: ApplicableCloseCombatTechniquesRestriction[]
}

export type AllApplicableRangedCombatTechniques = {
  /**
   * @minItems 1
   */
  restrictions?: ApplicableRangedCombatTechniquesRestriction[]
}

export type SpecificApplicableCombatTechniques = {
  /**
   * @minItems 1
   */
  list: SpecificApplicableCombatTechnique[]
}

export type SpecificApplicableCombatTechnique = {
  id: CombatTechniqueIdentifier

  /**
   * @minItems 1
   */
  restrictions?: ApplicableSpecificCombatTechniquesRestriction[]
}

export type ApplicableAllCombatTechniquesRestriction =
  | { tag: "Improvised"; improvised: {} }
  | { tag: "PointedBlade"; pointed_blade: {} }
  | { tag: "Mount"; mount: {} }
  | { tag: "Race"; race: ApplicableCombatTechniquesRaceRestriction }
  | { tag: "ExcludeCombatTechniques"; exclude_combat_techniques: ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<CombatTechniqueReference> }

export type ApplicableCloseCombatTechniquesRestriction =
  | { tag: "Improvised"; improvised: {} }
  | { tag: "PointedBlade"; pointed_blade: {} }
  | { tag: "Mount"; mount: {} }
  | { tag: "HasParry"; has_parry: {} }
  | { tag: "OneHanded"; one_handed: {} }
  | { tag: "ParryingWeapon"; parrying_weapon: {} }
  | { tag: "Race"; race: ApplicableCombatTechniquesRaceRestriction }
  | { tag: "ExcludeCombatTechniques"; exclude_combat_techniques: ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<CloseCombatTechniqueReference> }

export type ApplicableRangedCombatTechniquesRestriction =
  | { tag: "Improvised"; improvised: {} }
  | { tag: "PointedBlade"; pointed_blade: {} }
  | { tag: "Mount"; mount: {} }
  | { tag: "Race"; race: ApplicableCombatTechniquesRaceRestriction }
  | { tag: "ExcludeCombatTechniques"; exclude_combat_techniques: ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<RangedCombatTechniqueReference> }

export type ApplicableSpecificCombatTechniquesRestriction =
  | { tag: "Improvised"; improvised: {} }
  | { tag: "PointedBlade"; pointed_blade: {} }
  | { tag: "Mount"; mount: {} }
  | { tag: "Race"; race: ApplicableCombatTechniquesRaceRestriction }
  | { tag: "Level"; level: ApplicableCombatTechniquesLevelRestriction }
  | { tag: "Weapons"; weapons: ApplicableCombatTechniquesWeaponRestriction }

export type ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<Ref> = {
  /**
   * The combat techniques this combat special ability is **not** applicable to.
   * @minItems 1
   * @uniqueItems
   */
  list: Ref[]
}

export type ApplicableCombatTechniquesRaceRestriction = RaceReference

export type ApplicableCombatTechniquesLevelRestriction = {
  /**
   * The combat special ability is only applicable on a certain level.
   * @integer
   * @minimum 1
   */
  level: number
}

export type ApplicableCombatTechniquesWeaponRestriction = {
  /**
   * The specific weapons this combat special ability is only applicable to.
   * @minItems 1
   * @uniqueItems
   */
  list: WeaponReference[]
}

export type AdventurePointsValue =
  | { tag: "Fixed"; fixed: FixedAdventurePointsValue }
  | { tag: "ByLevel"; by_level: AdventurePointsValueByLevel }
  | { tag: "Indefinite"; indefinite: {} }

/**
 * A fixed adventure points value. If the entry has levels, this is the cost per
 * level as well.
 */
export type FixedAdventurePointsValue = AdventurePointsSingleValue

/**
 * An entry with levels may have different costs for each level. The length of
 * the list must match the amount of levels the special ability has.
 * @minItems 2
 */
export type AdventurePointsValueByLevel = AdventurePointsSingleValue[]

/**
 * A single adventure points value.
 * @integer
 * @minimum 0
 */
export type AdventurePointsSingleValue = number

// "Input": {
//   "description": "A string that is used as a placeholder text for an input field.",
//   "type": "string",
//   "minLength": 1
// },

// "AdvancedSpecialAbilitiesAppend": {
//   "description": "An addition to the default advanced special abilities text. Markdown is available.",
//   "type": "string",
//   "minLength": 1
// },

// "ApValueReplacement": {
//   "description": "The AP value. Only use this if the text provides different information than `X adventure points`, e.g. for Special Ability Property Knowledge it is \"10 adventure points for the first *Property Knowledge*, 20 adventure points for the second, 40 adventure points for the third\". Markdown is available.",
//   "type": "string",
//   "minLength": 1
// },

// "ApValueAppend": {
//   "description": "An addition to the default AP value schema. Only use this if the text provides information appended to `X adventure points` and if `apValue` is not used. Markdown is available.",
//   "type": "string",
//   "minLength": 1
// },

// "PrerequisitesReplacement": {
//   "description": "Use if text cannot be generated by the app. Markdown is available.",
//   "type": "string",
//   "minLength": 1
// },

// "PrerequisitesStart": {
//   "description": "Prepends the provided string to the main prerequisites string. No effect if `prerequisites` field is used in l10n file. Markdown is available.",
//   "type": "string",
//   "minLength": 1
// },

// "PrerequisitesEnd": {
//   "description": "Appends the provided string to the main prerequisites string. No effect if `prerequisites` field is used in l10n table. Markdown is available.",
//   "type": "string",
//   "minLength": 1
// }
