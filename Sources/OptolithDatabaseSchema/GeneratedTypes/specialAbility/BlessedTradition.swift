//
//  BlessedTradition.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

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
@DiscriminatedEnum
public enum RestrictedBlessings: EntitySubtype {
    case three(ThreeRestrictedBlessings)
    case six(SixRestrictedBlessings)
}

public typealias ThreeRestrictedBlessings = [BlessingReference]

public typealias SixRestrictedBlessings = [BlessingReference]

@DiscriminatedEnum
public enum FavoredCombatTechniques: EntitySubtype {
    case all
    case allClose
    case allUsedInHunting
    case specific(SpecificFavoredCombatTechniques)
}

public struct SpecificFavoredCombatTechniques: EntitySubtype {
    /// A list of specific favored combat techniques.
    public let list: [CombatTechniqueReference]
}

public struct FavoredSkillsSelection: EntitySubtype {
    /// The number of skills that can be selected.
    public let number: Int
    
    /// The possible set of skills.
    public let options: [SkillReference]
}

/// The type of the tradition. May be either church or shamanistic.
@DiscriminatedEnum
public enum BlessedTraditionType: EntitySubtype {
    case church
    case shamanistic(ShamanisticBlessedTradition)
}

/// Additional rules for shamanistic traditions.
public struct ShamanisticBlessedTradition: EntitySubtype {
    public let canUseBoneMaceAsCeremonialItem: Bool    
    
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
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameCompressed = "name_compressed"
        case nameInLibrary = "name_in_library"
        case specialRules = "special_rules"
        case errata = "errata"
    }
}
