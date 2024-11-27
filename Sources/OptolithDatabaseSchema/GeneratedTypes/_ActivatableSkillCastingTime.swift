//
//  _ActivatableSkillCastingTime.swift
//  OptolithDatabaseSchema
//

public enum CastingTime<NonModifiable: EntitySubtype>: EntitySubtype {
    case modifiable(ModifiableCastingTime)
    case nonModifiable(NonModifiable)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case modifiable = "modifiable"
        case nonModifiable = "non_modifiable"
    }

    private enum Discriminator: String, Decodable {
        case modifiable = "Modifiable"
        case nonModifiable = "NonModifiable"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .modifiable:
            self = .modifiable(try container.decode(ModifiableCastingTime.self, forKey: .modifiable))
        case .nonModifiable:
            self = .nonModifiable(try container.decode(NonModifiable.self, forKey: .nonModifiable))
        }
    }
}

public struct ModifiableCastingTime: EntitySubtype {
    /// The initial skill modification identifier/level.
    public let initialModificationLevel: Int

    public init(initialModificationLevel: Int) {
        self.initialModificationLevel = initialModificationLevel
    }

    private enum CodingKeys: String, CodingKey {
        case initialModificationLevel = "initial_modification_level"
    }
}

/// The casting time may have two different values: One for use in “normal” time, i. e. actions, combat rounds and others, and one for use during lovemaking, which is a rule set from Aventurian Intimacy.
/// 
/// There must always be at least one casting time value.
public struct CastingTimeIncludingLovemaking<NonModifiable: EntitySubtype>: EntitySubtype {
    /// The default casting time definition.
    public let `default`: CastingTime<NonModifiable>?

    /// The casting time during lovemaking. In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking.
    public let duringLovemaking: CastingTimeDuringLovemaking?

    public init(`default`: CastingTime<NonModifiable>? = nil, duringLovemaking: CastingTimeDuringLovemaking? = nil) {
        self.`default` = `default`
        self.duringLovemaking = duringLovemaking
    }

    private enum CodingKeys: String, CodingKey {
        case `default` = "default"
        case duringLovemaking = "during_lovemaking"
    }
}

/// The casting time during lovemaking. In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking.
public struct CastingTimeDuringLovemaking: EntitySubtype {
    /// The (unitless) casting time value.
    public let value: Int

    /// The unit of the `value`.
    public let unit: CastingTimeDuringLovemakingUnit

    public init(value: Int, unit: CastingTimeDuringLovemakingUnit) {
        self.value = value
        self.unit = unit
    }
}

public enum CastingTimeDuringLovemakingUnit: String, EntitySubtype {
    case seductionActions = "SeductionActions"
    case rounds = "Rounds"
}

public struct FastSkillNonModifiableCastingTime: EntitySubtype {
    /// The casting time value in actions.
    public let actions: Int

    public init(actions: Int) {
        self.actions = actions
    }
}

public struct SlowSkillNonModifiableCastingTime: EntitySubtype {
    /// The (unitless) casting time value.
    public let value: Int

    public let unit: SlowSkillCastingTimeUnit

    public init(value: Int, unit: SlowSkillCastingTimeUnit) {
        self.value = value
        self.unit = unit
    }
}

public typealias FastCastingTime = CastingTimeIncludingLovemaking<FastSkillNonModifiableCastingTime>

public typealias SlowCastingTime = CastingTimeIncludingLovemaking<SlowSkillNonModifiableCastingTime>
