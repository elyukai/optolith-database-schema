//
//  EnhancementPrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// Requires a specific enhancement from a skill. This should **not** be used for enhancements themselves; they can only require enhancements from the same skill they enhance.
public struct ExternalEnhancementPrerequisite: EntitySubtype {
    /// The required skill.
    public let skill: SkillWithEnhancementsReference
    
    /// The required enhancement.
    public let enhancement: EnhancementsReference
    
    public let displayOption: DisplayOption?    
    
    private enum CodingKeys: String, CodingKey {
        case skill = "skill"
        case enhancement = "enhancement"
        case displayOption = "display_option"
    }
}

public struct SkillWithEnhancementsReference: EntitySubtype {
    /// The skill's identifier.
    public let id: SkillWithEnhancementsIdentifier
}

public struct EnhancementsReference: EntitySubtype {
    /// The enhancement's identifier.
    public let id: Int
}

/// Requires a specific enhancement from a skill. This can only be used by an enhancement to require another enhancement from the same skill.
public typealias InternalEnhancementPrerequisite = EnhancementsReference
