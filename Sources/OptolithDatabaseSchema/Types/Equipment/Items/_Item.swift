import FileDB

/// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
@ModelEnum
public enum CombatUse {
    case weapon(ImprovisedWeapon)
    case armor(SecondaryArmor)
}

/// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
@TypeAlias
public struct StructurePoints {
    @MinItems(1)
    let list: [StructurePointsComponent]
}

@Embedded
public struct StructurePointsComponent {
    /// The structure points.
    @Minimum(1)
    let points: Int
}

/// The cost in silverthalers.
@ModelEnum
public enum Cost {
    case free
    case various
    case invaluable
    case fixed(FixedCost)
    case range(CostRange)
}

@Embedded
public struct FixedCost {
    /// The cost in silverthalers.
    @Minimum(0, isExclusive: true)
    let value: Double

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    struct Translation {  // FixedCostTranslation
        /// The cost get wrapped by this text using a placeholder in the text.
        @MinLength(1)
        @Pattern("\\{0\\}")
        let wrap_in_text: String
    }
}

@Embedded
public struct CostRange {
    /// The lower bound of the cost in silverthalers.
    @Minimum(0, isExclusive: true)
    let from: Double

    /// The upper bound of the cost in silverthalers.
    @Minimum(0, isExclusive: true)
    let to: Double

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    struct Translation {  // CostRangeTranslation
        /// The cost get wrapped by this text using a placeholder in the text.
        @MinLength(1)
        @Pattern("\\{0\\}")
        let wrap_in_text: String
    }
}

/// The weight in kg.
@TypeAlias
public struct Weight {
    @Minimum(0, isExclusive: true)
    let value: Double
}

/// The complexity of crafting the item.
@ModelEnum
public enum Complexity {
    case primitive
    case simple
    case complex(ComplexComplexity)
}

@Embedded
public struct ComplexComplexity {
    /// The AP value for the trade secret.
    @Minimum(1)
    let ap_value: Int
}
