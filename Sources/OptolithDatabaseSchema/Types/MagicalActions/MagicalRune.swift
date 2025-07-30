import FileDB

@Model
public struct MagicalRune {
    /// The options the magical rune has, if any.
    ///
    /// If there are multiple options, the magical rune may be activated for each option, that is, multiple times.
    @MinItems(1)
    let music_tradition: [MagicalRuneOption]?

    /// Lists the linked three attributes used to make a skill check.
    let check: SkillCheck

    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    let check_penalty: MagicalRuneCheckPenalty?

    /// Measurable parameters of a magical rune.
    let parameters: MagicalRunePerformanceParameters

    /// The associated property.
    @Relationship(Property.self)
    let property: Property.ID

    /// States which column is used to improve the skill.
    let improvement_cost: MagicalRuneImprovementCost

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // MagicalRuneTranslation
        /// The magical rune’s name.
        ///
        /// If the rune has an option, the option’s name will/should not be included in the name as well as its surrounding parenthesis. It will/should be combined on demand.
        @MinLength(1)
        let name: String

        /// The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes.
        @MinLength(1)
        let name_in_library: String?

        /// The native name of the magical rune.
        @MinLength(1)
        let native_name: String

        /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
        let effect: ActivatableSkillEffect

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let cost: OldParameter

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let crafting_time: OldParameterBySpeed

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let duration: OldParameterBySpeed

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@Embedded
public struct OldParameterBySpeed {
    let slow: OldParameter

    let fast: OldParameter
}

@ModelEnum
public enum MagicalRuneCheckPenalty {
    case CombatTechnique(MagicalRuneCombatTechniqueCheckPenalty)
}

@Embedded
public struct MagicalRuneCombatTechniqueCheckPenalty {
    /// A map from combat techniques to their modifiers.
    @MinItems(1)
    let map: [MagicalRuneCombatTechniqueCheckPenaltyMapping]

    let rest: MagicalRuneCombatTechniqueCheckPenaltyRest
}

@Embedded
public struct MagicalRuneCombatTechniqueCheckPenaltyMapping {
    /// The combat technique’s identifier.
    let id: CombatTechniqueIdentifier

    /// The check modifier for the specified combat technique.
    let modifier: Int
}

@Embedded
public struct MagicalRuneCombatTechniqueCheckPenaltyRest {
    /// The check modifier for combat techniques not specified in `map`.
    let modifier: Int
}

/// Measurable parameters of a magical rune.
@Embedded
public struct MagicalRunePerformanceParameters {
    /// The AE cost.
    let cost: MagicalRuneCost

    /// The crafting time.
    let crafting_time: MagicalRuneCraftingTime

    /// The duration.
    let duration: MagicalRuneDuration
}

@ModelEnum
public enum MagicalRuneCost {
    case Single(SingleMagicalRuneCost)
    case Disjunction(MagicalRuneCostDisjunction)
    case DerivedFromOption
}

@ModelEnum
public enum MagicalRuneOptionCost {
    case Single(SingleMagicalRuneCost)
    case Disjunction(MagicalRuneCostDisjunction)
}

@Embedded
public struct SingleMagicalRuneCost {
    /// The AE cost value.
    @Minimum(1)
    let value: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    struct Translation { // SingleMagicalRuneCostTranslation
      /// A note, appended to the generated string in parenthesis.
      let note: ResponsiveTextOptional
    }
}

@Embedded
public struct MagicalRuneCostDisjunction {
    /// A set of possible AE cost values.
    @MinItems(2)
    @UniqueItems
    let list: [SingleMagicalRuneCost]
}

@Embedded
public struct MagicalRuneCraftingTime {
    /// The crafting time in actions.
    @Minimum(1)
    let value: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    struct Translation { // MagicalRuneCraftingTimeTranslation
        /// The crafting time has to be per a specific countable entity, e.g. `8 actions per person`.
        let per: ResponsiveText
    }
}

@Embedded
public struct MagicalRuneDuration {
    /// The duration on slow rune application.
    let slow: CheckResultBasedDuration

    /// The duration on fast rune application.
    let fast: CheckResultBasedDuration
}

@ModelEnum
public enum MagicalRuneImprovementCost {
    case Constant(ImprovementCost)
    case DerivedFromOption
}

@Embedded
public struct MagicalRuneOption {
    /// The magical rune option’s identifier. An unique, increasing integer.
    @Minimum(1)
    let id: Int

    /// The option-specific AE cost.
    let cost: MagicalRuneOptionCost?

    /// The option-specific improvement cost.
    let improvement_cost: ImprovementCost?

    let suboption: MagicalRuneSuboption?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // MagicalRuneOptionTranslation
        /// The magical rune’s name.
        ///
        /// The surrounding parenthesis will/should not be included, they will/should be generated.
        @MinLength(1)
        let name: String

        /// The native name of the magical rune option.
        @MinLength(1)
        let native_name: String
    }
}

@ModelEnum
public enum MagicalRuneSuboption {
    /// The sub-option may be defined by the user (as a arbitrary text).
    case Custom(CustomMagicalRuneSuboption)
}

@Embedded
public struct CustomMagicalRuneSuboption {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @MinProperties(1)
    struct Translation {  // CustomMagicalRuneSuboptionTranslation
        /// One or more examples for the suboption.
        @MinItems(1)
        @UniqueItems
        let examples: [CustomMagicalRuneSuboptionExample]?
    }
}

@TypeAlias
public struct CustomMagicalRuneSuboptionExample {
    @MinLength(1)
    let text: String
}
