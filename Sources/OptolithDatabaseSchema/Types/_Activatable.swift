/**
 * General type specifications used by multiple activatable entries.
 */

import FileDB

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

@ModelEnum
public enum ExplicitSelectOption {
    case General(GeneralIdentifier())
    case Skill(IncludeIdentifier(ExplicitSkillSelectOption))
    case CombatTechnique(IncludeIdentifier(ExplicitCombatTechniqueSelectOption))
}

@Model
public struct GeneralSelectOption {
  /// Sometimes, professions use specific text selections that are not contained in described lists. This ensures you can use them for professions only. They are not going to be displayed as options to the user.
  let profession_only: Boolean()?
  /// Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
  let skill_applications: Array(IncludeIdentifier(NewSkillApplications), { minItems: 1 })?
  /// Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
  let skill_uses: Array(IncludeIdentifier(SkillUses), { minItems: 1 })?
  /// Prerequisites for the select option.
  @Relationship(GeneralPrerequisites)
  let prerequisites: GeneralPrerequisites.ID?
  /// Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.
  let binding_cost: Integer({ minimum: 0 })?
  /// Specific AP cost for the select option.
  let ap_value: Integer({ minimum: 1 })?
      src: optionalSrc,

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // GeneralSelectOptionTranslation

        /// The name of the select option.
        let name: String({ minLength: 1 })

        /// The name of the select option when displayed in a generated profession text.
        let name_in_profession: String({ minLength: 1 })?
          description: Optional({
            comment:
              "The description of the select option. Useful for Bad Habits, Trade Secrets and other entries where a description is available.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),

        let errata: Errata?
    }
}

@Embedded
public struct ExplicitSkillSelectOption {

  /// The skill’s identifier.
  let id: SkillIdentifier()
  /// Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
  let skill_applications: Array(IncludeIdentifier(NewSkillApplications), { minItems: 1 })?
  /// Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
  let skill_uses: Array(IncludeIdentifier(SkillUses), { minItems: 1 })?
  /// Prerequisites for the select option.
  @Relationship(GeneralPrerequisites)
  let prerequisites: GeneralPrerequisites.ID?
  /// Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.
  let binding_cost: Integer({ minimum: 0 })?
  /// Specific AP cost for the select option.
  let ap_value: Integer({ minimum: 1 })?
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
  }

@Embedded
public struct ExplicitCombatTechniqueSelectOption {

  /// The combat technique’s identifier.
  @Relationship(CombatTechniqueIdentifier)
  let id: CombatTechniqueIdentifier.ID
  /// Prerequisites for the select option.
  @Relationship(GeneralPrerequisites)
  let prerequisites: GeneralPrerequisites.ID?
  /// Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.
  let binding_cost: Integer({ minimum: 0 })?
  /// Specific AP cost for the select option.
  let ap_value: Integer({ minimum: 1 })?
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

export const rules = Required({
  comment: "The rule text.",
  type: String({ minLength: 1, isMarkdown: true }),
})

export const effect = Required({
  comment: "The effect description.",
  type: String({ minLength: 1, isMarkdown: true }),
})

/// The definition of how the combat special ability can be used in combat.
@ModelEnum
public enum CombatSpecialAbilityUsageType {
    case Passive
    case BasicManeuver
    case SpecialManeuver
}

export const usage_type = Required({
  comment: "The definition of how the combat special ability can be used in combat.",
  type: IncludeIdentifier(CombatSpecialAbilityUsageType),
})

/// The definition of if the combat special ability can be used when armed or when unarmed.
@ModelEnum
public enum CombatSpecialAbilityType {
    case Armed
    case Unarmed
}

export const type = Required({
  comment:
    "The definition of if the combat special ability can be used when armed or when unarmed.",
  type: IncludeIdentifier(CombatSpecialAbilityType),
})

const NewSkillApplications = TypeAlias(import.meta.url, {
  name: "NewSkillApplications",
  comment:
    "Registers new skill applications, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: () => Array(IncludeIdentifier(NewSkillApplication), { minItems: 1 }),
})

export const skill_applications = Optional({
  comment:
    "Registers new skill applications, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: IncludeIdentifier(NewSkillApplications),
})

@Embedded
public struct NewSkillApplication {

