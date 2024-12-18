//
//  GeodeRitual.swift
//  OptolithDatabaseSchema
//

public struct GeodeRitual: LocalizableEntity {
    /// The geode ritual's identifier. An unique, increasing integer.
    public let id: Int

    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck

    /// Measurable parameters of a geode ritual.
    public let parameters: GeodeRitualPerformanceParameters

    /// The target category – the kind of creature or object – the skill affects.
    public let `target`: AffectedTargetCategories

    /// The associated property.
    public let property: PropertyReference

    public let prerequisites: GeodeRitualPrerequisites?

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<GeodeRitualTranslation>

    public init(id: Int, check: SkillCheck, parameters: GeodeRitualPerformanceParameters, `target`: AffectedTargetCategories, property: PropertyReference, prerequisites: GeodeRitualPrerequisites? = nil, src: PublicationRefs, translations: LocaleMap<GeodeRitualTranslation>) {
        self.id = id
        self.check = check
        self.parameters = parameters
        self.`target` = `target`
        self.property = property
        self.prerequisites = prerequisites
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case check = "check"
        case parameters = "parameters"
        case `target` = "target"
        case property = "property"
        case prerequisites = "prerequisites"
        case src = "src"
        case translations = "translations"
    }
}

public struct GeodeRitualTranslation: EntitySubtype {
    /// The name of the geode ritual.
    public let name: NonEmptyString

    /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
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
    public let `target`: String

    public let errata: Errata?

    public init(name: NonEmptyString, effect: ActivatableSkillEffect, castingTime: OldParameter, cost: OldParameter, range: OldParameter, duration: OldParameter, `target`: String, errata: Errata? = nil) {
        self.name = name
        self.effect = effect
        self.castingTime = castingTime
        self.cost = cost
        self.range = range
        self.duration = duration
        self.`target` = `target`
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case effect = "effect"
        case castingTime = "casting_time"
        case cost = "cost"
        case range = "range"
        case duration = "duration"
        case `target` = "target"
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

    public init(castingTime: GeodeRitualCastingTime, cost: GeodeRitualCost, range: GeodeRitualRange, duration: GeodeRitualDuration) {
        self.castingTime = castingTime
        self.cost = cost
        self.range = range
        self.duration = duration
    }

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

    public init(value: Int, unit: SlowSkillCastingTimeUnit) {
        self.value = value
        self.unit = unit
    }
}

public enum GeodeRitualCost: EntitySubtype {
    case fixed(FixedGeodeRitualCost)
    case map(CostMap)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case fixed = "fixed"
        case map = "map"
    }

    private enum Discriminator: String, Decodable {
        case fixed = "Fixed"
        case map = "Map"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .fixed:
            self = .fixed(try container.decode(FixedGeodeRitualCost.self, forKey: .fixed))
        case .map:
            self = .map(try container.decode(CostMap.self, forKey: .map))
        }
    }
}

public struct FixedGeodeRitualCost: EntitySubtype {
    /// The AE cost value.
    public let value: Int

    public init(value: Int) {
        self.value = value
    }
}

public enum GeodeRitualRange: EntitySubtype {
    case `self`
    case fixed(FixedGeodeRitualRange)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case `self` = "self"
        case fixed = "fixed"
    }

    private enum Discriminator: String, Decodable {
        case `self` = "Self"
        case fixed = "Fixed"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .`self`:
            self = .`self`
        case .fixed:
            self = .fixed(try container.decode(FixedGeodeRitualRange.self, forKey: .fixed))
        }
    }
}

public struct FixedGeodeRitualRange: EntitySubtype {
    /// The range in steps/m.
    public let value: Int

    public init(value: Int) {
        self.value = value
    }
}

public enum GeodeRitualDuration: EntitySubtype {
    case immediate
    case fixed(FixedGeodeRitualDuration)
    case checkResultBased(CheckResultBasedDuration)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case immediate = "immediate"
        case fixed = "fixed"
        case checkResultBased = "check_result_based"
    }

    private enum Discriminator: String, Decodable {
        case immediate = "Immediate"
        case fixed = "Fixed"
        case checkResultBased = "CheckResultBased"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .immediate:
            self = .immediate
        case .fixed:
            self = .fixed(try container.decode(FixedGeodeRitualDuration.self, forKey: .fixed))
        case .checkResultBased:
            self = .checkResultBased(try container.decode(CheckResultBasedDuration.self, forKey: .checkResultBased))
        }
    }
}

public struct FixedGeodeRitualDuration: EntitySubtype {
    /// The (unitless) duration.
    public let value: Int

    /// The duration unit.
    public let unit: DurationUnit

    public init(value: Int, unit: DurationUnit) {
        self.value = value
        self.unit = unit
    }
}
