//
//  ZibiljaRitual.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct ZibiljaRitual: LocalizableEntity {
    /// The zibilja ritual's identifier. An unique, increasing integer.
    public let id: Int

    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck

    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    public let checkPenalty: SkillCheckPenalty?

    /// Measurable parameters of a zibilja ritual.
    public let parameters: ZibiljaRitualPerformanceParameters

    /// The target category – the kind of creature or object – the skill affects.
    public let target: AffectedTargetCategories

    /// The associated property.
    public let property: PropertyReference

    /// States which column is used to improve the skill.
    public let improvementCost: ImprovementCost

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ZibiljaRitualTranslation>

    public init(id: Int, check: SkillCheck, checkPenalty: SkillCheckPenalty? = nil, parameters: ZibiljaRitualPerformanceParameters, target: AffectedTargetCategories, property: PropertyReference, improvementCost: ImprovementCost, src: PublicationRefs, translations: LocaleMap<ZibiljaRitualTranslation>) {
        self.id = id
        self.check = check
        self.checkPenalty = checkPenalty
        self.parameters = parameters
        self.target = target
        self.property = property
        self.improvementCost = improvementCost
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case check = "check"
        case checkPenalty = "check_penalty"
        case parameters = "parameters"
        case target = "target"
        case property = "property"
        case improvementCost = "improvement_cost"
        case src = "src"
        case translations = "translations"
    }
}

public struct ZibiljaRitualTranslation: EntitySubtype {
    /// The name of the zibilja ritual.
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
    public let target: String

    public let errata: Errata?

    public init(name: NonEmptyString, effect: ActivatableSkillEffect, castingTime: OldParameter, cost: OldParameter, range: OldParameter, duration: OldParameter, target: String, errata: Errata? = nil) {
        self.name = name
        self.effect = effect
        self.castingTime = castingTime
        self.cost = cost
        self.range = range
        self.duration = duration
        self.target = target
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case effect = "effect"
        case castingTime = "casting_time"
        case cost = "cost"
        case range = "range"
        case duration = "duration"
        case target = "target"
        case errata = "errata"
    }
}

public typealias ZibiljaRitualPerformanceParameters = OneTimePerformanceParameters<CastingTime<SlowSkillNonModifiableCastingTime>>
