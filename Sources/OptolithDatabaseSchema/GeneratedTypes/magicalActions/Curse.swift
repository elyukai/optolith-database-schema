//
//  Curse.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

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

@DiscriminatedEnum
public enum CurseCost: EntitySubtype {
    case fixed(FixedCurseCost)
    case indefinite(IndefiniteOneTimeCost)
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

@DiscriminatedEnum
public enum CurseDuration: EntitySubtype {
    case immediate
    case fixed(FixedCurseDuration)
    case checkResultBased(CheckResultBasedDuration)
    case indefinite(IndefiniteCurseDuration)
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

@DiscriminatedEnum
public enum MaximumIndefiniteCurseDuration: EntitySubtype {
    case fixed(FixedCurseDuration)
    case checkResultBased(CheckResultBasedDuration)
}