  /// The application’s identifier. An entry-unique, increasing integer.
  let id: Integer({ minimum: 1 })

  /// The skill(s) this application belongs to.
  @Relationship(NewSkillApplicationAssociatedSkill)
  let skill: NewSkillApplicationAssociatedSkill.ID
      translations: NestedLocaleMap(
        Optional,
        "SkillApplicationTranslation",
        Object({

        /// The name of the application if different from the activatable entry’s name.
        let name: String({ minLength: 1 })
        })
      ),
  }

@ModelEnum
public enum NewSkillApplicationAssociatedSkill {
    case Single(SkillIdentifier())
    case Multiple(IncludeIdentifier(NewSkillApplicationAssociatedSkills))
}

@Embedded
public struct NewSkillApplicationAssociatedSkills {

  /// The skills this application belongs to.
  let list: Array(SkillIdentifier(), { minItems: 2 })
  /// If an application applies to multiple skills, it may need to ensure the respective skill is on a certain skill rating if the activatable entry cannot ensure this prerequisite.
  let required_skill_rating: Integer({ minimum: 1 })?
  }

const SkillUses = TypeAlias(import.meta.url, {
  name: "SkillUses",
  comment:
    "Registers uses, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: () => Array(IncludeIdentifier(SkillUse), { minItems: 1 }),
})

export const skill_uses = Optional({
  comment:
    "Registers uses, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: IncludeIdentifier(SkillUses),
})

@Embedded
public struct SkillUse {

  /// The use’s identifier. An entry-unique, increasing integer.
  let id: Integer({ minimum: 1 })

  /// The skill(s) this use belongs to.
  @Relationship(SkillUseAssociatedSkill)
  let skill: SkillUseAssociatedSkill.ID
      translations: NestedLocaleMap(
        Optional,
        "SkillUseTranslation",
        Object({

        /// The name of the use if different from the activatable entry’s name.
        let name: String({ minLength: 1 })
        })
      ),
  }

@ModelEnum
public enum SkillUseAssociatedSkill {
    case Single(SkillIdentifier())
    case Multiple(IncludeIdentifier(SkillUseAssociatedSkills))
}

@Embedded
public struct SkillUseAssociatedSkills {

  /// The skills this use belongs to.
  let list: Array(SkillIdentifier(), { minItems: 2 })
  }

/// The penalty the special ability gives when used.
@ModelEnum
public enum Penalty {
    case Single(IncludeIdentifier(SinglePenalty))
    case ByHandedness(IncludeIdentifier(PenaltyByHandedness))
    case ByActivation(IncludeIdentifier(PenaltyByActivation))
    case Selection(IncludeIdentifier(PenaltySelection))
    case ByLevel(IncludeIdentifier(PenaltyByLevel))
    case ByAttack(IncludeIdentifier(PenaltyByAttack))
    case DependsOnHitZone
}

export const penalty = Required({
  comment: "The penalty the special ability gives when used.",
  type: IncludeIdentifier(Penalty),
})

@Embedded
public struct SinglePenalty {

  /// The penalty value.
  let value: Integer()
  /// Set to `true` if the penalty applies to the parry instead of the attack.
  let applies_to_parry: Boolean()?
  }

@Embedded
public struct PenaltyByHandedness {

  /// The penalty value for one-handed weapons.
  let one_handed: Integer()

  /// The penalty value for two-handed weapons.
  let two_handed: Integer()
  /// Set to `true` if the penalty applies to the parry instead of the attack.
  let applies_to_parry: Boolean()?
  }

@Embedded
public struct PenaltyByActivation {

