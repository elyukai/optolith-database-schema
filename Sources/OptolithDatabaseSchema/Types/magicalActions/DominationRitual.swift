import FileDB

@Model
public struct DominationRitual {

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID
  /// In some cases, the target's Spirit or Toughness is applied as a penalty.
  @Relationship(SkillCheckPenalty)
  let check_penalty: SkillCheckPenalty.ID?

  /// Measurable parameters of a domination ritual.
  @Relationship(DominationRitualPerformanceParameters)
  let parameters: DominationRitualPerformanceParameters.ID

  /// The associated property.
  let property: PropertyIdentifier()

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // DominationRitualTranslation

        /// The domination ritual’s name.
        let name: String({ minLength: 1 })
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

        let errata: Errata?
    }
}

/// Measurable parameters of a domination ritual.
@Embedded
public struct DominationRitualPerformanceParameters {

  /// The AE cost.
  @Relationship(DominationRitualCost)
  let cost: DominationRitualCost.ID

  /// The duration.
  @Relationship(DominationRitualDuration)
  let duration: DominationRitualDuration.ID
  }

@Embedded
public struct DominationRitualCost {

  /// The initial skill modification identifier/level.
  let initial_modification_level: SkillModificationLevelIdentifier()
      translations: NestedLocaleMap(
        Optional,
        "DominationRitualCostTranslation",
        Object({

        /// AE cost in addition to the normal AE cost.
        let additional: IncludeIdentifier(ResponsiveText)
        })
      ),
  }

@ModelEnum
public enum DominationRitualDuration {
    case Fixed(IncludeIdentifier(FixedDominationRitualDuration))
    case CheckResultBased(IncludeIdentifier(CheckResultBasedDuration))
    case Indefinite(IncludeIdentifier(IndefiniteDominationRitualDuration))
}

@Embedded
public struct FixedDominationRitualDuration {

  /// The (unitless) duration.
  let value: Integer({ minimum: 1 })

  /// The duration unit.
  @Relationship(DurationUnit)
  let unit: DurationUnit.ID
  }

@Embedded
public struct IndefiniteDominationRitualDuration {
  /// Specified if the duration has a maximum time span.
  @Relationship(MaximumIndefiniteDominationRitualDuration)
  let maximum: MaximumIndefiniteDominationRitualDuration.ID?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // IndefiniteDominationRitualDurationTranslation

        /// A description of the duration.
        let description: IncludeIdentifier(ResponsiveText)
        })
      ),
  }

@ModelEnum
public enum MaximumIndefiniteDominationRitualDuration {
    case Fixed(IncludeIdentifier(FixedDominationRitualDuration))
    case CheckResultBased(IncludeIdentifier(CheckResultBasedDuration))
}
