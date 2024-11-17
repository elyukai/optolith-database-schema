//
//  _Activatable.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// The activatable entry's identifier. An unique, increasing integer.
public typealias Id = Int

/// The name of the activatable entry.
public typealias Name = String

/// The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes.
public typealias NameInLibrary = String

/// Number of available levels.
public typealias Levels = Int

/// The number stating how often you can buy the entry. The **default** depends on the entry type:
/// 
/// - **Advantage:** `1` in all cases (as specified in the **Core Rules**)
/// - **Disadvantage:** `1` in all cases (as specified in the **Core Rules**)
/// - **Special Abilities:** `1` if no options can be selected, otherwise the
///   number of possible options
/// 
/// The maximum is only set if it differs from the defaults specified above.
public typealias Maximum = Int

/// Definitions for possible options for the activatable entry. They can either be derived from entry categories or be defined explicitly. Both can happen as well, but if there is an explicitly defined select option and a derived select option has the same identifier (which may only happen if skill or combat technique identifiers are used for explicit select options), the explicit definition overwrites the derived option.
/// 
/// Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.
public struct SelectOptions: EntitySubtype {
    /// An entry category with optional further configuration. All available entries from the specified categories will be included as separate select options. You can also specify a set of groups that should only be included. Groups not mentioned will be excluded then.
    public let derived: SelectOptionCategory?
    
    /// A list of explicit select options. If the identifier has a specific type, its entry is the base of this select option, where values defined here override values from the base. Define the `src` property if the options are not derived from the rules text of the advantage/disadvantage/special ability but instead are listed in a separate block and/or on a separate page.
    public let explicit: [ExplicitSelectOption]?

    public init(derived: SelectOptionCategory? = nil, explicit: [ExplicitSelectOption]? = nil) {
        self.derived = derived
        self.explicit = explicit
    }
}

@DiscriminatedEnum
public enum ExplicitSelectOption: EntitySubtype {
    case general(ExplicitGeneralSelectOption)
    case skill(ExplicitSkillSelectOption)
    case combatTechnique(ExplicitCombatTechniqueSelectOption)
}

public struct ExplicitGeneralSelectOption: EntitySubtype {
    /// The option's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Sometimes, professions use specific text selections that are not contained in described lists. This ensures you can use them for professions only. They are not going to be displayed as options to the user.
    public let professionOnly: Bool?
    
    /// Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
    public let skillApplications: SkillApplications?
    
    /// Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
    public let skillUses: SkillUses?
    
    public let prerequisites: GeneralPrerequisites?
    
    /// Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.
    public let bindingCost: Int?
    
    /// Specific AP cost for the select option.
    public let apValue: Int?
    
    public let src: PublicationRefs?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ExplicitGeneralSelectOptionTranslation>

    public init(id: Int, professionOnly: Bool? = nil, skillApplications: SkillApplications? = nil, skillUses: SkillUses? = nil, prerequisites: GeneralPrerequisites? = nil, bindingCost: Int? = nil, apValue: Int? = nil, src: PublicationRefs? = nil, translations: LocaleMap<ExplicitGeneralSelectOptionTranslation>) {
        self.id = id
        self.professionOnly = professionOnly
        self.skillApplications = skillApplications
        self.skillUses = skillUses
        self.prerequisites = prerequisites
        self.bindingCost = bindingCost
        self.apValue = apValue
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case professionOnly = "profession_only"
        case skillApplications = "skill_applications"
        case skillUses = "skill_uses"
        case prerequisites = "prerequisites"
        case bindingCost = "binding_cost"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct ExplicitGeneralSelectOptionTranslation: EntitySubtype {
    /// The name of the select option.
    public let name: String
    
    /// The name of the select option when displayed in a generated profession text.
    public let nameInProfession: String?
    
    /// The description of the select option. Useful for Bad Habits, Trade Secrets and other entries where a description is available.
    public let description: String?
    
    public let errata: Errata?

    public init(name: String, nameInProfession: String? = nil, description: String? = nil, errata: Errata? = nil) {
        self.name = name
        self.nameInProfession = nameInProfession
        self.description = description
        self.errata = errata
    }    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInProfession = "name_in_profession"
        case description = "description"
        case errata = "errata"
    }
}

public struct ExplicitSkillSelectOption: EntitySubtype {
    /// The skill's identifier. An unique, increasing integer.
    public let id: SkillIdentifier
    
    /// Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
    public let skillApplications: [SkillApplicationOrUse]?
    
    /// Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.
    public let skillUses: [SkillApplicationOrUse]?
    
    public let prerequisites: GeneralPrerequisites?
    
    /// Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.
    public let bindingCost: Int?
    
    /// Specific AP cost for the select option.
    public let apValue: Int?
    
    public let src: PublicationRefs?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ExplicitSkillSelectOptionTranslation>?

