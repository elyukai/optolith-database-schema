import FileDB

@ModelEnum
public enum DurationForOneTime {
    case Immediate(IncludeIdentifier(Immediate))
    case Permanent(IncludeIdentifier(PermanentDuration))
    case Fixed(IncludeIdentifier(FixedDuration))
    case CheckResultBased(IncludeIdentifier(CheckResultBasedDuration))
    case Indefinite(IncludeIdentifier(IndefiniteDuration))
}

@Embedded
public struct Immediate {
  /// Specified if the duration has a maximum time span.
  @Relationship(DurationUnitValue)
  let maximum: DurationUnitValue.ID?
      translations: NestedLocaleMap(
        Optional,
        "ImmediateTranslation",
        Object({

        /// A replacement string.
        let replacement: IncludeIdentifier(ResponsiveTextReplace)?
        })
      ),
  }

@Embedded
public struct PermanentDuration {
      translations: NestedLocaleMap(
        Optional,
        "PermanentDurationTranslation",
        Object({

        /// A replacement string.
        let replacement: IncludeIdentifier(ResponsiveTextReplace)?
        })
      ),
  }

@Embedded
public struct FixedDuration {
  /// If the duration is the maximum duration, so it may end earlier.
  let is_maximum: Boolean()?

  /// The (unitless) duration.
  let value: Integer({ minimum: 1 })

  /// The duration unit.
  @Relationship(DurationUnit)
  let unit: DurationUnit.ID
      translations: NestedLocaleMap(
        Optional,
        "FixedDurationTranslation",
        Object(
          {
            replacement: Optional({
              comment: "A replacement string.",
              type: IncludeIdentifier(ResponsiveTextReplace),
            }),
          },
          { minProperties: 1 }
        )
      ),
  }

@Embedded
public struct CheckResultBasedDuration {
  /// If the duration is the maximum duration, so it may end earlier.
  let is_maximum: Boolean()?

  /// The base value that is derived from the check result.
  @Relationship(CheckResultValue)
  let base: CheckResultValue.ID
  /// If defined, it modifies the base value.
  @Relationship(CheckResultBasedModifier)
  let modifier: CheckResultBasedModifier.ID?

  /// The duration unit.
  @Relationship(DurationUnit)
  let unit: DurationUnit.ID
      translations: NestedLocaleMap(
        Optional,
        "CheckResultBasedDurationTranslation",
        Object({

        /// A replacement string.
        let replacement: IncludeIdentifier(ResponsiveTextReplace)?
        })
      ),
  }

@Embedded
public struct IndefiniteDuration {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // IndefiniteDurationTranslation

        /// A description of the duration.
        let description: IncludeIdentifier(ResponsiveText)
        })
      ),
  }

@Embedded
public struct DurationForSustained {

  /// The sustained skill can be active a maximum amount of time.
  @Relationship(DurationUnitValue)
  let maximum: DurationUnitValue.ID
  }

@ModelEnum
public enum DurationUnit {
    case Seconds
    case Minutes
    case Hours
    case Days
    case Weeks
    case Months
    case Years
    case Centuries
    case Actions
    case CombatRounds
}

@Embedded
public struct DurationUnitValue {

  /// The (unitless) duration value.
  let value: Integer({ minimum: 1 })

  /// The unit of the `value`.
  @Relationship(DurationUnit)
  let unit: DurationUnit.ID
  }
