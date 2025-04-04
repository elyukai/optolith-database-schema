//
//  DominationRitual.swift
//  OptolithDatabaseSchema
//

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

    public init(id: Int, check: SkillCheck, checkPenalty: SkillCheckPenalty? = nil, parameters: DominationRitualPerformanceParameters, property: PropertyReference, src: PublicationRefs, translations: LocaleMap<DominationRitualTranslation>) {
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

    public init(name: NonEmptyString, effect: ActivatableSkillEffect, cost: OldParameter, duration: OldParameter, errata: Errata? = nil) {
        self.name = name
        self.effect = effect
        self.cost = cost
        self.duration = duration
        self.errata = errata
    }
}

/// Measurable parameters of a curse.
public struct DominationRitualPerformanceParameters: EntitySubtype {
    /// The AE cost.
    public let cost: DominationRitualCost

    /// The duration.
    public let duration: DominationRitualDuration

    public init(cost: DominationRitualCost, duration: DominationRitualDuration) {
        self.cost = cost
        self.duration = duration
    }
}

public struct DominationRitualCost: EntitySubtype {
    /// The initial skill modification identifier/level.
    public let initialModificationLevel: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DominationRitualCostTranslation>?

    public init(initialModificationLevel: Int, translations: LocaleMap<DominationRitualCostTranslation>? = nil) {
        self.initialModificationLevel = initialModificationLevel
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case initialModificationLevel = "initial_modification_level"
        case translations = "translations"
    }
}

public struct DominationRitualCostTranslation: EntitySubtype {
    /// AE cost in addition to the normal AE cost.
    public let additional: ResponsiveText

    public init(additional: ResponsiveText) {
        self.additional = additional
    }
}

public enum DominationRitualDuration: EntitySubtype {
    case fixed(FixedDominationRitualDuration)
    case checkResultBased(CheckResultBasedDuration)
    case indefinite(IndefiniteDominationRitualDuration)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case fixed = "fixed"
        case checkResultBased = "check_result_based"
        case indefinite = "indefinite"
    }

    private enum Discriminator: String, Decodable {
        case fixed = "Fixed"
        case checkResultBased = "CheckResultBased"
        case indefinite = "Indefinite"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .fixed:
            self = .fixed(try container.decode(FixedDominationRitualDuration.self, forKey: .fixed))
        case .checkResultBased:
            self = .checkResultBased(try container.decode(CheckResultBasedDuration.self, forKey: .checkResultBased))
        case .indefinite:
            self = .indefinite(try container.decode(IndefiniteDominationRitualDuration.self, forKey: .indefinite))
        }
    }
}

public struct FixedDominationRitualDuration: EntitySubtype {
    /// The (unitless) duration value.
    public let value: Int

    /// The unit of the `value`.
    public let unit: DurationUnit

    public init(value: Int, unit: DurationUnit) {
        self.value = value
        self.unit = unit
    }
}

public struct IndefiniteDominationRitualDuration: EntitySubtype {
    /// Specified if the duration has a maximum time span.
    public let maximum: MaximumIndefiniteDominationRitualDuration?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteDurationTranslation>

    public init(maximum: MaximumIndefiniteDominationRitualDuration? = nil, translations: LocaleMap<IndefiniteDurationTranslation>) {
        self.maximum = maximum
        self.translations = translations
    }
}

public enum MaximumIndefiniteDominationRitualDuration: EntitySubtype {
    case fixed(FixedDominationRitualDuration)
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
            self = .fixed(try container.decode(FixedDominationRitualDuration.self, forKey: .fixed))
        case .checkResultBased:
            self = .checkResultBased(try container.decode(CheckResultBasedDuration.self, forKey: .checkResultBased))
        }
    }
}
