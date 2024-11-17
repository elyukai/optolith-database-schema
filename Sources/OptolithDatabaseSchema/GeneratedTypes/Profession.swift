//
//  Profession.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Profession: Entity {
    /// The profession's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The profession group.
    public let group: ProfessionGroup
    
    /// A list of professions representing the same profession but with (slightly) different stats. For example, there may be a profession in a regional sourcebook or in the core rules and a profession in an extension rulebook like Magic of Aventuria, where the profession is basically called the same and almost has the same values, but the version from Magic of Aventuria features a spell style special ability that does not exist in the core rules or regional sourcebook.
    /// 
    /// The profession representation may feature different values for different explicitly mentioned experience levels. In most cases, there is only one stats package, which targets the experience level *Experienced*.
    public let versions: [ProfessionVersion]

    public init(id: Int, group: ProfessionGroup, versions: [ProfessionVersion]) {
        self.id = id
        self.group = group
        self.versions = versions
    }
}

@DiscriminatedEnum
public enum ProfessionGroup: EntitySubtype {
    case mundane(MundaneProfessionGroup)
    case magical(MagicalProfessionGroup)
    case blessed
}

public enum MundaneProfessionGroup: String, EntitySubtype {
    case profane = "Profane"
    case fighter = "Fighter"
    case religious = "Religious"
}

public struct MagicalProfessionGroup: EntitySubtype {
    /// The curriculum/academy associated with this magical profession, if any.
    public let curriculum: CurriculumReference?

    public init(curriculum: CurriculumReference? = nil) {
        self.curriculum = curriculum
    }
}

@DiscriminatedEnum
public enum ProfessionVersion: EntitySubtype {
    case experienced(ExperiencedProfessionPackage)
    case byExperienceLevel(ProfessionPackagesForDifferentExperienceLevels)
}

public struct ExperiencedProfessionPackage: EntitySubtype {
    /// The profession representation variant's identifier. An unique, increasing integer.
    public let id: Int
    
    public let package: ProfessionPackage
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ProfessionTranslation>

    public init(id: Int, package: ProfessionPackage, src: PublicationRefs, translations: LocaleMap<ProfessionTranslation>) {
        self.id = id
        self.package = package
        self.src = src
        self.translations = translations
    }
}

public struct ProfessionPackagesForDifferentExperienceLevels: EntitySubtype {
    /// The profession representation variant's identifier. An unique, increasing integer.
    public let id: Int
    
    public let packagesMap: [ExperienceLevelDynamicProfessionPackage]
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ProfessionTranslation>

    public init(id: Int, packagesMap: [ExperienceLevelDynamicProfessionPackage], src: PublicationRefs, translations: LocaleMap<ProfessionTranslation>) {
        self.id = id
        self.packagesMap = packagesMap
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case packagesMap = "packages_map"
        case src = "src"
        case translations = "translations"
    }
}

public struct ExperienceLevelDynamicProfessionPackage: EntitySubtype {
    /// The experience level this profession targets. The experience level must be unique for this representation.
    public let experienceLevelId: Int
    
    public let package: ProfessionPackage

    public init(experienceLevelId: Int, package: ProfessionPackage) {
        self.experienceLevelId = experienceLevelId
        self.package = package
    }    
    
    private enum CodingKeys: String, CodingKey {
        case experienceLevelId = "experience_level_id"
        case package = "package"
    }
}

public struct ProfessionPackage: EntitySubtype {
    /// What does the professional package cost in adventure points?
    public let apValue: Int
    
    /// Which prerequisites must be met to buy the stat block? For example, a character might need the advantage Spellcaster or Blessed. Note: the AP cost for a profession package does not include these prerequisites.
    public let prerequisites: ProfessionPrerequisites?
    
    /// In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package.
    public let options: ProfessionPackageOptions?
    
    /// Any special abilities the profession receives from the package.
    public let specialAbilities: [ProfessionSpecialAbility]?
    
    /// Provides ratings for the combat techniques that the hero receives from the package.
    public let combatTechniques: [CombatTechniqueRating]?
    
    /// The skill ratings the package grants to the hero.
    public let skills: [SkillRating]?
    
    /// The skill ratings a magical profession receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such.
    public let spells: [SpellRating]?
    
    /// Clerical professions receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated.
    public let liturgicalChants: [LiturgicalChantRating]?
    
