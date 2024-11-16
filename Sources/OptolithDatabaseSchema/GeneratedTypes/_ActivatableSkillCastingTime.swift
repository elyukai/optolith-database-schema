//
//  _ActivatableSkillCastingTime.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

@DiscriminatedEnum
public enum CastingTime<NonModifiable: EntitySubtype>: EntitySubtype {
    case modifiable(ModifiableCastingTime)
    case nonModifiable(NonModifiable)
}

public struct ModifiableCastingTime: EntitySubtype {
    /// The initial skill modification identifier/level.
    public let initialModificationLevel: Int    
    
    private enum CodingKeys: String, CodingKey {
        case initialModificationLevel = "initial_modification_level"
    }
}

/// The casting time may have two different values: One for use in “normal” time,
/// i. e. actions, combat rounds and others, and one for use during lovemaking,
/// which is a rule set from Aventurian Intimacy.
/// 
/// There must always be at least one casting time value.
public struct CastingTimeIncludingLovemaking<NonModifiable: EntitySubtype>: EntitySubtype {
    /// The default casting time definition.
    public let `default`: CastingTime<NonModifiable>?
    
    /// The casting time during lovemaking. In Aventurian Intimacy, you may only
    /// use an activatable skill during lovemaking if it has a casting time used
    /// during lovemaking.
    public let duringLovemaking: CastingTimeDuringLovemaking?    
    
    private enum CodingKeys: String, CodingKey {
        case `default` = "default"
        case duringLovemaking = "during_lovemaking"
    }
}

/// The casting time during lovemaking. In Aventurian Intimacy, you may only use
/// an activatable skill during lovemaking if it has a casting time used during
/// lovemaking.
public struct CastingTimeDuringLovemaking: EntitySubtype {
    /// The (unitless) casting time value.
    public let value: Int
    
    /// The unit of the `value`.
    public let unit: CastingTimeDuringLovemakingUnit
}

public enum CastingTimeDuringLovemakingUnit: String, EntitySubtype {
    case seductionActions = "SeductionActions"
    case rounds = "Rounds"
}

public struct FastSkillNonModifiableCastingTime: EntitySubtype {
    /// The casting time value in actions.
    public let actions: Int
}

public struct SlowSkillNonModifiableCastingTime: EntitySubtype {
    /// The (unitless) casting time value.
    public let value: Int
    
    public let unit: SlowSkillCastingTimeUnit
}

public typealias FastCastingTime = CastingTimeIncludingLovemaking<FastSkillNonModifiableCastingTime>

public typealias SlowCastingTime = CastingTimeIncludingLovemaking<SlowSkillNonModifiableCastingTime>
