//
//  _ActivatableSelectOptionCategory.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

@DiscriminatedEnum
public enum SelectOptionCategory: EntitySubtype {
    case blessings
    case cantrips
    case tradeSecrets
    case scripts
    case animalShapes
    case arcaneBardTraditions
    case arcaneDancerTraditions
    case sexPractices
    case races
    case cultures
    case racesAndCultures
    case blessedTraditions(BlessedTraditionsSelectOptionCategory)
    case elements(ElementsSelectOptionCategory)
    case properties(PropertiesSelectOptionCategory)
    case aspects(AspectSelectOptionCategory)
    case diseases(DiseasesPoisonsSelectOptionCategory)
    case poisons(DiseasesPoisonsSelectOptionCategory)
    case languages(LanguagesSelectOptionCategory)
    case skills(SkillsSelectOptionCategory)
    case combatTechniques(CombatTechniquesSelectOptionCategory)
    case targetCategories(TargetCategoriesSelectOptionCategory)
}

public struct BlessedTraditionsSelectOptionCategory: EntitySubtype {
    /// Should the principles (code) of the tradition be required to select the respective tradition?
    public let requirePrinciples: Bool?

    public init(requirePrinciples: Bool? = nil) {
        self.requirePrinciples = requirePrinciples
    }    
    
    private enum CodingKeys: String, CodingKey {
        case requirePrinciples = "require_principles"
    }
}

public struct ElementsSelectOptionCategory: EntitySubtype {
    /// Only include entries with the listed identifiers.
    public let specific: [ElementReference]?

    public init(specific: [ElementReference]? = nil) {
        self.specific = specific
    }
}

public struct PropertiesSelectOptionCategory: EntitySubtype {
    /// Does each property require it's corresponding property knowledge?
    public let requireKnowledge: Bool?
    
    /// Require a minimum number of spellworks of the respective property to be on a minimum skill rating.
    public let requireMinimumSpellworksOn: RequiredMinimumSkillsToBeOnSkillRating?

    public init(requireKnowledge: Bool? = nil, requireMinimumSpellworksOn: RequiredMinimumSkillsToBeOnSkillRating? = nil) {
        self.requireKnowledge = requireKnowledge
        self.requireMinimumSpellworksOn = requireMinimumSpellworksOn
    }    
    
    private enum CodingKeys: String, CodingKey {
        case requireKnowledge = "require_knowledge"
        case requireMinimumSpellworksOn = "require_minimum_spellworks_on"
    }
}

public struct AspectSelectOptionCategory: EntitySubtype {
    /// Does each aspect require it's corresponding aspect knowledge?
    public let requireKnowledge: Bool?
    
    /// The generated name should be the *Master of (Aspect)* suffix for this aspect instead of the aspect's name. If an aspect does not provide a suffix (such as the General aspect), it is automatically excluded from the list.
    public let useMasterOfSuffixAsName: Bool?
    
    /// Require a minimum number of liturgies of the respective aspect to be on a minimum skill rating.
    public let requireMinimumLiturgiesOn: RequiredMinimumSkillsToBeOnSkillRating?

    public init(requireKnowledge: Bool? = nil, useMasterOfSuffixAsName: Bool? = nil, requireMinimumLiturgiesOn: RequiredMinimumSkillsToBeOnSkillRating? = nil) {
        self.requireKnowledge = requireKnowledge
        self.useMasterOfSuffixAsName = useMasterOfSuffixAsName
        self.requireMinimumLiturgiesOn = requireMinimumLiturgiesOn
    }    
    
    private enum CodingKeys: String, CodingKey {
        case requireKnowledge = "require_knowledge"
        case useMasterOfSuffixAsName = "use_master_of_suffix_as_name"
        case requireMinimumLiturgiesOn = "require_minimum_liturgies_on"
    }
}

/// Require a minimum number of spellworks/liturgies of the respective property/aspect to be on a minimum skill rating.
public struct RequiredMinimumSkillsToBeOnSkillRating: EntitySubtype {
    /// The minimum number of liturgies that need to be on the defined minimum skill rating.
    public let number: Int
    
    /// The minimum skill rating the defined minimum number of liturgies need to be on.
    public let rating: Int

    public init(number: Int, rating: Int) {
        self.number = number
        self.rating = rating
    }
}

public struct DiseasesPoisonsSelectOptionCategory: EntitySubtype {
    /// Only convert half the disease/poison level into the AP value.
    public let useHalfLevelAsApValue: Bool?

    public init(useHalfLevelAsApValue: Bool? = nil) {
        self.useHalfLevelAsApValue = useHalfLevelAsApValue
    }    
    
    private enum CodingKeys: String, CodingKey {
        case useHalfLevelAsApValue = "use_half_level_as_ap_value"
    }
}

public struct LanguagesSelectOptionCategory: EntitySubtype {
    /// Generate prerequisites for each entry of the category.
    public let prerequisites: [LanguagesSelectOptionCategoryPrerequisite]?

