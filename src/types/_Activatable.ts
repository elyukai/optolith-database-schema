/**
 * General type specifications used by multiple activatable entries.
 * @title Activatable
 */

import { DisplayOption } from "./prerequisites/DisplayOption.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"
import { Duration } from "./_ActivatableSkill.js"
import { ActivatableIdentifier, AdvancedSpecialAbilityRestrictedOptionIdentifier, CombatRelatedSpecialAbilityIdentifier, CombatTechniqueIdentifier, CombatTechniqueTag, MagicalTraditionIdentifier, PatronIdentifier, SkillIdentifier, SkillWithEnhancementsTag, VolumePointsOptionReferenceIdentifier } from "./_Identifier.js"
import { GeneralPrerequisites } from "./_Prerequisite.js"

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
   * @minItems 1
   */
  derived?: CategoryOption

  /**
   * A list of explicit select options. If the identifier has a specific type,
   * its entry is the base of this select option, where values defined here
   * override values from the base. Define the `src` property if the options
   * are not derived from the rules text of the advantage/disadvantage/special
   * ability but instead are listed in a separate block and/or on a separate
   * page.
   * @minItems 1
   */
  explicit?: ExplicitOption[]
}

type CategoryOption =
  | { tag: "Blessings" }
  | { tag: "Cantrips" }
  | { tag: "TradeSecrets" }
  | { tag: "Scripts" }
  | { tag: "AnimalShapes" }
  | { tag: "ArcaneBardTraditions" }
  | { tag: "ArcaneDancerTraditions" }
  | { tag: "SexPractices" }
  | { tag: "Races" }
  | { tag: "Cultures" }
  | {
    tag: "BlessedTraditions"

    /**
     * Should the principles (code) of the tradition be required to select the
     * respective tradition?
     */
    require_principles?: true
  }
  | {
    tag: "Elements"

    /**
     * Only include entries with the listed identifiers.
     * @minItems 1
     * @uniqueItems
     */
    specific?: {
      /**
       * The element's identifier.
       * @integer
       * @minimum 1
       * @maximum 6
       */
      id: number
    }[]
  }
  | {
    tag: "Properties"

    /**
     * Does each property require it's corresponding property knowledge?
     */
    require_knowledge?: true

    /**
     * Require a minimum number of spellworks of the respective property to be
     * on a minimum skill rating.
     */
    require_minimum_spellworks_on?: {
      /**
       * The minimum number of spellworks that need to be on the defined minimum
       * skill rating.
       * @integer
       * @minimum 1
       */
      number: number

      /**
       * The minimum skill rating the defined minimum number of spellworks need
       * to be on.
       * @integer
       * @minimum 1
       */
      value: number
    }
  }
  | {
    tag: "Aspects"

    /**
     * Does each aspect require it's corresponding aspect knowledge?
     */
    require_knowledge?: true

    /**
     * The generated name should be the *Master of (Aspect)* suffix for this
     * aspect instead of the aspect's name. If an aspect does not provide a
     * suffix (such as the General aspect), it is automatically excluded from
     * the list.
     */
    use_master_of_suffix_as_name?: true

    /**
     * Require a minimum number of liturgies of the respective aspect to be on a
     * minimum skill rating.
     */
    require_minimum_liturgies_on?: {
      /**
       * The minimum number of liturgies that need to be on the defined minimum
       * skill rating.
       * @integer
       * @minimum 1
       */
      number: number

      /**
       * The minimum skill rating the defined minimum number of liturgies need
       * to be on.
       * @integer
       * @minimum 1
       */
      value: number
    }
  }
  | {
    tag: "Diseases"

    /**
     * Only convert half the disease level into the AP value.
     */
    use_half_level_as_ap_value?: true
  }
  | {
    tag: "Poisons"

    /**
     * Only convert half the poison level into the AP value.
     */
    use_half_level_as_ap_value?: true
  }
  | {
    tag: "Languages"

    /**
     * Generate prerequisites for each entry of the category.
     * @minItems 1
     */
    prerequisites?: OptionOptionPrerequisite[]
  }
  | {
    tag: "Skills"

    /**
     * A list of skill categories.
     * @minItems 1
     */
    categories: (
      | {
        tag: "Skills"

        /**
         * Only include entries of the specified groups.
         * @minItems 1
         */
        groups?: {
          /**
           * The skill group's identifier.
           * @integer
           * @minimum 1
           * @maximum 5
           */
          id: number
        }[]

        /**
         * Only include (`Intersection`) or exclude (`Difference`) specific
         * skills.
         */
        specific?: {
          operation:
            | { tag: "Intersection" }
            | { tag: "Difference" }

          /**
           * The list of specific skills.
           * @minItems 1
           * @uniqueItems
           */
          list: {
            /**
             * The skill's identifier.
             * @integer
             * @minimum 1
             * @maximum 59
             */
            id: number
          }[]
        }

        /**
         * Registers new applications, which get enabled once this entry is
         * activated with its respective select option. It specifies an
         * entry-unique identifier, the skill it belongs to is derived from the
         * select option automatically. A translation can be left out if its
         * name equals the name of the origin entry.
         * @minItems 1
         */
        skill_applications?: {
          /**
           * The application's identifier. An entry-unique, increasing integer.
           * @integer
           * @minimum 1
           */
          id: number

          /**
           * All translations for the entry, identified by IETF language tag
           * (BCP47).
           * @minProperties 1
           */
          translations?: {
            /**
             * @patternProperties ^[a-z]{2}-[A-Z]{2}$
             */
            [localeId: string]: {
              /**
               * The name of the application if different from the activatable
               * entry's
               * name.
               * @minLength 1
               */
              name: string
            }
          }
        }[]

        /**
         * Registers uses, which get enabled once this entry is activated with
         * its respective select option. It specifies an entry-unique
         * identifier, the skill it belongs to is derived from the select option
         * automatically. A translation can be left out if its name equals the
         * name of the origin entry.
         * @minItems 1
         */
        skill_uses?: {
          /**
           * The use's identifier. An entry-unique, increasing integer.
           * @integer
           * @minimum 1
           */
          id: number

          /**
           * All translations for the entry, identified by IETF language tag
           * (BCP47).
           * @minProperties 1
           */
          translations?: {
            /**
             * @patternProperties ^[a-z]{2}-[A-Z]{2}$
             */
            [localeId: string]: {
              /**
               * The name of the use if different from the activatable entry's
               * name.
               * @minLength 1
               */
              name: string
            }
          }
        }[]
      }
      | {
        tag: SkillWithEnhancementsTag

        /**
         * Only include (`Intersection`) or exclude (`Difference`) specific
         * entries.
         */
        specific?: {
          operation:
            | { tag: "Intersection" }
            | { tag: "Difference" }

          /**
           * The list of specific entries.
           * @minItems 1
           * @uniqueItems
           */
          list: {
            /**
             * The entry's identifier.
             * @integer
             * @minimum 1
             * @maximum 59
             */
            id: number
          }[]
        }
      }
    )[]

    /**
     * Generate prerequisites for each entry of the category.
     * @minItems 1
     */
    prerequisites?: (
      | OptionSkillSelfPrerequisite
      | OptionOptionPrerequisite
    )[]

    /**
     * Generate AP values for each entry.
     */
    ap_value?: OptionSkillDeriveAdventurePointsValue<SkillIdentifier>
  | {
    tag: "CombatTechniques"

    /**
     * A list of combat technique categories.
     * @minItems 1
     */
    categories: {
      tag: CombatTechniqueTag

      /**
       * Only include (`Intersection`) or exclude (`Difference`) specific
       * entries.
       */
      specific?: {
        operation:
          | { tag: "Intersection" }
          | { tag: "Difference" }

        /**
         * The list of specific entries.
         * @minItems 1
         * @uniqueItems
         */
        list: {
          /**
           * The entry's identifier.
           * @integer
           * @minimum 1
           * @maximum 59
           */
          id: number
        }[]
      }
    }[]

    /**
     * Generate prerequisites for each entry of the category.
     * @minItems 1
     */
    prerequisites?: (
      | OptionSkillSelfPrerequisite
      | OptionOptionPrerequisite
    )[]

    /**
     * Generate AP values for each entry.
     */
    ap_value?: OptionSkillDeriveAdventurePointsValue<CombatTechniqueIdentifier>
  }
}

