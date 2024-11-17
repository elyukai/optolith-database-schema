//
//  _ActivatableSkillCheckResultBased.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// Defines the derived (unitless) value.
public enum CheckResultValue: String, EntitySubtype {
    case qualityLevels = "QualityLevels"
    case skillPoints = "SkillPoints"
}

/// Defines how the the `value` is set off against the check result.
public enum CheckResultArithmetic: String, EntitySubtype {
    case multiply = "Multiply"
    case divide = "Divide"
}

public struct CheckResultBasedModifier: EntitySubtype {
    /// The arithmetic how to apply the `value` to the `base`.
    public let arithmetic: CheckResultArithmetic
    
    /// The value that is applied to the `base` using the defined `arithmetic`.
    public let value: Int

    public init(arithmetic: CheckResultArithmetic, value: Int) {
        self.arithmetic = arithmetic
        self.value = value
    }
}

/// Defines a parameter being based on a check result.
public struct CheckResultBased: EntitySubtype {
    /// The base value that is derived from the check result.
    public let base: CheckResultValue
    
    /// If defined, it modifies the base value.
    public let modifier: CheckResultBasedModifier?

    public init(base: CheckResultValue, modifier: CheckResultBasedModifier? = nil) {
        self.base = base
        self.modifier = modifier
    }
}
