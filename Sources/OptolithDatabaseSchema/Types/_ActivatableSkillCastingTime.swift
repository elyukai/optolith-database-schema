import FileDB

@ModelEnum
public enum CastingTime<NonModifiable> {
    case modifiable(ModifiableCastingRange)
    case nonModifiable(NonModifiable)
}

@Embedded
public struct ModifiableCastingRange {
    /// The initial skill modification identifier/level.
    @Relationship(SkillModificationLevel.self)
    let initial_modification_level: SkillModificationLevel.ID
}

/// The casting time may have two different values: One for use in “normal” time, i. e. actions, combat rounds and others, and one for use during lovemaking, which is a rule set from Aventurian Intimacy.
///
/// There must always be at least one casting time value.
@Embedded
@MinProperties(1)
public struct CastingTimeIncludingLovemaking<NonModifiable> {
    /// The default casting time definition.
    let `default`: CastingTime<NonModifiable>?

    /// The casting time during lovemaking. In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking.
    let during_lovemaking: CastingTimeDuringLovemaking?
}

/// The casting time during lovemaking. In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking.
@Embedded
public struct CastingTimeDuringLovemaking {
    /// The (unitless) casting time value.
    @Minimum(1)
    let value: Int

    /// The unit of the `value`.
    let unit: CastingTimeDuringLovemakingUnit
}

@ModelEnum
public enum CastingTimeDuringLovemakingUnit {
    case seductionActions
    case rounds
}

@Embedded
public struct FastSkillNonModifiableCastingTime {
    /// The casting time value in actions.
    @Minimum(1)
    let actions: Int
}

@Embedded
public struct SlowSkillNonModifiableCastingTime {
    /// The (unitless) casting time value.
    @Minimum(1)
    let value: Int

    /// The unit of the `value`.
    let unit: SlowSkillCastingTimeUnit
}

public typealias FastCastingTime = CastingTimeIncludingLovemaking<FastSkillNonModifiableCastingTime>

public typealias SlowCastingTime = CastingTimeIncludingLovemaking<SlowSkillNonModifiableCastingTime>