type OptionSkillSelfPrerequisite = {
  tag: "Self"

  /**
   * The entry requires itself on a certain Skill Rating.
   * @integer
   * @minimum 1
   */
  value: number
}

/**
 * The entry requires or prohibits itself as a select option of another entry.
 */
type OptionOptionPrerequisite = {
  tag: "SelectOption"

  /**
   * The target entry's identifier.
   */
  id: ActivatableIdentifier

  /**
   * Is the select option required (`true`) or prohibited (`false`)?
   */
  active: boolean

  /**
   * The required level, if any.
   * @integer
   * @minimum 2
   */
  level?: number
}

/**
 * Generate AP values for each entry.
 */
type OptionSkillDeriveAdventurePointsValue<Identifier> =
  | {
    tag: "DerivedFromImprovementCost"

    /**
     * This number is multiplied with the improvement cost of the entry
     * (A = 1 to D = 4).
     * @integer
     * @minimum 2
     */
    multiplier?: number
  }
  | {
    tag: "Fixed"

    /**
     * A mapping of skill identifiers to their specific AP values.
     */
    map: {
      /**
       * The skill's identifier.
       * @integer
       * @minimum 1
       */
      id: Identifier

      /**
       * The AP value for the specified entry.
       * @integer
       * @minimum 1
       */
      ap_value: number
    }[]

    /**
     * The default value of an entry. Used as a fallback if no value is
     * found in `list`.
     * @integer
     * @minimum 1
     */
    default: number
  }