    /// Typical advantages for the profession.
    public let suggestedAdvantages: [CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>]?
    
    /// Typical disadvantages for the profession.
    public let suggestedDisadvantages: [CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>]?
    
    /// These advantages do not fit well with this profession; to be checked with the GM before taking any of them.
    public let unsuitableAdvantages: [CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>]?
    
    /// These disadvantages do not fit well with this profession; to be checked with the GM before taking any of them.
    public let unsuitableDisadvantages: [CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>]?
    
    /// Provides examples of variants for the profession, which may include changes to AP values and additional or modified skill ratings, special abilities, or combat techniques, as compared to the basic profession. Usually picking a variant is optional, but there are some rare exceptions where picking a variant is required.
    public let variants: ProfessionVariants?

    public init(apValue: Int, prerequisites: ProfessionPrerequisites? = nil, options: ProfessionPackageOptions? = nil, specialAbilities: [ProfessionSpecialAbility]? = nil, combatTechniques: [CombatTechniqueRating]? = nil, skills: [SkillRating]? = nil, spells: [SpellRating]? = nil, liturgicalChants: [LiturgicalChantRating]? = nil, suggestedAdvantages: [CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>]? = nil, suggestedDisadvantages: [CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>]? = nil, unsuitableAdvantages: [CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>]? = nil, unsuitableDisadvantages: [CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>]? = nil, variants: ProfessionVariants? = nil) {
        self.apValue = apValue
        self.prerequisites = prerequisites
        self.options = options
        self.specialAbilities = specialAbilities
        self.combatTechniques = combatTechniques
        self.skills = skills
        self.spells = spells
        self.liturgicalChants = liturgicalChants
        self.suggestedAdvantages = suggestedAdvantages
        self.suggestedDisadvantages = suggestedDisadvantages
        self.unsuitableAdvantages = unsuitableAdvantages
        self.unsuitableDisadvantages = unsuitableDisadvantages
        self.variants = variants
    }    
    
    private enum CodingKeys: String, CodingKey {
        case apValue = "ap_value"
        case prerequisites = "prerequisites"
        case options = "options"
        case specialAbilities = "special_abilities"
        case combatTechniques = "combat_techniques"
        case skills = "skills"
        case spells = "spells"
        case liturgicalChants = "liturgical_chants"
        case suggestedAdvantages = "suggested_advantages"
        case suggestedDisadvantages = "suggested_disadvantages"
        case unsuitableAdvantages = "unsuitable_advantages"
        case unsuitableDisadvantages = "unsuitable_disadvantages"
        case variants = "variants"
    }
}

public struct ProfessionTranslation: EntitySubtype {
    /// Name of the basic profession.
    public let name: ProfessionName
    
    /// A name addition of the profession. This will contain texts like name of the academy or the witch circle. It is enclosed in parenthesis, but the database entry must not contain parenthesis.
    public let specification: ProfessionName?
    
    /// Typical advantages for the profession.
    public let suggestedAdvantages: NonEmptyString?
    
    /// Typical disadvantages for the profession.
    public let suggestedDisadvantages: NonEmptyString?
    
    /// These advantages do not fit well with this profession; to be checked with the GM before taking any of them.
    public let unsuitableAdvantages: NonEmptyString?
    
    /// These disadvantages do not fit well with this profession; to be checked with the GM before taking any of them.
    public let unsuitableDisadvantages: NonEmptyString?
    
    public let errata: Errata?

    public init(name: ProfessionName, specification: ProfessionName? = nil, suggestedAdvantages: NonEmptyString? = nil, suggestedDisadvantages: NonEmptyString? = nil, unsuitableAdvantages: NonEmptyString? = nil, unsuitableDisadvantages: NonEmptyString? = nil, errata: Errata? = nil) {
        self.name = name
        self.specification = specification
        self.suggestedAdvantages = suggestedAdvantages
        self.suggestedDisadvantages = suggestedDisadvantages
        self.unsuitableAdvantages = unsuitableAdvantages
        self.unsuitableDisadvantages = unsuitableDisadvantages
        self.errata = errata
    }    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case specification = "specification"
        case suggestedAdvantages = "suggested_advantages"
        case suggestedDisadvantages = "suggested_disadvantages"
        case unsuitableAdvantages = "unsuitable_advantages"
        case unsuitableDisadvantages = "unsuitable_disadvantages"
        case errata = "errata"
    }
}