  /// The penalty value if the entry has been bought by the character.
  let active: Integer()

  /// The penalty value if the entry has not been bought by the character.
  let inactive: Integer()
  /// Set to `true` if the penalty applies to the parry instead of the attack.
  let applies_to_parry: Boolean()?
  }

@Embedded
public struct PenaltySelection {
      options: Required({
        type: IncludeIdentifier(PenaltySelectionOptions),
      }),
  }

@ModelEnum
public enum PenaltySelectionOptions {
    case Specific(IncludeIdentifier(SpecificPenaltySelectionOptions))
    case Range(IncludeIdentifier(PenaltySelectionOptionsRange))
}

@Embedded
public struct SpecificPenaltySelectionOptions {

  /// The list of specific penalty options.
  let list: Array(IncludeIdentifier(SpecificPenaltySelectionOption), { minItems: 2 })
  }

@Embedded
public struct SpecificPenaltySelectionOption {

  /// The penalty value.
  let value: Integer()
  }

@Embedded
public struct PenaltySelectionOptionsRange {

  /// The minimum penalty value.
  let minimum: Integer()

  /// The maximum penalty value.
  let maximum: Integer()
  }

@Embedded
public struct PenaltyByLevel {

  /// A continuous range of penalties for each level. The first element is the penalty for the first level, the second element is the penalty for the second level, and so on.
  let levels: Array(IncludeIdentifier(PenaltyByLevelLevel), { minItems: 2 })
  /// The combat-related special ability of which the level defines the penalty instead.
  @Relationship(PenaltyByExternalLevel)
  let external: PenaltyByExternalLevel.ID?
  }

@Embedded
public struct PenaltyByLevelLevel {

  /// The penalty value for this level.
  let value: Integer()
  }

/// The combat-related special ability of which the level defines the penalty instead.
@Embedded
public struct PenaltyByExternalLevel {

  /// The identifier of the combat-related special ability of which the level defines the penalty instead.
  @Relationship(CombatRelatedSpecialAbilityIdentifier)
  let id: CombatRelatedSpecialAbilityIdentifier.ID
  }

@Embedded
public struct PenaltyByAttack {

  /// A list of penalties for subsequent attacks. The first element is the penalty for the first attack, the second element is the penalty for the second attack, and so on. The order of the first element may be changed using `initial_order`, so that e.g. if set to `2`, the first element is the penalty for the second attack, the second element is the penalty for the third attack, and so on.
  let list: Array(IncludeIdentifier(PenaltyByAttackOrderItem), { minItems: 1 })
  /// The order of the first element in the `list` of penalties.
  let initial_order: Integer()?
  /// Set if a predefined different word should be used instead of the word `attack` for display purposes.
  @Relationship(PenaltyByAttackReplacement)
  let attack_replacement: PenaltyByAttackReplacement.ID?
  }

@Embedded
public struct PenaltyByAttackOrderItem {

  /// The penalty value for this order.
  let value: Integer()
  }

/// Set if a predefined different word should be used instead of the word `attack` for display purposes.
@ModelEnum
public enum PenaltyByAttackReplacement {
    case Throw
}

@ModelEnum
public enum EnchantmentCost {
    case ArcaneEnergyCost(IncludeIdentifier(ArcaneEnergyCost))
    case BindingCost(IncludeIdentifier(BindingCost))
}

export const cost = Optional({
  comment: "The cost when casting the entry.",
  type: IncludeIdentifier(EnchantmentCost),
})

/// The AE cost.
@ModelEnum
public enum ArcaneEnergyCost {
    case Fixed(IncludeIdentifier(FixedArcaneEnergyCost))
    case PerCountable(IncludeIdentifier(ArcaneEnergyCostPerCountable))
    case Interval(IncludeIdentifier(IntervalArcaneEnergyCost))
    case ActivationAndHalfInterval(IncludeIdentifier(ActivationAndHalfIntervalArcaneEnergyCost))
    case Indefinite(IncludeIdentifier(IndefiniteArcaneEnergyCost))
    case Disjunction(IncludeIdentifier(ArcaneEnergyCostDisjunction))
    case Variable
}

@Embedded
public struct FixedArcaneEnergyCost {

