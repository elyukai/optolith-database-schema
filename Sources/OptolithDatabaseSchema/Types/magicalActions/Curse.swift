import FileDB

@Model
public struct Curse {

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID
  /// In some cases, the target's Spirit or Toughness is applied as a penalty.
  @Relationship(SkillCheckPenalty)
  let check_penalty: SkillCheckPenalty.ID?

  /// Measurable parameters of a curse.
  @Relationship(CursePerformanceParameters)
  let parameters: CursePerformanceParameters.ID

  /// The associated property.
  let property: PropertyIdentifier()

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // CurseTranslation

        /// The curse’s name.
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

/// Measurable parameters of a curse.
@Embedded
public struct CursePerformanceParameters {

  /// The AE cost.
  @Relationship(CurseCost)
  let cost: CurseCost.ID

  /// The duration.
  @Relationship(CurseDuration)
  let duration: CurseDuration.ID
  }

@ModelEnum
public enum CurseCost {
    case Fixed(IncludeIdentifier(FixedCurseCost))
    case Indefinite(IncludeIdentifier(IndefiniteOneTimeCost))
}

@Embedded
public struct FixedCurseCost {

  /// The (temporary) AE cost value.
  let value: Integer({ minimum: 1 })
      translations: NestedLocaleMap(
        Optional,
        "FixedCurseCostTranslation",
        Object(
          {
            per: Optional({
              comment:
                "The cost have to be per a specific countable entity, e.g. `8 KP per person`.",
              type: IncludeIdentifier(ResponsiveText),
            }),
            note: Optional({
              comment: "A note, appended to the generated string in parenthesis.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 }
        )
      ),
  }

@ModelEnum
public enum CurseDuration {
    case Immediate
    case Fixed(IncludeIdentifier(DurationUnitValue))
    case CheckResultBased(IncludeIdentifier(CheckResultBasedDuration))
    case Indefinite(IncludeIdentifier(IndefiniteCurseDuration))
}

@Embedded
public struct IndefiniteCurseDuration {
  /// Specified if the duration has a maximum time span.
  @Relationship(MaximumIndefiniteCurseDuration)
  let maximum: MaximumIndefiniteCurseDuration.ID?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // IndefiniteCurseDurationTranslation

        /// A description of the duration.
        let description: IncludeIdentifier(ResponsiveText)
        })
      ),
  }

@ModelEnum
public enum MaximumIndefiniteCurseDuration {
    case Fixed(IncludeIdentifier(DurationUnitValue))
    case CheckResultBased(IncludeIdentifier(CheckResultBasedDuration))
}
