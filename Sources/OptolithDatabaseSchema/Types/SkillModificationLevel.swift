import FileDB

@Model
public struct SkillModificationLevel {

  /// Configuration for this level for fast skills (spells, liturgical chants).
  let fast: FastSkillModificationLevelConfig

  /// Configuration for this level for slow skills (rituals, ceremonies).
  let slow: SlowSkillModificationLevelConfig

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    @MinProperties(1)
    struct Translation { // SkillModificationLevelTranslation
            /// Configuration for this level for fast skills (spells, liturgical chants). Values set here override the default generated text.
            let fast: LevelTypeConfigTranslation?

            /// Configuration for this level for slow skills (rituals, ceremonies). Values set here override the default generated text.
            let slow: LevelTypeConfigTranslation?
          }
  //   }),
  // displayName: null,
}

@Embedded
public struct FastSkillModificationLevelConfig {

  /// The casting time in actions.
  @Minimum(1)
  let casting_time: Int

  /// The range in meters.
  @Minimum(1)
  let range: Int

  /// The cost in AE/KP.
  @Minimum(1)
  let cost: Int
  }

@Embedded
public struct SlowSkillModificationLevelConfig {

  /// The casting time.
  let casting_time: SlowSkillCastingTime

  /// The range in meters.
  @Minimum(1)
  let range: Int

  /// The cost in AE/KP.
  @Minimum(1)
  let cost: Int
  }

@Embedded
public struct SlowSkillCastingTime {

  /// The (unitless) casting time.
  @Minimum(1)
  let value: Int

  /// The unit for the `value`.
  let unit: SlowSkillCastingTimeUnit
  }

@ModelEnum
public enum SlowSkillCastingTimeUnit {
    case Minutes
    case Hours
}

/// Configuration translation of a type for a level. Values set here override the default generated text.
@Embedded
public struct LevelTypeConfigTranslation {

      @MinLength(1)
      let range: String
  }
