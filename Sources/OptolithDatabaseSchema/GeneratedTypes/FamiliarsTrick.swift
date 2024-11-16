//
//  FamiliarsTrick.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct FamiliarsTrick: LocalizableEntity {
    /// The familiar's trick's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The animal types this trick is available to. Either it is available to all
    /// or only a list of specific animal types.
    /// 
    /// If no animal types are given, the animal disease applies to all animal
    /// types.
    public let animalTypes: [AnimalTypeReference]
    
    /// Measurable parameters of a familiar's trick.
    public let parameters: FamiliarsTrickPerformanceParameters
    
    /// The property of the trick.
    public let property: FamiliarsTrickProperty
    
    /// The AP value the familiar has to pay for. It may also be that a specific is
    /// known by all familiar by default. In the latter case the field is not set.
    public let apValue: Int?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<FamiliarsTrickTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case animalTypes = "animal_types"
        case parameters = "parameters"
        case property = "property"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

@DiscriminatedEnum
public enum FamiliarsTrickProperty: EntitySubtype {
    case fixed(PropertyReference)
    case indefinite(IndefiniteFamiliarsTrickProperty)
}

public struct IndefiniteFamiliarsTrickProperty: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteFamiliarsTrickPropertyTranslation>
}

public struct IndefiniteFamiliarsTrickPropertyTranslation: EntitySubtype {
    /// A description of the property.
    public let description: ResponsiveText
}

public struct FamiliarsTrickTranslation: EntitySubtype {
    /// The name of the familiar's trick.
    public let name: String
    
    /// The effect description.
    public let effect: String
    
    @available(*, deprecated)
    public let cost: OldParameter
    
    @available(*, deprecated)
    public let duration: OldParameter
    
    public let errata: Errata?
}

/// Measurable parameters of a familiar's trick.
@DiscriminatedEnum
public enum FamiliarsTrickPerformanceParameters: EntitySubtype {
    case oneTime(FamiliarsTrickOneTimePerformanceParameters)
    case oneTimeInterval(FamiliarsTrickOneTimeIntervalPerformanceParameters)
    case sustained(FamiliarsTrickSustainedPerformanceParameters)
}

public struct FamiliarsTrickOneTimePerformanceParameters: EntitySubtype {
    public let cost: FamiliarsTrickOneTimeCost
    
    public let duration: FamiliarsTrickOneTimeDuration
}

@DiscriminatedEnum
public enum FamiliarsTrickOneTimeCost: EntitySubtype {
    case fixed(FamiliarsTrickFixedOneTimeCost)
    case all(FamiliarsTrickAllOneTimeCost)
    case indefinite(FamiliarsTrickIndefiniteOneTimeCost)
}

public struct FamiliarsTrickFixedOneTimeCost: EntitySubtype {
    /// The AE cost value.
    public let aeValue: Int
    
    /// The LP cost value.
    public let lpValue: Int?
    
    /// The interval in which you have to pay the AE cost again.
    public let interval: DurationUnitValue?
    
    /// All translations for the entry, identified by IETF language tag
    /// (BCP47).
    public let translations: LocaleMap<FamiliarsTrickFixedOneTimeCostTranslation>?    
    
    private enum CodingKeys: String, CodingKey {
        case aeValue = "ae_value"
        case lpValue = "lp_value"
        case interval = "interval"
        case translations = "translations"
    }
}

public struct FamiliarsTrickFixedOneTimeCostTranslation: EntitySubtype {
    /// The cost have to be per a specific countable entity, e.g. `8 KP
    /// per person`.
    public let per: ResponsiveTextOptional?
}

public struct FamiliarsTrickAllOneTimeCost: EntitySubtype {
    /// The minimum AE the familiar has to have.
    public let minimum: Int?
}

public struct FamiliarsTrickIndefiniteOneTimeCost: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag
    /// (BCP47).
    public let translations: LocaleMap<FamiliarsTrickIndefiniteOneTimeCostTranslation>
}

public struct FamiliarsTrickIndefiniteOneTimeCostTranslation: EntitySubtype {
    /// A description of the AE cost.
    public let description: ResponsiveText
}

@DiscriminatedEnum
public enum FamiliarsTrickOneTimeDuration: EntitySubtype {
    case immediate
    case fixed(FamiliarsTrickFixedOneTimeDuration)
    case indefinite(FamiliarsTrickIndefiniteOneTimeDuration)
}

public struct FamiliarsTrickFixedOneTimeDuration: EntitySubtype {
    /// If the duration is the maximum duration, so it may end earlier.
    public let isMaximum: Bool?
    
    /// The (unitless) duration.
    public let value: Int
    
    /// The duration unit.
    public let unit: DurationUnit
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<FamiliarsTrickFixedOneTimeDurationTranslation>?    
    
    private enum CodingKeys: String, CodingKey {
        case isMaximum = "is_maximum"
        case value = "value"
        case unit = "unit"
        case translations = "translations"
    }
}

public struct FamiliarsTrickFixedOneTimeDurationTranslation: EntitySubtype {
    /// A replacement string.
    public let replacement: ResponsiveTextReplace?
}

public struct FamiliarsTrickIndefiniteOneTimeDuration: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag
    /// (BCP47).
    public let translations: LocaleMap<FamiliarsTrickIndefiniteOneTimeDurationTranslation>
}

public struct FamiliarsTrickIndefiniteOneTimeDurationTranslation: EntitySubtype {
    /// A description of the duration.
    public let description: ResponsiveText
}

public struct FamiliarsTrickOneTimeIntervalPerformanceParameters: EntitySubtype {
    public let cost: FamiliarsTrickOneTimeIntervalCost
}

public struct FamiliarsTrickOneTimeIntervalCost: EntitySubtype {
    /// The AE cost value.
    public let aeValue: Int
    
    /// The LP cost value.
    public let lpValue: Int?
    
    /// The duration granted/added by paying the given AE cost.
    public let interval: DurationUnitValue    
    
    private enum CodingKeys: String, CodingKey {
        case aeValue = "ae_value"
        case lpValue = "lp_value"
        case interval = "interval"
    }
}

public struct FamiliarsTrickSustainedPerformanceParameters: EntitySubtype {
    public let cost: FamiliarsTrickSustainedCost
}

public struct FamiliarsTrickSustainedCost: EntitySubtype {
    /// The AE cost value.
    public let aeValue: Int
    
    /// The LP cost value.
    public let lpValue: Int?
    
    /// The interval in which you have to pay the AE cost again, if any.
    public let interval: DurationUnitValue?    
    
    private enum CodingKeys: String, CodingKey {
        case aeValue = "ae_value"
        case lpValue = "lp_value"
        case interval = "interval"
    }
}
