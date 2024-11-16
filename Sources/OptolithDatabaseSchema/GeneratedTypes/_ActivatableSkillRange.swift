//
//  _ActivatableSkillRange.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Range: EntitySubtype {
    public let value: RangeValue
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<RangeTranslation>?
}

@DiscriminatedEnum
public enum RangeValue: EntitySubtype {
    case modifiable(ModifiableRange)
    case sight
    case `self`
    case global
    case touch
    case fixed(FixedRange)
    case checkResultBased(CheckResultBasedRange)
}

public struct ModifiableRange: EntitySubtype {
    /// If `true`, the range is a maximum range.
    public let isMaximum: Bool?
    
    /// The initial skill modification identifier/level.
    public let initialModificationLevel: Int
    
    /// If `true`, the range is a radius.
    public let isRadius: Bool?    
    
    private enum CodingKeys: String, CodingKey {
        case isMaximum = "is_maximum"
        case initialModificationLevel = "initial_modification_level"
        case isRadius = "is_radius"
    }
}

public struct FixedRange: EntitySubtype {
    /// If `true`, the range is a maximum range.
    public let isMaximum: Bool?
    
    /// The (unitless) range value.
    public let value: Int
    
    /// The unit of the `value`.
    public let unit: RangeUnit
    
    /// If `true`, the range is a radius.
    public let isRadius: Bool?    
    
    private enum CodingKeys: String, CodingKey {
        case isMaximum = "is_maximum"
        case value = "value"
        case unit = "unit"
        case isRadius = "is_radius"
    }
}

/// Defines the range being based on a check result.
public struct CheckResultBasedRange: EntitySubtype {
    /// If the range is the maximum range.
    public let isMaximum: Bool?
    
    /// The base value that is derived from the check result.
    public let base: CheckResultValue
    
    /// If defined, it modifies the base value.
    public let modifier: CheckResultBasedModifier?
    
    /// The duration unit.
    public let unit: RangeUnit
    
    /// If `true`, the range is a radius.
    public let isRadius: Bool?    
    
    private enum CodingKeys: String, CodingKey {
        case isMaximum = "is_maximum"
        case base = "base"
        case modifier = "modifier"
        case unit = "unit"
        case isRadius = "is_radius"
    }
}

public struct RangeTranslation: EntitySubtype {
    /// A note, appended to the generated string in parenthesis. If the generated is modified using `replacement`, the note is appended to the modifier string.
    public let note: ResponsiveTextOptional?
    
    /// A replacement string. If `note` is provided, it is appended to the replaced string.
    public let replacement: ResponsiveTextReplace?
}

public enum RangeUnit: String, EntitySubtype {
    case steps = "Steps"
    case miles = "Miles"
}
