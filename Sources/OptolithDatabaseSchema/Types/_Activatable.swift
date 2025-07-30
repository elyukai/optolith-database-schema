/// General type specifications used by multiple activatable entries.

import FileDB

/// Definitions for possible options for the activatable entry. They can either be derived from entry categories or be defined explicitly. Both can happen as well, but if there is an explicitly defined select option and a derived select option has the same identifier (which may only happen if skill or combat technique identifiers are used for explicit select options), the explicit definition overwrites the derived option.
///
/// Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.
@Embedded
@MinProperties(1)
public struct SelectOptions {
    /// An entry category with optional further configuration. All available entries from the specified categories will be included as separate select options. You can also specify a set of groups that should only be included. Groups not mentioned will be excluded then.
    let derived: SelectOptionCategory?

    /// A list of explicit select options. If the identifier has a specific type, its entry is the base of this select option, where values defined here override values from the base. Define the \`src\` property if the options are not derived from the rules text of the advantage/disadvantage/special ability but instead are listed in a separate block and/or on a separate page.
    @MinItems(1)
    let explicit: [ExplicitSelectOption]?
}

@ModelEnum
public enum ExplicitSelectOption {
    case General(GeneralSelectOptionIdentifierObject)
    case Skill(ExplicitSkillSelectOption)
    case CombatTechnique(ExplicitCombatTechniqueSelectOption)
}

@Model
public struct GeneralSelectOption {
    /// Sometimes, professions use specific text selections that are not contained in described lists. This ensures you can use them for professions only. They are not going to be displayed as options to the user.
    let profession_only: Bool?

    /// Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
    @MinItems(1)
    let skill_applications: [NewSkillApplications]?

    /// Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
    @MinItems(1)
    let skill_uses: [SkillUses]?

    /// Prerequisites for the select option.
    let prerequisites: GeneralPrerequisites?

    /// Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.
    @Minimum(0)
    let binding_cost: Int?

    /// Specific AP cost for the select option.
    @Minimum(1)
    let ap_value: Int?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // GeneralSelectOptionTranslation
        /// The name of the select option.
        @MinLength(1)
        let name: String

        /// The name of the select option when displayed in a generated profession text.
        @MinLength(1)
        let name_in_profession: String?

        /// The description of the select option. Useful for Bad Habits, Trade Secrets and other entries where a description is available.
        @MinLength(1)
        @Markdown
        let description: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@Embedded
public struct ExplicitSkillSelectOption {
    /// The skill’s identifier.
    @Relationship(Skill.self)
    let id: Skill.ID

    /// Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
    @MinItems(1)
    let skill_applications: [NewSkillApplications]?

    /// Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
    @MinItems(1)
    let skill_uses: [SkillUses]?

    /// Prerequisites for the select option.
    let prerequisites: GeneralPrerequisites?

    /// Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.
    @Minimum(0)
    let binding_cost: Int?

