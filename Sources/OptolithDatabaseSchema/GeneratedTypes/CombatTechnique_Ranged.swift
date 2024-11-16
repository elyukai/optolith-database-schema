//
//  CombatTechnique_Ranged.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct RangedCombatTechnique: LocalizableEntity {
    /// The ranged combat technique's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Special rules for the combat technique that apply to all weapons in this
    /// category.
    public let special: RangedCombatTechniqueSpecialRules
    
    /// The primary attribute(s).
    public let primaryAttribute: [AttributeReference]
    
    /// The *Breaking Point Rating* of the respective combat technique.
    public let breakingPointRating: Int
    
    public let improvementCost: ImprovementCost
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<RangedCombatTechniqueTranslation>    
    
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
public struct RangedCombatTechniqueSpecialRules: EntitySubtype {
    public let hasAmmunition: Bool    
    
    private enum CodingKeys: String, CodingKey {
        case hasAmmunition = "has_ammunition"
    }
}

public struct RangedCombatTechniqueTranslation: EntitySubtype {
    /// The name of the condition.
    public let name: String
    
    /// Additional rules for the condition, if applicable.
    public let special: String?
    
    public let errata: Errata?
}
