//
//  Blessing.swift
//  OptolithDatabaseSchema
//

public struct Blessing: LocalizableEntity {
    /// The blessing's identifier. An unique, increasing integer.
    public let id: Int

    /// Measurable parameters of a blessing.
    public let parameters: BlessingPerformanceParameters

    /// The target category – the kind of creature or object – the skill affects.
    public let `target`: AffectedTargetCategories

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<BlessingTranslation>

    public init(id: Int, parameters: BlessingPerformanceParameters, `target`: AffectedTargetCategories, src: PublicationRefs, translations: LocaleMap<BlessingTranslation>) {
        self.id = id
        self.parameters = parameters
        self.`target` = `target`
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case parameters = "parameters"
        case `target` = "target"
        case src = "src"
        case translations = "translations"
    }
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
    public let `target`: String

    public let errata: Errata?

    public init(name: String, effect: String, range: String, duration: String, `target`: String, errata: Errata? = nil) {
        self.name = name
        self.effect = effect
        self.range = range
        self.duration = duration
        self.`target` = `target`
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case effect = "effect"
        case range = "range"
        case duration = "duration"
        case `target` = "target"
        case errata = "errata"
    }
}

/// Measurable parameters of a blessing.
public struct BlessingPerformanceParameters: EntitySubtype {
    public let range: BlessingRange

    public let duration: BlessingDuration

    public init(range: BlessingRange, duration: BlessingDuration) {
        self.range = range
        self.duration = duration
    }
}

public enum BlessingRange: EntitySubtype {
    case `self`
    case touch
    case fixed(FixedRange)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case `self` = "self"
        case touch = "touch"
        case fixed = "fixed"
    }

    private enum Discriminator: String, Decodable {
        case `self` = "Self"
        case touch = "Touch"
        case fixed = "Fixed"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .`self`:
            self = .`self`
        case .touch:
            self = .touch
        case .fixed:
            self = .fixed(try container.decode(FixedRange.self, forKey: .fixed))
        }
    }
}

public enum BlessingDuration: EntitySubtype {
    case immediate
    case fixed(FixedBlessingDuration)
    case indefinite(IndefiniteBlessingDuration)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case immediate = "immediate"
        case fixed = "fixed"
        case indefinite = "indefinite"
    }

    private enum Discriminator: String, Decodable {
        case immediate = "Immediate"
        case fixed = "Fixed"
        case indefinite = "Indefinite"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .immediate:
            self = .immediate
        case .fixed:
            self = .fixed(try container.decode(FixedBlessingDuration.self, forKey: .fixed))
        case .indefinite:
            self = .indefinite(try container.decode(IndefiniteBlessingDuration.self, forKey: .indefinite))
        }
    }
}

public struct FixedBlessingDuration: EntitySubtype {
    /// The (unitless) duration.
    public let value: Int

    /// The duration unit.
    public let unit: DurationUnit

    public init(value: Int, unit: DurationUnit) {
        self.value = value
        self.unit = unit
    }
}

public struct IndefiniteBlessingDuration: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteBlessingDurationTranslation>

    public init(translations: LocaleMap<IndefiniteBlessingDurationTranslation>) {
        self.translations = translations
    }
}

public struct IndefiniteBlessingDurationTranslation: EntitySubtype {
    /// A description of the duration.
    public let description: ResponsiveText

    public init(description: ResponsiveText) {
        self.description = description
    }
}
