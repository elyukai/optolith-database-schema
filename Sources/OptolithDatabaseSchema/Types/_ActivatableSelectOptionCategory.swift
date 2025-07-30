import FileDB

@ModelEnum
public enum SelectOptionCategory {
    case Blessings
    case Cantrips
    case TradeSecrets
    case Scripts
    case AnimalShapes
    case ArcaneBardTraditions
    case ArcaneDancerTraditions
    case SexPractices
    case Races
    case Cultures
    case RacesAndCultures
    case BlessedTraditions(BlessedTraditionsSelectOptionCategory)
    case Elements(ElementsSelectOptionCategory)
    case Properties(PropertiesSelectOptionCategory)
    case Aspects(AspectSelectOptionCategory)
    case Diseases(DiseasesPoisonsSelectOptionCategory)
    case Poisons(DiseasesPoisonsSelectOptionCategory)
    case Languages(LanguagesSelectOptionCategory)
    case Skills(SkillsSelectOptionCategory)
    case CombatTechniques(CombatTechniquesSelectOptionCategory)
    case TargetCategories(TargetCategoriesSelectOptionCategory)
}

@Embedded
public struct BlessedTraditionsSelectOptionCategory {
    /// Should the principles (code) of the tradition be required to select the respective tradition?
    let require_principles: Bool?
}

@Embedded
public struct ElementsSelectOptionCategory {
    /// Only include entries with the listed identifiers.
    @MinItems(1)
    @UniqueItems
    @Relationship(Element.self)
    let specific: [Element.ID]?
}

@Embedded
public struct PropertiesSelectOptionCategory {
    /// Does each property require it's corresponding property knowledge?
    let require_principles: Bool?

    /// Require a minimum number of spellworks of the respective property to be on a minimum skill rating.
    let require_minimum_spellworks_on: RequiredMinimumSkillsToBeOnSkillRating?
}

@Embedded
public struct AspectSelectOptionCategory {
    /// Does each aspect require it's corresponding aspect knowledge?
    let require_knowledge: Bool?

    /// The generated name should be the *Master of (Aspect)* suffix for this aspect instead of the aspect's name. If an aspect does not provide a suffix (such as the General aspect), it is automatically excluded from the list.
    let use_master_of_suffix_as_name: Bool?

    /// Require a minimum number of liturgies of the respective aspect to be on a minimum skill rating.
    let require_minimum_liturgies_on: RequiredMinimumSkillsToBeOnSkillRating?
}

/// Require a minimum number of spellworks/liturgies of the respective property/aspect to be on a minimum skill rating.
@Embedded
public struct RequiredMinimumSkillsToBeOnSkillRating {
    /// The minimum number of liturgies that need to be on the defined minimum skill rating.
    @Minimum(1)
    let number: Int

    /// The minimum skill rating the defined minimum number of liturgies need to be on.
    @Minimum(1)
    let rating: Int
}

@Embedded
public struct DiseasesPoisonsSelectOptionCategory {
    /// Only convert half the disease/poison level into the AP value.
    let use_half_level_as_ap_value: Bool?
}

@Embedded
public struct LanguagesSelectOptionCategory {
    /// Generate prerequisites for each entry of the category.
    @MinItems(1)
    let prerequisites: [LanguagesSelectOptionCategoryPrerequisite]?
}

@ModelEnum
public enum LanguagesSelectOptionCategoryPrerequisite {
    case SelectOption(OptionPrerequisite)
}

@Embedded
public struct SkillsSelectOptionCategory {
    /// A list of skill categories.
    @MinItems(1)
    let categories: [SkillsSelectOptionCategoryCategory]
    /// Generate AP values for each entry.
    let ap_value: SelectOptionsAdventurePointsValue<SkillishIdentifier>?
}

@ModelEnum
public enum SkillsSelectOptionCategoryCategory {
    case Skills(SkillSelectOptionCategoryCategory)
    case Spells(SpellsSelectOptionCategoryCategory)
    case Rituals(RitualsSelectOptionCategoryCategory)
    case LiturgicalChants(LiturgicalChantsSelectOptionCategoryCategory)
    case Ceremonies(CeremoniesSelectOptionCategoryCategory)
}

