import FileDB

@Model
public struct Reach {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ReachTranslation

        /// The reach’s name.
        let name: String({ minLength: 1 })
    }
}
