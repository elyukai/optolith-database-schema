import FileDB

@Model
public struct AnimistPower {
    /// Lists the linked three attributes used to make a skill check.
    let check: SkillCheck

    /// Measurable parameters of an animist power.
    let parameters: AnimistPowerPerformanceParameters

    /// The target category – the kind of creature or object – the skill affects.
    let target: AffectedTargetCategories

    /// The associated property.
    @Relationship(Property.self)
    let property: Property.ID

    /// The tribe traditions the animist power is available to. It may be available to all or only specific tribes.
    ///
    /// If no tribe tradition is given, the animist power is generally available to all tribe traditions.
    @Relationship(Tribe.self)
    @UniqueItems
    let tribe_tradition: [Tribe.ID]

    /// States which column is used to improve the skill.
    let improvement_cost: AnimistPowerImprovementCost

    /// The prerequisites for the animist power.
    let prerequisites: AnimistPowerPrerequisites?

    /// The animist power can have multiple levels. Each level is skilled separately. A previous level must be on at least 10 so that the next higher level can be activated and skilled. A higher level cannot be skilled higher than a lower level. Each level also adds an effect text to the text of the first level.
    @MinItems(1)
    let levels: [AnimistPowerLevel]?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // AnimistPowerTranslation
        /// The animist power’s name.
        @MinLength(1)
        let name: String

        /// The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes.
        @MinLength(1)
        let name_in_library: String?

        /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
        let effect: ActivatableSkillEffect

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let cost: OldParameter

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let duration: OldParameter

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        @MinLength(1)
        let prerequisites: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@Embedded
public struct AnimistPowerLevel {
    /// The level number.
    @Minimum(2)
    let level: Int

    /// The source references, if different than the references for level 1.
    @MinItems(1)
    let src: [PublicationRef]?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // AnimistPowerLevelTranslation
        /// An additional effect description for this level.
        @MinLength(1)
        @Markdown
        let effect: String
    }
}

/// Measurable parameters of an animist power.
@ModelEnum
public enum AnimistPowerPerformanceParameters {
    case oneTime(OneTimeAnimistPowerPerformanceParameters)
    case sustained(SustainedAnimistPowerPerformanceParameters)
}

@Embedded
public struct OneTimeAnimistPowerPerformanceParameters {
    /// The AE cost value, either a flat value or defined dynamically by the primary patron.
    let cost: OneTimeAnimistPowerCost

    /// The duration.
    let duration: OneTimeAnimistPowerDuration
}

@ModelEnum
public enum OneTimeAnimistPowerCost {
    case fixed(FixedAnimistPowerCost)
    case byPrimaryPatron(AnimistPowerCostByPrimaryPatron)
}

@Embedded
public struct FixedAnimistPowerCost {
    /// The (temporary) AE cost value.
    @Minimum(1)
    let value: Int

    /// If defined, half of the AE cost `value` has to be paid each interval.
    let interval: DurationUnitValue?
}

@Embedded
public struct AnimistPowerCostByPrimaryPatron {
    /// If defined, half of the AE cost `value` has to be paid each interval.
    let interval: DurationUnitValue?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]?

    struct Translation {  // AnimistPowerCostByPrimaryPatronTranslation
        /// A note, appended to the generated string in parenthesis.
        let note: ResponsiveTextOptional
    }
}

@ModelEnum
public enum OneTimeAnimistPowerDuration {
    case immediate
    case fixed(DurationUnitValue)
    case checkResultBased(CheckResultBasedDuration)
}

@Embedded
public struct SustainedAnimistPowerPerformanceParameters {
    /// The AE cost value, either a flat value or defined dynamically by the primary patron.
    let cost: SustainedAnimistPowerCost
}

@ModelEnum
public enum SustainedAnimistPowerCost {
    case fixed(FixedAnimistPowerCost)
    case byPrimaryPatron(AnimistPowerCostByPrimaryPatron)
}

@ModelEnum
public enum AnimistPowerImprovementCost {
    case fixed(ImprovementCost)
    case byPrimaryPatron
}