@Embedded
public struct SkillSelectOptionCategoryCategory {
    /// Only include entries of the specified groups.
    @MinItems(1)
    @Relationship(SkillGroup.self)
    let groups: [SkillGroup.ID]?

    /// The list of skills to include or exclude.
    @MinItems(1)
    @UniqueItems
    @Relationship(Skill.self)
    let list: [Skill.ID]

    /// Whether to include or exclude the list of skills.
    let operation: SkillsSelectOptionCategoryCategoryOperation

    /// Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier, the skill it belongs to is derived from the select option automatically. A translation can be left out if its name equals the name of the origin entry.
    @MinItems(1)
    let skill_applications: [SkillApplicationOrUse]?

    /// Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier, the skill it belongs to is derived from the select option automatically. A translation can be left out if its name equals the name of the origin entry.
    @MinItems(1)
    let skill_uses: [SkillApplicationOrUse]?

    /// Generate prerequisites for each entry of the category.
    @MinItems(1)
    let prerequisites: [SkillSelectOptionCategoryPrerequisite]?

    /// Generate AP values for each entry.
    @Relationship(Skill.self)
    let ap_value: SelectOptionsAdventurePointsValue<Skill.ID>?
}

@Embedded
public struct CombatTechniquesSelectOptionCategory {
    /// A list of combat technique categories.
    @MinItems(1)
    let categories: [CombatTechniquesSelectOptionCategoryCategory]

    /// Generate AP values for each entry.
    let ap_value: SelectOptionsAdventurePointsValue<CombatTechniqueIdentifier>?
}

@ModelEnum
public enum CombatTechniquesSelectOptionCategoryCategory {
    case CloseCombatTechniques(CloseCombatTechniquesSelectOptionCategoryCategory)
    case RangedCombatTechniques(RangedCombatTechniquesSelectOptionCategoryCategory)
}

@Embedded
public struct SkillApplicationOrUse {
    /// The application’s or use’s identifier. An entry-unique, increasing integer.
    @Minimum(1)
    let id: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // SkillApplicationOrUseTranslation
        /// The name of the application or use if different from the activatable entry’s name.
        @MinLength(1)
        let name: String
    }
}

@Embedded
public struct SpellsSelectOptionCategoryCategory {
    /// The list of skills to include or exclude.
    @MinItems(1)
    @UniqueItems
    @Relationship(Spell.self)
    let list: [Spell.ID]

    /// Whether to include or exclude the list of skills.
    let operation: SkillsSelectOptionCategoryCategoryOperation

    /// Generate prerequisites for each entry of the category.
    @MinItems(1)
    let prerequisites: [SkillSelectOptionCategoryPrerequisite]?
}

@Embedded
public struct RitualsSelectOptionCategoryCategory {
    /// The list of skills to include or exclude.
    @MinItems(1)
    @UniqueItems
    @Relationship(Ritual.self)
    let list: [Ritual.ID]

    /// Whether to include or exclude the list of skills.
    let operation: SkillsSelectOptionCategoryCategoryOperation

    /// Generate prerequisites for each entry of the category.
    @MinItems(1)
    let prerequisites: [SkillSelectOptionCategoryPrerequisite]?
}

@Embedded
public struct LiturgicalChantsSelectOptionCategoryCategory {
    /// The list of skills to include or exclude.
    @MinItems(1)
    @UniqueItems
    @Relationship(LiturgicalChant.self)
    let list: [LiturgicalChant.ID]

    /// Whether to include or exclude the list of skills.
    let operation: SkillsSelectOptionCategoryCategoryOperation

    /// Generate prerequisites for each entry of the category.
    @MinItems(1)
    let prerequisites: [SkillSelectOptionCategoryPrerequisite]?
}

@Embedded
public struct CeremoniesSelectOptionCategoryCategory {
    /// The list of skills to include or exclude.
    @MinItems(1)
    @UniqueItems
    @Relationship(Ceremony.self)
    let list: [Ceremony.ID]

