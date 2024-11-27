//
//  Curse.swift
//  OptolithDatabaseSchema
//

public struct Curse: LocalizableEntity {
    /// The curse's identifier. An unique, increasing integer.
    public let id: Int

    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck

    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    public let checkPenalty: SkillCheckPenalty?

    /// Measurable parameters of a curse.
    public let parameters: CursePerformanceParameters

    /// The associated property.
    public let property: PropertyReference

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CurseTranslation>

    public init(id: Int, check: SkillCheck, checkPenalty: SkillCheckPenalty? = nil, parameters: CursePerformanceParameters, property: PropertyReference, src: PublicationRefs, translations: LocaleMap<CurseTranslation>) {
        self.id = id
        self.check = check
        self.checkPenalty = checkPenalty
        self.parameters = parameters
        self.property = property
        self.src = src
        self.translations = translations
    }

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

public struct CurseTranslation: EntitySubtype {
    /// The name of the curse.
    public let name: NonEmptyString

    /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
    public let effect: ActivatableSkillEffect

    @available(*, deprecated)
    public let cost: OldParameter

    @available(*, deprecated)
    public let duration: OldParameter

    public let errata: Errata?

    public init(name: NonEmptyString, effect: ActivatableSkillEffect, cost: OldParameter, duration: OldParameter, errata: Errata? = nil) {
        self.name = name
        self.effect = effect
        self.cost = cost
        self.duration = duration
        self.errata = errata
    }
}

/// Measurable parameters of a curse.
public struct CursePerformanceParameters: EntitySubtype {
    /// The AE cost.
    public let cost: CurseCost

    /// The duration.
    public let duration: CurseDuration

    public init(cost: CurseCost, duration: CurseDuration) {
        self.cost = cost
        self.duration = duration
    }
}

public enum CurseCost: EntitySubtype {
    case fixed(FixedCurseCost)
    case indefinite(IndefiniteOneTimeCost)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case fixed = "fixed"
        case indefinite = "indefinite"
    }

    private enum Discriminator: String, Decodable {
        case fixed = "Fixed"
        case indefinite = "Indefinite"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .fixed:
            self = .fixed(try container.decode(FixedCurseCost.self, forKey: .fixed))
        case .indefinite:
            self = .indefinite(try container.decode(IndefiniteOneTimeCost.self, forKey: .indefinite))
        }
    }
}

public struct FixedCurseCost: EntitySubtype {
    /// The (temporary) AE cost value.
    public let value: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<FixedCurseCostTranslation>?

    public init(value: Int, translations: LocaleMap<FixedCurseCostTranslation>? = nil) {
        self.value = value
        self.translations = translations
    }
}

public struct FixedCurseCostTranslation: EntitySubtype {
    /// The cost have to be per a specific countable entity, e.g. `8 KP per person`.
    public let per: ResponsiveText?

    /// A note, appended to the generated string in parenthesis.
    public let note: ResponsiveTextOptional?

    public init(per: ResponsiveText? = nil, note: ResponsiveTextOptional? = nil) {
        self.per = per
        self.note = note
    }
}

public enum CurseDuration: EntitySubtype {
    case immediate
    case fixed(FixedCurseDuration)
    case checkResultBased(CheckResultBasedDuration)
    case indefinite(IndefiniteCurseDuration)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case immediate = "immediate"
        case fixed = "fixed"
        case checkResultBased = "check_result_based"
        case indefinite = "indefinite"
    }

    private enum Discriminator: String, Decodable {
        case immediate = "Immediate"
        case fixed = "Fixed"
        case checkResultBased = "CheckResultBased"
        case indefinite = "Indefinite"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .immediate:
            self = .immediate
        case .fixed:
            self = .fixed(try container.decode(FixedCurseDuration.self, forKey: .fixed))
        case .checkResultBased:
            self = .checkResultBased(try container.decode(CheckResultBasedDuration.self, forKey: .checkResultBased))
        case .indefinite:
            self = .indefinite(try container.decode(IndefiniteCurseDuration.self, forKey: .indefinite))
        }
    }
}

public struct FixedCurseDuration: EntitySubtype {
    /// The (unitless) duration value.
    public let value: Int

    /// The unit of the `value`.
    public let unit: DurationUnit

    public init(value: Int, unit: DurationUnit) {
        self.value = value
        self.unit = unit
    }
}

public struct IndefiniteCurseDuration: EntitySubtype {
    /// Specified if the duration has a maximum time span.
    public let maximum: MaximumIndefiniteCurseDuration?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteDurationTranslation>

    public init(maximum: MaximumIndefiniteCurseDuration? = nil, translations: LocaleMap<IndefiniteDurationTranslation>) {
        self.maximum = maximum
        self.translations = translations
    }
}

public enum MaximumIndefiniteCurseDuration: EntitySubtype {
    case fixed(FixedCurseDuration)
    case checkResultBased(CheckResultBasedDuration)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case fixed = "fixed"
        case checkResultBased = "check_result_based"
    }

    private enum Discriminator: String, Decodable {
        case fixed = "Fixed"
        case checkResultBased = "CheckResultBased"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .fixed:
            self = .fixed(try container.decode(FixedCurseDuration.self, forKey: .fixed))
        case .checkResultBased:
            self = .checkResultBased(try container.decode(CheckResultBasedDuration.self, forKey: .checkResultBased))
        }
    }
}