type ExplicitOption =
  | {
    tag: "General"

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
     * @minProperties 1
     */
    translations: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       */
      [localeId: string]: {
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
    }
  }
  | {
    tag: "Skill"

    /**
     * The skill's identifier. An unique, increasing integer.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * Registers new applications, which get enabled once this entry is
     * activated with its respective select option. It specifies an entry-unique
     * identifier and the skill it belongs to. A translation can be left out if
     * its name equals the name of the origin select option.
     * @minItems 1
     */
    skill_applications?: {
      /**
       * The application's identifier. An entry-unique, increasing integer.
       * @integer
       * @minimum 1
       */
      id: number

      /**
       * All translations for the entry, identified by IETF language tag (BCP47).
       * @minProperties 1
       */
      translations?: {
        /**
         * @patternProperties ^[a-z]{2}-[A-Z]{2}$
         */
        [localeId: string]: {
          /**
           * The name of the application if different from the activatable entry's
           * name.
           * @minLength 1
           */
          name: string
        }
      }
    }[]

    /**
     * Registers uses, which get enabled once this entry is activated with its
     * respective select option. It specifies an entry-unique identifier and the
     * skill it belongs to. A translation can be left out if its name equals the
     * name of the origin select option.
     * @minItems 1
     */
    skill_uses?: {
      /**
       * The use's identifier. An entry-unique, increasing integer.
       * @integer
       * @minimum 1
       */
      id: number

      /**
       * All translations for the entry, identified by IETF language tag (BCP47).
       * @minProperties 1
       */
      translations?: {
        /**
         * @patternProperties ^[a-z]{2}-[A-Z]{2}$
         */
        [localeId: string]: {
          /**
           * The name of the use if different from the activatable entry's name.
           * @minLength 1
           */
          name: string
        }
      }
    }[]

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
     * @minProperties 1
     */
    translations?: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       * @minProperties 1
       */
      [localeId: string]: {
        errata?: Errata
      }
    }
  }
  | {
    tag: "CombatTechnique"

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
     * @minProperties 1
     */
    translations?: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       * @minProperties 1
       */
      [localeId: string]: {
        errata?: Errata
      }
    }
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
 * @markdown
 * @minLength 1
 */
export type Rules = string

/**
 * The effect description.
 * @markdown
 * @minLength 1
 */
export type Effect = string

/**
 * The definition of how the combat special ability can be used in combat.
 */
export type CombatSpecialAbilityType =
  | { tag: "Passive" }
  | { tag: "BasicManeuver" }
  | { tag: "SpecialManeuver" }

