//
//  Culture.swift
//  OptolithDatabaseSchema
//

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

    public init(id: Int, language: [LanguageReference], script: [ScriptReference]? = nil, areaKnowledge: AreaKnowledge, socialStatus: [SocialStatusReference], commonProfessions: CommonProfessions, commonAdvantages: [CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>]? = nil, commonDisadvantages: [CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>]? = nil, uncommonAdvantages: [CommonnessRatedAdvantageDisadvantage<AdvantageIdentifier>]? = nil, uncommonDisadvantages: [CommonnessRatedAdvantageDisadvantage<DisadvantageIdentifier>]? = nil, commonSkills: [CommonnessRatedSkill], uncommonSkills: [CommonnessRatedSkill]? = nil, culturalPackage: [CulturalPackageItem], src: PublicationRefs, translations: LocaleMap<CultureTranslation>) {
        self.id = id
        self.language = language
        self.script = script
        self.areaKnowledge = areaKnowledge
        self.socialStatus = socialStatus
        self.commonProfessions = commonProfessions
        self.commonAdvantages = commonAdvantages
        self.commonDisadvantages = commonDisadvantages
        self.uncommonAdvantages = uncommonAdvantages
        self.uncommonDisadvantages = uncommonDisadvantages
        self.commonSkills = commonSkills
        self.uncommonSkills = uncommonSkills
        self.culturalPackage = culturalPackage
        self.src = src
        self.translations = translations
    }

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

    public init(isFixed: Bool) {
        self.isFixed = isFixed
    }

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

    public init(elements: [ProfessionOrVariant], weight: CommonnessWeight) {
        self.elements = elements
        self.weight = weight
    }
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

    public init(constraints: [Constraint], operation: CommonProfessionConstraintsOperation) {
        self.constraints = constraints
        self.operation = operation
    }
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

    public init(id: ProfessionIdentifier, weightedVariants: Weighted<ProfessionVariantReference>? = nil, rarity: Rarity? = nil) {
        self.id = id
        self.weightedVariants = weightedVariants
        self.rarity = rarity
    }

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

    public init(id: MagicalTraditionIdentifier, weightedProfessions: Weighted<ProfessionReference>? = nil, rarity: Rarity? = nil) {
        self.id = id
        self.weightedProfessions = weightedProfessions
        self.rarity = rarity
    }

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

    public init(id: BlessedTraditionIdentifier, weightedProfessions: Weighted<ProfessionReference>? = nil, rarity: Rarity? = nil) {
        self.id = id
        self.weightedProfessions = weightedProfessions
        self.rarity = rarity
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case weightedProfessions = "weighted_professions"
        case rarity = "rarity"
    }
}

public enum MundaneCommonProfessionConstraint: EntitySubtype {
    case profession(ProfessionConstraint)
    case professionSubgroup(MundaneProfessionSubgroupConstraint)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case profession = "profession"
        case professionSubgroup = "profession_subgroup"
    }

    private enum Discriminator: String, Decodable {
        case profession = "Profession"
        case professionSubgroup = "ProfessionSubgroup"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .profession:
            self = .profession(try container.decode(ProfessionConstraint.self, forKey: .profession))
        case .professionSubgroup:
            self = .professionSubgroup(try container.decode(MundaneProfessionSubgroupConstraint.self, forKey: .professionSubgroup))
        }
    }
}

public enum MagicCommonProfessionConstraint: EntitySubtype {
    case tradition(MagicalTraditionConstraint)
    case magicDilettante
    case profession(ProfessionConstraint)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case tradition = "tradition"
        case magicDilettante = "magic_dilettante"
        case profession = "profession"
    }

    private enum Discriminator: String, Decodable {
        case tradition = "Tradition"
        case magicDilettante = "MagicDilettante"
        case profession = "Profession"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .tradition:
            self = .tradition(try container.decode(MagicalTraditionConstraint.self, forKey: .tradition))
        case .magicDilettante:
            self = .magicDilettante
        case .profession:
            self = .profession(try container.decode(ProfessionConstraint.self, forKey: .profession))
        }
    }
}

public struct BlessedCommonProfessionConstraint: EntitySubtype {
    public let tag: String