  /// The AE cost value.
  let value: Integer({ minimum: 1 })
  /// Set to `true` if the AE costs are permanent.
  let is_permanent: Boolean()?
  /// Specified if the AE cost `value` has to be paid for each time interval.
  @Relationship(DurationUnitValue)
  let interval: DurationUnitValue.ID?
  /// The AE cost are per level of the enchantment. It may either be displayed in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1 AE for level I; 2 AE for level II`).
  @Relationship(FixedArcaneEnergyCostPerLevel)
  let per_level: FixedArcaneEnergyCostPerLevel.ID?
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
  }

/// The AE cost are per level of the enchantment. It may either be displayed in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1 AE for level I; 2 AE for level II`).
@ModelEnum
public enum FixedArcaneEnergyCostPerLevel {
    case Compressed
    case Verbose
}

@Embedded
public struct ArcaneEnergyCostPerCountable {

  /// The AE cost value that has to be per a specific countable entity.
  let value: Integer({ minimum: 1 })
  /// If defined, in addition to the cost per entity you have to pay a flat amount, regardless of the entity count.
  let base_value: Integer({ minimum: 1 })?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ArcaneEnergyCostPerCountableTranslation

        /// The cost have to be per a specific countable entity, e.g. `8 AE per person`.
        let per: IncludeIdentifier(ResponsiveText)

        /// A note, appended to the generated string in parenthesis.
        let note: IncludeIdentifier(ResponsiveTextOptional)?
        })
      ),
  }

@Embedded
public struct IntervalArcaneEnergyCost {

  /// The AE cost value that has to be payed each interval.
  let value: Integer({ minimum: 1 })

  /// The time interval for which the AE cost `value` has to be paid.
  @Relationship(DurationUnitValue)
  let interval: DurationUnitValue.ID
  }

@Embedded
public struct ActivationAndHalfIntervalArcaneEnergyCost {

  /// The AE cost value that has to be payed for activation. Half of this value has to be payed each interval.
  let value: Integer({ minimum: 2, multipleOf: 2 })

  /// The time interval for which the AE cost `value` has to be paid.
  @Relationship(DurationUnitValue)
  let interval: DurationUnitValue.ID
  }

@Embedded
public struct IndefiniteArcaneEnergyCost {
  /// Specified if the indefinite AP cost description needs to be modified by a certain value.
  @Relationship(IndefiniteArcaneEnergyCostModifier)
  let modifier: IndefiniteArcaneEnergyCostModifier.ID?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // IndefiniteArcaneEnergyCostTranslation

        /// A description of where the cost come from.
        let description: IncludeIdentifier(ResponsiveText)
        })
      ),
  }

@Embedded
public struct IndefiniteArcaneEnergyCostModifier {

  /// The arithmetic how to apply the `value` to the `base`.
  @Relationship(IndefiniteArcaneEnergyCostModifierArithmetic)
  let arithmetic: IndefiniteArcaneEnergyCostModifierArithmetic.ID

  /// The value that is applied to the `base` using the defined `arithmetic`.
  let value: Integer({ minimum: 1 })
  }

@ModelEnum
public enum IndefiniteArcaneEnergyCostModifierArithmetic {
    case Add
}

@Embedded
public struct ArcaneEnergyCostDisjunction {
  /// Specified if the selected AE cost option has to be paid for each time interval.
  @Relationship(ArcaneEnergyCostDisjunctionInterval)
  let interval: ArcaneEnergyCostDisjunctionInterval.ID?

  /// The possible AE cost values.
  let options: Array(IncludeIdentifier(ArcaneEnergyCostDisjunctionOption), { minItems: 1 })
  }

