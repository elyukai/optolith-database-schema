import FileDB

export const CastingTime = GenEnum(import.meta.url, {
  name: "CastingTime",
  parameters: [Param("NonModifiable")],
  values: NonModifiable => ({
    case Modifiable(IncludeIdentifier(ModifiableCastingRange))
    case NonModifiable(TypeArgument(NonModifiable))
}

@Embedded
public struct ModifiableCastingRange {

  /// The initial skill modification identifier/level.
  let initial_modification_level: SkillModificationLevelIdentifier()
  }

export const CastingTimeIncludingLovemaking = GenTypeAlias(import.meta.url, {
  name: "CastingTimeIncludingLovemaking",
  comment: `The casting time may have two different values: One for use in “normal” time, i. e. actions, combat rounds and others, and one for use during lovemaking, which is a rule set from Aventurian Intimacy.

There must always be at least one casting time value.`,
  parameters: [Param("NonModifiable")],
  type: NonModifiable =>
    Object(
      {
        default: Optional({
          comment: "The default casting time definition.",
          type: GenIncludeIdentifier(CastingTime, [TypeArgument(NonModifiable)]),
        }),
        during_lovemaking: Optional({
          comment:
            "The casting time during lovemaking. In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking.",
          type: IncludeIdentifier(CastingTimeDuringLovemaking),
        }),
      },
      { minProperties: 1 }
    ),
})

/// The casting time during lovemaking. In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking.
@Embedded
public struct CastingTimeDuringLovemaking {

  /// The (unitless) casting time value.
  let value: Integer({ minimum: 1 })

  /// The unit of the `value`.
  @Relationship(CastingTimeDuringLovemakingUnit)
  let unit: CastingTimeDuringLovemakingUnit.ID
  }

@ModelEnum
public enum CastingTimeDuringLovemakingUnit {
    case SeductionActions
    case Rounds
}

@Embedded
public struct FastSkillNonModifiableCastingTime {

  /// The casting time value in actions.
  let actions: Integer({ minimum: 1 })
  }

@Embedded
public struct SlowSkillNonModifiableCastingTime {

  /// The (unitless) casting time value.
  let value: Integer({ minimum: 1 })

  /// The unit of the `value`.
  @Relationship(SlowSkillCastingTimeUnit)
  let unit: SlowSkillCastingTimeUnit.ID
  }

export const FastCastingTime = TypeAlias(import.meta.url, {
  name: "FastCastingTime",
  type: () =>
    GenIncludeIdentifier(CastingTimeIncludingLovemaking, [
      IncludeIdentifier(FastSkillNonModifiableCastingTime),
    ]),
})

export const SlowCastingTime = TypeAlias(import.meta.url, {
  name: "SlowCastingTime",
  type: () =>
    GenIncludeIdentifier(CastingTimeIncludingLovemaking, [
      IncludeIdentifier(SlowSkillNonModifiableCastingTime),
    ]),
})