/// Provides examples of variants for the profession, which may include changes to AP values and additional or modified skill ratings, special abilities, or combat techniques, as compared to the basic profession. Usually picking a variant is optional, but there are some rare exceptions where picking a variant is required.
public struct ProfessionVariants: EntitySubtype {
    /// If the selection of a profession variant is required.
    public let isSelectionRequired: Bool
    
    /// The list of profession variants.
    public let list: [ProfessionVariant]

    public init(isSelectionRequired: Bool, list: [ProfessionVariant]) {
        self.isSelectionRequired = isSelectionRequired
        self.list = list
    }    
    
    private enum CodingKeys: String, CodingKey {
        case isSelectionRequired = "is_selection_required"
        case list = "list"
    }
}

public struct ProfessionVariant: EntitySubtype {
    /// The profession variant's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The AP value you have to pay for the package variant.
    public let apValue: Int
    
    /// Which prerequisites must be met to buy the stat block? For example, a character might need the advantage Spellcaster or Blessed. Note: the AP cost for a profession package does not include these prerequisites.
    public let prerequisites: ProfessionPrerequisites?
    
    public let options: ProfessionVariantPackageOptions?
    
    /// Any special abilities the profession receives from the package variant.
    public let specialAbilities: [VariantSpecialAbility]?
    
    /// Provides ratings for the combat techniques that the hero receives from the package variant.
    public let combatTechniques: [CombatTechniqueRating]?
    
    /// The skill ratings the package variant grants to the hero.
    public let skills: [SkillRating]?
    
    /// The skill ratings a magical profession variant receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such.
    public let spells: [SpellRating]?
    
    /// Clerical professions receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated.
    public let liturgicalChants: [LiturgicalChantRating]?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ProfessionVariantTranslation>

    public init(id: Int, apValue: Int, prerequisites: ProfessionPrerequisites? = nil, options: ProfessionVariantPackageOptions? = nil, specialAbilities: [VariantSpecialAbility]? = nil, combatTechniques: [CombatTechniqueRating]? = nil, skills: [SkillRating]? = nil, spells: [SpellRating]? = nil, liturgicalChants: [LiturgicalChantRating]? = nil, translations: LocaleMap<ProfessionVariantTranslation>) {
        self.id = id
        self.apValue = apValue
        self.prerequisites = prerequisites
        self.options = options
        self.specialAbilities = specialAbilities
        self.combatTechniques = combatTechniques
        self.skills = skills
        self.spells = spells
        self.liturgicalChants = liturgicalChants
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case apValue = "ap_value"
        case prerequisites = "prerequisites"
        case options = "options"
        case specialAbilities = "special_abilities"
        case combatTechniques = "combat_techniques"
        case skills = "skills"
        case spells = "spells"
        case liturgicalChants = "liturgical_chants"
        case translations = "translations"
    }
}

public struct ProfessionVariantTranslation: EntitySubtype {
    /// Name of the profession variant.
    public let name: ProfessionName
    
    /// A text that replaces the generated text for the profession variant.
    public let fullText: NonEmptyString?
    
    /// A text that is appended to the generated text for the profession variant.
    /// 
    /// Has no effect when `full_text` is set.
    public let concludingText: NonEmptyString?

    public init(name: ProfessionName, fullText: NonEmptyString? = nil, concludingText: NonEmptyString? = nil) {
        self.name = name
        self.fullText = fullText
        self.concludingText = concludingText
    }    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case fullText = "full_text"
        case concludingText = "concluding_text"
    }
}

@DiscriminatedEnum
public enum ProfessionSpecialAbility: EntitySubtype {
    case fixed(FixedSpecialAbility)
    case selection(SpecialAbilitySelection)
}

public typealias FixedSpecialAbility = SpecialAbilityDefinition

public struct SpecialAbilitySelection: EntitySubtype {
    public let options: [SpecialAbilityDefinition]

    public init(options: [SpecialAbilityDefinition]) {
        self.options = options
    }
}

public struct SpecialAbilityDefinition: EntitySubtype {
    /// The identifier of the combat technique to provide the rating for.
    public let id: SpecialAbilityIdentifier
    
    /// The level of the received special ability.
    public let level: Int?
    
