/**
 * General type specifications used by multiple activatable entries.
 */

import {
  Array,
  Boolean,
  Entity,
  Enum,
  EnumCase,
  GenEnum,
  GenIncludeIdentifier,
  GenTypeAlias,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Param,
  Required,
  String,
  Type,
  TypeAlias,
  TypeArgument,
} from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"
import { SelectOptionCategory } from "./_ActivatableSelectOptionCategory.js"
import { DurationUnitValue } from "./_ActivatableSkillDuration.js"
import {
  AspectIdentifier,
  CloseCombatTechniqueIdentifier,
  GeneralIdentifier,
  MagicalTraditionIdentifier,
  NewSkillApplicationIdentifier,
  PatronIdentifier,
  PropertyIdentifier,
  RaceIdentifier,
  RangedCombatTechniqueIdentifier,
  SkillIdentifier,
  SkillUseIdentifier,
  WeaponIdentifier,
} from "./_Identifier.js"
import {
  ActivatableIdentifier,
  AdvancedSpecialAbilityRestrictedOptionIdentifier,
  CombatRelatedSpecialAbilityIdentifier,
  CombatTechniqueIdentifier,
  NewSkillApplicationOrUseParentIdentifier,
  VolumePointsOptionReferenceIdentifier,
} from "./_IdentifierGroup.js"
import { GeneralPrerequisites } from "./_Prerequisite.js"
import { ResponsiveText, ResponsiveTextOptional } from "./_ResponsiveText.js"
import { DisplayOption } from "./prerequisites/DisplayOption.js"
import { Errata } from "./source/_Erratum.js"
import { optionalSrc } from "./source/_PublicationRef.js"

export const name = Required({
  comment: "Name of the activatable entry.",
  type: String({ minLength: 1 }),
})

export const name_in_library = Optional({
  comment:
    "The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes.",
  type: String({ minLength: 1 }),
})

export const levels = Optional({
  comment: "Number of available levels.",
  type: Integer({ minimum: 2 }),
})

export const maximum = Optional({
  comment: `The number stating how often you can buy the entry. The **default** depends on the entry type:

- **Advantage:** \`1\` in all cases (as specified in the **Core Rules**)
- **Disadvantage:** \`1\` in all cases (as specified in the **Core Rules**)
- **Special Abilities:** \`1\` if no options can be selected, otherwise the number of possible options

The maximum is only set if it differs from the defaults specified above.`,
  type: Integer({ minimum: 1 }),
})

const SelectOptions = TypeAlias(import.meta.url, {
  name: "SelectOptions",
  comment: `Definitions for possible options for the activatable entry. They can either be derived from entry categories or be defined explicitly. Both can happen as well, but if there is an explicitly defined select option and a derived select option has the same identifier (which may only happen if skill or combat technique identifiers are used for explicit select options), the explicit definition overwrites the derived option.

Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.`,
  type: () =>
    Object(
      {
        derived: Optional({
          comment: `An entry category with optional further configuration. All available entries from the specified categories will be included as separate select options. You can also specify a set of groups that should only be included. Groups not mentioned will be excluded then.`,
          type: IncludeIdentifier(SelectOptionCategory),
        }),
        explicit: Optional({
          comment: `A list of explicit select options. If the identifier has a specific type, its entry is the base of this select option, where values defined here override values from the base. Define the \`src\` property if the options are not derived from the rules text of the advantage/disadvantage/special ability but instead are listed in a separate block and/or on a separate page.`,
          type: Array(IncludeIdentifier(ExplicitSelectOption), { minItems: 1 }),
        }),
      },
      { minProperties: 1 }
    ),
})

export const select_options = Optional({
  comment: `Definitions for possible options for the activatable entry. They can either be derived from entry categories or be defined explicitly. Both can happen as well, but if there is an explicitly defined select option and a derived select option has the same identifier (which may only happen if skill or combat technique identifiers are used for explicit select options), the explicit definition overwrites the derived option.

Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.`,
  type: IncludeIdentifier(SelectOptions),
})

const ExplicitSelectOption = Enum(import.meta.url, {
  name: "ExplicitSelectOption",
  values: () => ({
    General: EnumCase({ type: GeneralIdentifier() }),
    Skill: EnumCase({ type: IncludeIdentifier(ExplicitSkillSelectOption) }),
    CombatTechnique: EnumCase({ type: IncludeIdentifier(ExplicitCombatTechniqueSelectOption) }),
  }),
})