@Embedded
public struct ArcaneEnergyCostDisjunctionInterval {

  /// The interval itself.
  @Relationship(DurationUnitValue)
  let value: DurationUnitValue.ID

  /// The AE cost value for activation.
  let activation_value: Integer({ minimum: 1 })
      after_activation: Required({
        comment: `Set to \`true\` if the action where the enchantment is casted does not as a part of the first interval that has to be payed, so that the first interval payment needs to be done after the activation.

This works different than other sustained spells, since for them the end of the cast usually already counts as part of the first interval.`,
        type: Boolean(),
      }),
  }

@Embedded
public struct ArcaneEnergyCostDisjunctionOption {

  /// A possible AE cost value.
  let value: Integer({ minimum: 1 })
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
  }

@Embedded
public struct NoArcaneEnergyCost {
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
  }

/// The volume points the enchantment needs.
@ModelEnum
public enum Volume {
    case Fixed(IncludeIdentifier(FixedVolume))
    case PerLevel(IncludeIdentifier(VolumePerLevel))
    case ByLevel(IncludeIdentifier(VolumeByLevel))
    case Map(IncludeIdentifier(VolumeMap))
    case DerivedFromSelection(IncludeIdentifier(VolumeDerivedFromSelection))
}

export const volume = Required({
  comment: "The volume points the enchantment needs.",
  type: IncludeIdentifier(Volume),
})

@Embedded
public struct FixedVolume {

  /// The volume points.
  let points: Integer({ minimum: 0 })
  }

@Embedded
public struct VolumePerLevel {

  /// The volume points per level.
  let points: Integer({ minimum: 1 })
  }

@Embedded
public struct VolumeByLevel {

  /// The volume points for each level. The first element is the volume points for the first level, the second element is the volume points for the second level, and so on.
  let list: Array(IncludeIdentifier(VolumeByLevelItem), { minItems: 2 })
  }

@Embedded
public struct VolumeByLevelItem {

  /// The volume points for this level.
  let points: Integer({ minimum: 0 })
  }

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

  /// The possible costs and associated labels.
  let options: Array(IncludeIdentifier(VolumeMapOption), { minItems: 2 })
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
  }

@Embedded
public struct VolumeMapOption {

  /// The full permanent AE cost value for this option.
  let points: Integer({ minimum: 1 })

  /// Links to the options this volume specification is meant for.
  let associated_options: Array(IncludeIdentifier(VolumeMapOptionAssociatedOption), { minItems: 1 })
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
  }

@Embedded
public struct VolumeMapOptionAssociatedOption {

  /// The option’s identifier.
  @Relationship(VolumePointsOptionReferenceIdentifier)
  let id: VolumePointsOptionReferenceIdentifier.ID
  }

@Embedded
public struct VolumeDerivedFromSelection {

  /// The volume for the selection if it does not define a specific one.
  let fallback: Integer({ minimum: 0 })
  }

/// The binding cost for an enchantment.
@ModelEnum
public enum BindingCost {
    case Fixed(IncludeIdentifier(FixedBindingCost))
    case PerLevel(IncludeIdentifier(BindingCostPerLevel))
    case Map(IncludeIdentifier(BindingCostMap))
    case DerivedFromSelection(IncludeIdentifier(BindingCostDerivedFromSelection))
}

@Embedded
public struct FixedBindingCost {
      permanent_value: Required({
        comment: `The permanent AE cost.

If the enchantment has multiple levels, it is only applied for the first level.`,
        type: Integer({ minimum: 1 }),
      }),
  }

@Embedded
public struct BindingCostPerLevel {

  /// The permanent AE cost per level.
  let permanent_value: Integer({ minimum: 1 })
  }

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

  /// The possible costs and associated labels.
  let options: Array(IncludeIdentifier(BindingCostMapOption), { minItems: 2 })
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
  }