    /// Received select options. Order is important. Typically, you only need the first array index, though.
    public let options: [RequirableSelectOptionIdentifier]?

    public init(id: SpecialAbilityIdentifier, level: Int? = nil, options: [RequirableSelectOptionIdentifier]? = nil) {
        self.id = id
        self.level = level
        self.options = options
    }
}

@DiscriminatedEnum
public enum VariantSpecialAbility: EntitySubtype {
    case fixed(FixedVariantSpecialAbility)
    case selection(VariantSpecialAbilitySelection)
}

public struct FixedVariantSpecialAbility: EntitySubtype {
    /// The identifier of the combat technique to provide the rating for.
    public let id: SpecialAbilityIdentifier
    
    /// if set to `false`, if the selection is granted by the basic package, it is removed.
    public let active: Bool?
    
    /// The level of the received special ability.
    public let level: Int?
    
    /// Received select options. Order is important. Typically, you only need the first array index, though.
    public let options: [RequirableSelectOptionIdentifier]?

    public init(id: SpecialAbilityIdentifier, active: Bool? = nil, level: Int? = nil, options: [RequirableSelectOptionIdentifier]? = nil) {
        self.id = id
        self.active = active
        self.level = level
        self.options = options
    }
}

public struct VariantSpecialAbilitySelection: EntitySubtype {
    /// if set to `false`, if the selection is granted by the basic package, it is removed.
    public let active: Bool?
    
    public let options: [SpecialAbilityDefinition]

    public init(active: Bool? = nil, options: [SpecialAbilityDefinition]) {
        self.active = active
        self.options = options
    }
}

public struct CombatTechniqueRating: EntitySubtype {
    /// The identifier of the combat technique to provide the rating for.
    public let id: CombatTechniqueIdentifier
    
    /// The rating bonus provided for the combat technique. If used in a profession variant, it can also be used to lower the bonus of the base profession.
    /// 
    /// **Note:** This is a rating *bonus*, so it will be *added* to the default
    /// value of 6.
    public let rating: Int

    public init(id: CombatTechniqueIdentifier, rating: Int) {
        self.id = id
        self.rating = rating
    }
}

public struct SkillRating: EntitySubtype {
    /// The identifier of the skill to provide the rating for.
    public let id: SkillIdentifier
    
    /// The rating bonus provided for the skill. If used in a profession variant, it can also be used to lower the bonus of the base profession
    public let rating: Int

    public init(id: SkillIdentifier, rating: Int) {
        self.id = id
        self.rating = rating
    }
}

public struct SpellRating: EntitySubtype {
    /// The identifier(s) of the spell(s) to choose from to provide the rating for. If multiple spells are provided, they must all have the same improvement cost.
    public let id: [ProfessionSpellIdentifier]
    
    /// The rating bonus provided for the (selected) spell. If used in a profession variant, it can also be used to lower the bonus of the base profession.
    public let rating: Int

    public init(id: [ProfessionSpellIdentifier], rating: Int) {
        self.id = id
        self.rating = rating
    }
}

@DiscriminatedEnum
public enum ProfessionSpellIdentifier: EntitySubtype {
    case spellwork(ProfessionSpellworkIdentifier)
    case magicalAction(ProfessionMagicalActionIdentifier)
}

public struct ProfessionSpellworkIdentifier: EntitySubtype {
    /// The identifier of the spell to provide the rating for.
    public let id: SpellworkIdentifier
    
    /// If the spell is not part of the magical tradition required by the package, this references the magical tradition it is part of. It can also be used to define the target magical tradition of a spell if multiple magical traditions are required and the spell is available to multiple of them.
    public let tradition: MagicalTraditionReference?

    public init(id: SpellworkIdentifier, tradition: MagicalTraditionReference? = nil) {
        self.id = id
        self.tradition = tradition
    }
}

public struct ProfessionMagicalActionIdentifier: EntitySubtype {
    /// The identifier of the magical action to provide the rating for.
    public let id: MagicalActionIdentifier

    public init(id: MagicalActionIdentifier) {
        self.id = id
    }
}

public struct LiturgicalChantRating: EntitySubtype {
    /// The identifier(s) of the liturgical chant(s) to choose from to provide the rating for. If multiple liturgical chants are provided, they must all have the same improvement cost.
    public let id: [LiturgyIdentifier]
    
