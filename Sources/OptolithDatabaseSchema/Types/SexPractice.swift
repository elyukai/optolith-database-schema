import FileDB

@Model
public struct SexPractice {
    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // StateTranslation
        /// The sex practice’s name.
        @MinLength(1)
        let name: String

        /// The rules of the sex practice.
        @MinLength(1)
        let rules: String

        /// How long a round of this sex practice takes.
        @MinLength(1)
        let duration: String

        /// Prerequisites of participants and environment. Do not specify if the sex practice has no prerequisites.
        @MinLength(1)
        let prerequisites: String?

        /// Effects of a failed *Seduction* check.
        @MinLength(1)
        let failed: String
    }
}
