//
//  MagicalMelody.swift
//  OptolithDatabaseSchema
//

public struct MagicalMelody: LocalizableEntity {
    /// The magical melody's identifier. An unique, increasing integer.
    public let id: Int

    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck

    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    public let checkPenalty: SkillCheckPenalty?

    /// Arcane bards must make a *Singing (area of application)* or *Music (area of application)* check for each magical melody.
    public let skill: [MusicalSkillReference]

    /// Measurable parameters of a magical melody.
    public let parameters: MagicalMelodyPerformanceParameters

    /// The associated property.
    public let property: PropertyReference

    /// The music tradition(s) the magical melody is available for. This also defines the different names in each music tradition.
    public let musicTradition: [MusicTraditionReference]

    /// States which column is used to improve the skill.
    public let improvementCost: ImprovementCost

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalMelodyTranslation>

    public init(id: Int, check: SkillCheck, checkPenalty: SkillCheckPenalty? = nil, skill: [MusicalSkillReference], parameters: MagicalMelodyPerformanceParameters, property: PropertyReference, musicTradition: [MusicTraditionReference], improvementCost: ImprovementCost, src: PublicationRefs, translations: LocaleMap<MagicalMelodyTranslation>) {
        self.id = id
        self.check = check
        self.checkPenalty = checkPenalty
        self.skill = skill
        self.parameters = parameters
        self.property = property
        self.musicTradition = musicTradition
        self.improvementCost = improvementCost
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case check = "check"
        case checkPenalty = "check_penalty"
        case skill = "skill"
        case parameters = "parameters"
        case property = "property"
        case musicTradition = "music_tradition"
        case improvementCost = "improvement_cost"
        case src = "src"
        case translations = "translations"
    }
}

public struct MagicalMelodyTranslation: EntitySubtype {
    /// The name of the magical melody.
    public let name: NonEmptyString

    /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
    public let effect: ActivatableSkillEffect

    @available(*, deprecated)
    public let duration: OldParameter

    @available(*, deprecated)
    public let cost: OldParameter

    public let errata: Errata?

    public init(name: NonEmptyString, effect: ActivatableSkillEffect, duration: OldParameter, cost: OldParameter, errata: Errata? = nil) {
        self.name = name
        self.effect = effect
        self.duration = duration
        self.cost = cost
        self.errata = errata
    }
}

/// Measurable parameters of a magical melody.
public struct MagicalMelodyPerformanceParameters: EntitySubtype {
    public let duration: MusicDuration

    public let cost: MagicalMelodyCost

    public init(duration: MusicDuration, cost: MagicalMelodyCost) {
        self.duration = duration
        self.cost = cost
    }
}

public enum MagicalMelodyCost: EntitySubtype {
    case fixed(FixedMagicalMelodyCost)
    case firstPerson(FirstPersonMagicalMelodyCost)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case fixed = "fixed"
        case firstPerson = "first_person"
    }

    private enum Discriminator: String, Decodable {
        case fixed = "Fixed"
        case firstPerson = "FirstPerson"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .fixed:
            self = .fixed(try container.decode(FixedMagicalMelodyCost.self, forKey: .fixed))
        case .firstPerson:
            self = .firstPerson(try container.decode(FirstPersonMagicalMelodyCost.self, forKey: .firstPerson))
        }
    }
}

public struct FixedMagicalMelodyCost: EntitySubtype {
    /// The (temporary) AE cost value.
    public let value: Int

    public init(value: Int) {
        self.value = value
    }
}

public struct FirstPersonMagicalMelodyCost: EntitySubtype {
    /// The (temporary) AE cost value for the first targeted person. The AE cost for each additional person is half this value.
    public let value: Int

    public init(value: Int) {
        self.value = value
    }
}