    /// The rating bonus provided for the selected liturgical chant. If used in a profession variant, it can also be used to lower the bonus of the base profession.
    public let rating: Int

    public init(id: [LiturgyIdentifier], rating: Int) {
        self.id = id
        self.rating = rating
    }
}

/// In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package.
public struct ProfessionPackageOptions: EntitySubtype {
    public let skillSpecialization: SkillSpecializationOptions?
    
    public let languagesScripts: LanguagesScriptsOptions?
    
    public let combatTechniques: CombatTechniquesOptions?
    
    public let cantrips: CantripsOptions?
    
    public let curses: CursesOptions?
    
    public let terrainKnowledge: TerrainKnowledgeOptions?
    
    public let skills: SkillsOptions?

    public init(skillSpecialization: SkillSpecializationOptions? = nil, languagesScripts: LanguagesScriptsOptions? = nil, combatTechniques: CombatTechniquesOptions? = nil, cantrips: CantripsOptions? = nil, curses: CursesOptions? = nil, terrainKnowledge: TerrainKnowledgeOptions? = nil, skills: SkillsOptions? = nil) {
        self.skillSpecialization = skillSpecialization
        self.languagesScripts = languagesScripts
        self.combatTechniques = combatTechniques
        self.cantrips = cantrips
        self.curses = curses
        self.terrainKnowledge = terrainKnowledge
        self.skills = skills
    }    
    
    private enum CodingKeys: String, CodingKey {
        case skillSpecialization = "skill_specialization"
        case languagesScripts = "languages_scripts"
        case combatTechniques = "combat_techniques"
        case cantrips = "cantrips"
        case curses = "curses"
        case terrainKnowledge = "terrain_knowledge"
        case skills = "skills"
    }
}

/// In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package. The variant may override or remove those options.
public struct ProfessionVariantPackageOptions: EntitySubtype {
    public let skillSpecialization: VariantOptionAction<SkillSpecializationOptions>?
    
    public let languagesScripts: VariantOptionAction<LanguagesScriptsOptions>?
    
    public let combatTechniques: VariantOptionAction<CombatTechniquesOptions>?
    
    public let cantrips: VariantOptionAction<CantripsOptions>?
    
    public let curses: VariantOptionAction<CursesOptions>?
    
    public let terrainKnowledge: VariantOptionAction<TerrainKnowledgeOptions>?
    
    public let skills: VariantOptionAction<SkillsOptions>?

    public init(skillSpecialization: VariantOptionAction<SkillSpecializationOptions>? = nil, languagesScripts: VariantOptionAction<LanguagesScriptsOptions>? = nil, combatTechniques: VariantOptionAction<CombatTechniquesOptions>? = nil, cantrips: VariantOptionAction<CantripsOptions>? = nil, curses: VariantOptionAction<CursesOptions>? = nil, terrainKnowledge: VariantOptionAction<TerrainKnowledgeOptions>? = nil, skills: VariantOptionAction<SkillsOptions>? = nil) {
        self.skillSpecialization = skillSpecialization
        self.languagesScripts = languagesScripts
        self.combatTechniques = combatTechniques
        self.cantrips = cantrips
        self.curses = curses
        self.terrainKnowledge = terrainKnowledge
        self.skills = skills
    }    
    
    private enum CodingKeys: String, CodingKey {
        case skillSpecialization = "skill_specialization"
        case languagesScripts = "languages_scripts"
        case combatTechniques = "combat_techniques"
        case cantrips = "cantrips"
        case curses = "curses"
        case terrainKnowledge = "terrain_knowledge"
        case skills = "skills"
    }
}

@DiscriminatedEnum
public enum VariantOptionAction<T: EntitySubtype>: EntitySubtype {
    case remove
    case override(T)
}

/// Select an application from a skill or from one of a list of skills where you get a skill specialization for. You can also specify a skill groups from which you can choose a skill.
@DiscriminatedEnum
public enum SkillSpecializationOptions: EntitySubtype {
    case single(SingleSkillSpecializationOption)
    case group(SkillGroupSkillSpecializationOption)
}

public struct SingleSkillSpecializationOption: EntitySubtype {
    /// Possible skills to get a skill specialization for.
    public let options: [SkillReference]

    public init(options: [SkillReference]) {
        self.options = options
    }
}

public typealias SkillGroupSkillSpecializationOption = SkillGroupReference

