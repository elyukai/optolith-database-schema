//
//  BlessedTradition.swift
//  OptolithDatabaseSchema
//

public struct BlessedTradition: LocalizableEntity {
    public let id: Id

    public let selectOptions: SelectOptions?

    public let skillApplications: SkillApplications?

    public let skillUses: SkillUses?

    /// The tradition's primary attribute. Leave empty if the tradition does not have one.
    public let primary: AttributeReference?

    /// The tradition's aspects, if any.
    public let aspects: [AspectReference]?

    /// If a tradition restricts the possible blessings, the blessings that are
    /// **not** allowed.
    public let restrictedBlessings: RestrictedBlessings?

    /// A list of favored combat techniques.
    public let favoredCombatTechniques: FavoredCombatTechniques?

    /// A list of favored skills.
    public let favoredSkills: [SkillReference]

    /// On activation of the tradition, a specific number of skills from a list of skills must be selected as being favored.
    public let favoredSkillsSelection: FavoredSkillsSelection?

    /// The type of the tradition. May be either church or shamanistic.
    public let type: BlessedTraditionType

    /// The select option's identifier of the disadvantage *Principles* that represent this tradition's code, if any.
    public let associatedPrinciplesId: Double?

    public let prerequisites: GeneralPrerequisites?

    public let apValue: AdventurePointsValue

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<BlessedTraditionTranslation>

    public init(id: Id, selectOptions: SelectOptions? = nil, skillApplications: SkillApplications? = nil, skillUses: SkillUses? = nil, primary: AttributeReference? = nil, aspects: [AspectReference]? = nil, restrictedBlessings: RestrictedBlessings? = nil, favoredCombatTechniques: FavoredCombatTechniques? = nil, favoredSkills: [SkillReference], favoredSkillsSelection: FavoredSkillsSelection? = nil, type: BlessedTraditionType, associatedPrinciplesId: Double? = nil, prerequisites: GeneralPrerequisites? = nil, apValue: AdventurePointsValue, src: PublicationRefs, translations: LocaleMap<BlessedTraditionTranslation>) {
        self.id = id
        self.selectOptions = selectOptions
        self.skillApplications = skillApplications
        self.skillUses = skillUses
        self.primary = primary
        self.aspects = aspects
        self.restrictedBlessings = restrictedBlessings
        self.favoredCombatTechniques = favoredCombatTechniques
        self.favoredSkills = favoredSkills
        self.favoredSkillsSelection = favoredSkillsSelection
        self.type = type
        self.associatedPrinciplesId = associatedPrinciplesId
        self.prerequisites = prerequisites
        self.apValue = apValue
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case selectOptions = "select_options"
        case skillApplications = "skill_applications"
        case skillUses = "skill_uses"
        case primary = "primary"
        case aspects = "aspects"
        case restrictedBlessings = "restricted_blessings"
        case favoredCombatTechniques = "favored_combat_techniques"
        case favoredSkills = "favored_skills"
        case favoredSkillsSelection = "favored_skills_selection"
        case type = "type"
        case associatedPrinciplesId = "associated_principles_id"
        case prerequisites = "prerequisites"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

/// If a tradition restricts the possible blessings, the blessings that are
/// **not** allowed.
public enum RestrictedBlessings: EntitySubtype {
    case three(ThreeRestrictedBlessings)
    case six(SixRestrictedBlessings)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case three = "three"
        case six = "six"
    }

    private enum Discriminator: String, Decodable {
        case three = "Three"
        case six = "Six"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .three:
            self = .three(try container.decode(ThreeRestrictedBlessings.self, forKey: .three))
        case .six:
            self = .six(try container.decode(SixRestrictedBlessings.self, forKey: .six))
        }
    }
}

public typealias ThreeRestrictedBlessings = [BlessingReference]

public typealias SixRestrictedBlessings = [BlessingReference]

public enum FavoredCombatTechniques: EntitySubtype {
    case all
    case allClose
    case allUsedInHunting
    case specific(SpecificFavoredCombatTechniques)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case all = "all"
        case allClose = "all_close"
        case allUsedInHunting = "all_used_in_hunting"
        case specific = "specific"
    }

    private enum Discriminator: String, Decodable {
        case all = "All"
        case allClose = "AllClose"
        case allUsedInHunting = "AllUsedInHunting"
        case specific = "Specific"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .all:
            self = .all
        case .allClose:
            self = .allClose
        case .allUsedInHunting:
            self = .allUsedInHunting
        case .specific:
            self = .specific(try container.decode(SpecificFavoredCombatTechniques.self, forKey: .specific))
        }
    }
}

public struct SpecificFavoredCombatTechniques: EntitySubtype {
    /// A list of specific favored combat techniques.
    public let list: [CombatTechniqueReference]

    public init(list: [CombatTechniqueReference]) {
        self.list = list
    }
}

public struct FavoredSkillsSelection: EntitySubtype {
    /// The number of skills that can be selected.
    public let number: Int

    /// The possible set of skills.
    public let options: [SkillReference]

    public init(number: Int, options: [SkillReference]) {
        self.number = number
        self.options = options
    }
}

/// The type of the tradition. May be either church or shamanistic.
public enum BlessedTraditionType: EntitySubtype {
    case church
    case shamanistic(ShamanisticBlessedTradition)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case church = "church"
        case shamanistic = "shamanistic"
    }

    private enum Discriminator: String, Decodable {
        case church = "Church"
        case shamanistic = "Shamanistic"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .church:
            self = .church
        case .shamanistic:
            self = .shamanistic(try container.decode(ShamanisticBlessedTradition.self, forKey: .shamanistic))
        }
    }
}

/// Additional rules for shamanistic traditions.
public struct ShamanisticBlessedTradition: EntitySubtype {
    public let canUseBoneMaceAsCeremonialItem: Bool

    public init(canUseBoneMaceAsCeremonialItem: Bool) {
        self.canUseBoneMaceAsCeremonialItem = canUseBoneMaceAsCeremonialItem
    }

    private enum CodingKeys: String, CodingKey {
        case canUseBoneMaceAsCeremonialItem = "can_use_bone_mace_as_ceremonial_item"
    }
}

public struct BlessedTraditionTranslation: EntitySubtype {
    public let name: Name

    /// A shorter name of the tradition's name, used in liturgical chant descriptions.
    public let nameCompressed: String?

    public let nameInLibrary: NameInLibrary?

    /// The special rules of the tradition. They should be sorted like they are in the book.
    public let specialRules: [SpecialRule]

    public let errata: Errata?

    public init(name: Name, nameCompressed: String? = nil, nameInLibrary: NameInLibrary? = nil, specialRules: [SpecialRule], errata: Errata? = nil) {
        self.name = name
        self.nameCompressed = nameCompressed
        self.nameInLibrary = nameInLibrary
        self.specialRules = specialRules
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameCompressed = "name_compressed"
        case nameInLibrary = "name_in_library"
        case specialRules = "special_rules"
        case errata = "errata"
    }
}
