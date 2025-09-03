import FileDB

@Model
public struct DominationRitual {
    /// Lists the linked three attributes used to make a skill check.
    let check: SkillCheck

    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    let check_penalty: SkillCheckPenalty?

    /// Measurable parameters of a domination ritual.
    let parameters: DominationRitualPerformanceParameters

    /// The associated property.
    @Relationship(Property.self)
    let property: Property.ID

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // DominationRitualTranslation
        /// The domination ritual’s name.
        @MinLength(1)
        let name: String

        /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
        let effect: ActivatableSkillEffect

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let cost: OldParameter

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let duration: OldParameter

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

/// Measurable parameters of a domination ritual.
@Embedded
public struct DominationRitualPerformanceParameters {
    /// The AE cost.
    let cost: DominationRitualCost

    /// The duration.
    let duration: DominationRitualDuration
}

@Embedded
public struct DominationRitualCost {
    /// The initial skill modification identifier/level.
    @Relationship(SkillModificationLevel.self)
    let initial_modification_level: SkillModificationLevel.ID

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    struct Translation {  // DominationRitualCostTranslation
        /// AE cost in addition to the normal AE cost.
        let additional: ResponsiveText
    }
}

@ModelEnum
public enum DominationRitualDuration {
    case fixed(FixedDominationRitualDuration)
    case checkResultBased(CheckResultBasedDuration)
    case indefinite(IndefiniteDominationRitualDuration)
}

@Embedded
public struct FixedDominationRitualDuration {
    /// The (unitless) duration.
    @Minimum(1)
    let value: Int

    /// The duration unit.
    let unit: DurationUnit
}

@Embedded
public struct IndefiniteDominationRitualDuration {
    /// Specified if the duration has a maximum time span.
    let maximum: MaximumIndefiniteDominationRitualDuration?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // IndefiniteDominationRitualDurationTranslation
        /// A description of the duration.
        let description: ResponsiveText
    }
}

@ModelEnum
public enum MaximumIndefiniteDominationRitualDuration {
    case fixed(FixedDominationRitualDuration)
    case checkResultBased(CheckResultBasedDuration)
}