@Embedded
public struct BindingCostMapOption {

  /// The full permanent AE cost value for this option.
  let permanent_value: Integer({ minimum: 1 })
      translations: NestedLocaleMap(
        Optional,
        "BindingCostMapOptionTranslation",
        Object({

        /// The description of the option for cost string generation.
        let label: String({ minLength: 1 })
          label_standalone: Optional({
            comment:
              "The description of the option if used standalone. Only used if different from `label`.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
  }

@Embedded
public struct BindingCostDerivedFromSelection {

  /// The binding cost for the selection if it does not define a specific one.
  let fallback: Integer({ minimum: 0 })
  }

/// The magic property’s identifier. `DependingOnProperty` can only be used if the special ability has an option to select a property.
@ModelEnum
public enum PropertyDeclaration {
    case DependingOnSelection
    case Fixed(PropertyIdentifier())
}

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
    case General(TypeArgument(Identifier))
    case RestrictOptions(GenIncludeIdentifier(RestrictAdvancedSpecialAbilityOptions, [TypeArgument(Identifier)]))
    case OneOf(GenIncludeIdentifier(OneOfAdvancedSpecialAbilityOptions, [TypeArgument(Identifier)]))
    DeriveFromExternalOption: EnumCase({
      type: GenIncludeIdentifier(AdvancedSpecialAbilityDerivedFromExternalOption, [
        TypeArgument(Identifier),
      ]),
    }),
}

const RestrictAdvancedSpecialAbilityOptions = GenTypeAlias(import.meta.url, {
  name: "RestrictAdvancedSpecialAbilityOptions",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({

  /// The advanced special ability’s identifier.
  let id: TypeArgument(Identifier)
      option: Required({
        comment:
          "Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed.",
        type: Array(IncludeIdentifier(AdvancedSpecialAbilityRestrictedOptionIdentifier), {
          minItems: 1,
        }),
      }),
  }

const OneOfAdvancedSpecialAbilityOptions = GenTypeAlias(import.meta.url, {
  name: "OneOfAdvancedSpecialAbilityOptions",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({

  /// The possible advanced special abilities.
  let options: Array(TypeArgument(Identifier), { minItems: 2 })

  /// Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later.
  let is_selection_required_on_purchase: Boolean()
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
  }

const AdvancedSpecialAbilityDerivedFromExternalOption = GenTypeAlias(import.meta.url, {
  name: "AdvancedSpecialAbilityDerivedFromExternalOption",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({

  /// The possible advanced special abilities.
  let external_entry: MagicalTraditionIdentifier()
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
  }

const AdvancedSpecialAbilityDerivedFromExternalOptionMapping = GenTypeAlias(import.meta.url, {
  name: "AdvancedSpecialAbilityDerivedFromExternalOptionMapping",
  parameters: [Param("Identifier")],
  comment: "Mapping from an option of the external entry to an allowed advanced special ability.",
  type: Identifier =>
    Object({

  /// The select option’s identifier.
  let from_option: PatronIdentifier()

  /// The advanced special ability’s identifier.
  let to_advanced: TypeArgument(Identifier)
  }

export const advanced = (identifier: Type) =>
  Required({
    comment:
      "The Advanced Special Abilities for the respective Style Special Ability. Sometimes, only a specific select option or a set of select options of an entry is allowed, which can be modelled by the option property. It can also be that you can choose from a set of special abilities, but then you can’t specify an option.",
    type: Array(GenIncludeIdentifier(AdvancedSpecialAbility, [identifier]), {
      minItems: 3,
      maxItems: 3,
    }),
  })

@ModelEnum
public enum ApplicableCombatTechniques {
    case None
    case DependingOnCombatStyle
    case All(IncludeIdentifier(AllApplicableCombatTechniques))
    case AllClose(IncludeIdentifier(AllApplicableCloseCombatTechniques))
    case AllRanged(IncludeIdentifier(AllApplicableRangedCombatTechniques))
    case Specific(IncludeIdentifier(SpecificApplicableCombatTechniques))
}

export const combat_techniques = Required({
  comment: "The combat techniques the special ability is applicable to.",
  type: IncludeIdentifier(ApplicableCombatTechniques),
})

@Embedded
public struct AllApplicableCombatTechniques {
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableAllCombatTechniquesRestriction), { minItems: 1 }),
      }),
  }

@Embedded
public struct AllApplicableCloseCombatTechniques {
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableCloseCombatTechniquesRestriction), { minItems: 1 }),
      }),
  }

@Embedded
public struct AllApplicableRangedCombatTechniques {
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableRangedCombatTechniquesRestriction), {
          minItems: 1,
        }),
      }),
  }

@Embedded
public struct SpecificApplicableCombatTechniques {
      list: Required({
        type: Array(IncludeIdentifier(SpecificApplicableCombatTechnique), { minItems: 1 }),
      }),
  }

@Embedded
public struct SpecificApplicableCombatTechnique {
      id: Required({
        type: IncludeIdentifier(CombatTechniqueIdentifier),
      }),
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableSpecificCombatTechniquesRestriction), {
          minItems: 1,
        }),
      }),
  }