    /// Specific AP cost for the select option.
    @Minimum(1)
    let ap_value: Int?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation {  // ExplicitSkillSelectOptionTranslation
        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@Embedded
public struct ExplicitCombatTechniqueSelectOption {
    /// The combat technique’s identifier.
    let id: CombatTechniqueIdentifier

    /// Prerequisites for the select option.
    let prerequisites: GeneralPrerequisites?

    /// Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.
    @Minimum(0)
    let binding_cost: Int?

    /// Specific AP cost for the select option.
    @Minimum(1)
    let ap_value: Int?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation {  // ExplicitCombatTechniqueSelectOptionTranslation
        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
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

/// The definition of how the combat special ability can be used in combat.
@ModelEnum
public enum CombatSpecialAbilityUsageType {
    case Passive
    case BasicManeuver
    case SpecialManeuver
}

/// The definition of if the combat special ability can be used when armed or when unarmed.
@ModelEnum
public enum CombatSpecialAbilityType {
    case Armed
    case Unarmed
}

/// Registers new skill applications, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.
@TypeAlias
public struct NewSkillApplications {
    @MinItems(1)
    let list: [NewSkillApplication]
}

@Embedded
public struct NewSkillApplication {
    /// The application’s identifier. An entry-unique, increasing integer.
    @Minimum(1)
    let id: Int

    /// The skill(s) this application belongs to.
    let skill: NewSkillApplicationAssociatedSkill

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    struct Translation {  // SkillApplicationTranslation
        /// The name of the application if different from the activatable entry’s name.
        @MinLength(1)
        let name: String
    }
}

@ModelEnum
public enum NewSkillApplicationAssociatedSkill {
    case Single(SkillIdentifierObject)
    case Multiple(NewSkillApplicationAssociatedSkills)
}

@Embedded
public struct NewSkillApplicationAssociatedSkills {
    /// The skills this application belongs to.
    @MinItems(2)
    @Relationship(Skill.self)
    let list: [Skill.ID]

    /// If an application applies to multiple skills, it may need to ensure the respective skill is on a certain skill rating if the activatable entry cannot ensure this prerequisite.
    @Minimum(1)
    let required_skill_rating: Int?
}

/// Registers uses, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.
@TypeAlias
public struct SkillUses {
    @MinItems(1)
    let list: [SkillUse]
}

@Embedded
public struct SkillUse {
    /// The use’s identifier. An entry-unique, increasing integer.
    @Minimum(1)
    let id: Int

    /// The skill(s) this use belongs to.
    let skill: SkillUseAssociatedSkill
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    struct Translation {  // SkillUseTranslation
        /// The name of the use if different from the activatable entry’s name.
        @MinLength(1)
        let name: String
    }
}

@ModelEnum
public enum SkillUseAssociatedSkill {
    case Single(SkillIdentifierObject)
    case Multiple(SkillUseAssociatedSkills)
}

@Embedded
public struct SkillUseAssociatedSkills {
    /// The skills this use belongs to.
    @MinItems(2)
    @Relationship(Skill.self)
    let list: [Skill.ID]
}

/// The penalty the special ability gives when used.
@ModelEnum
public enum Penalty {
    case Single(SinglePenalty)
    case ByHandedness(PenaltyByHandedness)
    case ByActivation(PenaltyByActivation)
    case Selection(PenaltySelection)
    case ByLevel(PenaltyByLevel)
    case ByAttack(PenaltyByAttack)
    case DependsOnHitZone
}

@Embedded
public struct SinglePenalty {
    /// The penalty value.
    let value: Int

    /// Set to `true` if the penalty applies to the parry instead of the attack.
    let applies_to_parry: Bool?
}

@Embedded
public struct PenaltyByHandedness {
    /// The penalty value for one-handed weapons.
    let one_handed: Int

    /// The penalty value for two-handed weapons.
    let two_handed: Int

    /// Set to `true` if the penalty applies to the parry instead of the attack.
    let applies_to_parry: Bool?
}

@Embedded
public struct PenaltyByActivation {
    /// The penalty value if the entry has been bought by the character.
    let active: Int

    /// The penalty value if the entry has not been bought by the character.
    let inactive: Int

    /// Set to `true` if the penalty applies to the parry instead of the attack.
    let applies_to_parry: Bool?
}

@Embedded
public struct PenaltySelection {
    let options: PenaltySelectionOptions
}

@ModelEnum
public enum PenaltySelectionOptions {
    case Specific(SpecificPenaltySelectionOptions)
    case Range(PenaltySelectionOptionsRange)
}

@Embedded
public struct SpecificPenaltySelectionOptions {
    /// The list of specific penalty options.
    @MinItems(2)
    let list: [SpecificPenaltySelectionOption]
}

@Embedded
public struct SpecificPenaltySelectionOption {
    /// The penalty value.
    let value: Int
}

@Embedded
public struct PenaltySelectionOptionsRange {
    /// The minimum penalty value.
    let minimum: Int

    /// The maximum penalty value.
    let maximum: Int
}

@Embedded
public struct PenaltyByLevel {
    /// A continuous range of penalties for each level. The first element is the penalty for the first level, the second element is the penalty for the second level, and so on.
    @MinItems(2)
    let levels: [PenaltyByLevelLevel]

    /// The combat-related special ability of which the level defines the penalty instead.
    let external: PenaltyByExternalLevel?
}

@Embedded
public struct PenaltyByLevelLevel {
    /// The penalty value for this level.
    let value: Int
}

/// The combat-related special ability of which the level defines the penalty instead.
@Embedded
public struct PenaltyByExternalLevel {
    /// The identifier of the combat-related special ability of which the level defines the penalty instead.
    let id: CombatRelatedSpecialAbilityIdentifier
}

@Embedded
public struct PenaltyByAttack {
    /// A list of penalties for subsequent attacks. The first element is the penalty for the first attack, the second element is the penalty for the second attack, and so on. The order of the first element may be changed using `initial_order`, so that e.g. if set to `2`, the first element is the penalty for the second attack, the second element is the penalty for the third attack, and so on.
    @MinItems(1)
    let list: [PenaltyByAttackOrderItem]

    /// The order of the first element in the `list` of penalties.
    let initial_order: Int?

    /// Set if a predefined different word should be used instead of the word `attack` for display purposes.
    let attack_replacement: PenaltyByAttackReplacement?
}

@Embedded
public struct PenaltyByAttackOrderItem {
    /// The penalty value for this order.
    let value: Int
}

/// Set if a predefined different word should be used instead of the word `attack` for display purposes.
@ModelEnum
public enum PenaltyByAttackReplacement {
    case Throw
}

@ModelEnum
public enum EnchantmentCost {
    case ArcaneEnergyCost(ArcaneEnergyCost)
    case BindingCost(BindingCost)
}

/// The AE cost.
@ModelEnum
public enum ArcaneEnergyCost {
    case Fixed(FixedArcaneEnergyCost)
    case PerCountable(ArcaneEnergyCostPerCountable)
    case Interval(IntervalArcaneEnergyCost)
    case ActivationAndHalfInterval(ActivationAndHalfIntervalArcaneEnergyCost)
    case Indefinite(IndefiniteArcaneEnergyCost)
    case Disjunction(ArcaneEnergyCostDisjunction)
    case Variable
}

@Embedded
public struct FixedArcaneEnergyCost {
    /// The AE cost value.
    @Minimum(1)
    let value: Int

    /// Set to `true` if the AE costs are permanent.
    let is_permanent: Bool?

    /// Specified if the AE cost `value` has to be paid for each time interval.
    let interval: DurationUnitValue?

    /// The AE cost are per level of the enchantment. It may either be displayed in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1 AE for level I; 2 AE for level II`).
    let per_level: FixedArcaneEnergyCostPerLevel?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation {  // FixedArcaneEnergyCostTranslation
        /// A note, appended to the generated option string in parenthesis.
        let note: ResponsiveTextOptional?
    }
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
    @Minimum(1)
    let value: Int

    /// If defined, in addition to the cost per entity you have to pay a flat amount, regardless of the entity count.
    @Minimum(1)
    let base_value: Int?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // ArcaneEnergyCostPerCountableTranslation
        /// The cost have to be per a specific countable entity, e.g. `8 AE per person`.
        let per: ResponsiveText

        /// A note, appended to the generated string in parenthesis.
        let note: ResponsiveTextOptional?
    }
}

@Embedded
public struct IntervalArcaneEnergyCost {
    /// The AE cost value that has to be payed each interval.
    @Minimum(1)
    let value: Int

    /// The time interval for which the AE cost `value` has to be paid.
    let interval: DurationUnitValue
}

@Embedded
public struct ActivationAndHalfIntervalArcaneEnergyCost {
    /// The AE cost value that has to be payed for activation. Half of this value has to be payed each interval.
    @Minimum(2)
    @MultipleOf(2)
    let value: Int

    /// The time interval for which the AE cost `value` has to be paid.
    let interval: DurationUnitValue
}

@Embedded
public struct IndefiniteArcaneEnergyCost {
    /// Specified if the indefinite AP cost description needs to be modified by a certain value.
    let modifier: IndefiniteArcaneEnergyCostModifier?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // IndefiniteArcaneEnergyCostTranslation
        /// A description of where the cost come from.
        let description: ResponsiveText
    }
}

@Embedded
public struct IndefiniteArcaneEnergyCostModifier {
    /// The arithmetic how to apply the `value` to the `base`.
    let arithmetic: IndefiniteArcaneEnergyCostModifierArithmetic

    /// The value that is applied to the `base` using the defined `arithmetic`.
    @Minimum(1)
    let value: Int
}

@ModelEnum
public enum IndefiniteArcaneEnergyCostModifierArithmetic {
    case Add
}

@Embedded
public struct ArcaneEnergyCostDisjunction {
    /// Specified if the selected AE cost option has to be paid for each time interval.
    let interval: ArcaneEnergyCostDisjunctionInterval?

    /// The possible AE cost values.
    @MinItems(1)
    let options: [ArcaneEnergyCostDisjunctionOption]
}

@Embedded
public struct ArcaneEnergyCostDisjunctionInterval {
    /// The interval itself.
    let value: DurationUnitValue

    /// The AE cost value for activation.
    @Minimum(1)
    let activation_value: Int

    /// Set to `true` if the action where the enchantment is casted does not as a part of the first interval that has to be payed, so that the first interval payment needs to be done after the activation.
    ///
    /// This works different than other sustained spells, since for them the end of the cast usually already counts as part of the first interval.
    let after_activation: Bool
}

@Embedded
public struct ArcaneEnergyCostDisjunctionOption {
    /// A possible AE cost value.
    @Minimum(1)
    let value: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation {  // ArcaneEnergyCostDisjunctionOptionTranslation
        /// A note, appended to the generated option string in parenthesis.
        let note: ResponsiveTextOptional?
    }
}

@Embedded
public struct NoArcaneEnergyCost {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation {  // NoArcaneEnergyCostTranslation
        /// A note, appended to the generated string in parenthesis.
        let note: ResponsiveTextOptional?
    }
}

/// The volume points the enchantment needs.
@ModelEnum
public enum Volume {
    case Fixed(FixedVolume)
    case PerLevel(VolumePerLevel)
    case ByLevel(VolumeByLevel)
    case Map(VolumeMap)
    case DerivedFromSelection(VolumeDerivedFromSelection)
}

@Embedded
public struct FixedVolume {
    /// The volume points.
    @Minimum(0)
    let points: Int
}

@Embedded
public struct VolumePerLevel {
    /// The volume points per level.
    @Minimum(1)
    let points: Int
}

@Embedded
public struct VolumeByLevel {
    /// The volume points for each level. The first element is the volume points for the first level, the second element is the volume points for the second level, and so on.
    @MinItems(2)
    let list: [VolumeByLevelItem]
}

@Embedded
public struct VolumeByLevelItem {
    /// The volume points for this level.
    @Minimum(0)
    let points: Int
}

/// A content that is `3/4/5 Points for Chimera, Daimonid, Golems, Undead / Fairies, Ghosts / Demons, Elementals` may be respresented as the following map:
///
/// ```yaml
/// options:
///   - points: 3
///     associated_options:
///       - id:
///           tag: General
///           value: # ...
///       # ...
///     translations:
///       en-US:
///         label: "Chimera, Daimonid, Golems, Undead"
///         label_standalone: "Chimera/Daimonid/Golems/Undead"
///   - points: 4
///     associated_options:
///       - id:
///           tag: General
///           value: # ...
///       # ...
///     translations:
///       en-US:
///         label: "Fairies, Ghosts"
///         label_standalone: "Fairies/Ghosts"
///   - points: 5
///     associated_options:
///       - id:
///           tag: General
///           value: # ...
///       # ...
///     translations:
///       en-US:
///         label: "Demons, Elementals"
///         label_standalone: "Demons/Elementals"
/// ```
///
/// This will generate the exact same string as seen above. The associated options are not present in the example, but they link to the options the volume specification is meant for.
@Embedded
public struct VolumeMap {
    /// The possible costs and associated labels.
    @MinItems(2)
    let options: [VolumeMapOption]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @MinProperties(1)
    struct Translation {  // VolumeMapTranslation
        /// Place a string between the `for` and the grouped map option labels.
        let list_prepend: ResponsiveText?

        /// Place a string after the grouped map option labels.
        let list_append: ResponsiveText?

        /// If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.
        let replacement: ResponsiveText?
    }
}

@Embedded
public struct VolumeMapOption {
    /// The full permanent AE cost value for this option.
    @Minimum(1)
    let points: Int

    /// Links to the options this volume specification is meant for.
    @MinItems(1)
    let associated_options: [VolumeMapOptionAssociatedOption]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @MinProperties(1)
    struct Translation {  // VolumeMapOptionTranslation
        /// The description of the option for cost string generation.
        let label: ResponsiveText

        /// The description of the option if used standalone. Only used if different from `label`.
        let label_standalone: ResponsiveText?
    }
}

@Embedded
public struct VolumeMapOptionAssociatedOption {
    /// The option’s identifier.
    let id: VolumePointsOptionReferenceIdentifier
}

@Embedded
public struct VolumeDerivedFromSelection {
    /// The volume for the selection if it does not define a specific one.
    @Minimum(0)
    let fallback: Int
}

/// The binding cost for an enchantment.
@ModelEnum
public enum BindingCost {
    case Fixed(FixedBindingCost)
    case PerLevel(BindingCostPerLevel)
    case Map(BindingCostMap)
    case DerivedFromSelection(BindingCostDerivedFromSelection)
}

@Embedded
public struct FixedBindingCost {
    /// The permanent AE cost.
    ///
    /// If the enchantment has multiple levels, it is only applied for the first level.
    @Minimum(1)
    let permanent_value: Int
}

@Embedded
public struct BindingCostPerLevel {
    /// The permanent AE cost per level.
    @Minimum(1)
    let permanent_value: Int
}

/// A content that is `2/4/8 permanent AE for spell-swords with the combat technique Daggers, Swords, or Two-Handed Swords` may be respresented as the following map:
///
/// ```yaml
/// options:
///   - permanent_value: 2
///     translations:
///       en-US:
///         label: "Daggers"
///         label_standalone: "Dagger"
///   - permanent_value: 4
///     translations:
///       en-US:
///         label: "Swords"
///         label_standalone: "Sword"
///   - permanent_value: 8
///     translations:
///       en-US:
///         label: "Two-Handed Swords"
///         label_standalone: "Two-Handed Sword"
/// list_prepend: "spell-swords with the combat technique"
/// ```
///
/// This will generate the exact same string as seen above.
public struct BindingCostMap {
    /// The possible costs and associated labels.
    @MinItems(2)
    let options: [BindingCostMapOption]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @MinProperties(1)
    struct Translation {  // BindingCostMapTranslation
        /// Place a string between the `for` and the grouped map option labels.
        let list_prepend: ResponsiveText?

        /// Place a string after the grouped map option labels.
        let list_append: ResponsiveText?

        /// If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.
        let replacement: ResponsiveText?
    }
}

@Embedded
public struct BindingCostMapOption {
    /// The full permanent AE cost value for this option.
    @Minimum(1)
    let permanent_value: Int
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    struct Translation {  // BindingCostMapOptionTranslation
        /// The description of the option for cost string generation.
        @MinLength(1)
        let label: String
        /// The description of the option if used standalone. Only used if different from `label`.
        @MinLength(1)
        let label_standalone: String?
    }
}

@Embedded
public struct BindingCostDerivedFromSelection {
    /// The binding cost for the selection if it does not define a specific one.
    @Minimum(0)
    let fallback: Int
}

/// The magic property’s identifier. `DependingOnProperty` can only be used if the special ability has an option to select a property.
@ModelEnum
public enum PropertyDeclaration {
    case DependingOnSelection
    case Fixed(PropertyIdentifierObject)
}

@ModelEnum
public enum AdvancedSpecialAbility<Identifier> {
    case General(Identifier)
    case RestrictOptions(RestrictAdvancedSpecialAbilityOptions<Identifier>)
    case OneOf(OneOfAdvancedSpecialAbilityOptions<Identifier>)
    case DeriveFromExternalOption(AdvancedSpecialAbilityDerivedFromExternalOption<Identifier>)
}

@Embedded
public struct RestrictAdvancedSpecialAbilityOptions<Identifier> {
    /// The advanced special ability’s identifier.
    let id: Identifier

    /// Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed.
    @MinItems(1)
    let option: [AdvancedSpecialAbilityRestrictedOptionIdentifier]
}

@Embedded
public struct OneOfAdvancedSpecialAbilityOptions<Identifier> {
    /// The possible advanced special abilities.
    @MinItems(2)
    let options: [Identifier]

    /// Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later.
    let is_selection_required_on_purchase: Bool

    let display_option: DisplayOption?
}

@Embedded
public struct AdvancedSpecialAbilityDerivedFromExternalOption<Identifier> {
    /// The possible advanced special abilities.
    @Relationship(MagicalTradition.self)
    let external_entry: MagicalTradition.ID

    /// Map options from the external entry to allowed advanced special abilities.
    @MinItems(1)
    let map: [AdvancedSpecialAbilityDerivedFromExternalOptionMapping<Identifier>]

    let display_option: DisplayOption?
}

/// Mapping from an option of the external entry to an allowed advanced special ability.
@Embedded
public struct AdvancedSpecialAbilityDerivedFromExternalOptionMapping<Identifier> {
    /// The select option’s identifier.
    @Relationship(Patron.self)
    let from_option: Patron.ID

    /// The advanced special ability’s identifier.
    let to_advanced: Identifier
}

@ModelEnum
public enum ApplicableCombatTechniques {
    case None
    case DependingOnCombatStyle
    case All(AllApplicableCombatTechniques)
    case AllClose(AllApplicableCloseCombatTechniques)
    case AllRanged(AllApplicableRangedCombatTechniques)
    case Specific(SpecificApplicableCombatTechniques)
}

@Embedded
public struct AllApplicableCombatTechniques {
    @MinItems(1)
    let restrictions: [ApplicableAllCombatTechniquesRestriction]?
}

@Embedded
public struct AllApplicableCloseCombatTechniques {
    @MinItems(1)
    let restrictions: [ApplicableCloseCombatTechniquesRestriction]?
}

@Embedded
public struct AllApplicableRangedCombatTechniques {
    @MinItems(1)
    let restrictions: [ApplicableRangedCombatTechniquesRestriction]?
}

@Embedded
public struct SpecificApplicableCombatTechniques {
    @MinItems(1)
    let list: [SpecificApplicableCombatTechnique]
}

@Embedded
public struct SpecificApplicableCombatTechnique {
    let id: CombatTechniqueIdentifier

    @MinItems(1)
    let restrictions: [ApplicableSpecificCombatTechniquesRestriction]?
}

@ModelEnum
public enum ApplicableAllCombatTechniquesRestriction {
    case Improvised
    case PointedBlade
    case Mount
    case Race(ApplicableCombatTechniquesRaceRestriction)
    case ExcludeCombatTechniques(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<CombatTechniqueIdentifier>)
}

@ModelEnum
public enum ApplicableCloseCombatTechniquesRestriction {
    case Improvised
    case PointedBlade
    case Mount
    case HasParry
    case OneHanded
    case ParryingWeapon
    case Race(ApplicableCombatTechniquesRaceRestriction)
    case ExcludeCombatTechniques(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<CloseCombatTechniqueIdentifierObject>)
}

@ModelEnum
public enum ApplicableRangedCombatTechniquesRestriction {
    case Improvised
    case PointedBlade
    case Mount
    case Race(ApplicableCombatTechniquesRaceRestriction)
    case ExcludeCombatTechniques(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<RangedCombatTechniqueIdentifierObject>)
}

@ModelEnum
public enum ApplicableSpecificCombatTechniquesRestriction {
    case Improvised
    case PointedBlade
    case Mount
    case Race(ApplicableCombatTechniquesRaceRestriction)
    case Level(ApplicableCombatTechniquesLevelRestriction)
    case Weapons(ApplicableCombatTechniquesWeaponRestriction)
}

@Embedded
public struct ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<Ref> {
    /// The combat techniques this combat special ability is **not** applicable to.
    @MinItems(1)
    let list: [Ref]
}

@Embedded
public struct ApplicableCombatTechniquesRaceRestriction {
    @Relationship(Race.self)
    let race: Race.ID
}

@Embedded
public struct ApplicableCombatTechniquesLevelRestriction {
    /// The combat special ability is only applicable on a certain level.
    @Minimum(1)
    let level: Int
}

@Embedded
public struct ApplicableCombatTechniquesWeaponRestriction {
    /// The specific weapons this combat special ability is only applicable to.
    @MinItems(1)
    @Relationship(Weapon.self)
    let list: [Weapon.ID]
}

@ModelEnum
public enum AdventurePointsValue {
    /// A fixed adventure points value. If the entry has levels, this is the cost per level as well.
    case Fixed(FixedAdventurePointsValue)

    /// An entry with levels may have different costs for each level. The length of the list must match the amount of levels the special ability has.
    case ByLevel(AdventurePointsValueByLevel)

    /// The adventure points value is derived from the selection of the special ability. Its display value may be able to be derived from the given information for the select options. If that is not the case or the generated text would not match the original one, a replacement text can be provided.
    case DerivedFromSelection(AdventurePointsDerivedFromSelection)

    case Indefinite
}

@Embedded
public struct FixedAdventurePointsValue {
    @Minimum(0)
    let value: Int
}

@Embedded
public struct AdventurePointsValueByLevel {
    @MinItems(2)
    @Minimum(0)
    let valueByLevel: [Int]
}

/// The adventure points value is derived from the selection of the special ability. Its display value may be able to be derived from the given information for the select options. If that is not the case or the generated text would not match the original one, a replacement text can be provided.
@Embedded
public struct AdventurePointsDerivedFromSelection {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation {  // AdventurePointsDerivedFromSelectionTranslation
        /// A replacement for the generated text if it would not match the original one.
        @MinLength(1)
        @Markdown
        let replacement: String?
    }
}
