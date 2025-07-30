import FileDB

@Model
public struct Curse {
    /// Lists the linked three attributes used to make a skill check.
    let check: SkillCheck

    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    let check_penalty: SkillCheckPenalty?

    /// Measurable parameters of a curse.
    let parameters: CursePerformanceParameters

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
    struct Translation {  // CurseTranslation
        /// The curse’s name.
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

/// Measurable parameters of a curse.
@Embedded
public struct CursePerformanceParameters {
    /// The AE cost.
    let cost: CurseCost

    /// The duration.
    let duration: CurseDuration
}

@ModelEnum
public enum CurseCost {
    case Fixed(FixedCurseCost)
    case Indefinite(IndefiniteOneTimeCost)
}

@Embedded
public struct FixedCurseCost {
    /// The (temporary) AE cost value.
    @Minimum(1)
    let value: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation { // FixedCurseCostTranslation
        /// The cost have to be per a specific countable entity, e.g. `8 KP per person`.
        let per: ResponsiveText?

        /// A note, appended to the generated string in parenthesis.
        let note: ResponsiveTextOptional?
    }
}

@ModelEnum
public enum CurseDuration {
    case Immediate
    case Fixed(DurationUnitValue)
    case CheckResultBased(CheckResultBasedDuration)
    case Indefinite(IndefiniteCurseDuration)
}

@Embedded
public struct IndefiniteCurseDuration {
    /// Specified if the duration has a maximum time span.
    let maximum: MaximumIndefiniteCurseDuration?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // IndefiniteCurseDurationTranslation
        /// A description of the duration.
        let description: ResponsiveText
    }
}

@ModelEnum
public enum MaximumIndefiniteCurseDuration {
    case Fixed(DurationUnitValue)
    case CheckResultBased(CheckResultBasedDuration)
}
