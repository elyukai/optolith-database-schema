import FileDB

@Model
public struct MagicalRune {
      music_tradition: Optional({
        comment: `The options the magical rune has, if any.

If there are multiple options, the magical rune may be activated for each option, that is, multiple times.`,
        type: Array(IncludeIdentifier(MagicalRuneOption), {
          minItems: 1,
        }),
      }),

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID
  /// In some cases, the target's Spirit or Toughness is applied as a penalty.
  @Relationship(MagicalRuneCheckPenalty)
  let check_penalty: MagicalRuneCheckPenalty.ID?

  /// Measurable parameters of a magical rune.
  @Relationship(MagicalRunePerformanceParameters)
  let parameters: MagicalRunePerformanceParameters.ID

  /// The associated property.
  let property: PropertyIdentifier()

  /// States which column is used to improve the skill.
  @Relationship(MagicalRuneImprovementCost)
  let improvement_cost: MagicalRuneImprovementCost.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // MagicalRuneTranslation
          name: Required({
            comment: `The magical rune’s name.

If the rune has an option, the option’s name will/should not be included in the name as well as its surrounding parenthesis. It will/should be combined on demand.`,
            type: String({ minLength: 1 }),
          }),
          name_in_library,

        /// The native name of the magical rune.
        let native_name: String({ minLength: 1 })
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          crafting_time: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameterBySpeed),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameterBySpeed),
          }),

        let errata: Errata?
    }
}

@Embedded
public struct OldParameterBySpeed {
      slow: Required({
        type: IncludeIdentifier(OldParameter),
      }),
      fast: Required({
        type: IncludeIdentifier(OldParameter),
      }),
  }

@ModelEnum
public enum MagicalRuneCheckPenalty {
    case CombatTechnique(IncludeIdentifier(MagicalRuneCombatTechniqueCheckPenalty))
}

@Embedded
public struct MagicalRuneCombatTechniqueCheckPenalty {
      map: Required({
        comment: "A map from combat techniques to their modifiers.",
        type: Array(IncludeIdentifier(MagicalRuneCombatTechniqueCheckPenaltyMapping), {
          minItems: 1,
        }),
      }),
      rest: Required({
        type: IncludeIdentifier(MagicalRuneCombatTechniqueCheckPenaltyRest),
      }),
  }

@Embedded
public struct MagicalRuneCombatTechniqueCheckPenaltyMapping {

  /// The combat technique’s identifier.
  @Relationship(CombatTechniqueIdentifier)
  let id: CombatTechniqueIdentifier.ID

  /// The check modifier for the specified combat technique.
  let modifier: Integer()
  }

@Embedded
public struct MagicalRuneCombatTechniqueCheckPenaltyRest {

  /// The check modifier for combat techniques not specified in `map`.
  let modifier: Integer()
  }

/// Measurable parameters of a magical rune.
@Embedded
public struct MagicalRunePerformanceParameters {

  /// The AE cost.
  @Relationship(MagicalRuneCost)
  let cost: MagicalRuneCost.ID

  /// The crafting time.
  @Relationship(MagicalRuneCraftingTime)
  let crafting_time: MagicalRuneCraftingTime.ID

  /// The duration.
  @Relationship(MagicalRuneDuration)
  let duration: MagicalRuneDuration.ID
  }

@ModelEnum
public enum MagicalRuneCost {
    case Single(IncludeIdentifier(SingleMagicalRuneCost))
    case Disjunction(IncludeIdentifier(MagicalRuneCostDisjunction))
    case DerivedFromOption
}

@ModelEnum
public enum MagicalRuneOptionCost {
    case Single(IncludeIdentifier(SingleMagicalRuneCost))
    case Disjunction(IncludeIdentifier(MagicalRuneCostDisjunction))
}

@Embedded
public struct SingleMagicalRuneCost {

  /// The AE cost value.
  let value: Integer({ minimum: 1 })
      translations: NestedLocaleMap(
        Optional,
        "SingleMagicalRuneCostTranslation",
        Object({

        /// A note, appended to the generated string in parenthesis.
        let note: IncludeIdentifier(ResponsiveTextOptional)
        })
      ),
  }

@Embedded
public struct MagicalRuneCostDisjunction {

  /// A set of possible AE cost values.
  let list: Array(IncludeIdentifier(SingleMagicalRuneCost), { minItems: 2, uniqueItems: true })
  }

@Embedded
public struct MagicalRuneCraftingTime {

  /// The crafting time in actions.
  let value: Integer({ minimum: 1 })
      translations: NestedLocaleMap(
        Optional,
        "MagicalRuneCraftingTimeTranslation",
        Object({
          per: Required({
            comment:
              "The crafting time has to be per a specific countable entity, e.g. `8 actions per person`.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        })
      ),
  }

@Embedded
public struct MagicalRuneDuration {

  /// The duration on slow rune application.
  @Relationship(CheckResultBasedDuration)
  let slow: CheckResultBasedDuration.ID

  /// The duration on fast rune application.
  @Relationship(CheckResultBasedDuration)
  let fast: CheckResultBasedDuration.ID
  }

@ModelEnum
public enum MagicalRuneImprovementCost {
    case Constant(IncludeIdentifier(ImprovementCost))
    case DerivedFromOption
}

@Embedded
public struct MagicalRuneOption {

  /// The magical rune option’s identifier. An unique, increasing integer.
  let id: Integer({ minimum: 1 })
  /// The option-specific AE cost.
  @Relationship(MagicalRuneOptionCost)
  let cost: MagicalRuneOptionCost.ID?
  /// The option-specific improvement cost.
  @Relationship(ImprovementCost)
  let improvement_cost: ImprovementCost.ID?
      suboption: Optional({
        type: IncludeIdentifier(MagicalRuneSuboption),
      }),

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // MagicalRuneOptionTranslation
          name: Required({
            comment: `The magical rune option’s name.

The surrounding parenthesis will/should not be included, they will/should be generated.`,
            type: String({ minLength: 1 }),
          }),

        /// The native name of the magical rune option.
        let native_name: String({ minLength: 1 })
        })
      ),
  }

@ModelEnum
public enum MagicalRuneSuboption {
    /// The sub-option may be defined by the user (as a arbitrary text).
    case Custom(IncludeIdentifier(CustomMagicalRuneSuboption))
}

@Embedded
public struct CustomMagicalRuneSuboption {
      translations: NestedLocaleMap(
        Required,
        "CustomMagicalRuneSuboptionTranslation",
        Object(
          {
            examples: Optional({
              comment: "One or more examples for the suboption.",
              type: Array(String({ minLength: 1 }), { minItems: 1, uniqueItems: true }),
            }),
          },
          { minProperties: 1 }
        )
      ),
  }
