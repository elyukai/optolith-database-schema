import FileDB

@Model
public struct AnimistPower {

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID

  /// Measurable parameters of an animist power.
  @Relationship(AnimistPowerPerformanceParameters)
  let parameters: AnimistPowerPerformanceParameters.ID

  /// The target category – the kind of creature or object – the skill affects.
  @Relationship(AffectedTargetCategories)
  let target: AffectedTargetCategories.ID

  /// The associated property.
  let property: PropertyIdentifier()
      tribe_tradition: Required({
        comment: `The tribe traditions the animist power is available to. It may be available to all or only specific tribes.

If no tribe tradition is given, the animist power is generally available to all tribe traditions.`,
        type: Array(TribeIdentifier(), { uniqueItems: true }),
      }),

  /// States which column is used to improve the skill.
  @Relationship(AnimistPowerImprovementCost)
  let improvement_cost: AnimistPowerImprovementCost.ID
  /// The prerequisites for the animist power.
  @Relationship(AnimistPowerPrerequisites)
  let prerequisites: AnimistPowerPrerequisites.ID?
  /// The animist power can have multiple levels. Each level is skilled separately. A previous level must be on at least 10 so that the next higher level can be activated and skilled. A higher level cannot be skilled higher than a lower level. Each level also adds an effect text to the text of the first level.
  let levels: Array(IncludeIdentifier(AnimistPowerLevel), { minItems: 1 })?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // AnimistPowerTranslation

        /// The animist power’s name.
        let name: String({ minLength: 1 })
          name_in_library,
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          prerequisites: Optional({
            isDeprecated: true,
            type: String({ minLength: 1 }),
          }),

        let errata: Errata?
    }
}

@Embedded
public struct AnimistPowerLevel {

  /// The level number.
  let level: Integer({ minimum: 2 })
  /// The source references, if different than the references for level 1.
  @Relationship(PublicationRefs)
  let src: PublicationRefs.ID?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // AnimistPowerLevelTranslation

        /// An additional effect description for this level.
        let effect: String({ minLength: 1, isMarkdown: true })
        })
      ),
  }

/// Measurable parameters of an animist power.
@ModelEnum
public enum AnimistPowerPerformanceParameters {
    case OneTime(IncludeIdentifier(OneTimeAnimistPowerPerformanceParameters))
    case Sustained(IncludeIdentifier(SustainedAnimistPowerPerformanceParameters))
}

@Embedded
public struct OneTimeAnimistPowerPerformanceParameters {

  /// The AE cost value, either a flat value or defined dynamically by the primary patron.
  @Relationship(OneTimeAnimistPowerCost)
  let cost: OneTimeAnimistPowerCost.ID

  /// The duration.
  @Relationship(OneTimeAnimistPowerDuration)
  let duration: OneTimeAnimistPowerDuration.ID
  }

@ModelEnum
public enum OneTimeAnimistPowerCost {
    case Fixed(IncludeIdentifier(FixedAnimistPowerCost))
    case ByPrimaryPatron(IncludeIdentifier(AnimistPowerCostByPrimaryPatron))
}

@Embedded
public struct FixedAnimistPowerCost {

  /// The (temporary) AE cost value.
  let value: Integer({ minimum: 1 })
  /// If defined, half of the AE cost `value` has to be paid each interval.
  @Relationship(DurationUnitValue)
  let interval: DurationUnitValue.ID?
  }

@Embedded
public struct AnimistPowerCostByPrimaryPatron {
  /// If defined, half of the AE cost `value` has to be paid each interval.
  @Relationship(DurationUnitValue)
  let interval: DurationUnitValue.ID?
      translations: NestedLocaleMap(
        Optional,
        "AnimistPowerCostByPrimaryPatronTranslation",
        Object({

        /// A note, appended to the generated string in parenthesis.
        let note: IncludeIdentifier(ResponsiveTextOptional)
        })
      ),
  }

@ModelEnum
public enum OneTimeAnimistPowerDuration {
    case Immediate
    case Fixed(IncludeIdentifier(DurationUnitValue))
    case CheckResultBased(IncludeIdentifier(CheckResultBasedDuration))
}

@Embedded
public struct SustainedAnimistPowerPerformanceParameters {

  /// The AE cost value, either a flat value or defined dynamically by the primary patron.
  @Relationship(SustainedAnimistPowerCost)
  let cost: SustainedAnimistPowerCost.ID
  }

@ModelEnum
public enum SustainedAnimistPowerCost {
    case Fixed(IncludeIdentifier(FixedAnimistPowerCost))
    case ByPrimaryPatron(IncludeIdentifier(AnimistPowerCostByPrimaryPatron))
}

@ModelEnum
public enum AnimistPowerImprovementCost {
    case Fixed(IncludeIdentifier(ImprovementCost))
    case ByPrimaryPatron
}
