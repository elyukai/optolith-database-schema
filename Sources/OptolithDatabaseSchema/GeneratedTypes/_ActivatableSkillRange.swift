//
//  _ActivatableSkillRange.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Range: EntitySubtype {
    public let value: RangeValue
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<RangeTranslation>?

    public init(value: RangeValue, translations: LocaleMap<RangeTranslation>? = nil) {
        self.value = value
        self.translations = translations
    }
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

    public init(isMaximum: Bool? = nil, initialModificationLevel: Int, isRadius: Bool? = nil) {
        self.isMaximum = isMaximum
        self.initialModificationLevel = initialModificationLevel
        self.isRadius = isRadius
    }    
    
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

    public init(isMaximum: Bool? = nil, value: Int, unit: RangeUnit, isRadius: Bool? = nil) {
        self.isMaximum = isMaximum
        self.value = value
        self.unit = unit
        self.isRadius = isRadius
    }    
    
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

    public init(isMaximum: Bool? = nil, base: CheckResultValue, modifier: CheckResultBasedModifier? = nil, unit: RangeUnit, isRadius: Bool? = nil) {
        self.isMaximum = isMaximum
        self.base = base
        self.modifier = modifier
        self.unit = unit
        self.isRadius = isRadius
    }    
    
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

    public init(note: ResponsiveTextOptional? = nil, replacement: ResponsiveTextReplace? = nil) {
        self.note = note
        self.replacement = replacement
    }
}

public enum RangeUnit: String, EntitySubtype {
    case steps = "Steps"
    case miles = "Miles"
}
