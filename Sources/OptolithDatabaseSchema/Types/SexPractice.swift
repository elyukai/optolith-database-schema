import FileDB

@Model
public struct SexPractice {

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // StateTranslation

        /// The sex practice’s name.
        let name: String({ minLength: 1 })

        /// The rules of the sex practice.
        let rules: String({ minLength: 1 })

        /// How long a round of this sex practice takes.
        let duration: String({ minLength: 1 })
          prerequisites: Optional({
            comment:
              "Prerequisites of participants and environment. Do not specify if the sex practice has no prerequisites.",
            type: String({ minLength: 1 }),
          }),

        /// Effects of a failed *Seduction* check.
        let failed: String({ minLength: 1 })
    }
}
