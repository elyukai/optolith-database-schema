//
//  SkillModificationLevel.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct SkillModificationLevel: Entity {
    /// The skill modification level's identifier.
    public let id: Int
    
    /// Configuration for this level for fast skills (spells, liturgical chants).
    public let fast: FastSkillModificationLevelConfig
    
    /// Configuration for this level for slow skills (rituals, ceremonies).
    public let slow: SlowSkillModificationLevelConfig
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SkillModificationLevelTranslation>?
}

public struct FastSkillModificationLevelConfig: EntitySubtype {
    /// The casting time in actions.
    public let castingTime: Int
    
    /// The range in meters.
    public let range: Int
    
    /// The cost in AE/KP.
    public let cost: Int    
    
    private enum CodingKeys: String, CodingKey {
        case castingTime = "casting_time"
        case range = "range"
        case cost = "cost"
    }
}

public struct SlowSkillModificationLevelConfig: EntitySubtype {
    /// The casting time.
    public let castingTime: SlowSkillCastingTime
    
    /// The range in meters.
    public let range: Int
    
    /// The cost in AE/KP.
    public let cost: Int    
    
    private enum CodingKeys: String, CodingKey {
        case castingTime = "casting_time"
        case range = "range"
        case cost = "cost"
    }
}

public struct SlowSkillCastingTime: EntitySubtype {
    /// The (unitless) casting time.
    public let value: Int
    
    /// The unit for the `value`.
    public let unit: SlowSkillCastingTimeUnit
}

public enum SlowSkillCastingTimeUnit: String, EntitySubtype {
    case minutes = "Minutes"
    case hours = "Hours"
}

public struct SkillModificationLevelTranslation: EntitySubtype {
    /// Configuration for this level for fast skills (spells, liturgical chants).
    /// Values set here override the default generated text.
    public let fast: LevelTypeConfigTranslation?
    
    /// Configuration for this level for slow skills (rituals, ceremonies). Values
    /// set here override the default generated text.
    public let slow: LevelTypeConfigTranslation?
}

/// Configuration translation of a type for a level. Values set here override the
/// default generated text.
public struct LevelTypeConfigTranslation: EntitySubtype {
    public let range: NonEmptyString
}
