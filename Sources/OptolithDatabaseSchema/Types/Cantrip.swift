import FileDB

@Model
public struct Cantrip {

  /// Measurable parameters of a cantrip.
  @Relationship(CantripPerformanceParameters)
  let parameters: CantripPerformanceParameters.ID

  /// The target category – the kind of creature or object – the skill affects.
  @Relationship(AffectedTargetCategories)
  let target: AffectedTargetCategories.ID

  /// The associated property.
  let property: PropertyIdentifier()
  /// A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in.
  @Relationship(CantripNote)
  let note: CantripNote.ID?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // CantripTranslation

        /// The cantrip’s name.
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

/// A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in.
@ModelEnum
public enum CantripNote {
    case Exclusive(IncludeIdentifier(ExclusiveCantripNote))
    case Common(IncludeIdentifier(CommonCantripNotes))
}

@Embedded
public struct ExclusiveCantripNote {

  /// The traditions the cantrip is exclusively available to.
  let traditions: Array(MagicalTraditionIdentifier(), { minItems: 1, uniqueItems: true })
  }

@Embedded
public struct CommonCantripNotes {

  /// The academies and traditions the cantrip is commonly teached in.
  let list: Array(IncludeIdentifier(CommonCantripNote), { minItems: 1, uniqueItems: true })
  }

@ModelEnum
public enum CommonCantripNote {
    case Academy(CurriculumIdentifier())
    case Tradition(IncludeIdentifier(CommonCantripTraditionNote))
}

@Embedded
public struct CommonCantripTraditionNote {

  /// The magical tradition’s identifier.
  let id: MagicalTraditionIdentifier()

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // CommonCantripTraditionNoteTranslation

        /// A note, appended to the generated string in parenthesis.
        let note: String({ minLength: 1 })
        })
      ),
  }

/// Measurable parameters of a cantrip.
@Embedded
public struct CantripPerformanceParameters {
      range: Required({ type: IncludeIdentifier(CantripRange) }),
      duration: Required({ type: IncludeIdentifier(CantripDuration) }),
  }

@ModelEnum
public enum CantripRange {
    case Self
    case Touch
    case Fixed(IncludeIdentifier(FixedRange))
}

@ModelEnum
public enum CantripDuration {
    case Immediate
    case Fixed(IncludeIdentifier(FixedCantripDuration))
    case DuringLovemaking(IncludeIdentifier(CastingTimeDuringLovemaking))
    case Indefinite(IncludeIdentifier(IndefiniteCantripDuration))
}

@Embedded
public struct FixedCantripDuration {
  /// If the duration is the maximum duration, so it may end earlier.
  let is_maximum: Boolean()?

  /// The (unitless) duration.
  let value: Integer({ minimum: 1 })

  /// The duration unit.
  @Relationship(DurationUnit)
  let unit: DurationUnit.ID
  }

@Embedded
public struct IndefiniteCantripDuration {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // IndefiniteCantripDurationTranslation

        /// A description of the duration.
        let description: IncludeIdentifier(ResponsiveText)
        })
      ),
  }
