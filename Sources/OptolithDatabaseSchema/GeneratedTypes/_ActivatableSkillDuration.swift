//
//  _ActivatableSkillDuration.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

@DiscriminatedEnum
public enum DurationForOneTime: EntitySubtype {
    case immediate(Immediate)
    case permanent(PermanentDuration)
    case fixed(FixedDuration)
    case checkResultBased(CheckResultBasedDuration)
    case indefinite(IndefiniteDuration)
}

public struct Immediate: EntitySubtype {
    /// Specified if the duration has a maximum time span.
    public let maximum: DurationUnitValue?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ImmediateTranslation>?
}

public struct ImmediateTranslation: EntitySubtype {
    /// A replacement string.
    public let replacement: ResponsiveTextReplace
}

public struct PermanentDuration: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PermanentDurationTranslation>?
}

public struct PermanentDurationTranslation: EntitySubtype {
    /// A replacement string.
    public let replacement: ResponsiveTextReplace
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
}

public struct IndefiniteDuration: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteDurationTranslation>
}

public struct IndefiniteDurationTranslation: EntitySubtype {
    /// A description of the duration.
    public let description: ResponsiveText
}

public struct DurationForSustained: EntitySubtype {
    /// The sustained skill can be active a maximum amount of time.
    public let maximum: DurationUnitValue
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
}
