import FileDB

/// Subjects or Subject Areas are the categories of Focus Rules.
@Model
public struct Subject {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // SubjectTranslation
        /// The subject.
        @MinLength(1)
        let name: String
    }
}
