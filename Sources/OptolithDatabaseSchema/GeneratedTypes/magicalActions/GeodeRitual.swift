//
//  GeodeRitual.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct GeodeRitual: LocalizableEntity {
    /// The geode ritual's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck
    
    /// Measurable parameters of a geode ritual.
    public let parameters: GeodeRitualPerformanceParameters
    
    /// The target category – the kind of creature or object – the skill affects.
    public let target: AffectedTargetCategories
    
    /// The associated property.
    public let property: PropertyReference
    
    public let prerequisites: GeodeRitualPrerequisites?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<GeodeRitualTranslation>
}

public struct GeodeRitualTranslation: EntitySubtype {
    /// The name of the geode ritual.
    public let name: NonEmptyString
    
    /// The effect description may be either a plain text or a text that is
    /// divided by a list of effects for each quality level. It may also be a
    /// list for each two quality levels.
    public let effect: ActivatableSkillEffect
    
    @available(*, deprecated)
    public let castingTime: OldParameter
    
    @available(*, deprecated)
    public let cost: OldParameter
    
    @available(*, deprecated)
    public let range: OldParameter
    
    @available(*, deprecated)
    public let duration: OldParameter
    
    @available(*, deprecated)
    public let target: String
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case effect = "effect"
        case castingTime = "casting_time"
        case cost = "cost"
        case range = "range"
        case duration = "duration"
        case target = "target"
        case errata = "errata"
    }
}

/// Measurable parameters of a geode ritual.
public struct GeodeRitualPerformanceParameters: EntitySubtype {
    /// The casting time.
    public let castingTime: GeodeRitualCastingTime
    
    /// The AE cost.
    public let cost: GeodeRitualCost
    
    /// The range.
    public let range: GeodeRitualRange
    
    /// The duration.
    public let duration: GeodeRitualDuration    
    
    private enum CodingKeys: String, CodingKey {
        case castingTime = "casting_time"
        case cost = "cost"
        case range = "range"
        case duration = "duration"
    }
}

public struct GeodeRitualCastingTime: EntitySubtype {
    /// The (unitless) casting time.
    public let value: Int
    
    /// The casting time unit.
    public let unit: SlowSkillCastingTimeUnit
}

@DiscriminatedEnum
public enum GeodeRitualCost: EntitySubtype {
    case fixed(FixedGeodeRitualCost)
    case map(CostMap)
}

public struct FixedGeodeRitualCost: EntitySubtype {
    /// The AE cost value.
    public let value: Int
}

@DiscriminatedEnum
public enum GeodeRitualRange: EntitySubtype {
    case `self`
    case fixed(FixedGeodeRitualRange)
}

public struct FixedGeodeRitualRange: EntitySubtype {
    /// The range in steps/m.
    public let value: Int
}

@DiscriminatedEnum
public enum GeodeRitualDuration: EntitySubtype {
    case immediate
    case fixed(FixedGeodeRitualDuration)
    case checkResultBased(CheckResultBasedDuration)
}

public struct FixedGeodeRitualDuration: EntitySubtype {
    /// The (unitless) duration.
    public let value: Int
    
    /// The duration unit.
    public let unit: DurationUnit
}
