//
//  DominationRitual.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct DominationRitual: LocalizableEntity {
    /// The domination ritual's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck
    
    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    public let checkPenalty: SkillCheckPenalty?
    
    /// Measurable parameters of a curse.
    public let parameters: DominationRitualPerformanceParameters
    
    /// The associated property.
    public let property: PropertyReference
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DominationRitualTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case check = "check"
        case checkPenalty = "check_penalty"
        case parameters = "parameters"
        case property = "property"
        case src = "src"
        case translations = "translations"
    }
}

public struct DominationRitualTranslation: EntitySubtype {
    /// The name of the domination ritual.
    public let name: NonEmptyString
    
    /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
    public let effect: ActivatableSkillEffect
    
    @available(*, deprecated)
    public let cost: OldParameter
    
    @available(*, deprecated)
    public let duration: OldParameter
    
    public let errata: Errata?
}

/// Measurable parameters of a curse.
public struct DominationRitualPerformanceParameters: EntitySubtype {
    /// The AE cost.
    public let cost: DominationRitualCost
    
    /// The duration.
    public let duration: DominationRitualDuration
}

public struct DominationRitualCost: EntitySubtype {
    /// The initial skill modification identifier/level.
    public let initialModificationLevel: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DominationRitualCostTranslation>?    
    
    private enum CodingKeys: String, CodingKey {
        case initialModificationLevel = "initial_modification_level"
        case translations = "translations"
    }
}

public struct DominationRitualCostTranslation: EntitySubtype {
    /// AE cost in addition to the normal AE cost.
    public let additional: ResponsiveText
}

@DiscriminatedEnum
public enum DominationRitualDuration: EntitySubtype {
    case fixed(FixedDominationRitualDuration)
    case checkResultBased(CheckResultBasedDuration)
    case indefinite(IndefiniteDominationRitualDuration)
}

public struct FixedDominationRitualDuration: EntitySubtype {
    /// The (unitless) duration value.
    public let value: Int
    
    /// The unit of the `value`.
    public let unit: DurationUnit
}

public struct IndefiniteDominationRitualDuration: EntitySubtype {
    /// Specified if the duration has a maximum time span.
    public let maximum: MaximumIndefiniteDominationRitualDuration?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteDurationTranslation>
}

@DiscriminatedEnum
public enum MaximumIndefiniteDominationRitualDuration: EntitySubtype {
    case fixed(FixedDominationRitualDuration)
    case checkResultBased(CheckResultBasedDuration)
}