    public let tradition: BlessedTraditionConstraint

    public init(tag: String, tradition: BlessedTraditionConstraint) {
        self.tag = tag
        self.tradition = tradition
    }
}

public typealias PlainCommonProfessions = CommonProfessionConstraints<ProfessionReference>

/// Lists of professions by group.
public struct GroupedCommonProfessions: EntitySubtype {
    public let mundane: CommonProfessionConstraints<MundaneCommonProfessionConstraint>?

    public let magic: CommonProfessionConstraints<MagicCommonProfessionConstraint>?

    public let blessed: CommonProfessionConstraints<BlessedCommonProfessionConstraint>?

    public init(mundane: CommonProfessionConstraints<MundaneCommonProfessionConstraint>? = nil, magic: CommonProfessionConstraints<MagicCommonProfessionConstraint>? = nil, blessed: CommonProfessionConstraints<BlessedCommonProfessionConstraint>? = nil) {
        self.mundane = mundane
        self.magic = magic
        self.blessed = blessed
    }
}

/// A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).
public enum CommonProfessions: EntitySubtype {
    case plain(PlainCommonProfessions)
    case grouped(GroupedCommonProfessions)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case plain = "plain"
        case grouped = "grouped"
    }

    private enum Discriminator: String, Decodable {
        case plain = "Plain"
        case grouped = "Grouped"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .plain:
            self = .plain(try container.decode(PlainCommonProfessions.self, forKey: .plain))
        case .grouped:
            self = .grouped(try container.decode(GroupedCommonProfessions.self, forKey: .grouped))
        }
    }
}

public typealias CommonnessRatedSkill = SkillReference

public struct CulturalPackageItem: EntitySubtype {
    /// The skill's identifier.
    public let id: SkillIdentifier

    /// The skill points for the respective skill you get for buying the cultural package.
    public let points: Int

    public init(id: SkillIdentifier, points: Int) {
        self.id = id
        self.points = points
    }
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

    public init(name: String, areaKnowledge: AreaKnowledgeTranslation, commonAdvantages: NonEmptyString? = nil, commonDisadvantages: NonEmptyString? = nil, uncommonAdvantages: NonEmptyString? = nil, uncommonDisadvantages: NonEmptyString? = nil, commonNames: CommonNames, errata: Errata? = nil) {
        self.name = name
        self.areaKnowledge = areaKnowledge
        self.commonAdvantages = commonAdvantages
        self.commonDisadvantages = commonDisadvantages
        self.uncommonAdvantages = uncommonAdvantages
        self.uncommonDisadvantages = uncommonDisadvantages
        self.commonNames = commonNames
        self.errata = errata
    }

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

    public init(description: String, abbreviated: String, examples: [AreaKnowledgeExample]? = nil) {
        self.description = description
        self.abbreviated = abbreviated
        self.examples = examples
    }
}

public struct AreaKnowledgeExample: EntitySubtype {
    public let area: String

    public init(area: String) {
        self.area = area
    }
}

/// Structured description of common names.
public struct CommonNames: EntitySubtype {
    /// First names can be gender-neutral, but they can also be for a specific binary sex. They are sorted into groups.
    public let firstNameGroups: [CommonNameGroup]?

    /// Last names can be gender-neutral, like family names, but they can also be for a specific binary sex. They are sorted into groups.
    public let lastNameGroups: [CommonNameGroup]?

    /// Special naming rules.
    public let namingRules: NonEmptyString?

    public init(firstNameGroups: [CommonNameGroup]? = nil, lastNameGroups: [CommonNameGroup]? = nil, namingRules: NonEmptyString? = nil) {
        self.firstNameGroups = firstNameGroups
        self.lastNameGroups = lastNameGroups
        self.namingRules = namingRules
    }

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

    public init(label: NonEmptyString, sex: BinarySex? = nil, names: [CommonName]) {
        self.label = label
        self.sex = sex
        self.names = names
    }
}

public struct CommonName: EntitySubtype {
    public let name: NonEmptyString

    /// Additional information about the name, appended in parenthesis.
    public let note: NonEmptyString?

    public init(name: NonEmptyString, note: NonEmptyString? = nil) {
        self.name = name
        self.note = note
    }
}
