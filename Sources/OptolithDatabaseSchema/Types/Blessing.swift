import FileDB

@Model
public struct Blessing {

  /// Measurable parameters of a blessing.
  @Relationship(BlessingPerformanceParameters)
  let parameters: BlessingPerformanceParameters.ID

  /// The target category – the kind of creature or object – the skill affects.
  @Relationship(AffectedTargetCategories)
  let target: AffectedTargetCategories.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // BlessingTranslation

        /// The blessing’s name.
        let name: String({ minLength: 1 })

        /// The effect description.
        let effect: String({ minLength: 1, isMarkdown: true })
          range: Required({
            isDeprecated: true,
            type: String({ minLength: 1 }),
          }),
          duration: Required({
            isDeprecated: true,
            type: String({ minLength: 1 }),
          }),
          target: Required({
            isDeprecated: true,
            type: String({ minLength: 1 }),
          }),

        let errata: Errata?
    }
}

/// Measurable parameters of a blessing.
@Embedded
public struct BlessingPerformanceParameters {
      range: Required({ type: IncludeIdentifier(BlessingRange) }),
      duration: Required({ type: IncludeIdentifier(BlessingDuration) }),
  }

@ModelEnum
public enum BlessingRange {
    case Self
    case Touch
    case Fixed
}

@ModelEnum
public enum BlessingDuration {
    case Immediate
    case Fixed(IncludeIdentifier(FixedBlessingDuration))
    case Indefinite(IncludeIdentifier(IndefiniteBlessingDuration))
}

@Embedded
public struct FixedBlessingDuration {

  /// The (unitless) duration.
  let value: Integer({ minimum: 1 })

  /// The duration unit.
  @Relationship(DurationUnit)
  let unit: DurationUnit.ID
  }

@Embedded
public struct IndefiniteBlessingDuration {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // IndefiniteBlessingDurationTranslation

        /// A description of the duration.
        let description: String({ minLength: 1 })
        })
      ),
  }