/// Buy languages and scripts for a specific amount of AP.
public struct LanguagesScriptsOptions: EntitySubtype {
    /// The AP value you can buy languages and scripts for.
    public let apValue: Int

    public init(apValue: Int) {
        self.apValue = apValue
    }    
    
    private enum CodingKeys: String, CodingKey {
        case apValue = "ap_value"
    }
}

/// Select one or more combat techniques you get a CtR bonus for.
public struct CombatTechniquesOptions: EntitySubtype {
    /// Specify the number of combat techniques that can be selected so that they get increased to a specific CtR. There can be multiple selections with different CtRs.
    public let fixed: [RatingForCombatTechniquesNumber]
    
    /// Define if after the fixed selections the remaining unselected combat techniques will receive a certain rating bonus as well.
    public let restRating: Int?
    
    /// The list of combat techniques to choose from.
    public let options: [CombatTechniqueReference]

    public init(fixed: [RatingForCombatTechniquesNumber], restRating: Int? = nil, options: [CombatTechniqueReference]) {
        self.fixed = fixed
        self.restRating = restRating
        self.options = options
    }    
    
    private enum CodingKeys: String, CodingKey {
        case fixed = "fixed"
        case restRating = "rest_rating"
        case options = "options"
    }
}

public struct RatingForCombatTechniquesNumber: EntitySubtype {
    /// The number of selectable combat techniques.
    public let number: Int
    
    /// The rating bonus provided for the selected combat technique(s).
    /// 
    /// **Note:** This is a rating *bonus*, so it will be *added* to the default
    /// value of 6.
    public let rating: Int

    public init(number: Int, rating: Int) {
        self.number = number
        self.rating = rating
    }
}

/// Select one or more cantrips you receive.
public struct CantripsOptions: EntitySubtype {
    /// The number of selectable cantrips.
    public let number: Int
    
    /// The list of cantrips to choose from.
    public let options: [CantripReference]

    public init(number: Int, options: [CantripReference]) {
        self.number = number
        self.options = options
    }
}

/// Buy curses for a specific amount of AP.
public struct CursesOptions: EntitySubtype {
    /// The AP value you can buy curses for.
    public let apValue: Int

    public init(apValue: Int) {
        self.apValue = apValue
    }    
    
    private enum CodingKeys: String, CodingKey {
        case apValue = "ap_value"
    }
}

/// Select one of a list of possible terrain knowledges
public struct TerrainKnowledgeOptions: EntitySubtype {
    /// The list of possible terrain knowledges.
    public let options: [TerrainKnowledgeOptionReference]

    public init(options: [TerrainKnowledgeOptionReference]) {
        self.options = options
    }
}

public struct TerrainKnowledgeOptionReference: EntitySubtype {
    /// The terrain knowledge option's identifier.
    public let id: Int

    public init(id: Int) {
        self.id = id
    }
}

/// Buy skills for a specific amount of AP.
public struct SkillsOptions: EntitySubtype {
    /// If specified, you may only choose from skills of the specified group.
    public let group: SkillGroupReference?
    
    /// The AP value you can buy skills for.
    public let apValue: Int

    public init(group: SkillGroupReference? = nil, apValue: Int) {
        self.group = group
        self.apValue = apValue
    }    
    
    private enum CodingKeys: String, CodingKey {
        case group = "group"
        case apValue = "ap_value"
    }
}

/// The name of the profession that may have sex-specific names.
public enum ProfessionName: EntitySubtype {
    case simpleProfessionName(SimpleProfessionName)
    case professionNameBySex(ProfessionNameBySex)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let simpleProfessionName = try? container.decode(SimpleProfessionName.self) {
            self = .simpleProfessionName(simpleProfessionName)
        } else if let professionNameBySex = try? container.decode(ProfessionNameBySex.self) {
            self = .professionNameBySex(professionNameBySex)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No ProfessionName type found")
        }
    }
}

public typealias SimpleProfessionName = NonEmptyString

public struct ProfessionNameBySex: EntitySubtype {
    /// The name from the source publication.
    public let `default`: NonEmptyString
    
    /// The male name.
    public let male: NonEmptyString
    
    /// The female name.
    public let female: NonEmptyString

    public init(`default`: NonEmptyString, male: NonEmptyString, female: NonEmptyString) {
        self.`default` = `default`
        self.male = male
        self.female = female
    }
}
