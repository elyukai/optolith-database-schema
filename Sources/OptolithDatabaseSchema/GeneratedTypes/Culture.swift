//
//  Culture.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Culture: LocalizableEntity {
    /// An unique, increasing integer.
    public let id: Int
    
    /// A list of native languages (usually it is only one).
    public let language: [LanguageReference]
    
    /// A list of native scripts (usually it is only one). If the culture does not use any script, leave this field empty.
    public let script: [ScriptReference]?
    
    /// If the area knowledge has a fixed value or can be adjusted.
    public let areaKnowledge: AreaKnowledge
    
    /// A list of possible social status in the respective culture.
    public let socialStatus: [SocialStatusReference]
    
    /// A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).
    public let commonProfessions: CommonProfessions
    
    /// A list of common advantages.
    public let commonAdvantages: [CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>]?
    
    /// A list of common disadvantages.
    public let commonDisadvantages: [CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>]?
    
    /// A list of uncommon advantages.
    public let uncommonAdvantages: [CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>]?
    
    /// A list of uncommon disadvantages.
    public let uncommonDisadvantages: [CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>]?
    
    /// A list of common skills.
    public let commonSkills: [CommonnessRatedSkill]
    
    /// A list of uncommon skills.
    public let uncommonSkills: [CommonnessRatedSkill]?
    
    /// The skill points you get for buying the culture package.
    public let culturalPackage: [CulturalPackageItem]
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CultureTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case language = "language"
        case script = "script"
        case areaKnowledge = "area_knowledge"
        case socialStatus = "social_status"
        case commonProfessions = "common_professions"
        case commonAdvantages = "common_advantages"
        case commonDisadvantages = "common_disadvantages"
        case uncommonAdvantages = "uncommon_advantages"
        case uncommonDisadvantages = "uncommon_disadvantages"
        case commonSkills = "common_skills"
        case uncommonSkills = "uncommon_skills"
        case culturalPackage = "cultural_package"
        case src = "src"
        case translations = "translations"
    }
}

/// If the area knowledge has a fixed value or can be adjusted.
public struct AreaKnowledge: EntitySubtype {
    /// `true` if the area knowledge has a fixed value, `false` if it can be
    /// adjusted.
    public let isFixed: Bool    
    
    private enum CodingKeys: String, CodingKey {
        case isFixed = "is_fixed"
    }
}

/// The "weight" difference compared to other professions or profession variants. Some professions or profession variants are simply more common (Mostly), but sometimes only specific elements are used (Only).
public enum CommonnessWeight: String, EntitySubtype {
    case mostly = "Mostly"
    case only = "Only"
}

/// Some professions or profession variants are more common than others. There may be cultures where some professions or profession variants are not represented at all.
public struct Weighted<ProfessionOrVariant: EntitySubtype>: EntitySubtype {
    /// The list of more common professions or profession variants.
    public let elements: [ProfessionOrVariant]
    
    /// The "weight" difference compared to other professions or profession variants. Some professions or profession variants are simply more common
    /// (Mostly), but sometimes only specific elements are used (Only).
    public let weight: CommonnessWeight
}

/// This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints (include) or only the professions are kept that are different from the constraints (exclude).
public enum CommonProfessionConstraintsOperation: String, EntitySubtype {
    case intersection = "Intersection"
    case difference = "Difference"
}

/// A list of professions. The filter specifies how the list is applied to all mundane professions.
public struct CommonProfessionConstraints<Constraint: EntitySubtype>: EntitySubtype {
    /// The list of constraints.
    public let constraints: [Constraint]
    
    /// This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints (include) or only the professions are kept that are different from the constraints (exclude).
    public let operation: CommonProfessionConstraintsOperation
}

/// Some professions may be found in a culture, but are not that common.
public enum Rarity: String, EntitySubtype {
    case rare = "Rare"
    case veryRare = "VeryRare"
}

public struct ProfessionConstraint: EntitySubtype {
    /// The profession's identifier.
    public let id: ProfessionIdentifier
    
    /// Some profession variants are more common than others. There may be cultures where some variants are not represented at all.
    public let weightedVariants: Weighted<ProfessionVariantReference>?
    
    /// Some professions may be found in a culture, but are not that common.
    public let rarity: Rarity?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case weightedVariants = "weighted_variants"
        case rarity = "rarity"
    }
}

/// Some professions may be found in a culture, but are not that common.
public enum MundaneProfessionSubgroupConstraint: String, EntitySubtype {
    case profane = "Profane"
    case fighter = "Fighter"
    case religious = "Religious"
}

public struct MagicalTraditionConstraint: EntitySubtype {
    /// The magical tradition's identifier.
    public let id: MagicalTraditionIdentifier
    
    /// Some professions are more common than others. There may be cultures where some professions are not represented at all.
    public let weightedProfessions: Weighted<ProfessionReference>?
    
