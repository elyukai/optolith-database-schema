//
//  Blessing.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Blessing: LocalizableEntity {
    /// The blessing's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Measurable parameters of a blessing.
    public let parameters: BlessingPerformanceParameters
    
    /// The target category – the kind of creature or object – the skill affects.
    public let target: AffectedTargetCategories
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<BlessingTranslation>
}

public struct BlessingTranslation: EntitySubtype {
    /// The name of the blessing.
    public let name: String
    
    /// The effect description.
    public let effect: String
    
    @available(*, deprecated)
    public let range: String
    
    @available(*, deprecated)
    public let duration: String
    
    @available(*, deprecated)
    public let target: String
    
    public let errata: Errata?
}

/// Measurable parameters of a blessing.
public struct BlessingPerformanceParameters: EntitySubtype {
    public let range: BlessingRange
    
    public let duration: BlessingDuration
}

@DiscriminatedEnum
public enum BlessingRange: EntitySubtype {
    case `self`
    case touch
    case fixed(FixedRange)
}

@DiscriminatedEnum
public enum BlessingDuration: EntitySubtype {
    case immediate
    case fixed(FixedBlessingDuration)
    case indefinite(IndefiniteBlessingDuration)
}

public struct FixedBlessingDuration: EntitySubtype {
    /// The (unitless) duration.
    public let value: Int
    
    /// The duration unit.
    public let unit: DurationUnit
}

public struct IndefiniteBlessingDuration: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteBlessingDurationTranslation>
}

public struct IndefiniteBlessingDurationTranslation: EntitySubtype {
    /// A description of the duration.
    public let description: ResponsiveText
}
