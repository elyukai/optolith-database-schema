import FileDB

@Model
public struct Aspect {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // AspectTranslation

        /// The aspect’s name.
        @MinLength(1)
        let name: String

        /// The aspect’s name appended to the simple name (not `name_in_library`) of the special ability *Master of (Aspect)*.
        @MinLength(1)
        let master_of_aspect_suffix: String?
    }
}