    public init(id: SkillIdentifier, skillApplications: [SkillApplicationOrUse]? = nil, skillUses: [SkillApplicationOrUse]? = nil, prerequisites: GeneralPrerequisites? = nil, bindingCost: Int? = nil, apValue: Int? = nil, src: PublicationRefs? = nil, translations: LocaleMap<ExplicitSkillSelectOptionTranslation>? = nil) {
        self.id = id
        self.skillApplications = skillApplications
        self.skillUses = skillUses
        self.prerequisites = prerequisites
        self.bindingCost = bindingCost
        self.apValue = apValue
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case skillApplications = "skill_applications"
        case skillUses = "skill_uses"
        case prerequisites = "prerequisites"
        case bindingCost = "binding_cost"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct ExplicitSkillSelectOptionTranslation: EntitySubtype {
    public let errata: Errata?

    public init(errata: Errata? = nil) {
        self.errata = errata
    }
}

public struct ExplicitCombatTechniqueSelectOption: EntitySubtype {
    /// The combat technique's identifier.
    public let id: CombatTechniqueIdentifier
    
    public let prerequisites: GeneralPrerequisites?
    
    /// Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.
    public let bindingCost: Int?
    
    /// Specific AP cost for the select option.
    public let apValue: Int?
    
    public let src: PublicationRefs?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ExplicitCombatTechniqueSelectOptionTranslation>?

    public init(id: CombatTechniqueIdentifier, prerequisites: GeneralPrerequisites? = nil, bindingCost: Int? = nil, apValue: Int? = nil, src: PublicationRefs? = nil, translations: LocaleMap<ExplicitCombatTechniqueSelectOptionTranslation>? = nil) {
        self.id = id
        self.prerequisites = prerequisites
        self.bindingCost = bindingCost
        self.apValue = apValue
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case prerequisites = "prerequisites"
        case bindingCost = "binding_cost"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct ExplicitCombatTechniqueSelectOptionTranslation: EntitySubtype {
    public let errata: Errata?

    public init(errata: Errata? = nil) {
        self.errata = errata
    }
}

/// The rule text.
public typealias Rules = NonEmptyMarkdown

/// The effect description.
public typealias Effect = NonEmptyMarkdown

/// The definition of how the combat special ability can be used in combat.
public enum CombatSpecialAbilityUsageType: String, EntitySubtype {
    case passive = "Passive"
    case basicManeuver = "BasicManeuver"
    case specialManeuver = "SpecialManeuver"
}

/// The definition of if the combat special ability can be used when armed or when unarmed.
public enum CombatSpecialAbilityType: String, EntitySubtype {
    case armed = "Armed"
    case unarmed = "Unarmed"
}

/// Registers new skill applications, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.
public typealias SkillApplications = [SkillApplication]

public struct SkillApplication: EntitySubtype {
    /// The application's identifier. An entry-unique, increasing integer.
    public let id: Int
    
    /// The skill(s) this application belongs to.
    public let skill: SkillApplicationAssociatedSkill
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SkillApplicationTranslation>?

    public init(id: Int, skill: SkillApplicationAssociatedSkill, translations: LocaleMap<SkillApplicationTranslation>? = nil) {
        self.id = id
        self.skill = skill
        self.translations = translations
    }
}

@DiscriminatedEnum
public enum SkillApplicationAssociatedSkill: EntitySubtype {
    case single(SkillReference)
    case multiple(SkillApplicationAssociatedSkills)
}

public struct SkillApplicationAssociatedSkills: EntitySubtype {
    /// The skills this application belongs to.
    public let list: [SkillReference]
    
    /// If an application applies to multiple skills, it may need to ensure the respective skill is on a certain skill rating if the activatable entry cannot ensure this prerequisite.
    public let requiredSkillRating: Int?

    public init(list: [SkillReference], requiredSkillRating: Int? = nil) {
        self.list = list
        self.requiredSkillRating = requiredSkillRating
    }    
    
    private enum CodingKeys: String, CodingKey {
        case list = "list"
        case requiredSkillRating = "required_skill_rating"
    }
}

public struct SkillApplicationTranslation: EntitySubtype {
    /// The name of the application if different from the activatable entry's name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}

/// Registers uses, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.
public typealias SkillUses = [SkillUse]

public struct SkillUse: EntitySubtype {
    /// The use's identifier. An entry-unique, increasing integer.
    public let id: Int
    
    /// The skill(s) this use belongs to.
    public let skill: SkillUseAssociatedSkill
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SkillUseTranslation>?

    public init(id: Int, skill: SkillUseAssociatedSkill, translations: LocaleMap<SkillUseTranslation>? = nil) {
        self.id = id
        self.skill = skill
        self.translations = translations
    }
}

@DiscriminatedEnum
public enum SkillUseAssociatedSkill: EntitySubtype {
    case single(SkillReference)
    case multiple(SkillUseAssociatedSkills)
}

public struct SkillUseAssociatedSkills: EntitySubtype {
    /// The skills this use belongs to.
    public let list: [SkillReference]

    public init(list: [SkillReference]) {
        self.list = list
    }
}

public struct SkillUseTranslation: EntitySubtype {
    /// The name of the use if different from the activatable entry's name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}

/// The penalty the special ability gives when used.
@DiscriminatedEnum
public enum Penalty: EntitySubtype {
    case single(SinglePenalty)
    case byHandedness(PenaltyByHandedness)
    case byActivation(PenaltyByActivation)
    case selection(PenaltySelection)
    case byLevel(PenaltyByLevel)
    case byAttack(PenaltyByAttack)
    case dependsOnHitZone
}

public struct SinglePenalty: EntitySubtype {
    /// The penalty value.
    public let value: Int
    
    /// Set to `true` if the penalty applies to the parry instead of the attack.
    public let appliesToParry: Bool?

    public init(value: Int, appliesToParry: Bool? = nil) {
        self.value = value
        self.appliesToParry = appliesToParry
    }    
    
    private enum CodingKeys: String, CodingKey {
        case value = "value"
        case appliesToParry = "applies_to_parry"
    }
}

public struct PenaltyByHandedness: EntitySubtype {
    /// The penalty value for one-handed weapons.
    public let oneHanded: Int
    
    /// The penalty value for two-handed weapons.
    public let twoHanded: Int
    
    /// Set to `true` if the penalty applies to the parry instead of the attack.
    public let appliesToParry: Bool?

    public init(oneHanded: Int, twoHanded: Int, appliesToParry: Bool? = nil) {
        self.oneHanded = oneHanded
        self.twoHanded = twoHanded
        self.appliesToParry = appliesToParry
    }    
    
    private enum CodingKeys: String, CodingKey {
        case oneHanded = "one_handed"
        case twoHanded = "two_handed"
        case appliesToParry = "applies_to_parry"
    }
}

public struct PenaltyByActivation: EntitySubtype {
    /// The penalty value if the entry has been bought by the character.
    public let active: Int
    
    /// The penalty value if the entry has not been bought by the character.
    public let inactive: Int
    
    /// Set to `true` if the penalty applies to the parry instead of the attack.
    public let appliesToParry: Bool?

    public init(active: Int, inactive: Int, appliesToParry: Bool? = nil) {
        self.active = active
        self.inactive = inactive
        self.appliesToParry = appliesToParry
    }    
    
    private enum CodingKeys: String, CodingKey {
        case active = "active"
        case inactive = "inactive"
        case appliesToParry = "applies_to_parry"
    }
}

public struct PenaltySelection: EntitySubtype {
    public let options: PenaltySelectionOptions

    public init(options: PenaltySelectionOptions) {
        self.options = options
    }
}

@DiscriminatedEnum
public enum PenaltySelectionOptions: EntitySubtype {
    case specific(SpecificPenaltySelectionOptions)
    case range(PenaltySelectionOptionsRange)
}

public struct SpecificPenaltySelectionOptions: EntitySubtype {
    /// The list of specific penalty options.
    public let list: [SpecificPenaltySelectionOption]

    public init(list: [SpecificPenaltySelectionOption]) {
        self.list = list
    }
}

public struct SpecificPenaltySelectionOption: EntitySubtype {
    /// The penalty value.
    public let value: Int

    public init(value: Int) {
        self.value = value
    }
}

public struct PenaltySelectionOptionsRange: EntitySubtype {
    /// The minimum penalty value.
    public let minimum: Int
    
    /// The maximum penalty value.
    public let maximum: Int

    public init(minimum: Int, maximum: Int) {
        self.minimum = minimum
        self.maximum = maximum
    }
}

public struct PenaltyByLevel: EntitySubtype {
    /// A continuous range of penalties for each level. The first element is the penalty for the first level, the second element is the penalty for the second level, and so on.
    public let levels: [PenaltyByLevelLevel]
    
    /// The combat-related special ability of which the level defines the penalty instead.
    public let external: PenaltyByExternalLevel?

    public init(levels: [PenaltyByLevelLevel], external: PenaltyByExternalLevel? = nil) {
        self.levels = levels
        self.external = external
    }
}

public struct PenaltyByLevelLevel: EntitySubtype {
    /// The penalty value for this level.
    public let value: Int

    public init(value: Int) {
        self.value = value
    }
}

/// The combat-related special ability of which the level defines the penalty instead.
public struct PenaltyByExternalLevel: EntitySubtype {
    /// The identifier of the combat-related special ability of which the level defines the penalty instead.
    public let id: CombatRelatedSpecialAbilityIdentifier

    public init(id: CombatRelatedSpecialAbilityIdentifier) {
        self.id = id
    }
}

public struct PenaltyByAttack: EntitySubtype {
    /// A list of penalties for subsequent attacks. The first element is the penalty for the first attack, the second element is the penalty for the second attack, and so on. The order of the first element may be changed using `initial_order`, so that e.g. if set to `2`, the first element is the penalty for the second attack, the second element is the penalty for the third attack, and so on.
    public let list: [PenaltyByAttackOrderItem]
    
    /// The order of the first element in the `list` of penalties.
    public let initialOrder: Double?
    
    /// Set if a predefined different word should be used instead of the word
    /// `attack` for display purposes.
    public let attackReplacement: PenaltyByAttackReplacement?

    public init(list: [PenaltyByAttackOrderItem], initialOrder: Double? = nil, attackReplacement: PenaltyByAttackReplacement? = nil) {
        self.list = list
        self.initialOrder = initialOrder
        self.attackReplacement = attackReplacement
    }    
    
    private enum CodingKeys: String, CodingKey {
        case list = "list"
        case initialOrder = "initial_order"
        case attackReplacement = "attack_replacement"
    }
}

public struct PenaltyByAttackOrderItem: EntitySubtype {
    /// The penalty value for this order.
    public let value: Int

    public init(value: Int) {
        self.value = value
    }
}

/// Set if a predefined different word should be used instead of the word
/// `attack` for display purposes.
public enum PenaltyByAttackReplacement: String, EntitySubtype {
    case `throw` = "Throw"
}

@DiscriminatedEnum
public enum EnchantmentCost: EntitySubtype {
    case arcaneEnergyCost(ArcaneEnergyCost)
    case bindingCost(BindingCost)
}

/// The AE Cost.
@DiscriminatedEnum
public enum ArcaneEnergyCost: EntitySubtype {
    case fixed(FixedArcaneEnergyCost)
    case perCountable(ArcaneEnergyCostPerCountable)
    case interval(IntervalArcaneEnergyCost)
    case activationAndHalfInterval(ActivationAndHalfIntervalArcaneEnergyCost)
    case indefinite(IndefiniteArcaneEnergyCost)
    case disjunction(ArcaneEnergyCostDisjunction)
    case variable
}

public struct FixedArcaneEnergyCost: EntitySubtype {
    /// The AE cost value.
    public let value: Int
    
    /// Set to `true` if the AE costs are permanent.
    public let isPermanent: Bool?
    
    /// Specified if the AE cost `value` has to be paid for each time interval.
    public let interval: DurationUnitValue?
    
    /// The AE cost are per level of the enchantment. It may either be displayed in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1 AE for level I; 2 AE for level II`).
    public let perLevel: FixedArcaneEnergyCostPerLevel?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<FixedArcaneEnergyCostTranslation>?

    public init(value: Int, isPermanent: Bool? = nil, interval: DurationUnitValue? = nil, perLevel: FixedArcaneEnergyCostPerLevel? = nil, translations: LocaleMap<FixedArcaneEnergyCostTranslation>? = nil) {
        self.value = value
        self.isPermanent = isPermanent
        self.interval = interval
        self.perLevel = perLevel
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case value = "value"
        case isPermanent = "is_permanent"
        case interval = "interval"
        case perLevel = "per_level"
        case translations = "translations"
    }
}

/// The AE cost are per level of the enchantment. It may either be displayed in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1 AE for level I; 2 AE for level II`).
public enum FixedArcaneEnergyCostPerLevel: String, EntitySubtype {
    case compressed = "Compressed"
    case verbose = "Verbose"
}

public struct FixedArcaneEnergyCostTranslation: EntitySubtype {
    /// A note, appended to the generated option string in parenthesis.
    public let note: ResponsiveTextOptional?

    public init(note: ResponsiveTextOptional? = nil) {
        self.note = note
    }
}

public struct ArcaneEnergyCostPerCountable: EntitySubtype {
    /// The AE cost value that has to be per a specific countable entity.
    public let value: Int
    
    /// If defined, in addition to the cost per entity you have to pay a flat amount, regardless of the entity count.
    public let baseValue: Int?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ArcaneEnergyCostPerCountableTranslation>

    public init(value: Int, baseValue: Int? = nil, translations: LocaleMap<ArcaneEnergyCostPerCountableTranslation>) {
        self.value = value
        self.baseValue = baseValue
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case value = "value"
        case baseValue = "base_value"
        case translations = "translations"
    }
}

public struct ArcaneEnergyCostPerCountableTranslation: EntitySubtype {
    /// The cost have to be per a specific countable entity, e.g. `8 AE per person`.
    public let per: ResponsiveText
    
    /// A note, appended to the generated string in parenthesis.
    public let note: ResponsiveTextOptional?

    public init(per: ResponsiveText, note: ResponsiveTextOptional? = nil) {
        self.per = per
        self.note = note
    }
}

public struct IntervalArcaneEnergyCost: EntitySubtype {
    /// The AE cost value that has to be payed each interval.
    public let value: Int
    
    /// The time interval for which the AE cost `value` has to be paid.
    public let interval: DurationUnitValue

    public init(value: Int, interval: DurationUnitValue) {
        self.value = value
        self.interval = interval
    }
}

public struct ActivationAndHalfIntervalArcaneEnergyCost: EntitySubtype {
    /// The AE cost value that has to be payed for activation. Half of this value has to be payed each interval.
    public let value: Int
    
    /// The time interval for which the AE cost `value` has to be paid.
    public let interval: DurationUnitValue

    public init(value: Int, interval: DurationUnitValue) {
        self.value = value
        self.interval = interval
    }
}

public struct IndefiniteArcaneEnergyCost: EntitySubtype {
    /// Specified if the indefinite AP cost description needs to be modified by a certain value.
    public let modifier: IndefiniteArcaneEnergyCostModifier?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteArcaneEnergyCostTranslation>

    public init(modifier: IndefiniteArcaneEnergyCostModifier? = nil, translations: LocaleMap<IndefiniteArcaneEnergyCostTranslation>) {
        self.modifier = modifier
        self.translations = translations
    }
}

public struct IndefiniteArcaneEnergyCostModifier: EntitySubtype {
    /// The arithmetic how to apply the `value` to the `base`.
    public let arithmetic: IndefiniteArcaneEnergyCostModifierArithmetic
    
    /// The value that is applied to the `base` using the defined `arithmetic`.
    public let value: Int

    public init(arithmetic: IndefiniteArcaneEnergyCostModifierArithmetic, value: Int) {
        self.arithmetic = arithmetic
        self.value = value
    }
}

public enum IndefiniteArcaneEnergyCostModifierArithmetic: String, EntitySubtype {
    case add = "Add"
}

public struct IndefiniteArcaneEnergyCostTranslation: EntitySubtype {
    /// A description of where the cost come from.
    public let description: ResponsiveText

    public init(description: ResponsiveText) {
        self.description = description
    }
}

public struct ArcaneEnergyCostDisjunction: EntitySubtype {
    /// Specified if the selected AE cost option has to be paid for each time interval.
    public let interval: ArcaneEnergyCostDisjunctionInterval?
    
    /// The possible AE cost values.
    public let options: [ArcaneEnergyCostDisjunctionOption]

    public init(interval: ArcaneEnergyCostDisjunctionInterval? = nil, options: [ArcaneEnergyCostDisjunctionOption]) {
        self.interval = interval
        self.options = options
    }
}

public struct ArcaneEnergyCostDisjunctionInterval: EntitySubtype {
    /// The interval itself.
    public let value: DurationUnitValue
    
    /// The AE cost value for activation.
    public let activationValue: Int
    
    /// Set to `true` if the action where the enchantment is casted does
    /// **not** as a part of the first interval that has to be payed, so that
    /// the first interval payment needs to be done after the activation.
    /// 
    /// This works different than other sustained spells, since for them the end of the cast usually already counts as part of the first interval.
    public let afterActivation: Bool

    public init(value: DurationUnitValue, activationValue: Int, afterActivation: Bool) {
        self.value = value
        self.activationValue = activationValue
        self.afterActivation = afterActivation
    }    
    
    private enum CodingKeys: String, CodingKey {
        case value = "value"
        case activationValue = "activation_value"
        case afterActivation = "after_activation"
    }
}

public struct ArcaneEnergyCostDisjunctionOption: EntitySubtype {
    /// A possible AE cost value.
    public let value: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ArcaneEnergyCostDisjunctionOptionTranslation>?

    public init(value: Int, translations: LocaleMap<ArcaneEnergyCostDisjunctionOptionTranslation>? = nil) {
        self.value = value
        self.translations = translations
    }
}

public struct ArcaneEnergyCostDisjunctionOptionTranslation: EntitySubtype {
    /// A note, appended to the generated option string in parenthesis.
    public let note: ResponsiveTextOptional?

    public init(note: ResponsiveTextOptional? = nil) {
        self.note = note
    }
}

public struct NoArcaneEnergyCost: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag
    /// (BCP47).
    public let translations: LocaleMap<NoArcaneEnergyCostTranslation>?

    public init(translations: LocaleMap<NoArcaneEnergyCostTranslation>? = nil) {
        self.translations = translations
    }
}

public struct NoArcaneEnergyCostTranslation: EntitySubtype {
    /// A note, appended to the generated string in parenthesis.
    public let note: ResponsiveTextOptional?

    public init(note: ResponsiveTextOptional? = nil) {
        self.note = note
    }
}

/// The volume points the enchantment needs.
@DiscriminatedEnum
public enum Volume: EntitySubtype {
    case fixed(FixedVolume)
    case perLevel(VolumePerLevel)
    case byLevel(VolumeByLevel)
    case map(VolumeMap)
    case derivedFromSelection(VolumeDerivedFromSelection)
}

public struct FixedVolume: EntitySubtype {
    /// The volume points.
    public let points: Int

    public init(points: Int) {
        self.points = points
    }
}

public struct VolumePerLevel: EntitySubtype {
    /// The volume points per level.
    public let points: Int

    public init(points: Int) {
        self.points = points
    }
}

public struct VolumeByLevel: EntitySubtype {
    /// The volume points for each level. The first element is the volume points for the first level, the second element is the volume points for the second level, and so on.
    public let list: [VolumeByLevelItem]

    public init(list: [VolumeByLevelItem]) {
        self.list = list
    }
}

public struct VolumeByLevelItem: EntitySubtype {
    /// The volume points for this level.
    public let points: Int

    public init(points: Int) {
        self.points = points
    }
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
public struct VolumeMap: EntitySubtype {
    /// The possible costs and associated labels.
    public let options: [VolumeMapOption]
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<VolumeMapTranslation>?

    public init(options: [VolumeMapOption], translations: LocaleMap<VolumeMapTranslation>? = nil) {
        self.options = options
        self.translations = translations
    }
}

public struct VolumeMapTranslation: EntitySubtype {
    /// Place a string between the `for` and the grouped map option labels.
    public let listPrepend: String?
    
    /// Place a string after the grouped map option labels.
    public let listAppend: String?
    
    /// If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.
    public let replacement: String?

    public init(listPrepend: String? = nil, listAppend: String? = nil, replacement: String? = nil) {
        self.listPrepend = listPrepend
        self.listAppend = listAppend
        self.replacement = replacement
    }    
    
    private enum CodingKeys: String, CodingKey {
        case listPrepend = "list_prepend"
        case listAppend = "list_append"
        case replacement = "replacement"
    }
}

public struct VolumeMapOption: EntitySubtype {
    /// The full permanent AE cost value for this option.
    public let points: Int
    
    /// Links to the options this volume specification is meant for.
    public let associatedOptions: [VolumeMapOptionAssociatedOption]
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<VolumeMapOptionTranslation>?

    public init(points: Int, associatedOptions: [VolumeMapOptionAssociatedOption], translations: LocaleMap<VolumeMapOptionTranslation>? = nil) {
        self.points = points
        self.associatedOptions = associatedOptions
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case points = "points"
        case associatedOptions = "associated_options"
        case translations = "translations"
    }
}

public struct VolumeMapOptionAssociatedOption: EntitySubtype {
    /// The option's identifier.
    public let id: VolumePointsOptionReferenceIdentifier

    public init(id: VolumePointsOptionReferenceIdentifier) {
        self.id = id
    }
}

public struct VolumeMapOptionTranslation: EntitySubtype {
    /// The description of the option for cost string generation.
    public let label: NonEmptyString
    
    /// The description of the option if used standalone. Only used if different from `label`.
    public let labelStandalone: NonEmptyString?

    public init(label: NonEmptyString, labelStandalone: NonEmptyString? = nil) {
        self.label = label
        self.labelStandalone = labelStandalone
    }    
    
    private enum CodingKeys: String, CodingKey {
        case label = "label"
        case labelStandalone = "label_standalone"
    }
}

public struct VolumeDerivedFromSelection: EntitySubtype {
    /// The volume for the selection if it does not define a specific one.
    public let fallback: Int

    public init(fallback: Int) {
        self.fallback = fallback
    }
}

/// The binding cost for an enchantment.
@DiscriminatedEnum
public enum BindingCost: EntitySubtype {
    case fixed(FixedBindingCost)
    case perLevel(BindingCostPerLevel)
    case map(BindingCostMap)
    case derivedFromSelection(BindingCostDerivedFromSelection)
}

public struct FixedBindingCost: EntitySubtype {
    /// The permanent AE cost.
    /// 
    /// If the enchantment has multiple levels, it is only applied for the first level.
    public let permanentValue: Int

    public init(permanentValue: Int) {
        self.permanentValue = permanentValue
    }    
    
    private enum CodingKeys: String, CodingKey {
        case permanentValue = "permanent_value"
    }
}

public struct BindingCostPerLevel: EntitySubtype {
    /// The permanent AE cost per level.
    public let permanentValue: Int

    public init(permanentValue: Int) {
        self.permanentValue = permanentValue
    }    
    
    private enum CodingKeys: String, CodingKey {
        case permanentValue = "permanent_value"
    }
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
public struct BindingCostMap: EntitySubtype {
    /// The possible costs and associated labels.
    public let options: [VolumeMapOption]
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<BindingCostMapTranslation>?

    public init(options: [VolumeMapOption], translations: LocaleMap<BindingCostMapTranslation>? = nil) {
        self.options = options
        self.translations = translations
    }
}

public struct BindingCostMapTranslation: EntitySubtype {
    /// Place a string between the `for` and the grouped map option labels.
    public let listPrepend: NonEmptyString?
    
    /// Place a string after the grouped map option labels.
    public let listAppend: NonEmptyString?
    
    /// If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.
    public let replacement: NonEmptyString?

    public init(listPrepend: NonEmptyString? = nil, listAppend: NonEmptyString? = nil, replacement: NonEmptyString? = nil) {
        self.listPrepend = listPrepend
        self.listAppend = listAppend
        self.replacement = replacement
    }    
    
    private enum CodingKeys: String, CodingKey {
        case listPrepend = "list_prepend"
        case listAppend = "list_append"
        case replacement = "replacement"
    }
}

public struct BindingCostMapOption: EntitySubtype {
    /// The full permanent AE cost value for this option.
    public let permanentValue: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<BindingCostMapOptionTranslation>?

    public init(permanentValue: Int, translations: LocaleMap<BindingCostMapOptionTranslation>? = nil) {
        self.permanentValue = permanentValue
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case permanentValue = "permanent_value"
        case translations = "translations"
    }
}

public struct BindingCostMapOptionTranslation: EntitySubtype {
    /// The description of the option for cost string generation.
    public let label: NonEmptyString
    
    /// The description of the option if used standalone. Only used if different from `label`.
    public let labelStandalone: NonEmptyString?

    public init(label: NonEmptyString, labelStandalone: NonEmptyString? = nil) {
        self.label = label
        self.labelStandalone = labelStandalone
    }    
    
    private enum CodingKeys: String, CodingKey {
        case label = "label"
        case labelStandalone = "label_standalone"
    }
}

public struct BindingCostDerivedFromSelection: EntitySubtype {
    /// The binding cost for the selection if it does not define a specific one.
    public let fallback: Int

    public init(fallback: Int) {
        self.fallback = fallback
    }
}

/// The magic property's identifier. `DependingOnProperty` can only be used if the special ability has an option to select a property.
@DiscriminatedEnum
public enum PropertyDeclaration: EntitySubtype {
    case dependingOnSelection
    case fixed(PropertyReference)
}

/// The blessed aspect.
public typealias AspectDeclaration = AspectReference

/// A reference to an advanced special ability.
@DiscriminatedEnum
public enum AdvancedSpecialAbility<Identifier: EntitySubtype>: EntitySubtype {
    case general(AdvancedSpecialAbilityReference<Identifier>)
    case restrictOptions(RestrictAdvancedSpecialAbilityOptions<Identifier>)
    case oneOf(OneOfAdvancedSpecialAbilityOptions<Identifier>)
    case deriveFromExternalOption(AdvancedSpecialAbilityDerivedFromExternalOption<Identifier>)
}

public struct RestrictAdvancedSpecialAbilityOptions<Identifier: EntitySubtype>: EntitySubtype {
    /// The advanced special ability’s identifier.
    public let id: Identifier
    
    /// Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed.
    public let option: [AdvancedSpecialAbilityRestrictedOptionIdentifier]

    public init(id: Identifier, option: [AdvancedSpecialAbilityRestrictedOptionIdentifier]) {
        self.id = id
        self.option = option
    }
}

public struct OneOfAdvancedSpecialAbilityOptions<Identifier: EntitySubtype>: EntitySubtype {
    /// The possible advanced special abilities.
    public let options: [AdvancedSpecialAbilityReference<Identifier>]
    
    /// Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later.
    public let isSelectionRequiredOnPurchase: Bool
    
    public let displayOption: DisplayOption?

    public init(options: [AdvancedSpecialAbilityReference<Identifier>], isSelectionRequiredOnPurchase: Bool, displayOption: DisplayOption? = nil) {
        self.options = options
        self.isSelectionRequiredOnPurchase = isSelectionRequiredOnPurchase
        self.displayOption = displayOption
    }    
    
    private enum CodingKeys: String, CodingKey {
        case options = "options"
        case isSelectionRequiredOnPurchase = "is_selection_required_on_purchase"
        case displayOption = "display_option"
    }
}

public struct AdvancedSpecialAbilityDerivedFromExternalOption<Identifier: EntitySubtype>: EntitySubtype {
    /// The possible advanced special abilities.
    public let externalEntry: MagicalTraditionIdentifier
    
    /// Map options from the external entry to allowed advanced special abilities.
    public let map: [AdvancedSpecialAbilityDerivedFromExternalOptionMapping<Identifier>]
    
    public let displayOption: DisplayOption?

    public init(externalEntry: MagicalTraditionIdentifier, map: [AdvancedSpecialAbilityDerivedFromExternalOptionMapping<Identifier>], displayOption: DisplayOption? = nil) {
        self.externalEntry = externalEntry
        self.map = map
        self.displayOption = displayOption
    }    
    
    private enum CodingKeys: String, CodingKey {
        case externalEntry = "external_entry"
        case map = "map"
        case displayOption = "display_option"
    }
}

/// Mapping from an option of the external entry to an allowed advanced special ability.
public struct AdvancedSpecialAbilityDerivedFromExternalOptionMapping<Identifier: EntitySubtype>: EntitySubtype {
    /// The select option's identifier.
    public let fromOption: PatronIdentifier
    
    /// The advanced special ability's identifier.
    public let toAdvanced: AdvancedSpecialAbilityReference<Identifier>

    public init(fromOption: PatronIdentifier, toAdvanced: AdvancedSpecialAbilityReference<Identifier>) {
        self.fromOption = fromOption
        self.toAdvanced = toAdvanced
    }    
    
    private enum CodingKeys: String, CodingKey {
        case fromOption = "from_option"
        case toAdvanced = "to_advanced"
    }
}

public typealias AdvancedSpecialAbilityDerivedExternalEntryId = MagicalTraditionIdentifier

public typealias AdvancedSpecialAbilityDerivedExternalEntryOptionId = PatronIdentifier

/// The Advanced Special Abilities for the respective Style Special Ability. Sometimes, only a specific select option or a set of select options of an entry is allowed, which can be modelled by the option property. It can also be that you can choose from a set of special abilities, but then you can't specify an option.
public typealias AdvancedSpecialAbilities<Identifier: EntitySubtype> = [AdvancedSpecialAbility<Identifier>]

/// The prerequisites text. It is only used if the text cannot be generated from the given information.
public typealias PrerequisitesReplacement = NonEmptyMarkdown

@DiscriminatedEnum
public enum ApplicableCombatTechniques: EntitySubtype {
    case none
    case dependingOnCombatStyle
    case all(AllApplicableCombatTechniques)
    case allClose(AllApplicableCloseCombatTechniques)
    case allRanged(AllApplicableRangedCombatTechniques)
    case specific(SpecificApplicableCombatTechniques)
}

public struct AllApplicableCombatTechniques: EntitySubtype {
    public let restrictions: [ApplicableAllCombatTechniquesRestriction]?

    public init(restrictions: [ApplicableAllCombatTechniquesRestriction]? = nil) {
        self.restrictions = restrictions
    }
}

public struct AllApplicableCloseCombatTechniques: EntitySubtype {
    public let restrictions: [ApplicableCloseCombatTechniquesRestriction]?

    public init(restrictions: [ApplicableCloseCombatTechniquesRestriction]? = nil) {
        self.restrictions = restrictions
    }
}

public struct AllApplicableRangedCombatTechniques: EntitySubtype {
    public let restrictions: [ApplicableRangedCombatTechniquesRestriction]?

    public init(restrictions: [ApplicableRangedCombatTechniquesRestriction]? = nil) {
        self.restrictions = restrictions
    }
}

public struct SpecificApplicableCombatTechniques: EntitySubtype {
    public let list: [SpecificApplicableCombatTechnique]

    public init(list: [SpecificApplicableCombatTechnique]) {
        self.list = list
    }
}

public struct SpecificApplicableCombatTechnique: EntitySubtype {
    public let id: CombatTechniqueIdentifier
    
    public let restrictions: [ApplicableSpecificCombatTechniquesRestriction]?

    public init(id: CombatTechniqueIdentifier, restrictions: [ApplicableSpecificCombatTechniquesRestriction]? = nil) {
        self.id = id
        self.restrictions = restrictions
    }
}

@DiscriminatedEnum
public enum ApplicableAllCombatTechniquesRestriction: EntitySubtype {
    case improvised
    case pointedBlade
    case mount
    case race(ApplicableCombatTechniquesRaceRestriction)
    case excludeCombatTechniques(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<CombatTechniqueReference>)
}

@DiscriminatedEnum
public enum ApplicableCloseCombatTechniquesRestriction: EntitySubtype {
    case improvised
    case pointedBlade
    case mount
    case hasParry
    case oneHanded
    case parryingWeapon
    case race(ApplicableCombatTechniquesRaceRestriction)
    case excludeCombatTechniques(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<CloseCombatTechniqueReference>)
}

@DiscriminatedEnum
public enum ApplicableRangedCombatTechniquesRestriction: EntitySubtype {
    case improvised
    case pointedBlade
    case mount
    case race(ApplicableCombatTechniquesRaceRestriction)
    case excludeCombatTechniques(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<RangedCombatTechniqueReference>)
}

@DiscriminatedEnum
public enum ApplicableSpecificCombatTechniquesRestriction: EntitySubtype {
    case improvised
    case pointedBlade
    case mount
    case race(ApplicableCombatTechniquesRaceRestriction)
    case level(ApplicableCombatTechniquesLevelRestriction)
    case weapons(ApplicableCombatTechniquesWeaponRestriction)
}

public struct ApplicableCombatTechniquesNegativeCombatTechniquesRestriction<Ref: EntitySubtype>: EntitySubtype {
    /// The combat techniques this combat special ability is **not** applicable to.
    public let list: [Ref]

    public init(list: [Ref]) {
        self.list = list
    }
}

public typealias ApplicableCombatTechniquesRaceRestriction = RaceReference

public struct ApplicableCombatTechniquesLevelRestriction: EntitySubtype {
    /// The combat special ability is only applicable on a certain level.
    public let level: Int

    public init(level: Int) {
        self.level = level
    }
}

public struct ApplicableCombatTechniquesWeaponRestriction: EntitySubtype {
    /// The specific weapons this combat special ability is only applicable to.
    public let list: [WeaponReference]

    public init(list: [WeaponReference]) {
        self.list = list
    }
}

@DiscriminatedEnum
public enum AdventurePointsValue: EntitySubtype {
    case fixed(FixedAdventurePointsValue)
    case byLevel(AdventurePointsValueByLevel)
    case derivedFromSelection(AdventurePointsDerivedFromSelection)
    case indefinite
}

/// A fixed adventure points value. If the entry has levels, this is the cost per level as well.
public typealias FixedAdventurePointsValue = AdventurePointsSingleValue

/// An entry with levels may have different costs for each level. The length of the list must match the amount of levels the special ability has.
public typealias AdventurePointsValueByLevel = [AdventurePointsSingleValue]

/// The adventure points value is derived from the selection of the special ability. Its display value may be able to be derived from the given information for the select options. If that is not the case or the generated text would not match the original one, a replacement text can be provided.
public struct AdventurePointsDerivedFromSelection: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AdventurePointsDerivedFromSelectionTranslation>?

    public init(translations: LocaleMap<AdventurePointsDerivedFromSelectionTranslation>? = nil) {
        self.translations = translations
    }
}

public struct AdventurePointsDerivedFromSelectionTranslation: EntitySubtype {
    /// A replacement for the generated text if it would not match the original one.
    public let replacement: NonEmptyMarkdown?

    public init(replacement: NonEmptyMarkdown? = nil) {
        self.replacement = replacement
    }
}

/// A single adventure points value.
public typealias AdventurePointsSingleValue = Int

/// A string that is used as a label for an input field.
public typealias Input = NonEmptyString

/// The AP value. It is only used if the text cannot be generated from the given information.
public typealias AdventurePointsValueReplacement = NonEmptyMarkdown

/// A string that gets appended to the default AP Value text with a preceding space. This always happens if present, even if the generated AP Value text is replaced.
public typealias AdventurePointsValueAppend = NonEmptyMarkdown
