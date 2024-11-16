//
//  ExperienceLevel.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// Adventure Points and maximum values at hero creation.
public struct ExperienceLevel: LocalizableEntity {
    /// An unique, increasing integer.
    public let id: Int
    
    /// The AP value you get.
    public let adventurePoints: Int
    
    /// The highest possible attribute value.
    public let maxAttributeValue: Int
    
    /// The highest possible skill rating.
    public let maxSkillRating: Int
    
    /// The highest possible combat technique rating.
    public let maxCombatTechniqueRating: Int
    
    /// The limit for the sum of all attribute values.
    public let maxAttributeTotal: Int
    
    /// The maximum of spells/chants you can activate.
    public let maxNumberOfSpellsLiturgicalChants: Int
    
    /// The maximum of spells of an unfamiliar tradition you can activate.
    public let maxNumberOfUnfamiliarSpells: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ExperienceLevelTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case adventurePoints = "adventure_points"
        case maxAttributeValue = "max_attribute_value"
        case maxSkillRating = "max_skill_rating"
        case maxCombatTechniqueRating = "max_combat_technique_rating"
        case maxAttributeTotal = "max_attribute_total"
        case maxNumberOfSpellsLiturgicalChants = "max_number_of_spells_liturgical_chants"
        case maxNumberOfUnfamiliarSpells = "max_number_of_unfamiliar_spells"
        case translations = "translations"
    }
}

public struct ExperienceLevelTranslation: EntitySubtype {
    /// The name of the experience level.
    public let name: String
}
