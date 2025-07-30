import FileDB

@Model
public struct Cantrip {

  /// Measurable parameters of a cantrip.
  let parameters: CantripPerformanceParameters

  /// The target category – the kind of creature or object – the skill affects.
  let target: AffectedTargetCategories

  /// The associated property.
  @Relationship(Property.self)
  let property: Property.ID

  /// A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in.
  let note: CantripNote?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // CantripTranslation

        /// The cantrip’s name.
        @MinLength(1)
        let name: String

        /// The effect description.
        @MinLength(1)
        @Markdown
        let effect: String

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        @MinLength(1)
        let range: String

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        @MinLength(1)
        let duration: String

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        @MinLength(1)
        let target: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

/// A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in.
@ModelEnum
public enum CantripNote {
    case Exclusive(ExclusiveCantripNote)
    case Common(CommonCantripNotes)
}

@Embedded
public struct ExclusiveCantripNote {

  /// The traditions the cantrip is exclusively available to.
  @MinItems(1)
  @UniqueItems
  @Relationship(MagicalTradition.self)
  let traditions: [MagicalTradition.ID]
  }

@Embedded
public struct CommonCantripNotes {

  /// The academies and traditions the cantrip is commonly teached in.
  @MinItems(1)
  @UniqueItems
  let list: [CommonCantripNote]
  }

@ModelEnum
public enum CommonCantripNote {
    case Academy(CurriculumIdentifierObject)
    case Tradition(CommonCantripTraditionNote)
}

@Embedded
public struct CommonCantripTraditionNote {

  /// The magical tradition’s identifier.
  @Relationship(MagicalTradition.self)
  let id: MagicalTradition.ID

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // CommonCantripTraditionNoteTranslation

        /// A note, appended to the generated string in parenthesis.
        @MinLength(1)
        let note: String
      }
  }

/// Measurable parameters of a cantrip.
@Embedded
public struct CantripPerformanceParameters {
      let range: CantripRange
      let duration: CantripDuration
  }

@ModelEnum
public enum CantripRange {
    case `Self`
    case Touch
    case Fixed(FixedRange)
}

@ModelEnum
public enum CantripDuration {
    case Immediate
    case Fixed(FixedCantripDuration)
    case DuringLovemaking(CastingTimeDuringLovemaking)
    case Indefinite(IndefiniteCantripDuration)
}

@Embedded
public struct FixedCantripDuration {
  /// If the duration is the maximum duration, so it may end earlier.
  let is_maximum: Bool?

  /// The (unitless) duration.
  @Minimum(1)
  let value: Int

  /// The duration unit.
  let unit: DurationUnit
  }

@Embedded
public struct IndefiniteCantripDuration {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // IndefiniteCantripDurationTranslation

        /// A description of the duration.
        let description: ResponsiveText
      }
  }