/**
 * Registers new skill applications, which get enabled once this entry is
 * activated. It specifies an entry-unique identifier and the skill it belongs
 * to. A translation can be left out if its name equals the name of the origin
 * activatable entry.
 * @minItems 1
 */
export type SkillApplications = {
  /**
   * The application's identifier. An entry-unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The skill(s) this application belongs to.
   */
  skill:
    | {
      tag: "Single"

      /**
       * The referenced skill's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }
    | {
      tag: "Multiple"

      /**
       * The skills this application belongs to.
       * @minItems 2
       */
      list: {
        /**
         * The referenced skill's identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }[]

      /**
       * If an application applies to multiple skills, it may need to ensure the
       * respective skill is on a certain skill rating if the activatable entry
       * cannot ensure this prerequisite.
       * @integer
       * @minimum 1
       */
      required_skill_rating?: number
    }

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations?: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The name of the application if different from the activatable entry's
       * name.
       * @minLength 1
       */
      name: string
    }
  }
}[]

/**
 * Registers uses, which get enabled once this entry is activated. It specifies
 * an entry-unique identifier and the skill it belongs to. A translation can be
 * left out if its name equals the name of the origin activatable entry.
 * @minItems 1
 */
export type SkillUses = {
  /**
   * The use's identifier. An entry-unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The skill(s) this use belongs to.
   */
  skill:
    | {
      tag: "Single"

      /**
       * The referenced skill's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }
    | {
      tag: "Multiple"

      /**
       * The skills this use belongs to.
       * @minItems 2
       */
      list: {
        /**
         * The referenced skill's identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }[]
    }

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations?: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The name of the use if different from the activatable entry's name.
       * @minLength 1
       */
      name: string
    }
  }
}[]

/**
 * The penalty the special ability gives when used.
 */
