import FileDB

@Model
public struct State {
    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // StateTranslation
        /// The state’s name.
        @MinLength(1)
        let name: String

        /// The description of the state.
        @MinLength(1)
        @Markdown
        let description: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}
