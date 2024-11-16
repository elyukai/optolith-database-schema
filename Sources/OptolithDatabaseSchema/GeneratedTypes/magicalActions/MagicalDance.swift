//
//  MagicalDance.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct MagicalDance: LocalizableEntity {
    /// The magical dance's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck
    
    /// Measurable parameters of a magical dance.
    public let parameters: MagicalDancePerformanceParameters
    
    /// The associated property.
    public let property: PropertyReference
    
    /// The music tradition(s) the magical dance is available for. This also defines the different names in each music tradition.
    public let musicTradition: [MusicTraditionReference]
    
    /// States which column is used to improve the skill.
    public let improvementCost: ImprovementCost
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalDanceTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case check = "check"
        case parameters = "parameters"
        case property = "property"
        case musicTradition = "music_tradition"
        case improvementCost = "improvement_cost"
        case src = "src"
        case translations = "translations"
    }
}

public struct MagicalDanceTranslation: EntitySubtype {
    /// The name of the magical dance.
    public let name: NonEmptyString
    
    /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
    public let effect: ActivatableSkillEffect
    
    @available(*, deprecated)
    public let duration: OldParameter
    
    @available(*, deprecated)
    public let cost: OldParameter
    
    public let errata: Errata?
}

/// Measurable parameters of a magical dance.
public struct MagicalDancePerformanceParameters: EntitySubtype {
    public let duration: MusicDuration
    
    public let cost: MagicalDanceCost
}

@DiscriminatedEnum
public enum MagicalDanceCost: EntitySubtype {
    case fixed(FixedMagicalDanceCost)
    case indefinite(IndefiniteMagicalDanceCost)
}

public struct FixedMagicalDanceCost: EntitySubtype {
    /// The (temporary) AE cost value.
    public let value: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<FamiliarsTrickFixedOneTimeCostTranslation>?
}

public struct IndefiniteMagicalDanceCost: EntitySubtype {
    /// Specified if the indefinite description's result value is to be modified by a certain number.
    public let modifier: CheckResultBasedModifier?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteOneTimeCostTranslation>
}
