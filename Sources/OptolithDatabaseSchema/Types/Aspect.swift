import FileDB

@Model
public struct Aspect {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // AspectTranslation

        /// The aspect’s name.
        let name: String({ minLength: 1 })
          master_of_aspect_suffix: Optional({
            comment:
              "The aspect’s name appended to the simple name (not `name_in_library`) of the special ability *Master of (Aspect)*.",
            type: String({
              minLength: 1,
            }),
          }),
    }
}
