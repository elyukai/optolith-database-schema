//
//  CombatTechnique_Close.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct CloseCombatTechnique: LocalizableEntity {
    /// The close combat technique's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Special rules for the combat technique that apply to all weapons in this
    /// category.
    public let special: CloseCombatTechniqueSpecialRules
    
    /// The primary attribute(s).
    public let primaryAttribute: [AttributeReference]
    
    /// The *Breaking Point Rating* of the respective combat technique.
    public let breakingPointRating: Int
    
    public let improvementCost: ImprovementCost
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CloseCombatTechniqueTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case special = "special"
        case primaryAttribute = "primary_attribute"
        case breakingPointRating = "breaking_point_rating"
        case improvementCost = "improvement_cost"
        case src = "src"
        case translations = "translations"
    }
}

/// Special rules for the combat technique that apply to all weapons in this
/// category.
public struct CloseCombatTechniqueSpecialRules: EntitySubtype {
    /// Is parrying possible with this combat technique?
    public let canParry: Bool
    
    public let hasDamageThreshold: Bool
    
    public let hasReach: Bool
    
    public let hasLength: Bool
    
    public let hasShieldSize: Bool    
    
    private enum CodingKeys: String, CodingKey {
        case canParry = "can_parry"
        case hasDamageThreshold = "has_damage_threshold"
        case hasReach = "has_reach"
        case hasLength = "has_length"
        case hasShieldSize = "has_shield_size"
    }
}

public struct CloseCombatTechniqueTranslation: EntitySubtype {
    /// The name of the condition.
    public let name: String
    
    /// Additional rules for the condition, if applicable.
    public let special: String?
    
    public let errata: Errata?
}
