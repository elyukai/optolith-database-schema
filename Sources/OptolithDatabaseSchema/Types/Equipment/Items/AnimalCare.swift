import FileDB

@Model
public struct AnimalCare {
    /// Values depending on whether the animal care is feed.
    let type: AnimalCareType

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    public struct Translation {  // AnimalCareTranslation
        /// The item’s name.
        @MinLength(1)
        let name: String

        /// An auxiliary name or label of the item, if available.
        @MinLength(1)
        let secondary_name: String?

        /// Note text.
        @MinLength(1)
        @Markdown
        let note: String?

        /// Special rules text.
        @MinLength(1)
        @Markdown
        let rules: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }

    public static let namePlural = "AnimalCare"
}

/// Values depending on whether the animal care is feed.
@ModelEnum
public enum AnimalCareType {
    case general(GeneralAnimalCare)
    case feed(AnimalFeed)
}

@Embedded
public struct GeneralAnimalCare {
    /// The cost in silverthalers.
    let cost: Cost

    /// The weight in kg.
    let weight: Weight
}

@Embedded
public struct AnimalFeed {
    /// The cost in silverthalers.
    let cost: AnimalFeedCost
}

@ModelEnum
public enum AnimalFeedCost {
    case perWeek(FixedCost)
}