export const GeneralSelectOption = Entity(import.meta.url, {
  name: "GeneralSelectOption",
  namePlural: "GeneralSelectOptions",
  type: () =>
    Object({
      parent: Required({
        comment: "The entry that contains select option.",
        type: IncludeIdentifier(ActivatableIdentifier),
      }),
      profession_only: Optional({
        comment:
          "Sometimes, professions use specific text selections that are not contained in described lists. This ensures you can use them for professions only. They are not going to be displayed as options to the user.",
        type: Boolean(),
      }),
      skill_applications: Optional({
        comment:
          "Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.",
        type: Array(IncludeIdentifier(NewSkillApplications), { minItems: 1 }),
      }),
      skill_uses: Optional({
        comment:
          "Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.",
        type: Array(IncludeIdentifier(SkillUses), { minItems: 1 }),
      }),
      prerequisites: Optional({
        comment: "Prerequisites for the select option.",
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      binding_cost: Optional({
        comment:
          "Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.",
        type: Integer({ minimum: 0 }),
      }),
      ap_value: Optional({
        comment: "Specific AP cost for the select option.",
        type: Integer({ minimum: 1 }),
      }),
      src: optionalSrc,
      translations: NestedLocaleMap(
        Required,
        "GeneralSelectOptionTranslation",
        Object({
          name: Required({
            comment: "The name of the select option.",
            type: String({ minLength: 1 }),
          }),
          name_in_profession: Optional({
            comment: "The name of the select option when displayed in a generated profession text.",
            type: String({ minLength: 1 }),
          }),
          description: Optional({
            comment:
              "The description of the select option. Useful for Bad Habits, Trade Secrets and other entries where a description is available.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const ExplicitSkillSelectOption = TypeAlias(import.meta.url, {
  name: "ExplicitSkillSelectOption",
  type: () =>
    Object({
      id: Required({
        comment: "The skill’s identifier.",
        type: SkillIdentifier(),
      }),
      skill_applications: Optional({
        comment:
          "Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.",
        type: Array(IncludeIdentifier(NewSkillApplications), { minItems: 1 }),
      }),
      skill_uses: Optional({
        comment:
          "Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.",
        type: Array(IncludeIdentifier(SkillUses), { minItems: 1 }),
      }),
      prerequisites: Optional({
        comment: "Prerequisites for the select option.",
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      binding_cost: Optional({
        comment:
          "Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.",
        type: Integer({ minimum: 0 }),
      }),
      ap_value: Optional({
        comment: "Specific AP cost for the select option.",
        type: Integer({ minimum: 1 }),
      }),
      src: optionalSrc,
      translations: NestedLocaleMap(
        Optional,
        "ExplicitSkillSelectOptionTranslation",
        Object(
          {
            errata: Optional({
              type: IncludeIdentifier(Errata),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

const ExplicitCombatTechniqueSelectOption = TypeAlias(import.meta.url, {
  name: "ExplicitCombatTechniqueSelectOption",
  type: () =>
    Object({
      id: Required({
        comment: "The combat technique’s identifier.",
        type: IncludeIdentifier(CombatTechniqueIdentifier),
      }),
      prerequisites: Optional({
        comment: "Prerequisites for the select option.",
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      binding_cost: Optional({
        comment:
          "Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.",
        type: Integer({ minimum: 0 }),
      }),
      ap_value: Optional({
        comment: "Specific AP cost for the select option.",
        type: Integer({ minimum: 1 }),
      }),
      src: optionalSrc,
      translations: NestedLocaleMap(
        Optional,
        "ExplicitCombatTechniqueSelectOptionTranslation",
        Object(
          {
            errata: Optional({
              type: IncludeIdentifier(Errata),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

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

export const rules = Required({
  comment: "The rule text.",
  type: String({ minLength: 1, isMarkdown: true }),
})

export const effect = Required({
  comment: "The effect description.",
  type: String({ minLength: 1, isMarkdown: true }),
})

const CombatSpecialAbilityUsageType = Enum(import.meta.url, {
  name: "CombatSpecialAbilityUsageType",
  comment: "The definition of how the combat special ability can be used in combat.",
  values: () => ({
    Passive: EnumCase({ type: null }),
    BasicManeuver: EnumCase({ type: null }),
    SpecialManeuver: EnumCase({ type: null }),
  }),
})

export const usage_type = Required({
  comment: "The definition of how the combat special ability can be used in combat.",
  type: IncludeIdentifier(CombatSpecialAbilityUsageType),
})

const CombatSpecialAbilityType = Enum(import.meta.url, {
  name: "CombatSpecialAbilityType",
  comment:
    "The definition of if the combat special ability can be used when armed or when unarmed.",
  values: () => ({
    Armed: EnumCase({ type: null }),
    Unarmed: EnumCase({ type: null }),
  }),
})

export const type = Required({
  comment:
    "The definition of if the combat special ability can be used when armed or when unarmed.",
  type: IncludeIdentifier(CombatSpecialAbilityType),
})

const NewSkillApplications = TypeAlias(import.meta.url, {
  name: "NewSkillApplications",
  comment:
    "Registers new skill applications, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: () => Array(NewSkillApplicationIdentifier(), { minItems: 1 }),
})

export const skill_applications = Optional({
  comment:
    "Registers new skill applications, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: IncludeIdentifier(NewSkillApplications),
})

export const NewSkillApplication = Entity(import.meta.url, {
  name: "NewSkillApplication",
  namePlural: "NewSkillApplications",
  comment:
    "Registers new skill applications, which get enabled once the referenced entry is activated. It specifies the skill(s) it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: () =>
    Object({
      parent: Required({
        comment: "The entry that enables the new skill application.",
        type: IncludeIdentifier(NewSkillApplicationOrUseParentIdentifier),
      }),
      skills: Required({
        comment: "The skill(s) this application belongs to.",
        type: Array(SkillIdentifier(), { minItems: 1 }),
      }),
      required_skill_rating: Optional({
        comment:
          "If an application applies to multiple skills, it may need to ensure the respective skill is on a certain skill rating if the activatable entry cannot ensure this prerequisite.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "NewSkillApplicationTranslation",
        Object({
          name: Required({
            comment: "The name of the application if different from the activatable entry’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})

export const SkillUse = Entity(import.meta.url, {
  name: "SkillUse",
  namePlural: "SkillUses",
  comment:
    "Registers uses, which get enabled once this entry is activated. It specifies the skill(s) it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: () =>
    Object({
      parent: Required({
        comment: "The entry that enables the use.",
        type: IncludeIdentifier(NewSkillApplicationOrUseParentIdentifier),
      }),
      skills: Required({
        comment: "The skill(s) this use belongs to.",
        type: Array(SkillIdentifier(), { minItems: 1 }),
      }),
      required_skill_rating: Optional({
        comment:
          "If a use applies to multiple skills, it may need to ensure the respective skill is on a certain skill rating if the activatable entry cannot ensure this prerequisite.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "SkillUseTranslation",
        Object({
          name: Required({
            comment: "The name of the use if different from the activatable entry’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})

const SkillUses = TypeAlias(import.meta.url, {
  name: "SkillUses",
  comment:
    "Registers uses, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: () => Array(SkillUseIdentifier(), { minItems: 1 }),
})

export const skill_uses = Optional({
  comment:
    "Registers uses, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: IncludeIdentifier(SkillUses),
})

const Penalty = Enum(import.meta.url, {
  name: "Penalty",
  comment: "The penalty the special ability gives when used.",
  values: () => ({
    Single: EnumCase({ type: IncludeIdentifier(SinglePenalty) }),
    ByHandedness: EnumCase({ type: IncludeIdentifier(PenaltyByHandedness) }),
    ByActivation: EnumCase({ type: IncludeIdentifier(PenaltyByActivation) }),
    Selection: EnumCase({ type: IncludeIdentifier(PenaltySelection) }),
    ByLevel: EnumCase({ type: IncludeIdentifier(PenaltyByLevel) }),
    ByAttack: EnumCase({ type: IncludeIdentifier(PenaltyByAttack) }),
    DependsOnHitZone: EnumCase({ type: null }),
  }),
})

export const penalty = Optional({
  comment: "The penalty the special ability gives when used.",
  type: IncludeIdentifier(Penalty),
})

const SinglePenalty = TypeAlias(import.meta.url, {
  name: "SinglePenalty",
  type: () =>
    Object({
      value: Required({
        comment: "The penalty value.",
        type: Integer(),
      }),
      applies_to_parry: Optional({
        comment: "Set to `true` if the penalty applies to the parry instead of the attack.",
        type: Boolean(),
      }),
    }),
})

const PenaltyByHandedness = TypeAlias(import.meta.url, {
  name: "PenaltyByHandedness",
  type: () =>
    Object({
      one_handed: Required({
        comment: "The penalty value for one-handed weapons.",
        type: Integer(),
      }),
      two_handed: Required({
        comment: "The penalty value for two-handed weapons.",
        type: Integer(),
      }),
      applies_to_parry: Optional({
        comment: "Set to `true` if the penalty applies to the parry instead of the attack.",
        type: Boolean(),
      }),
    }),
})

const PenaltyByActivation = TypeAlias(import.meta.url, {
  name: "PenaltyByActivation",
  type: () =>
    Object({
      active: Required({
        comment: "The penalty value if the entry has been bought by the character.",
        type: Integer(),
      }),
      inactive: Required({
        comment: "The penalty value if the entry has not been bought by the character.",
        type: Integer(),
      }),
      applies_to_parry: Optional({
        comment: "Set to `true` if the penalty applies to the parry instead of the attack.",
        type: Boolean(),
      }),
    }),
})

const PenaltySelection = TypeAlias(import.meta.url, {
  name: "PenaltySelection",
  type: () =>
    Object({
      options: Required({
        type: IncludeIdentifier(PenaltySelectionOptions),
      }),
    }),
})

const PenaltySelectionOptions = Enum(import.meta.url, {
  name: "PenaltySelectionOptions",
  values: () => ({
    Specific: EnumCase({ type: IncludeIdentifier(SpecificPenaltySelectionOptions) }),
    Range: EnumCase({ type: IncludeIdentifier(PenaltySelectionOptionsRange) }),
  }),
})

const SpecificPenaltySelectionOptions = TypeAlias(import.meta.url, {
  name: "SpecificPenaltySelectionOptions",
  type: () =>
    Object({
      list: Required({
        comment: "The list of specific penalty options.",
        type: Array(IncludeIdentifier(SpecificPenaltySelectionOption), { minItems: 2 }),
      }),
    }),
})

const SpecificPenaltySelectionOption = TypeAlias(import.meta.url, {
  name: "SpecificPenaltySelectionOption",
  type: () =>
    Object({
      value: Required({
        comment: "The penalty value.",
        type: Integer(),
      }),
    }),
})

const PenaltySelectionOptionsRange = TypeAlias(import.meta.url, {
  name: "PenaltySelectionOptionsRange",
  type: () =>
    Object({
      minimum: Required({
        comment: "The minimum penalty value.",
        type: Integer(),
      }),
      maximum: Required({
        comment: "The maximum penalty value.",
        type: Integer(),
      }),
    }),
})

const PenaltyByLevel = TypeAlias(import.meta.url, {
  name: "PenaltyByLevel",
  type: () =>
    Object({
      levels: Required({
        comment:
          "A continuous range of penalties for each level. The first element is the penalty for the first level, the second element is the penalty for the second level, and so on.",
        type: Array(IncludeIdentifier(PenaltyByLevelLevel), { minItems: 2 }),
      }),
      external: Optional({
        comment:
          "The combat-related special ability of which the level defines the penalty instead.",
        type: IncludeIdentifier(PenaltyByExternalLevel),
      }),
    }),
})

const PenaltyByLevelLevel = TypeAlias(import.meta.url, {
  name: "PenaltyByLevelLevel",
  type: () =>
    Object({
      value: Required({
        comment: "The penalty value for this level.",
        type: Integer(),
      }),
    }),
})

const PenaltyByExternalLevel = TypeAlias(import.meta.url, {
  name: "PenaltyByExternalLevel",
  comment: "The combat-related special ability of which the level defines the penalty instead.",
  type: () =>
    Object({
      id: Required({
        comment:
          "The identifier of the combat-related special ability of which the level defines the penalty instead.",
        type: IncludeIdentifier(CombatRelatedSpecialAbilityIdentifier),
      }),
    }),
})

const PenaltyByAttack = TypeAlias(import.meta.url, {
  name: "PenaltyByAttack",
  type: () =>
    Object({
      list: Required({
        comment:
          "A list of penalties for subsequent attacks. The first element is the penalty for the first attack, the second element is the penalty for the second attack, and so on. The order of the first element may be changed using `initial_order`, so that e.g. if set to `2`, the first element is the penalty for the second attack, the second element is the penalty for the third attack, and so on.",
        type: Array(IncludeIdentifier(PenaltyByAttackOrderItem), { minItems: 1 }),
      }),
      initial_order: Optional({
        comment: "The order of the first element in the `list` of penalties.",
        type: Integer(),
      }),
      attack_replacement: Optional({
        comment:
          "Set if a predefined different word should be used instead of the word `attack` for display purposes.",
        type: IncludeIdentifier(PenaltyByAttackReplacement),
      }),
    }),
})

const PenaltyByAttackOrderItem = TypeAlias(import.meta.url, {
  name: "PenaltyByAttackOrderItem",
  type: () =>
    Object({
      value: Required({
        comment: "The penalty value for this order.",
        type: Integer(),
      }),
    }),
})

const PenaltyByAttackReplacement = Enum(import.meta.url, {
  name: "PenaltyByAttackReplacement",
  comment:
    "Set if a predefined different word should be used instead of the word `attack` for display purposes.",
  values: () => ({
    Throw: EnumCase({ type: null }),
  }),
})

const EnchantmentCost = Enum(import.meta.url, {
  name: "EnchantmentCost",
  values: () => ({
    ArcaneEnergyCost: EnumCase({ type: IncludeIdentifier(ArcaneEnergyCost) }),
    BindingCost: EnumCase({ type: IncludeIdentifier(BindingCost) }),
  }),
})

export const cost = Optional({
  comment: "The cost when casting the entry.",
  type: IncludeIdentifier(EnchantmentCost),
})

export const ArcaneEnergyCost = Enum(import.meta.url, {
  name: "ArcaneEnergyCost",
  comment: "The AE cost.",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedArcaneEnergyCost) }),
    PerCountable: EnumCase({ type: IncludeIdentifier(ArcaneEnergyCostPerCountable) }),
    Interval: EnumCase({ type: IncludeIdentifier(IntervalArcaneEnergyCost) }),
    ActivationAndHalfInterval: EnumCase({
      type: IncludeIdentifier(ActivationAndHalfIntervalArcaneEnergyCost),
    }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteArcaneEnergyCost) }),
    Disjunction: EnumCase({ type: IncludeIdentifier(ArcaneEnergyCostDisjunction) }),
    Variable: EnumCase({ type: null }),
  }),
})

export const aeCost = Optional({
  comment: "The AE cost.",
  isDeprecated: true,
  type: String({ minLength: 1 }),
})

const FixedArcaneEnergyCost = TypeAlias(import.meta.url, {
  name: "FixedArcaneEnergyCost",
  type: () =>
    Object({
      value: Required({
        comment: "The AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      is_permanent: Optional({
        comment: "Set to `true` if the AE costs are permanent.",
        type: Boolean(),
      }),
      interval: Optional({
        comment: "Specified if the AE cost `value` has to be paid for each time interval.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
      per_level: Optional({
        comment:
          "The AE cost are per level of the enchantment. It may either be displayed in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1 AE for level I; 2 AE for level II`).",
        type: IncludeIdentifier(FixedArcaneEnergyCostPerLevel),
      }),
      translations: NestedLocaleMap(
        Optional,
        "FixedArcaneEnergyCostTranslation",
        Object(
          {
            note: Optional({
              comment: "A note, appended to the generated option string in parenthesis.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

const FixedArcaneEnergyCostPerLevel = Enum(import.meta.url, {
  name: "FixedArcaneEnergyCostPerLevel",
  comment:
    "The AE cost are per level of the enchantment. It may either be displayed in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1 AE for level I; 2 AE for level II`).",
  values: () => ({
    Compressed: EnumCase({ type: null }),
    Verbose: EnumCase({ type: null }),
  }),
})

const ArcaneEnergyCostPerCountable = TypeAlias(import.meta.url, {
  name: "ArcaneEnergyCostPerCountable",
  type: () =>
    Object({
      value: Required({
        comment: "The AE cost value that has to be per a specific countable entity.",
        type: Integer({ minimum: 1 }),
      }),
      base_value: Optional({
        comment:
          "If defined, in addition to the cost per entity you have to pay a flat amount, regardless of the entity count.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedLocaleMap(
        Required,
        "ArcaneEnergyCostPerCountableTranslation",
        Object({
          per: Required({
            comment: "The cost have to be per a specific countable entity, e.g. `8 AE per person`.",
            type: IncludeIdentifier(ResponsiveText),
          }),
          note: Optional({
            comment: "A note, appended to the generated string in parenthesis.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
        })
      ),
    }),
})

const IntervalArcaneEnergyCost = TypeAlias(import.meta.url, {
  name: "IntervalArcaneEnergyCost",
  type: () =>
    Object({
      value: Required({
        comment: "The AE cost value that has to be payed each interval.",
        type: Integer({ minimum: 1 }),
      }),
      interval: Required({
        comment: "The time interval for which the AE cost `value` has to be paid.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
    }),
})

const ActivationAndHalfIntervalArcaneEnergyCost = TypeAlias(import.meta.url, {
  name: "ActivationAndHalfIntervalArcaneEnergyCost",
  type: () =>
    Object({
      value: Required({
        comment:
          "The AE cost value that has to be payed for activation. Half of this value has to be payed each interval.",
        type: Integer({ minimum: 2, multipleOf: 2 }),
      }),
      interval: Required({
        comment: "The time interval for which the AE cost `value` has to be paid.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
    }),
})

const IndefiniteArcaneEnergyCost = TypeAlias(import.meta.url, {
  name: "IndefiniteArcaneEnergyCost",
  type: () =>
    Object({
      modifier: Optional({
        comment:
          "Specified if the indefinite AP cost description needs to be modified by a certain value.",
        type: IncludeIdentifier(IndefiniteArcaneEnergyCostModifier),
      }),
      translations: NestedLocaleMap(
        Required,
        "IndefiniteArcaneEnergyCostTranslation",
        Object({
          description: Required({
            comment: "A description of where the cost come from.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        })
      ),
    }),
})

const IndefiniteArcaneEnergyCostModifier = TypeAlias(import.meta.url, {
  name: "IndefiniteArcaneEnergyCostModifier",
  type: () =>
    Object({
      arithmetic: Required({
        comment: "The arithmetic how to apply the `value` to the `base`.",
        type: IncludeIdentifier(IndefiniteArcaneEnergyCostModifierArithmetic),
      }),
      value: Required({
        comment: "The value that is applied to the `base` using the defined `arithmetic`.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const IndefiniteArcaneEnergyCostModifierArithmetic = Enum(import.meta.url, {
  name: "IndefiniteArcaneEnergyCostModifierArithmetic",
  values: () => ({
    Add: EnumCase({ type: null }),
  }),
})

const ArcaneEnergyCostDisjunction = TypeAlias(import.meta.url, {
  name: "ArcaneEnergyCostDisjunction",
  type: () =>
    Object({
      interval: Optional({
        comment: "Specified if the selected AE cost option has to be paid for each time interval.",
        type: IncludeIdentifier(ArcaneEnergyCostDisjunctionInterval),
      }),
      options: Required({
        comment: "The possible AE cost values.",
        type: Array(IncludeIdentifier(ArcaneEnergyCostDisjunctionOption), { minItems: 1 }),
      }),
    }),
})

const ArcaneEnergyCostDisjunctionInterval = TypeAlias(import.meta.url, {
  name: "ArcaneEnergyCostDisjunctionInterval",
  type: () =>
    Object({
      value: Required({
        comment: "The interval itself.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
      activation_value: Required({
        comment: "The AE cost value for activation.",
        type: Integer({ minimum: 1 }),
      }),
      after_activation: Required({
        comment: `Set to \`true\` if the action where the enchantment is casted does not as a part of the first interval that has to be payed, so that the first interval payment needs to be done after the activation.

This works different than other sustained spells, since for them the end of the cast usually already counts as part of the first interval.`,
        type: Boolean(),
      }),
    }),
})

const ArcaneEnergyCostDisjunctionOption = TypeAlias(import.meta.url, {
  name: "ArcaneEnergyCostDisjunctionOption",
  type: () =>
    Object({
      value: Required({
        comment: "A possible AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "ArcaneEnergyCostDisjunctionOptionTranslation",
        Object(
          {
            note: Optional({
              comment: "A note, appended to the generated option string in parenthesis.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

const NoArcaneEnergyCost = TypeAlias(import.meta.url, {
  name: "NoArcaneEnergyCost",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Optional,
        "NoArcaneEnergyCostTranslation",
        Object(
          {
            note: Optional({
              comment: "A note, appended to the generated string in parenthesis.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

const Volume = Enum(import.meta.url, {
  name: "Volume",
  comment: "The volume points the enchantment needs.",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedVolume) }),
    PerLevel: EnumCase({ type: IncludeIdentifier(VolumePerLevel) }),
    ByLevel: EnumCase({ type: IncludeIdentifier(VolumeByLevel) }),
    Map: EnumCase({ type: IncludeIdentifier(VolumeMap) }),
    DerivedFromSelection: EnumCase({ type: IncludeIdentifier(VolumeDerivedFromSelection) }),
  }),
})

export const volume = Required({
  comment: "The volume points the enchantment needs.",
  type: IncludeIdentifier(Volume),
})

export const volume_l10n = Required({
  comment: "The volume points the enchantment needs.",
  isDeprecated: true,
  type: String({ minLength: 1 }),
})

const FixedVolume = TypeAlias(import.meta.url, {
  name: "FixedVolume",
  type: () =>
    Object({
      points: Required({
        comment: "The volume points.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})

const VolumePerLevel = TypeAlias(import.meta.url, {
  name: "VolumePerLevel",
  type: () =>
    Object({
      points: Required({
        comment: "The volume points per level.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const VolumeByLevel = TypeAlias(import.meta.url, {
  name: "VolumeByLevel",
  type: () =>
    Object({
      list: Required({
        comment:
          "The volume points for each level. The first element is the volume points for the first level, the second element is the volume points for the second level, and so on.",
        type: Array(IncludeIdentifier(VolumeByLevelItem), { minItems: 2 }),
      }),
    }),
})

const VolumeByLevelItem = TypeAlias(import.meta.url, {
  name: "VolumeByLevelItem",
  type: () =>
    Object({
      points: Required({
        comment: "The volume points for this level.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})

const VolumeMap = TypeAlias(import.meta.url, {
  name: "VolumeMap",
  comment: `A content that is \`3/4/5 Points for Chimera, Daimonid, Golems, Undead / Fairies, Ghosts / Demons, Elementals\` may be respresented as the following map:

\`\`\`yaml
options:
  - points: 3
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Chimera, Daimonid, Golems, Undead"
        label_standalone: "Chimera/Daimonid/Golems/Undead"
  - points: 4
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Fairies, Ghosts"
        label_standalone: "Fairies/Ghosts"
  - points: 5
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Demons, Elementals"
        label_standalone: "Demons/Elementals"
\`\`\`

This will generate the exact same string as seen above. The associated options are not present in the example, but they link to the options the volume specification is meant for.`,
  type: () =>
    Object({
      options: Required({
        comment: "The possible costs and associated labels.",
        type: Array(IncludeIdentifier(VolumeMapOption), { minItems: 2 }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "VolumeMapTranslation",
        Object(
          {
            list_prepend: Optional({
              comment: "Place a string between the `for` and the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveText),
            }),
            list_append: Optional({
              comment: "Place a string after the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveText),
            }),
            replacement: Optional({
              comment:
                "If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.",
              type: IncludeIdentifier(ResponsiveText),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

const VolumeMapOption = TypeAlias(import.meta.url, {
  name: "VolumeMapOption",
  type: () =>
    Object({
      points: Required({
        comment: "The full permanent AE cost value for this option.",
        type: Integer({ minimum: 1 }),
      }),
      associated_options: Required({
        comment: "Links to the options this volume specification is meant for.",
        type: Array(IncludeIdentifier(VolumeMapOptionAssociatedOption), { minItems: 1 }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "VolumeMapOptionTranslation",
        Object(
          {
            label: Required({
              comment: "The description of the option for cost string generation.",
              type: IncludeIdentifier(ResponsiveText),
            }),
            label_standalone: Optional({
              comment:
                "The description of the option if used standalone. Only used if different from `label`.",
              type: IncludeIdentifier(ResponsiveText),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

const VolumeMapOptionAssociatedOption = TypeAlias(import.meta.url, {
  name: "VolumeMapOptionAssociatedOption",
  type: () =>
    Object({
      id: Required({
        comment: "The option’s identifier.",
        type: IncludeIdentifier(VolumePointsOptionReferenceIdentifier),
      }),
    }),
})

const VolumeDerivedFromSelection = TypeAlias(import.meta.url, {
  name: "VolumeDerivedFromSelection",
  type: () =>
    Object({
      fallback: Required({
        comment: "The volume for the selection if it does not define a specific one.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})

export const BindingCost = Enum(import.meta.url, {
  name: "BindingCost",
  comment: "The binding cost for an enchantment.",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedBindingCost) }),
    PerLevel: EnumCase({ type: IncludeIdentifier(BindingCostPerLevel) }),
    Map: EnumCase({ type: IncludeIdentifier(BindingCostMap) }),
    DerivedFromSelection: EnumCase({ type: IncludeIdentifier(BindingCostDerivedFromSelection) }),
  }),
})

export const bindingCost = Optional({
  comment: "The binding cost for an enchantment.",
  isDeprecated: true,
  type: String({ minLength: 1 }),
})

const FixedBindingCost = TypeAlias(import.meta.url, {
  name: "FixedBindingCost",
  type: () =>
    Object({
      permanent_value: Required({
        comment: `The permanent AE cost.

If the enchantment has multiple levels, it is only applied for the first level.`,
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const BindingCostPerLevel = TypeAlias(import.meta.url, {
  name: "BindingCostPerLevel",
  type: () =>
    Object({
      permanent_value: Required({
        comment: "The permanent AE cost per level.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const BindingCostMap = TypeAlias(import.meta.url, {
  name: "BindingCostMap",
  comment: `A content that is \`2/4/8 permanent AE for spell-swords with the combat technique Daggers, Swords, or Two-Handed Swords\` may be respresented as the following map:

\`\`\`yaml
options:
  - permanent_value: 2
    translations:
      en-US:
        label: "Daggers"
        label_standalone: "Dagger"
  - permanent_value: 4
    translations:
      en-US:
        label: "Swords"
        label_standalone: "Sword"
  - permanent_value: 8
    translations:
      en-US:
        label: "Two-Handed Swords"
        label_standalone: "Two-Handed Sword"
list_prepend: "spell-swords with the combat technique"
\`\`\`

This will generate the exact same string as seen above.`,
  type: () =>
    Object({
      options: Required({
        comment: "The possible costs and associated labels.",
        type: Array(IncludeIdentifier(BindingCostMapOption), { minItems: 2 }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "BindingCostMapTranslation",
        Object(
          {
            list_prepend: Optional({
              comment: "Place a string between the `for` and the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveText),
            }),
            list_append: Optional({
              comment: "Place a string after the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveText),
            }),
            replacement: Optional({
              comment:
                "If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.",
              type: IncludeIdentifier(ResponsiveText),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

const BindingCostMapOption = TypeAlias(import.meta.url, {
  name: "BindingCostMapOption",
  type: () =>
    Object({
      permanent_value: Required({
        comment: "The full permanent AE cost value for this option.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "BindingCostMapOptionTranslation",
        Object({
          label: Required({
            comment: "The description of the option for cost string generation.",
            type: String({ minLength: 1 }),
          }),
          label_standalone: Optional({
            comment:
              "The description of the option if used standalone. Only used if different from `label`.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
})

const BindingCostDerivedFromSelection = TypeAlias(import.meta.url, {
  name: "BindingCostDerivedFromSelection",
  type: () =>
    Object({
      fallback: Required({
        comment: "The binding cost for the selection if it does not define a specific one.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})

const PropertyDeclaration = Enum(import.meta.url, {
  name: "PropertyDeclaration",
  comment:
    "The magic property’s identifier. `DependingOnProperty` can only be used if the special ability has an option to select a property.",
  values: () => ({
    DependingOnSelection: EnumCase({ type: null }),
    Fixed: EnumCase({ type: PropertyIdentifier() }),
  }),
})

export const property = Required({
  comment:
    "The magic property’s identifier. `DependingOnProperty` can only be used if the special ability has an option to select a property.",
  type: IncludeIdentifier(PropertyDeclaration),
})

export const aspect = Required({
  comment: "The blessed aspect.",
  type: AspectIdentifier(),
})

const AdvancedSpecialAbility = GenEnum(import.meta.url, {
  name: "AdvancedSpecialAbility",
  comment: "A reference to an advanced special ability.",
  parameters: [Param("Identifier")],
  values: Identifier => ({
    General: EnumCase({ type: TypeArgument(Identifier) }),
    RestrictOptions: EnumCase({
      type: GenIncludeIdentifier(RestrictAdvancedSpecialAbilityOptions, [TypeArgument(Identifier)]),
    }),
    OneOf: EnumCase({
      type: GenIncludeIdentifier(OneOfAdvancedSpecialAbilityOptions, [TypeArgument(Identifier)]),
    }),
    DeriveFromExternalOption: EnumCase({
      type: GenIncludeIdentifier(AdvancedSpecialAbilityDerivedFromExternalOption, [
        TypeArgument(Identifier),
      ]),
    }),
  }),
})

const RestrictAdvancedSpecialAbilityOptions = GenTypeAlias(import.meta.url, {
  name: "RestrictAdvancedSpecialAbilityOptions",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      id: Required({
        comment: "The advanced special ability’s identifier.",
        type: TypeArgument(Identifier),
      }),
      option: Required({
        comment:
          "Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed.",
        type: Array(IncludeIdentifier(AdvancedSpecialAbilityRestrictedOptionIdentifier), {
          minItems: 1,
        }),
      }),
    }),
})

const OneOfAdvancedSpecialAbilityOptions = GenTypeAlias(import.meta.url, {
  name: "OneOfAdvancedSpecialAbilityOptions",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      options: Required({
        comment: "The possible advanced special abilities.",
        type: Array(TypeArgument(Identifier), { minItems: 2 }),
      }),
      is_selection_required_on_purchase: Required({
        comment:
          "Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later.",
        type: Boolean(),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})

const AdvancedSpecialAbilityDerivedFromExternalOption = GenTypeAlias(import.meta.url, {
  name: "AdvancedSpecialAbilityDerivedFromExternalOption",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      external_entry: Required({
        comment: "The possible advanced special abilities.",
        type: MagicalTraditionIdentifier(),
      }),
      map: Required({
        comment: "Map options from the external entry to allowed advanced special abilities.",
        type: Array(
          GenIncludeIdentifier(AdvancedSpecialAbilityDerivedFromExternalOptionMapping, [
            TypeArgument(Identifier),
          ]),
          { minItems: 1 }
        ),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})

const AdvancedSpecialAbilityDerivedFromExternalOptionMapping = GenTypeAlias(import.meta.url, {
  name: "AdvancedSpecialAbilityDerivedFromExternalOptionMapping",
  parameters: [Param("Identifier")],
  comment: "Mapping from an option of the external entry to an allowed advanced special ability.",
  type: Identifier =>
    Object({
      from_option: Required({
        comment: "The select option’s identifier.",
        type: PatronIdentifier(),
      }),
      to_advanced: Required({
        comment: "The advanced special ability’s identifier.",
        type: TypeArgument(Identifier),
      }),
    }),
})

export const advanced = (identifier: Type) =>
  Required({
    comment:
      "The Advanced Special Abilities for the respective Style Special Ability. Sometimes, only a specific select option or a set of select options of an entry is allowed, which can be modelled by the option property. It can also be that you can choose from a set of special abilities, but then you can’t specify an option.",
    type: Array(GenIncludeIdentifier(AdvancedSpecialAbility, [identifier]), {
      minItems: 3,
      maxItems: 3,
    }),
  })

const ApplicableCombatTechniques = Enum(import.meta.url, {
  name: "ApplicableCombatTechniques",
  values: () => ({
    None: EnumCase({ type: null }),
    DependingOnCombatStyle: EnumCase({ type: null }),
    All: EnumCase({ type: IncludeIdentifier(AllApplicableCombatTechniques) }),
    AllClose: EnumCase({ type: IncludeIdentifier(AllApplicableCloseCombatTechniques) }),
    AllRanged: EnumCase({ type: IncludeIdentifier(AllApplicableRangedCombatTechniques) }),
    Specific: EnumCase({ type: IncludeIdentifier(SpecificApplicableCombatTechniques) }),
  }),
})

export const combat_techniques = Required({
  comment: "The combat techniques the special ability is applicable to.",
  type: IncludeIdentifier(ApplicableCombatTechniques),
})

const AllApplicableCombatTechniques = TypeAlias(import.meta.url, {
  name: "AllApplicableCombatTechniques",
  type: () =>
    Object({
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableAllCombatTechniquesRestriction), { minItems: 1 }),
      }),
    }),
})

const AllApplicableCloseCombatTechniques = TypeAlias(import.meta.url, {
  name: "AllApplicableCloseCombatTechniques",
  type: () =>
    Object({
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableCloseCombatTechniquesRestriction), { minItems: 1 }),
      }),
    }),
})

const AllApplicableRangedCombatTechniques = TypeAlias(import.meta.url, {
  name: "AllApplicableRangedCombatTechniques",
  type: () =>
    Object({
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableRangedCombatTechniquesRestriction), {
          minItems: 1,
        }),
      }),
    }),
})

const SpecificApplicableCombatTechniques = TypeAlias(import.meta.url, {
  name: "SpecificApplicableCombatTechniques",
  type: () =>
    Object({
      list: Required({
        type: Array(IncludeIdentifier(SpecificApplicableCombatTechnique), { minItems: 1 }),
      }),
    }),
})

const SpecificApplicableCombatTechnique = TypeAlias(import.meta.url, {
  name: "SpecificApplicableCombatTechnique",
  type: () =>
    Object({
      id: Required({
        type: IncludeIdentifier(CombatTechniqueIdentifier),
      }),
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableSpecificCombatTechniquesRestriction), {
          minItems: 1,
        }),
      }),
    }),
})

const ApplicableAllCombatTechniquesRestriction = Enum(import.meta.url, {
  name: "ApplicableAllCombatTechniquesRestriction",
  values: () => ({
    Improvised: EnumCase({ type: null }),
    PointedBlade: EnumCase({ type: null }),
    Mount: EnumCase({ type: null }),
    Race: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction) }),
    ExcludeCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction, [
        IncludeIdentifier(CombatTechniqueIdentifier),
      ]),
    }),
  }),
})

const ApplicableCloseCombatTechniquesRestriction = Enum(import.meta.url, {
  name: "ApplicableCloseCombatTechniquesRestriction",
  values: () => ({
    Improvised: EnumCase({ type: null }),
    PointedBlade: EnumCase({ type: null }),
    Mount: EnumCase({ type: null }),
    HasParry: EnumCase({ type: null }),
    OneHanded: EnumCase({ type: null }),
    ParryingWeapon: EnumCase({ type: null }),
    Race: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction) }),
    ExcludeCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction, [
        CloseCombatTechniqueIdentifier(),
      ]),
    }),
  }),
})

const ApplicableRangedCombatTechniquesRestriction = Enum(import.meta.url, {
  name: "ApplicableRangedCombatTechniquesRestriction",
  values: () => ({
    Improvised: EnumCase({ type: null }),
    PointedBlade: EnumCase({ type: null }),
    Mount: EnumCase({ type: null }),
    Race: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction) }),
    ExcludeCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction, [
        RangedCombatTechniqueIdentifier(),
      ]),
    }),
  }),
})

const ApplicableSpecificCombatTechniquesRestriction = Enum(import.meta.url, {
  name: "ApplicableSpecificCombatTechniquesRestriction",
  values: () => ({
    Improvised: EnumCase({ type: null }),
    PointedBlade: EnumCase({ type: null }),
    Mount: EnumCase({ type: null }),
    Race: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction) }),
    Level: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesLevelRestriction) }),
    Weapons: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesWeaponRestriction) }),
  }),
})

const ApplicableCombatTechniquesNegativeCombatTechniquesRestriction = GenTypeAlias(
  import.meta.url,
  {
    name: "ApplicableCombatTechniquesNegativeCombatTechniquesRestriction",
    parameters: [Param("Ref")],
    type: Ref =>
      Object({
        list: Required({
          comment: "The combat techniques this combat special ability is **not** applicable to.",
          type: Array(TypeArgument(Ref), { minItems: 1 }),
        }),
      }),
  }
)

const ApplicableCombatTechniquesRaceRestriction = TypeAlias(import.meta.url, {
  name: "ApplicableCombatTechniquesRaceRestriction",
  type: () => RaceIdentifier(),
})

const ApplicableCombatTechniquesLevelRestriction = TypeAlias(import.meta.url, {
  name: "ApplicableCombatTechniquesLevelRestriction",
  type: () =>
    Object({
      level: Required({
        comment: "The combat special ability is only applicable on a certain level.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const ApplicableCombatTechniquesWeaponRestriction = TypeAlias(import.meta.url, {
  name: "ApplicableCombatTechniquesWeaponRestriction",
  type: () =>
    Object({
      list: Required({
        comment: "The specific weapons this combat special ability is only applicable to.",
        type: Array(WeaponIdentifier(), { minItems: 1 }),
      }),
    }),
})

const AdventurePointsValue = Enum(import.meta.url, {
  name: "AdventurePointsValue",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedAdventurePointsValue) }),
    ByLevel: EnumCase({ type: IncludeIdentifier(AdventurePointsValueByLevel) }),
    DerivedFromSelection: EnumCase({
      type: IncludeIdentifier(AdventurePointsDerivedFromSelection),
    }),
    Indefinite: EnumCase({ type: null }),
  }),
})

export const ap_value = Required({
  comment: "The adventure points value.",
  type: IncludeIdentifier(AdventurePointsValue),
})

const FixedAdventurePointsValue = TypeAlias(import.meta.url, {
  name: "FixedAdventurePointsValue",
  comment:
    "A fixed adventure points value. If the entry has levels, this is the cost per level as well.",
  type: () => IncludeIdentifier(AdventurePointsSingleValue),
})

const AdventurePointsValueByLevel = TypeAlias(import.meta.url, {
  name: "AdventurePointsValueByLevel",
  comment:
    "An entry with levels may have different costs for each level. The length of the list must match the amount of levels the special ability has.",
  type: () => Array(IncludeIdentifier(AdventurePointsSingleValue), { minItems: 2 }),
})

const AdventurePointsDerivedFromSelection = TypeAlias(import.meta.url, {
  name: "AdventurePointsDerivedFromSelection",
  comment:
    "The adventure points value is derived from the selection of the special ability. Its display value may be able to be derived from the given information for the select options. If that is not the case or the generated text would not match the original one, a replacement text can be provided.",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Optional,
        "AdventurePointsDerivedFromSelectionTranslation",
        Object(
          {
            replacement: Optional({
              comment:
                "A replacement for the generated text if it would not match the original one.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

const AdventurePointsSingleValue = TypeAlias(import.meta.url, {
  name: "AdventurePointsSingleValue",
  comment: "A single adventure points value.",
  type: () => Integer({ minimum: 0 }),
})

export const input = Optional({
  comment: "A string that is used as a label for an input field.",
  type: String({ minLength: 1 }),
})