export type Penalty =
  | {
    tag: "Single"

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
  | {
    tag: "ByHandedness"

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
  | {
    tag: "ByActivation"

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
  | {
    tag: "Selection"

    options:
      | {
        tag: "Specific"

        /**
         * The list of specific penalty options.
         * @minItems 2
         * @uniqueItems
         */
        list: {
          /**
           * The penalty value.
           * @integer
           */
          value: number
        }[]
      }
      | {
        tag: "Range"

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
  }
  | {
    tag: "ByLevel"

    /**
     * A continuous range of penalties for each level. The first element is the
     * penalty for the first level, the second element is the penalty for the
     * second level, and so on.
     * @minItems 2
     */
    levels: {
      /**
       * The penalty value for this level.
       * @integer
       */
      value: number
    }[]

    /**
     * The identifier of the combat-related special ability of which the level
     * defines the penalty instead.
     */
    external_id?: CombatRelatedSpecialAbilityIdentifier
  }
  | {
    tag: "ByAttack"

    /**
     * A list of penalties for subsequent attacks. The first element is the
     * penalty for the first attack, the second element is the penalty for the
     * second attack, and so on. The order of the first element may be changed
     * using `initial_order`, so that e.g. if set to `2`, the first element is
     * the penalty for the second attack, the second element is the penalty for
     * the third attack, and so on.
     * @minItems 1
     */
    list: {
      /**
       * The penalty value for this order.
       * @integer
       */
      value: number
    }[]

    /**
     * The order of the first element in the `list` of penalties.
     */
    initial_order?: number

    /**
     * Set if a predefined different word should be used instead of the word
     * `attack` for display purposes.
     */
    attack_replacement?:
      | { tag: "Throw" }
  }
  | { tag: "DependsOnHitZone" }

export type EnchantmentCost =
  | {
    tag: "ArcaneEnergyCost"

    ae_cost: ArcaneEnergyCost
  }
  | {
    tag: "BindingCost"

    binding_cost: BindingCost
  }

/**
 * The AE Cost.
 */
export type ArcaneEnergyCost =
  | {
    tag: "Fixed"

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
    interval?: Duration.UnitValue

    /**
     * The AE cost are per level of the enchantment. It may either be displayed
     * in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1
     * AE for level I; 2 AE for level II`).
     */
    per_level?:
      | { tag: "Compressed" }
      | { tag: "Verbose" }

    /**
     * All translations for the entry, identified by IETF language tag
     * (BCP47).
     * @minProperties 1
     */
    translations?: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       * @minProperties 1
       */
      [localeId: string]: {
        /**
         * A note, appended to the generated string in parenthesis.
         */
        note?: {
          /**
           * The full note.
           * @minLength 1
           */
          default: string

          /**
           * A compressed note, if applicable. If not specified it should not
           * be displayed in small location.
           * @minLength 1
           */
          compressed?: string
        }
      }
    }
  }
  | {
    tag: "PerCountable"

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
     * All translations for the entry, identified by IETF language tag
     * (BCP47).
     * @minProperties 1
     */
    translations?: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       * @minProperties 1
       */
      [localeId: string]: {
        /**
         * The cost have to be per a specific countable entity, e.g. `8 AE per
         * person`.
         */
        per: {
          /**
           * The full countable entity name.
           * @minLength 1
           */
          default: string

          /**
           * The compressed countable entity name.
           * @minLength 1
           */
          compressed: string
        }

        /**
         * A note, appended to the generated string in parenthesis.
         */
        note?: {
          /**
           * The full note.
           * @minLength 1
           */
          default: string

          /**
           * A compressed note, if applicable. If not specified it should not
           * be displayed in small location.
           * @minLength 1
           */
          compressed?: string
        }
      }
    }
  }
  | {
    tag: "ActivationAndHalfInterval"

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
    interval: Duration.UnitValue
  }
  | {
    tag: "Indefinite"

    /**
     * The indefinite AE cost may be modified by a certain value.
     */
    modifier: {
      /**
       * The arithmetic how to apply the `value` to the indefinite base value.
       */
      arithmetic:
        | { tag: "Add" }
        | { tag: "Multiply" }

      /**
       * The value that is applied to the indefinite base value using the
       * defined `arithmetic`.
       * @integer
       * @minimum 1
       */
      value: number
    }

    /**
     * All translations for the entry, identified by IETF language tag (BCP47).
     * @minProperties 1
     */
    translations: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       */
      [localeId: string]: {
        /**
         * A description of where the cost come from.
         */
        description: {
          /**
           * The full description of where the cost come from.
           * @minLength 1
           */
          default: string

          /**
           * A compressed description of where the cost come from for use in
           * small areas (e.g. on character sheet).
           * @minLength 1
           */
          compressed: string
        }
      }
    }
  }
  | {
    tag: "Disjunction"

    /**
     * Specified if the selected AE cost option has to be paid for each time
     * interval.
     */
    interval?: {
      /**
       * The interval itself.
       */
      value: Duration.UnitValue

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

    /**
     * The possible AE cost values.
     */
    options: {
      /**
       * A possible AE cost value.
       * @integer
       * @minimum 1
       */
      value: number

      /**
       * All translations for the entry, identified by IETF language tag
       * (BCP47).
       * @minProperties 1
       */
      translations?: {
        /**
         * @patternProperties ^[a-z]{2}-[A-Z]{2}$
         * @minProperties 1
         */
        [localeId: string]: {
          /**
           * A note, appended to the generated option string in parenthesis.
           */
          note?: {
            /**
             * The full note.
             * @minLength 1
             */
            default: string

            /**
             * A compressed note, if applicable. If not specified it should not
             * be displayed in small location.
             * @minLength 1
             */
            compressed?: string
          }
        }
      }
    }[]
  }
  | {
    tag: "None"

    /**
     * All translations for the entry, identified by IETF language tag
     * (BCP47).
     * @minProperties 1
     */
    translations?: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       * @minProperties 1
       */
      [localeId: string]: {
        /**
         * A note, appended to the generated string in parenthesis.
         */
        note?: {
          /**
           * The full note.
           * @minLength 1
           */
          default: string

          /**
           * A compressed note, if applicable. If not specified it should not
           * be displayed in small location.
           * @minLength 1
           */
          compressed?: string
        }
      }
    }
  }
  | { tag: "Variable" }

/**
 * The volume points the enchantment needs.
 */
export type Volume =
  | {
    tag: "Fixed"

    /**
     * The volume points.
     * @integer
     * @minimum 0
     */
    points: number
  }
  | {
    tag: "PerLevel"

    /**
     * The volume points per level.
     * @integer
     * @minimum 1
     */
    points: number
  }
  | {
    tag: "ByLevel"

    /**
     * The volume points for each level. The first element is the volume points
     * for the first level, the second element is the volume points for the
     * second level, and so on.
     * @minItems 2
     */
    list: {
      /**
       * The volume points for this level.
       * @integer
       * @minimum 0
       */
      points: number
    }[]
  }
  | {
    tag: "Map"

    map: VolumeMap
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
   * @minProperties 1
   */
  translations?: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
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
  }
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
  associated_options: {
    /**
     * The option's identifier.
     */
    id: VolumePointsOptionReferenceIdentifier
  }[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations?: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The description of the option for cost string generation.
       * @minLength 1
       */
      label: string

      /**
       * The description of the option if used standalone. Only used if
       * different from `label`.
       * @minLength 1
       */
      label_standalone?: string
    }
  }
}

