//
//  Cantrip.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Cantrip: LocalizableEntity {
    /// The cantrip's identifier. An unique, increasing integer.
    public let id: Int

    /// Measurable parameters of a cantrip.
    public let parameters: CantripPerformanceParameters

    /// The target category – the kind of creature or object – the skill affects.
    public let target: AffectedTargetCategories

    /// The associated property.
    public let property: PropertyReference

    /// A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in.
    public let note: CantripNote?

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CantripTranslation>

    public let enhancements: Enhancements?

    public init(id: Int, parameters: CantripPerformanceParameters, target: AffectedTargetCategories, property: PropertyReference, note: CantripNote? = nil, src: PublicationRefs, translations: LocaleMap<CantripTranslation>, enhancements: Enhancements? = nil) {
        self.id = id
        self.parameters = parameters
        self.target = target
        self.property = property
        self.note = note
        self.src = src
        self.translations = translations
        self.enhancements = enhancements
    }
}

@DiscriminatedEnum
public enum CantripNote: EntitySubtype {
    case exclusive(ExclusiveCantripNote)
    case common(CommonCantripNotes)
}

public struct ExclusiveCantripNote: EntitySubtype {
    /// The traditions the cantrip is exclusively available to.
    public let traditions: [MagicalTraditionReference]

    public init(traditions: [MagicalTraditionReference]) {
        self.traditions = traditions
    }
}

public struct CommonCantripNotes: EntitySubtype {
    /// The academies and traditions the cantrip is commonly teached in.
    public let list: [CommonCantripNote]

    public init(list: [CommonCantripNote]) {
        self.list = list
    }
}

@DiscriminatedEnum
public enum CommonCantripNote: EntitySubtype {
    case academy(CurriculumReference)
    case tradition(CommonCantripTraditionNote)
}

public struct CommonCantripTraditionNote: EntitySubtype {
    /// The magical tradition's identifier.
    public let id: MagicalTraditionIdentifier

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CommonCantripTraditionNoteTranslation>?

    public init(id: MagicalTraditionIdentifier, translations: LocaleMap<CommonCantripTraditionNoteTranslation>? = nil) {
        self.id = id
        self.translations = translations
    }
}

public struct CommonCantripTraditionNoteTranslation: EntitySubtype {
    /// A note, appended to the generated string in parenthesis.
    public let note: String

    public init(note: String) {
        self.note = note
    }
}

public struct CantripTranslation: EntitySubtype {
    /// The name of the spell.
    public let name: String

    /// The effect description.
    public let effect: String

    @available(*, deprecated)
    public let range: String

    @available(*, deprecated)
    public let duration: String

    @available(*, deprecated)
    public let target: String

    public let errata: Errata?

    public init(name: String, effect: String, range: String, duration: String, target: String, errata: Errata? = nil) {
        self.name = name
        self.effect = effect
        self.range = range
        self.duration = duration
        self.target = target
        self.errata = errata
    }
}

/// Measurable parameters of a blessing.
public struct CantripPerformanceParameters: EntitySubtype {
    public let range: CantripRange

    public let duration: CantripDuration

    public init(range: CantripRange, duration: CantripDuration) {
        self.range = range
        self.duration = duration
    }
}

@DiscriminatedEnum
public enum CantripRange: EntitySubtype {
    case `self`
    case touch
    case fixed(FixedRange)
}

@DiscriminatedEnum
public enum CantripDuration: EntitySubtype {
    case immediate
    case fixed(FixedCantripDuration)
    case duringLovemaking(CastingTimeDuringLovemaking)
    case indefinite(IndefiniteCantripDuration)
}

public struct FixedCantripDuration: EntitySubtype {
    /// If `true`, the duration is a maximum duration.
    public let isMaximum: Bool?

    /// The (unitless) duration.
    public let value: Int

    /// The duration unit.
    public let unit: DurationUnit

    public init(isMaximum: Bool? = nil, value: Int, unit: DurationUnit) {
        self.isMaximum = isMaximum
        self.value = value
        self.unit = unit
    }

    private enum CodingKeys: String, CodingKey {
        case isMaximum = "is_maximum"
        case value = "value"
        case unit = "unit"
    }
}

public struct IndefiniteCantripDuration: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<IndefiniteCantripDurationTranslation>

    public init(translations: LocaleMap<IndefiniteCantripDurationTranslation>) {
        self.translations = translations
    }
}

public struct IndefiniteCantripDurationTranslation: EntitySubtype {
    /// A description of the duration.
    public let description: ResponsiveText

    public init(description: ResponsiveText) {
        self.description = description
    }
}
