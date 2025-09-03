import FileDB

@Model
public struct MagicalMelody {
    /// Lists the linked three attributes used to make a skill check.
    let check: SkillCheck

    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    let check_penalty: SkillCheckPenalty?

    /// To enhance their songs, elves can make a check on either *Singing (Two-Voiced Singing)* or *Music (appropriate application)* (or both) before making the check for the song.
    @MinItems(1)
    @MaxItems(2)
    @UniqueItems
    @Relationship(Skill.self)
    let skill: [Skill.ID]

    /// Measurable parameters of a magical melody.
    let parameters: MagicalMelodyPerformanceParameters

    /// The associated property.
    @Relationship(Property.self)
    let property: Property.ID

    /// The music tradition(s) the magical melody is available for. This also defines the different names in each music tradition.
    @MinItems(1)
    let music_tradition: [ArcaneBardTraditionReference]?

    /// States which column is used to improve the skill.
    let improvement_cost: ImprovementCost

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // MagicalMelodyTranslation
        /// The magical melody’s name.
        @MinLength(1)
        let name: String

        /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
        let effect: ActivatableSkillEffect

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let duration: OldParameter

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let cost: OldParameter

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

/// Measurable parameters of a magical melody.
@Embedded
public struct MagicalMelodyPerformanceParameters {
    /// The duration.
    let duration: MusicDuration

    /// The AE cost.
    let cost: MagicalMelodyCost
}

@ModelEnum
public enum MagicalMelodyCost {
    case fixed(FixedMagicalMelodyCost)
    case firstPerson(FirstPersonMagicalMelodyCost)
}

@Embedded
public struct FixedMagicalMelodyCost {
    /// The (temporary) AE cost value.
    @Minimum(1)
    let value: Int
}

@Embedded
public struct FirstPersonMagicalMelodyCost {
    /// The (temporary) AE cost value for the first targeted person. The AE cost for each additional person is half this value.
    @Minimum(1)
    @MultipleOf(2)
    let value: Int
}

/// A reference to an arcane bard tradition with the music-tradition-specific name of the entry.
@Embedded
public struct ArcaneBardTraditionReference {
    /// The music tradition’s identifier.
    @Relationship(ArcaneBardTradition.self)
    let id: ArcaneBardTradition.ID

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // ArcaneBardTraditionReferenceTranslation
        /// The music-tradition-specific name of the entry.
        @MinLength(1)
        let name: String
    }
}
