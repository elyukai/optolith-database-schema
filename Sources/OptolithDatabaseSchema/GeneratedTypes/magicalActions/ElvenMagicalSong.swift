//
//  ElvenMagicalSong.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct ElvenMagicalSong: LocalizableEntity {
    /// The elven magical song's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck
    
    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    public let checkPenalty: SkillCheckPenalty?
    
    /// To enhance their songs, elves can make a check on either *Singing
    /// (Two-Voiced Singing)* or *Music (appropriate application)* before making
    /// the check for the song.
    public let skill: [MusicalSkillReference]
    
    /// Measurable parameters of an elven magical song.
    public let parameters: ElvenMagicalSongPerformanceParameters
    
    /// The associated property.
    public let property: PropertyReference
    
    /// States which column is used to improve the skill.
    public let improvementCost: ImprovementCost
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ElvenMagicalSongTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case check = "check"
        case checkPenalty = "check_penalty"
        case skill = "skill"
        case parameters = "parameters"
        case property = "property"
        case improvementCost = "improvement_cost"
        case src = "src"
        case translations = "translations"
    }
}

public struct ElvenMagicalSongTranslation: EntitySubtype {
    /// The name of the elven magical song.
    public let name: NonEmptyString
    
    /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
    public let effect: ActivatableSkillEffect
    
    @available(*, deprecated)
    public let cost: OldParameter
    
    public let errata: Errata?
}

/// Measurable parameters of an elven magical song.
public struct ElvenMagicalSongPerformanceParameters: EntitySubtype {
    /// The AE cost.
    public let cost: ElvenMagicalSongCost
}

public struct ElvenMagicalSongCost: EntitySubtype {
    /// The (temporary) AE cost value.
    public let value: Int
    
    /// Specified if the AE cost `value` has to be paid for each time interval.
    public let interval: DurationUnitValue?
    
    /// A permanent AE cost, independent from a possible interval.
    public let permanent: ElvenMagicalSongPermanentCost?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ElvenMagicalSongCostTranslation>?
}

public struct ElvenMagicalSongPermanentCost: EntitySubtype {
    /// The permanent AE cost value.
    public let value: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ElvenMagicalSongPermanentCostTranslation>?
}

public struct ElvenMagicalSongPermanentCostTranslation: EntitySubtype {
    /// A replacement string for the permanent cost.
    public let replacement: ResponsiveTextReplace
}

public struct ElvenMagicalSongCostTranslation: EntitySubtype {
    /// The cost have to be per a specific countable entity, e.g. `8 AE per person`.
    public let per: ResponsiveText
}
