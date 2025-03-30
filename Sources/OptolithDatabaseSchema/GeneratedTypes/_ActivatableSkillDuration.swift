//
//  _ActivatableSkillDuration.swift
//  OptolithDatabaseSchema
//

public enum DurationForOneTime: EntitySubtype {
    case immediate(Immediate)
    case permanent(PermanentDuration)
    case fixed(FixedDuration)
    case checkResultBased(CheckResultBasedDuration)
    case indefinite(IndefiniteDuration)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case immediate = "immediate"
        case permanent = "permanent"
        case fixed = "fixed"
        case checkResultBased = "check_result_based"
        case indefinite = "indefinite"
    }

    private enum Discriminator: String, Decodable {
        case immediate = "Immediate"
        case permanent = "Permanent"
        case fixed = "Fixed"
        case checkResultBased = "CheckResultBased"
        case indefinite = "Indefinite"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .immediate:
            self = .immediate(try container.decode(Immediate.self, forKey: .immediate))
        case .permanent:
            self = .permanent(try container.decode(PermanentDuration.self, forKey: .permanent))
        case .fixed:
            self = .fixed(try container.decode(FixedDuration.self, forKey: .fixed))
        case .checkResultBased:
            self = .checkResultBased(try container.decode(CheckResultBasedDuration.self, forKey: .checkResultBased))
        case .indefinite:
            self = .indefinite(try container.decode(IndefiniteDuration.self, forKey: .indefinite))
        }
    }
}

public struct Immediate: EntitySubtype {
    /// Specified if the duration has a maximum time span.
    public let maximum: DurationUnitValue?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ImmediateTranslation>?

    public init(maximum: DurationUnitValue? = nil, translations: LocaleMap<ImmediateTranslation>? = nil) {
        self.maximum = maximum
        self.translations = translations
    }
}

public struct ImmediateTranslation: EntitySubtype {
    /// A replacement string.
    public let replacement: ResponsiveTextReplace

    public init(replacement: ResponsiveTextReplace) {
        self.replacement = replacement
    }
}

public struct PermanentDuration: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PermanentDurationTranslation>?

    public init(translations: LocaleMap<PermanentDurationTranslation>? = nil) {
        self.translations = translations
    }
}

public struct PermanentDurationTranslation: EntitySubtype {
    /// A replacement string.
    public let replacement: ResponsiveTextReplace

    public init(replacement: ResponsiveTextReplace) {
        self.replacement = replacement
    }
}

public struct FixedDuration: EntitySubtype {
    /// If the duration is the maximum duration, so it may end earlier.
    public let isMaximum: Bool?

    /// The (unitless) duration.
    public let value: Int

    /// The duration unit.
    public let unit: DurationUnit

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<FixedDurationTranslation>?

    public init(isMaximum: Bool? = nil, value: Int, unit: DurationUnit, translations: LocaleMap<FixedDurationTranslation>? = nil) {
        self.isMaximum = isMaximum
        self.value = value
        self.unit = unit
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case isMaximum = "is_maximum"
        case value = "value"
        case unit = "unit"
        case translations = "translations"
    }
}

public struct FixedDurationTranslation: EntitySubtype {
    /// A replacement string.
    public let replacement: ResponsiveTextReplace

    public init(replacement: ResponsiveTextReplace) {
        self.replacement = replacement
    }
}

/// Defines the duration being based on a check result.
public struct CheckResultBasedDuration: EntitySubtype {
    /// If the duration is the maximum duration, so it may end earlier.
    public let isMaximum: Bool?

    /// The base value that is derived from the check result.
    public let base: CheckResultValue

    /// If defined, it modifies the base value.
    public let modifier: CheckResultBasedModifier?

    /// The duration unit.
    public let unit: DurationUnit

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CheckResultBasedDurationTranslation>?

    public init(isMaximum: Bool? = nil, base: CheckResultValue, modifier: CheckResultBasedModifier? = nil, unit: DurationUnit, translations: LocaleMap<CheckResultBasedDurationTranslation>? = nil) {
        self.isMaximum = isMaximum
        self.base = base
        self.modifier = modifier
        self.unit = unit
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case isMaximum = "is_maximum"
        case base = "base"
        case modifier = "modifier"
        case unit = "unit"
        case translations = "translations"
    }
}

public struct CheckResultBasedDurationTranslation: EntitySubtype {
    /// A replacement string.
    public let replacement: ResponsiveTextReplace

    public init(replacement: ResponsiveTextReplace) {
        self.replacement = replacement
    }
}

public struct IndefiniteDuration: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteDurationTranslation>

    public init(translations: LocaleMap<IndefiniteDurationTranslation>) {
        self.translations = translations
    }
}

public struct IndefiniteDurationTranslation: EntitySubtype {
    /// A description of the duration.
    public let description: ResponsiveText

    public init(description: ResponsiveText) {
        self.description = description
    }
}

public struct DurationForSustained: EntitySubtype {
    /// The sustained skill can be active a maximum amount of time.
    public let maximum: DurationUnitValue

    public init(maximum: DurationUnitValue) {
        self.maximum = maximum
    }
}

public enum DurationUnit: String, EntitySubtype {
    case seconds = "Seconds"
    case minutes = "Minutes"
    case hours = "Hours"
    case days = "Days"
    case weeks = "Weeks"
    case months = "Months"
    case years = "Years"
    case centuries = "Centuries"
    case actions = "Actions"
    case combatRounds = "CombatRounds"
}

public struct DurationUnitValue: EntitySubtype {
    /// The (unitless) duration value.
    public let value: Int

    /// The unit of the `value`.
    public let unit: DurationUnit

    public init(value: Int, unit: DurationUnit) {
        self.value = value
        self.unit = unit
    }
}