    public init(prerequisites: [LanguagesSelectOptionCategoryPrerequisite]? = nil) {
        self.prerequisites = prerequisites
    }
}

@DiscriminatedEnum
public enum LanguagesSelectOptionCategoryPrerequisite: EntitySubtype {
    case selectOption(OptionPrerequisite)
}

public struct SkillsSelectOptionCategory: EntitySubtype {
    /// A list of skill categories.
    public let categories: [SkillsSelectOptionCategoryCategory]
    
    /// Generate AP values for each entry.
    public let apValue: SelectOptionsAdventurePointsValue<SkillishIdentifier>?

    public init(categories: [SkillsSelectOptionCategoryCategory], apValue: SelectOptionsAdventurePointsValue<SkillishIdentifier>? = nil) {
        self.categories = categories
        self.apValue = apValue
    }    
    
    private enum CodingKeys: String, CodingKey {
        case categories = "categories"
        case apValue = "ap_value"
    }
}

@DiscriminatedEnum
public enum SkillsSelectOptionCategoryCategory: EntitySubtype {
    case skills(SkillSelectOptionCategoryCategory)
    case spells(GenericSkillsSelectOptionCategoryCategory<SpellReference>)
    case rituals(GenericSkillsSelectOptionCategoryCategory<RitualReference>)
    case liturgicalChants(GenericSkillsSelectOptionCategoryCategory<LiturgicalChantReference>)
    case ceremonies(GenericSkillsSelectOptionCategoryCategory<CeremonyReference>)
}

public struct SkillSelectOptionCategoryCategory: EntitySubtype {
    /// Only include entries of the specified groups.
    public let groups: [SkillGroupReference]?
    
    /// Only include (`Intersection`) or exclude (`Difference`) specific skills.
    public let specific: SpecificFromSkillSelectOptionCategoryCategory<SkillReference>?
    
    /// Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier, the skill it belongs to is derived from the select option automatically. A translation can be left out if its name equals the name of the origin entry.
    public let skillApplications: [SkillApplicationOrUse]?
    
    /// Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier, the skill it belongs to is derived from the select option automatically. A translation can be left out if its name equals the name of the origin entry.
    public let skillUses: [SkillApplicationOrUse]?
    
    /// Generate prerequisites for each entry of the category.
    public let prerequisites: [SkillSelectOptionCategoryPrerequisite]?
    
    /// Generate AP values for each entry.
    public let apValue: SelectOptionsAdventurePointsValue<SkillIdentifier>?

    public init(groups: [SkillGroupReference]? = nil, specific: SpecificFromSkillSelectOptionCategoryCategory<SkillReference>? = nil, skillApplications: [SkillApplicationOrUse]? = nil, skillUses: [SkillApplicationOrUse]? = nil, prerequisites: [SkillSelectOptionCategoryPrerequisite]? = nil, apValue: SelectOptionsAdventurePointsValue<SkillIdentifier>? = nil) {
        self.groups = groups
        self.specific = specific
        self.skillApplications = skillApplications
        self.skillUses = skillUses
        self.prerequisites = prerequisites
        self.apValue = apValue
    }    
    
    private enum CodingKeys: String, CodingKey {
        case groups = "groups"
        case specific = "specific"
        case skillApplications = "skill_applications"
        case skillUses = "skill_uses"
        case prerequisites = "prerequisites"
        case apValue = "ap_value"
    }
}

public struct CombatTechniquesSelectOptionCategory: EntitySubtype {
    /// A list of combat technique categories.
    public let categories: [CombatTechniquesSelectOptionCategoryCategory]
    
    /// Generate AP values for each entry.
    public let apValue: SelectOptionsAdventurePointsValue<CombatTechniqueIdentifier>?

    public init(categories: [CombatTechniquesSelectOptionCategoryCategory], apValue: SelectOptionsAdventurePointsValue<CombatTechniqueIdentifier>? = nil) {
        self.categories = categories
        self.apValue = apValue
    }    
    
    private enum CodingKeys: String, CodingKey {
        case categories = "categories"
        case apValue = "ap_value"
    }
}

@DiscriminatedEnum
public enum CombatTechniquesSelectOptionCategoryCategory: EntitySubtype {
    case closeCombatTechniques(GenericSkillsSelectOptionCategoryCategory<CloseCombatTechniqueReference>)
    case rangedCombatTechniques(GenericSkillsSelectOptionCategoryCategory<RangedCombatTechniqueReference>)
}

public struct SkillApplicationOrUse: EntitySubtype {
    /// The application's or use's identifier. An entry-unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SkillApplicationOrUseTranslation>?

    public init(id: Int, translations: LocaleMap<SkillApplicationOrUseTranslation>? = nil) {
        self.id = id
        self.translations = translations
    }
}

