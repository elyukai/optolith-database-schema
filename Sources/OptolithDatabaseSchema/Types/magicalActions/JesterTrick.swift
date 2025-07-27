import FileDB

@Model
public struct JesterTrick {

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID
  /// In some cases, the target's Spirit or Toughness is applied as a penalty.
  @Relationship(SkillCheckPenalty)
  let check_penalty: SkillCheckPenalty.ID?

  /// Measurable parameters of a jester trick.
  @Relationship(JesterTrickPerformanceParameters)
  let parameters: JesterTrickPerformanceParameters.ID

  /// The target category – the kind of creature or object – the skill affects.
  @Relationship(AffectedTargetCategories)
  let target: AffectedTargetCategories.ID

  /// The associated property.
  let property: PropertyIdentifier()

  /// States which column is used to improve the skill.
  @Relationship(ImprovementCost)
  let improvement_cost: ImprovementCost.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // JesterTrickTranslation

        /// The jester trick’s name.
        let name: String({ minLength: 1 })
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          casting_time: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          range: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          target: Optional({
            isDeprecated: true,
            type: String({ minLength: 1 }),
          }),

        let errata: Errata?
    }
}

/// Measurable parameters of a jester trick.
@Embedded
public struct JesterTrickPerformanceParameters {

  /// The casting time.
  @Relationship(JesterTrickCastingTime)
  let casting_time: JesterTrickCastingTime.ID

  /// The AE cost.
  @Relationship(JesterTrickCost)
  let cost: JesterTrickCost.ID

  /// The range.
  @Relationship(JesterTrickRange)
  let range: JesterTrickRange.ID

  /// The duration.
  @Relationship(JesterTrickDuration)
  let duration: JesterTrickDuration.ID
  }

@Embedded
public struct JesterTrickCastingTime {

  /// The casting time in actions.
  let value: Integer({ minimum: 1 })
  }

@Embedded
public struct JesterTrickCost {

  /// The AE cost value.
  let value: Integer({ minimum: 1 })
  }

@ModelEnum
public enum JesterTrickRange {
    case Touch
    case Self
    case Fixed(IncludeIdentifier(FixedJesterTrickRange))
}

@Embedded
public struct FixedJesterTrickRange {

  /// The range in steps/m.
  let value: Integer({ minimum: 1 })
  }

@ModelEnum
public enum JesterTrickDuration {
    case Immediate
    case Fixed(IncludeIdentifier(FixedJesterTrickDuration))
    case CheckResultBased(IncludeIdentifier(CheckResultBasedDuration))
}

@Embedded
public struct FixedJesterTrickDuration {

  /// The (unitless) duration.
  let value: Integer({ minimum: 2 })

  /// The duration unit.
  @Relationship(DurationUnit)
  let unit: DurationUnit.ID
  }
