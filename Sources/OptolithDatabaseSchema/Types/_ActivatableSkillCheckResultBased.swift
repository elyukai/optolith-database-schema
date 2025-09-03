import FileDB

/// Defines the derived (unitless) value.
@ModelEnum
public enum CheckResultValue {
    case qualityLevels
    case skillPoints
}

/// Defines how the the `value` is set off against the check result.
@ModelEnum
public enum CheckResultArithmetic {
    case multiply
    case divide
}

@Embedded
public struct CheckResultBasedModifier {
    /// The arithmetic how to apply the `value` to the `base`.
    let arithmetic: CheckResultArithmetic

    /// The value that is applied to the `base` using the defined `arithmetic`.
    @Minimum(2)
    let value: Int
}

/// Defines a parameter being based on a check result.
@Embedded
public struct CheckResultBased {
    /// The base value that is derived from the check result.
    let base: CheckResultValue

    /// If defined, it modifies the base value.
    let modifier: CheckResultBasedModifier?
}
