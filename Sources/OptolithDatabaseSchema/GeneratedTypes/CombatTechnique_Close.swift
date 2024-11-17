//
//  CombatTechnique_Close.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct CloseCombatTechnique: LocalizableEntity {
    /// The close combat technique's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Special rules for the combat technique that apply to all weapons in this category.
    public let special: CloseCombatTechniqueSpecialRules
    
    /// The primary attribute(s).
    public let primaryAttribute: [AttributeReference]
    
    /// The *Breaking Point Rating* of the respective combat technique.
    public let breakingPointRating: Int
    
    public let improvementCost: ImprovementCost
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CloseCombatTechniqueTranslation>

    public init(id: Int, special: CloseCombatTechniqueSpecialRules, primaryAttribute: [AttributeReference], breakingPointRating: Int, improvementCost: ImprovementCost, src: PublicationRefs, translations: LocaleMap<CloseCombatTechniqueTranslation>) {
        self.id = id
        self.special = special
        self.primaryAttribute = primaryAttribute
        self.breakingPointRating = breakingPointRating
        self.improvementCost = improvementCost
        self.src = src
        self.translations = translations
    }    
    
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

/// Special rules for the combat technique that apply to all weapons in this category.
public struct CloseCombatTechniqueSpecialRules: EntitySubtype {
    /// Is parrying possible with this combat technique?
    public let canParry: Bool
    
    public let hasDamageThreshold: Bool
    
    public let hasReach: Bool
    
    public let hasLength: Bool
    
    public let hasShieldSize: Bool

    public init(canParry: Bool, hasDamageThreshold: Bool, hasReach: Bool, hasLength: Bool, hasShieldSize: Bool) {
        self.canParry = canParry
        self.hasDamageThreshold = hasDamageThreshold
        self.hasReach = hasReach
        self.hasLength = hasLength
        self.hasShieldSize = hasShieldSize
    }    
    
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

    public init(name: String, special: String? = nil, errata: Errata? = nil) {
        self.name = name
        self.special = special
        self.errata = errata
    }
}
