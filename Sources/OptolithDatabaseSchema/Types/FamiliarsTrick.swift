import FileDB

@Model
public struct FamiliarsTrick {
    /// The animal types this trick is available to. Either it is available to all or only a list of specific animal types.
    ///
    /// If no animal types are given, the animal disease applies to all animal types.
    let animal_types: Array(AnimalTypeIdentifier(), { uniqueItems: true })

  /// Measurable parameters of a familiar’s trick.
  @Relationship(FamiliarsTrickPerformanceParameters)
  let parameters: FamiliarsTrickPerformanceParameters.ID

  /// The associated property.
  @Relationship(FamiliarsTrickProperty)
  let property: FamiliarsTrickProperty.ID
  /// The AP value the familiar has to pay for. It may also be that a specific is known by all familiar by default. In the latter case the field is not set.
  let ap_value: Integer({ minimum: 1 })?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // FamiliarsTrickTranslation

        /// The familiar’s trick’s name.
        let name: String({ minLength: 1 })

        /// The effect description.
        let effect: String({ minLength: 1, isMarkdown: true })
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

@ModelEnum
public enum FamiliarsTrickProperty {
    case Fixed(PropertyIdentifier())
    case Indefinite(IncludeIdentifier(IndefiniteFamiliarsTrickProperty))
}

@Embedded
public struct IndefiniteFamiliarsTrickProperty {
      translations: NestedLocaleMap(
        Optional,
        "IndefiniteFamiliarsTrickPropertyTranslation",
        Object({

        /// A description of the property.
        let description: IncludeIdentifier(ResponsiveText)
        })
      ),
  }

/// Measurable parameters of a familiar’s trick.
@ModelEnum
public enum FamiliarsTrickPerformanceParameters {
    case OneTime(IncludeIdentifier(FamiliarsTrickOneTimePerformanceParameters))
    case OneTimeInterval(IncludeIdentifier(FamiliarsTrickOneTimeIntervalPerformanceParameters))
    case Sustained(IncludeIdentifier(FamiliarsTrickSustainedPerformanceParameters))
}

@Embedded
public struct FamiliarsTrickOneTimePerformanceParameters {
      cost: Required({
        type: IncludeIdentifier(FamiliarsTrickOneTimeCost),
      }),
      duration: Required({
        type: IncludeIdentifier(FamiliarsTrickOneTimeDuration),
      }),
  }

@ModelEnum
public enum FamiliarsTrickOneTimeCost {
    case Fixed(IncludeIdentifier(FamiliarsTrickFixedOneTimeCost))
    case All(IncludeIdentifier(FamiliarsTrickAllOneTimeCost))
    case Indefinite(IncludeIdentifier(IndefiniteOneTimeCost))
}

@Embedded
public struct FamiliarsTrickFixedOneTimeCost {

  /// The AE cost value.
  let ae_value: Integer({ minimum: 1 })
  /// The LP cost value.
  let lp_value: Integer({ minimum: 1 })?
  /// The interval in which you have to pay the AE cost again.
  @Relationship(DurationUnitValue)
  let interval: DurationUnitValue.ID?
      translations: NestedLocaleMap(
        Optional,
        "FamiliarsTrickFixedOneTimeCostTranslation",
        Object(
          {
            per: Optional({
              comment:
                "The cost have to be per a specific countable entity, e.g. `8 KP per person`.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 }
        )
      ),
  }

@Embedded
public struct FamiliarsTrickAllOneTimeCost {
  /// The minimum AE the familiar has to have/spend.
  let minimum: Integer({ minimum: 1 })?
  }

@ModelEnum
public enum FamiliarsTrickOneTimeDuration {
    case Immediate
    case Fixed(IncludeIdentifier(FixedDuration))
    case Indefinite(IncludeIdentifier(IndefiniteDuration))
}

@Embedded
public struct FamiliarsTrickOneTimeIntervalPerformanceParameters {
      cost: Required({
        type: IncludeIdentifier(FamiliarsTrickOneTimeIntervalCost),
      }),
  }

@Embedded
public struct FamiliarsTrickOneTimeIntervalCost {

  /// The AE cost value.
  let ae_value: Integer({ minimum: 1 })
  /// The LP cost value.
  let lp_value: Integer({ minimum: 1 })?

  /// The duration granted/added by paying the given AE cost.
  @Relationship(DurationUnitValue)
  let interval: DurationUnitValue.ID
  }

@Embedded
public struct FamiliarsTrickSustainedPerformanceParameters {
      cost: Required({
        type: IncludeIdentifier(FamiliarsTrickSustainedCost),
      }),
  }

@Embedded
public struct FamiliarsTrickSustainedCost {

  /// The AE cost value.
  let ae_value: Integer({ minimum: 1 })
  /// The LP cost value.
  let lp_value: Integer({ minimum: 1 })?
  /// The interval in which you have to pay the AE cost again.
  @Relationship(DurationUnitValue)
  let interval: DurationUnitValue.ID?
  }
