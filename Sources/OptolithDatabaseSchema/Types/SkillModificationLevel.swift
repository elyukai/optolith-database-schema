import FileDB

@Model
public struct SkillModificationLevel {

  /// Configuration for this level for fast skills (spells, liturgical chants).
  @Relationship(FastSkillModificationLevelConfig)
  let fast: FastSkillModificationLevelConfig.ID

  /// Configuration for this level for slow skills (rituals, ceremonies).
  @Relationship(SlowSkillModificationLevelConfig)
  let slow: SlowSkillModificationLevelConfig.ID
      translations: NestedLocaleMap(
        Optional,
        "SkillModificationLevelTranslation",
        Object(
          {
            fast: Optional({
              comment:
                "Configuration for this level for fast skills (spells, liturgical chants). Values set here override the default generated text.",
              type: IncludeIdentifier(LevelTypeConfigTranslation),
            }),
            slow: Optional({
              comment:
                "Configuration for this level for slow skills (rituals, ceremonies). Values set here override the default generated text.",
              type: IncludeIdentifier(LevelTypeConfigTranslation),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
  displayName: null,
})

@Embedded
public struct FastSkillModificationLevelConfig {

  /// The casting time in actions.
  let casting_time: Integer({ minimum: 1 })

  /// The range in meters.
  let range: Integer({ minimum: 1 })

  /// The cost in AE/KP.
  let cost: Integer({ minimum: 1 })
  }

@Embedded
public struct SlowSkillModificationLevelConfig {

  /// The casting time.
  @Relationship(SlowSkillCastingTime)
  let casting_time: SlowSkillCastingTime.ID

  /// The range in meters.
  let range: Integer({ minimum: 1 })

  /// The cost in AE/KP.
  let cost: Integer({ minimum: 1 })
  }

@Embedded
public struct SlowSkillCastingTime {

  /// The (unitless) casting time.
  let value: Integer({ minimum: 1 })

  /// The unit for the `value`.
  @Relationship(SlowSkillCastingTimeUnit)
  let unit: SlowSkillCastingTimeUnit.ID
  }

@ModelEnum
public enum SlowSkillCastingTimeUnit {
    case Minutes
    case Hours
}

/// Configuration translation of a type for a level. Values set here override the default generated text.
@Embedded
public struct LevelTypeConfigTranslation {
      range: Required({
        type: String({ minLength: 1 }),
      }),
  }
