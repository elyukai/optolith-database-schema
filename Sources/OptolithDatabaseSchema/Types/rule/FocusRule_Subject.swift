import FileDB

/// Subjects or Subject Areas are the categories of Focus Rules.
@Model
public struct Subject {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // SubjectTranslation

        /// The subject.
        let name: String({ minLength: 1 })
    }
}
