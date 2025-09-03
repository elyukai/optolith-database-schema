import FileDB

@Model
public struct FamiliarsTrick {
    /// The animal types this trick is available to. Either it is available to all or only a list of specific animal types.
    ///
    /// If no animal types are given, the animal disease applies to all animal types.
    @UniqueItems
    @Relationship(AnimalType.self)
    let animal_types: [AnimalType.ID]

    /// Measurable parameters of a familiar’s trick.
    let parameters: FamiliarsTrickPerformanceParameters

    /// The associated property.
    let property: FamiliarsTrickProperty

    /// The AP value the familiar has to pay for. It may also be that a specific is known by all familiar by default. In the latter case the field is not set.
    @Minimum(1)
    let ap_value: Int?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // FamiliarsTrickTranslation
        /// The familiar’s trick’s name.
        @MinLength(1)
        let name: String

        /// The effect description.
        @MinLength(1)
        @Markdown
        let effect: String

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let cost: OldParameter

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let duration: OldParameter

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@ModelEnum
public enum FamiliarsTrickProperty {
    case fixed(PropertyIdentifierObject)
    case indefinite(IndefiniteFamiliarsTrickProperty)
}

@Embedded
public struct IndefiniteFamiliarsTrickProperty {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    struct Translation {  // IndefiniteFamiliarsTrickPropertyTranslation
        /// A description of the property.
        let description: ResponsiveText
    }
}

/// Measurable parameters of a familiar’s trick.
@ModelEnum
public enum FamiliarsTrickPerformanceParameters {
    case oneTime(FamiliarsTrickOneTimePerformanceParameters)
    case oneTimeInterval(FamiliarsTrickOneTimeIntervalPerformanceParameters)
    case sustained(FamiliarsTrickSustainedPerformanceParameters)
}

@Embedded
public struct FamiliarsTrickOneTimePerformanceParameters {
    let cost: FamiliarsTrickOneTimeCost

    let duration: FamiliarsTrickOneTimeDuration
}

@ModelEnum
public enum FamiliarsTrickOneTimeCost {
    case fixed(FamiliarsTrickFixedOneTimeCost)
    case all(FamiliarsTrickAllOneTimeCost)
    case indefinite(IndefiniteOneTimeCost)
}

@Embedded
public struct FamiliarsTrickFixedOneTimeCost {
    /// The AE cost value.
    @Minimum(1)
    let ae_value: Int

    /// The LP cost value.
    @Minimum(1)
    let lp_value: Int?

    /// The interval in which you have to pay the AE cost again.
    let interval: DurationUnitValue?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation {  // FamiliarsTrickFixedOneTimeCostTranslation
        /// The cost have to be per a specific countable entity, e.g. `8 KP per person`.
        let per: ResponsiveTextOptional?
    }
}

@Embedded
public struct FamiliarsTrickAllOneTimeCost {
    /// The minimum AE the familiar has to have/spend.
    @Minimum(1)
    let minimum: Int?
}

@ModelEnum
public enum FamiliarsTrickOneTimeDuration {
    case immediate
    case fixed(FixedDuration)
    case indefinite(IndefiniteDuration)
}

@Embedded
public struct FamiliarsTrickOneTimeIntervalPerformanceParameters {
    let cost: FamiliarsTrickOneTimeIntervalCost
}

@Embedded
public struct FamiliarsTrickOneTimeIntervalCost {
    /// The AE cost value.
    @Minimum(1)
    let ae_value: Int

    /// The LP cost value.
    @Minimum(1)
    let lp_value: Int?

    /// The duration granted/added by paying the given AE cost.
    let interval: DurationUnitValue
}

@Embedded
public struct FamiliarsTrickSustainedPerformanceParameters {
    let cost: FamiliarsTrickSustainedCost
}

@Embedded
public struct FamiliarsTrickSustainedCost {
    /// The AE cost value.
    @Minimum(1)
    let ae_value: Int

    /// The LP cost value.
    @Minimum(1)
    let lp_value: Int?

    /// The interval in which you have to pay the AE cost again.
    let interval: DurationUnitValue?
}
