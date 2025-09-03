import FileDB

@Model
public struct Reach {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // ReachTranslation
        /// The reach’s name.
        @MinLength(1)
        let name: String
    }
}