@ModelEnum
public enum ApplicableAllCombatTechniquesRestriction {
    case Improvised
    case PointedBlade
    case Mount
    case Race(IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction))
    ExcludeCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction, [
        IncludeIdentifier(CombatTechniqueIdentifier),
      ]),
    }),
}

@ModelEnum
public enum ApplicableCloseCombatTechniquesRestriction {
    case Improvised
    case PointedBlade
    case Mount
    case HasParry
    case OneHanded
    case ParryingWeapon
    case Race(IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction))
    ExcludeCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction, [
        CloseCombatTechniqueIdentifier(),
      ]),
    }),
}

@ModelEnum
public enum ApplicableRangedCombatTechniquesRestriction {
    case Improvised
    case PointedBlade
    case Mount
    case Race(IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction))
    ExcludeCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction, [
        RangedCombatTechniqueIdentifier(),
      ]),
    }),
}

@ModelEnum
public enum ApplicableSpecificCombatTechniquesRestriction {
    case Improvised
    case PointedBlade
    case Mount
    case Race(IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction))
    case Level(IncludeIdentifier(ApplicableCombatTechniquesLevelRestriction))
    case Weapons(IncludeIdentifier(ApplicableCombatTechniquesWeaponRestriction))
}

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

@Embedded
public struct ApplicableCombatTechniquesLevelRestriction {

  /// The combat special ability is only applicable on a certain level.
  let level: Integer({ minimum: 1 })
  }

@Embedded
public struct ApplicableCombatTechniquesWeaponRestriction {

  /// The specific weapons this combat special ability is only applicable to.
  let list: Array(WeaponIdentifier(), { minItems: 1 })
  }

@ModelEnum
public enum AdventurePointsValue {
    case Fixed(IncludeIdentifier(FixedAdventurePointsValue))
    case ByLevel(IncludeIdentifier(AdventurePointsValueByLevel))
    case DerivedFromSelection(IncludeIdentifier(AdventurePointsDerivedFromSelection))
    case Indefinite
}

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

/// The adventure points value is derived from the selection of the special ability. Its display value may be able to be derived from the given information for the select options. If that is not the case or the generated text would not match the original one, a replacement text can be provided.
@Embedded
public struct AdventurePointsDerivedFromSelection {
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
  }

const AdventurePointsSingleValue = TypeAlias(import.meta.url, {
  name: "AdventurePointsSingleValue",
  comment: "A single adventure points value.",
  type: () => Integer({ minimum: 0 }),
})

export const input = Optional({
  comment: "A string that is used as a label for an input field.",
  type: String({ minLength: 1 }),
})