    /// Some traditions may be found in a culture, but are not that common.
    public let rarity: Rarity?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case weightedProfessions = "weighted_professions"
        case rarity = "rarity"
    }
}

public struct BlessedTraditionConstraint: EntitySubtype {
    /// The magical tradition's identifier.
    public let id: BlessedTraditionIdentifier
    
    /// Some professions are more common than others. There may be cultures where some professions are not represented at all.
    public let weightedProfessions: Weighted<ProfessionReference>?
    
    /// Some traditions may be found in a culture, but are not that common.
    public let rarity: Rarity?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case weightedProfessions = "weighted_professions"
        case rarity = "rarity"
    }
}

@DiscriminatedEnum
public enum MundaneCommonProfessionConstraint: EntitySubtype {
    case profession(ProfessionConstraint)
    case professionSubgroup(MundaneProfessionSubgroupConstraint)
}

@DiscriminatedEnum
public enum MagicCommonProfessionConstraint: EntitySubtype {
    case tradition(MagicalTraditionConstraint)
    case magicDilettante
    case profession(ProfessionConstraint)
}

@DiscriminatedEnum
public enum BlessedCommonProfessionConstraint: EntitySubtype {
    case tradition(BlessedTraditionConstraint)
}

public typealias PlainCommonProfessions = CommonProfessionConstraints<ProfessionReference>

/// Lists of professions by group.
public struct GroupedCommonProfessions: EntitySubtype {
    public let mundane: CommonProfessionConstraints<MundaneCommonProfessionConstraint>?
    
    public let magic: CommonProfessionConstraints<MagicCommonProfessionConstraint>?
    
    public let blessed: CommonProfessionConstraints<BlessedCommonProfessionConstraint>?
}

/// A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).
@DiscriminatedEnum
public enum CommonProfessions: EntitySubtype {
    case plain(PlainCommonProfessions)
    case grouped(GroupedCommonProfessions)
}

public typealias CommonnessRatedSkill = SkillReference

public struct CulturalPackageItem: EntitySubtype {
    /// The skill's identifier.
    public let id: SkillIdentifier
    
    /// The skill points for the respective skill you get for buying the cultural package.
    public let points: Int
}

public struct CultureTranslation: EntitySubtype {
    /// The name of the state.
    public let name: String
    
    /// The description of the area knowledge.
    public let areaKnowledge: AreaKnowledgeTranslation
    
    /// The respective common advantages text from the source book.
    public let commonAdvantages: NonEmptyString?
    
    /// The respective common disadvantages text from the source book.
    public let commonDisadvantages: NonEmptyString?
    
    /// The respective uncommon advantages text from the source book.
    public let uncommonAdvantages: NonEmptyString?
    
    /// The respective uncommon disadvantages text from the source book.
    public let uncommonDisadvantages: NonEmptyString?
    
    /// Structured description of common names.
    public let commonNames: CommonNames
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case areaKnowledge = "area_knowledge"
        case commonAdvantages = "common_advantages"
        case commonDisadvantages = "common_disadvantages"
        case uncommonAdvantages = "uncommon_advantages"
        case uncommonDisadvantages = "uncommon_disadvantages"
        case commonNames = "common_names"
        case errata = "errata"
    }
}

/// Description and examples of the area knowledge.
public struct AreaKnowledgeTranslation: EntitySubtype {
    /// The full description without examples in parenthesis.
    public let description: String
    
    /// A shorter version of the description, used in input fields and other UI elements where the space might be to small to use the full description.
    public let abbreviated: String
    
    /// Examples of areas, if applicable.
    public let examples: [AreaKnowledgeExample]?
}

public struct AreaKnowledgeExample: EntitySubtype {
    public let area: String
}

/// Structured description of common names.
public struct CommonNames: EntitySubtype {
    /// First names can be gender-neutral, but they can also be for a specific binary sex. They are sorted into groups.
    public let firstNameGroups: [CommonNameGroup]?
    
    /// Last names can be gender-neutral, like family names, but they can also be for a specific binary sex. They are sorted into groups.
    public let lastNameGroups: [CommonNameGroup]?
    
    /// Special naming rules.
    public let namingRules: NonEmptyString?    
    
    private enum CodingKeys: String, CodingKey {
        case firstNameGroups = "first_name_groups"
        case lastNameGroups = "last_name_groups"
        case namingRules = "naming_rules"
    }
}

public struct CommonNameGroup: EntitySubtype {
    /// The group label.
    public let label: NonEmptyString
    
    /// The binary sex if the group is only for a certain binary sex.
    public let sex: BinarySex?
    
    /// The names from the group.
    public let names: [CommonName]
}

public struct CommonName: EntitySubtype {
    public let name: NonEmptyString
    
    /// Additional information about the name, appended in parenthesis.
    public let note: NonEmptyString?
}