public struct SkillApplicationOrUseTranslation: EntitySubtype {
    /// The name of the application or use if different from the activatable entry's name.
    public let name: String

    public init(name: String) {
        self.name = name
    }
}

public struct GenericSkillsSelectOptionCategoryCategory<Ref: EntitySubtype>: EntitySubtype {
    /// Only include (`Intersection`) or exclude (`Difference`) specific entries.
    public let specific: SpecificFromSkillSelectOptionCategoryCategory<Ref>?
    
    /// Generate prerequisites for each entry of the category.
    public let prerequisites: [SkillSelectOptionCategoryPrerequisite]?

    public init(specific: SpecificFromSkillSelectOptionCategoryCategory<Ref>? = nil, prerequisites: [SkillSelectOptionCategoryPrerequisite]? = nil) {
        self.specific = specific
        self.prerequisites = prerequisites
    }
}

public struct SpecificFromSkillSelectOptionCategoryCategory<Ref: EntitySubtype>: EntitySubtype {
    public let operation: SpecificFromSkillSelectOptionCategoryCategoryOperation
    
    /// The list of specific entries.
    public let list: [Ref]

    public init(operation: SpecificFromSkillSelectOptionCategoryCategoryOperation, list: [Ref]) {
        self.operation = operation
        self.list = list
    }
}

/// Only include (`Intersection`) or exclude (`Difference`) specific entries.
public enum SpecificFromSkillSelectOptionCategoryCategoryOperation: String, EntitySubtype {
    case intersection = "Intersection"
    case difference = "Difference"
}

@DiscriminatedEnum
public enum SkillSelectOptionCategoryPrerequisite: EntitySubtype {
    case `self`(SelfPrerequisite)
    case selectOption(OptionPrerequisite)
}

public struct SelfPrerequisite: EntitySubtype {
    /// The entry requires itself on a certain Skill Rating.
    public let value: Int

    public init(value: Int) {
        self.value = value
    }
}

/// The entry requires or prohibits itself as a select option of another entry.
public struct OptionPrerequisite: EntitySubtype {
    /// The target entry's identifier.
    public let id: ActivatableIdentifier
    
    /// Is the select option required (`true`) or prohibited (`false`)?
    public let active: Bool
    
    /// The required level, if any.
    public let level: Int?

    public init(id: ActivatableIdentifier, active: Bool, level: Int? = nil) {
        self.id = id
        self.active = active
        self.level = level
    }
}

/// Generate AP values for each entry.
@DiscriminatedEnum
public enum SelectOptionsAdventurePointsValue<Identifier: EntitySubtype>: EntitySubtype {
    case derivedFromImprovementCost(SelectOptionsDeriveAdventurePointsValueFromImprovementCost)
    case fixed(SelectOptionsFixedAdventurePointsValue<Identifier>)
}

/// Derive the cost from the improvement cost of each entry.
/// 
/// **Calculation:** AP Value = Improvement Cost × `multiplier` + `offset`
public struct SelectOptionsDeriveAdventurePointsValueFromImprovementCost: EntitySubtype {
    /// This number is multiplied with the improvement cost of the entry
    /// (A = 1 to D = 4).
    public let multiplier: Int?
    
    /// This number is added to the multiplied improvement cost of the entry.
    public let offset: Int?

    public init(multiplier: Int? = nil, offset: Int? = nil) {
        self.multiplier = multiplier
        self.offset = offset
    }
}

public struct SelectOptionsFixedAdventurePointsValue<Identifier: EntitySubtype>: EntitySubtype {
    /// A mapping of skill identifiers to their specific AP values.
    public let map: [SelectOptionsFixedAdventurePointsValueMapping<Identifier>]
    
    /// The default value of an entry. Used as a fallback if no value is found in `list`.
    public let `default`: Int

    public init(map: [SelectOptionsFixedAdventurePointsValueMapping<Identifier>], `default`: Int) {
        self.map = map
        self.`default` = `default`
    }
}

public struct SelectOptionsFixedAdventurePointsValueMapping<Identifier: EntitySubtype>: EntitySubtype {
    /// The entry's identifier.
    public let id: Identifier
    
    /// The AP value for the specified entry.
    public let apValue: Int

    public init(id: Identifier, apValue: Int) {
        self.id = id
        self.apValue = apValue
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case apValue = "ap_value"
    }
}

public struct TargetCategoriesSelectOptionCategory: EntitySubtype {
    /// A list of combat technique categories.
    public let list: [SpecificTargetCategory]

    public init(list: [SpecificTargetCategory]) {
        self.list = list
    }
}

public struct SpecificTargetCategory: EntitySubtype {
    /// The target category’s identifier.
    public let id: TargetCategoryIdentifier
    
    /// The volume for this specific selection.
    public let volume: Int?

    public init(id: TargetCategoryIdentifier, volume: Int? = nil) {
        self.id = id
        self.volume = volume
    }
}
