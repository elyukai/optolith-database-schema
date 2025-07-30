import FileDB

@Model
public struct Blessing {
    /// Measurable parameters of a blessing.
    let parameters: BlessingPerformanceParameters

    /// The target category – the kind of creature or object – the skill affects.
    let target: AffectedTargetCategories

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // BlessingTranslation
        /// The blessing’s name.
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

/// Measurable parameters of a blessing.
@Embedded
public struct BlessingPerformanceParameters {
    let range: BlessingRange
    let duration: BlessingDuration
}

@ModelEnum
public enum BlessingRange {
    case `Self`
    case Touch
    case Fixed
}

@ModelEnum
public enum BlessingDuration {
    case Immediate
    case Fixed(FixedBlessingDuration)
    case Indefinite(IndefiniteBlessingDuration)
}

@Embedded
public struct FixedBlessingDuration {
    /// The (unitless) duration.
    @Minimum(1)
    let value: Int

    /// The duration unit.
    let unit: DurationUnit
}

@Embedded
public struct IndefiniteBlessingDuration {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // IndefiniteBlessingDurationTranslation
        /// A description of the duration.
        @MinLength(1)
        let description: String
    }
}