/**
 * The binding cost for an enchantment.
 */
export type BindingCost =
  | {
    tag: "Fixed"

    /**
     * The permanent AE cost.
     * @integer
     * @minimum 1
     */
    permanent_value: number
  }
  | {
    tag: "PerLevel"

    /**
     * The permanent AE cost per level.
     * @integer
     * @minimum 1
     */
    permanent_value: number
  }
  | {
    tag: "Map"

    map: BindingCostMap
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
   * @minProperties 1
   */
  translations?: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
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
  }
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
   * @minProperties 1
   */
  translations?: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The description of the option for cost string generation.
       * @minLength 1
       */
      label: string

      /**
       * The description of the option if used standalone. Only used if
       * different from `label`.
       * @minLength 1
       */
      label_standalone?: string
    }
  }
}

/**
 * The magic property's identifier. `DependingOnProperty` can only be used if
 * the special ability has an option to select a property.
 */
export type Property =
  | { tag: "DependingOnProperty" }
  | {
    tag: "Fixed"

    /**
     * The property's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }

/**
 * The blessed aspect's identifier.
 * @integer
 * @minimum 1
 */
export type Aspect = number

/**
 * A reference to an advanced special ability.
 */
export type AdvancedSpecialAbility =
  | {
    tag: "General"

    /**
     * The advanced special ability's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "RestrictOptions"

    /**
     * The advanced special ability's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * Specify the select option(s) that only are allowed for the referenced
     * advanced special ability; others are disallowed.
     * @minItems 1
     */
    option: AdvancedSpecialAbilityRestrictedOptionIdentifier[]
  }
  | {
    tag: "OneOf"

    /**
     * The possible advanced special abilities.
     */
    options: {
      /**
       * The advanced special ability's numeric identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }

    /**
     * Do have to choose on when buying the special ability? Otherwise the
     * decision can be made later.
     */
    is_selection_required_on_purchase: boolean

    /**
     * Specify the select option(s) that only are allowed for the referenced
     * advanced special ability; others are disallowed.
     * @minItems 1
     */
    option: AdvancedSpecialAbilityRestrictedOptionIdentifier[]

    display_option?: DisplayOption
  }
  | {
    tag: "DeriveFromExternalOption"

    /**
     * The possible advanced special abilities.
     */
    external_entry: AdvancedSpecialAbilityDerivedExternalEntryId

    /**
     * @minItems
     */
    mappings: {
      /**
       * The select option's identifier.
       */
      from_option: AdvancedSpecialAbilityDerivedExternalEntryOptionId

      /**
       * The advanced special ability's identifier.
       */
      to_advanced: {
        /**
         * The advanced special ability's numeric identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }
    }[]

    display_option?: DisplayOption

    /**
     * Do have to choose on when buying the special ability? Otherwise the
     * decision can be made later.
     */
    is_selection_required_on_purchase: boolean

    /**
     * Specify the select option(s) that only are allowed for the referenced
     * advanced special ability; others are disallowed.
     * @minItems 1
     */
    option: AdvancedSpecialAbilityRestrictedOptionIdentifier[]
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
export type AdvancedSpecialAbilities = [
  AdvancedSpecialAbility,
  AdvancedSpecialAbility,
  AdvancedSpecialAbility,
]

export type ApplicableCombatTechniques =
  | { tag: "None" }
  | { tag: "DependingOnCombatStyle" }
  | {
    tag: "All"

    /**
     * @minItems 1
     */
    restrictions?: ApplicableAllCombatTechniquesRestriction[]
  }
  | {
    tag: "AllClose"

    /**
     * @minItems 1
     */
    restrictions?: ApplicableCloseCombatTechniquesRestriction[]
  }
  | {
    tag: "AllRanged"

    /**
     * @minItems 1
     */
    restrictions?: ApplicableRangedCombatTechniquesRestriction[]
  }
  | {
    tag: "Specific"

    /**
     * @minItems 1
     */
    list: {
      id: CombatTechniqueIdentifier

      /**
       * @minItems 1
       */
      restrictions?: ApplicableSpecificCombatTechniquesRestriction[]
    }[]
  }

export type ApplicableAllCombatTechniquesRestriction =
  | { tag: "Improvised" }
  | { tag: "PointedBlade" }
  | { tag: "Mount" }
  | {
    tag: "Race"

    /**
     * The race's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "ExcludeCombatTechniques"

    /**
     * The combat techniques this combat special ability is **not** applicable
     * to.
     * @minItems 1
     * @uniqueItems
     */
    list: CombatTechniqueIdentifier[]
  }

export type ApplicableCloseCombatTechniquesRestriction =
  | { tag: "Improvised" }
  | { tag: "PointedBlade" }
  | { tag: "Mount" }
  | { tag: "HasParry" }
  | { tag: "OneHanded" }
  | { tag: "ParryingWeapon" }
  | {
    tag: "Race"

    /**
     * The race's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "ExcludeCombatTechniques"

    /**
     * The combat techniques this combat special ability is **not** applicable
     * to.
     * @minItems 1
     * @uniqueItems
     */
    list: {
      /**
       * The close combat technique's numeric identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }[]
  }

export type ApplicableRangedCombatTechniquesRestriction =
  | { tag: "Improvised" }
  | { tag: "PointedBlade" }
  | { tag: "Mount" }
  | {
    tag: "Race"

    /**
     * The race's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "ExcludeCombatTechniques"

    /**
     * The combat techniques this combat special ability is **not** applicable
     * to.
     * @minItems 1
     * @uniqueItems
     */
    list: {
      /**
       * The ranged combat technique's numeric identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }[]
  }

export type ApplicableSpecificCombatTechniquesRestriction =
  | { tag: "Improvised" }
  | { tag: "PointedBlade" }
  | { tag: "Mount" }
  | {
    tag: "Race"

    /**
     * The race's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "Level"

    /**
     * The combat special ability is only applicable on a certain level.
     * @integer
     * @minimum 1
     */
    level: number
  }
  | {
    tag: "Weapons"

    /**
     * The specific weapons this combat special ability is only applicable to.
     * @minItems 1
     * @uniqueItems
     */
    list: {
      /**
       * The weapon's numeric identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }[]
  }

export type AdventurePointsValue =
  | {
    tag: "Fixed"

    /**
     * A fixed adventure points value. If the entry has levels, this is the cost
     * for each level as well.
     */
    value: AdventurePointsSingleValue
  }
  | {
    tag: "ByLevel"

    /**
     * An entry with levels may have different costs for each level. The length
     * of the list must match the amount of levels the special ability has.
     * @minItems 2
     */
    values: AdventurePointsSingleValue[]
  }
  | {
    tag: "ByImprovementCost"

    /**
     * An entry with a selection of skills may have different costs for
     * different improvement costs of the selected skill.
     *
     * If the select options will not have entries with improvement cost A
     * (combat techniques only), you may leave out A.
     */
    values: {
      A?: AdventurePointsSingleValue
      B: AdventurePointsSingleValue
      C: AdventurePointsSingleValue
      D: AdventurePointsSingleValue
    }
  }
  | {
    /**
     * Used if AP value is defined by the selected option(s) or special rules.
     */
    tag: "Indefinite"
  }

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