    /// Whether to include or exclude the list of skills.
    let operation: SkillsSelectOptionCategoryCategoryOperation

    /// Generate prerequisites for each entry of the category.
    @MinItems(1)
    let prerequisites: [SkillSelectOptionCategoryPrerequisite]?
}

@Embedded
public struct CloseCombatTechniquesSelectOptionCategoryCategory {
    /// The list of skills to include or exclude.
    @MinItems(1)
    @UniqueItems
    @Relationship(CloseCombatTechnique.self)
    let list: [CloseCombatTechnique.ID]

    /// Whether to include or exclude the list of skills.
    let operation: SkillsSelectOptionCategoryCategoryOperation

    /// Generate prerequisites for each entry of the category.
    @MinItems(1)
    let prerequisites: [SkillSelectOptionCategoryPrerequisite]?
}

@Embedded
public struct RangedCombatTechniquesSelectOptionCategoryCategory {
    /// The list of skills to include or exclude.
    @MinItems(1)
    @UniqueItems
    @Relationship(RangedCombatTechnique.self)
    let list: [RangedCombatTechnique.ID]

    /// Whether to include or exclude the list of skills.
    let operation: SkillsSelectOptionCategoryCategoryOperation

    /// Generate prerequisites for each entry of the category.
    @MinItems(1)
    let prerequisites: [SkillSelectOptionCategoryPrerequisite]?
}

/// Only include (`Intersection`) or exclude (`Difference`) specific entries.
@ModelEnum
public enum SkillsSelectOptionCategoryCategoryOperation {
    case Intersection
    case Difference
}

@ModelEnum
public enum SkillSelectOptionCategoryPrerequisite {
    case `Self`(SelfPrerequisite)
    case SelectOption(OptionPrerequisite)
}

@Embedded
public struct SelfPrerequisite {
    /// The entry requires itself on a certain Skill Rating.
    @Minimum(1)
    let value: Int
}

/// The entry requires or prohibits itself as a select option of another entry.
@Embedded
public struct OptionPrerequisite {
    /// The target entry's identifier.
    let id: ActivatableIdentifier

    /// Is the select option required (`true`) or prohibited (`false`)?
    let active: Bool

    /// The required level, if any.
    @Minimum(2)
    let level: Int?
}

@ModelEnum
public enum SelectOptionsAdventurePointsValue<Identifier> {
    case DerivedFromImprovementCost(SelectOptionsDeriveAdventurePointsValueFromImprovementCost)
    case Fixed(SelectOptionsFixedAdventurePointsValue<Identifier>)
}

/// Derive the cost from the improvement cost of each entry. The AP value is calculated by multiplying the improvement cost with `multiplier` and then adding `offset`.
@Embedded
public struct SelectOptionsDeriveAdventurePointsValueFromImprovementCost {
    /// This number is multiplied with the improvement cost of the entry (A = 1 to D = 4).
    @Minimum(2)
    let multiplier: Int?

    /// This number is added to the multiplied improvement cost of the entry.
    let offset: Int?
}

@Embedded
public struct SelectOptionsFixedAdventurePointsValue<Identifier> {
    /// A mapping of skill identifiers to their specific AP values.
    let map: [SelectOptionsFixedAdventurePointsValueMapping<Identifier>]

    /// The default value of an entry. Used as a fallback if no value is found in `list`.
    @Minimum(1)
    let `default`: Int
}

@Embedded
public struct SelectOptionsFixedAdventurePointsValueMapping<Identifier> {
    /// The entry’s identifier.
    let id: Identifier

    /// The AP value for the specified entry.
    @Minimum(1)
    let ap_value: Int
}

@Embedded
public struct TargetCategoriesSelectOptionCategory {
    /// A list of target categories.
    @MinItems(1)
    let list: [SpecificTargetCategory]
}

@Embedded
public struct SpecificTargetCategory {
    /// The target category’s identifier.
    @Relationship(TargetCategory.self)
    let id: TargetCategory.ID

    /// The volume for this specific selection.
    @Minimum(0)
    let volume: Int?
}
