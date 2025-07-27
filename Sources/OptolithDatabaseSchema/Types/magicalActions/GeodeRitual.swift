import FileDB

@Model
public struct GeodeRitual {

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID

  /// Measurable parameters of a geode ritual.
  @Relationship(GeodeRitualPerformanceParameters)
  let parameters: GeodeRitualPerformanceParameters.ID

  /// The target category – the kind of creature or object – the skill affects.
  @Relationship(AffectedTargetCategories)
  let target: AffectedTargetCategories.ID

  /// The associated property.
  let property: PropertyIdentifier()
  /// The prerequisites for the geode ritual.
  @Relationship(GeodeRitualPrerequisites)
  let prerequisites: GeodeRitualPrerequisites.ID?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // GeodeRitualTranslation

        /// The geode ritual’s name.
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

/// Measurable parameters of a geode ritual.
@Embedded
public struct GeodeRitualPerformanceParameters {

  /// The casting time.
  @Relationship(SlowSkillNonModifiableCastingTime)
  let casting_time: SlowSkillNonModifiableCastingTime.ID

  /// The AE cost.
  @Relationship(GeodeRitualCost)
  let cost: GeodeRitualCost.ID

  /// The range.
  @Relationship(GeodeRitualRange)
  let range: GeodeRitualRange.ID

  /// The duration.
  @Relationship(GeodeRitualDuration)
  let duration: GeodeRitualDuration.ID
  }

@ModelEnum
public enum GeodeRitualCost {
    case Fixed(IncludeIdentifier(FixedGeodeRitualCost))
    case Map(IncludeIdentifier(CostMap))
}

@Embedded
public struct FixedGeodeRitualCost {

  /// The AE cost value.
  let value: Integer({ minimum: 1 })
  }

@ModelEnum
public enum GeodeRitualRange {
    case Self
    case Fixed(IncludeIdentifier(FixedGeodeRitualRange))
}

@Embedded
public struct FixedGeodeRitualRange {

  /// The range in steps/m.
  let value: Integer({ minimum: 1 })
  }

@ModelEnum
public enum GeodeRitualDuration {
    case Immediate
    case Fixed(IncludeIdentifier(DurationUnitValue))
    case CheckResultBased(IncludeIdentifier(CheckResultBasedDuration))
}
