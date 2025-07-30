import FileDB

@Model
public struct Influence {
    let prerequisites: InfluencePrerequisites?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // InfluenceTranslation
        /// The influence’s name.
        @MinLength(1)
        let name: String
        /// The effects of the influence. They should be sorted like they are in the book.
        @MinItems(1)
        let effects: [InfluenceEffect]?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@Embedded
public struct InfluenceEffect {
    /// An optional label that is displayed and placed before the actual text.
    @MinLength(1)
    let label: String?

    /// The effect text.
    @MinLength(1)
    let text: String
}
