import FileDB

@ModelEnum
public enum DurationForOneTime {
    case immediate(Immediate)
    case permanent(PermanentDuration)
    case fixed(FixedDuration)
    case checkResultBased(CheckResultBasedDuration)
    case indefinite(IndefiniteDuration)
}

@Embedded
public struct Immediate {
    /// Specified if the duration has a maximum time span.
    let maximum: DurationUnitValue?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]?

    struct Translation {  // ImmediateTranslation
        /// A replacement string.
        let replacement: ResponsiveTextReplace?
    }
}

@Embedded
public struct PermanentDuration {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]?

    struct Translation {  // PermanentDurationTranslation
        /// A replacement string.
        let replacement: ResponsiveTextReplace?
    }
}

@Embedded
public struct FixedDuration {
    /// If the duration is the maximum duration, so it may end earlier.
    let is_maximum: Bool?

    /// The (unitless) duration.
    @Minimum(1)
    let value: Int

    /// The duration unit.
    let unit: DurationUnit

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation {  // FixedDurationTranslation
        /// A replacement string.
        let replacement: ResponsiveTextReplace?
    }
}

@Embedded
public struct CheckResultBasedDuration {
    /// If the duration is the maximum duration, so it may end earlier.
    let is_maximum: Bool?

    /// The base value that is derived from the check result.
    let base: CheckResultValue

    /// If defined, it modifies the base value.
    let modifier: CheckResultBasedModifier?

    /// The duration unit.
    let unit: DurationUnit

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]?

    struct Translation {  // CheckResultBasedDurationTranslation
        /// A replacement string.
        let replacement: ResponsiveTextReplace?
    }
}

@Embedded
public struct IndefiniteDuration {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // IndefiniteDurationTranslation
        /// A description of the duration.
        let description: ResponsiveText
    }
}

@Embedded
public struct DurationForSustained {
    /// The sustained skill can be active a maximum amount of time.
    let maximum: DurationUnitValue
}

@ModelEnum
public enum DurationUnit {
    case seconds
    case minutes
    case hours
    case days
    case weeks
    case months
    case years
    case centuries
    case actions
    case combatRounds
}

@Embedded
public struct DurationUnitValue {
    /// The (unitless) duration value.
    @Minimum(1)
    let value: Int

    /// The unit of the `value`.
    let unit: DurationUnit
}
