import FileDB

@Model
public struct State {

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // StateTranslation

        /// The state’s name.
        let name: String({ minLength: 1 })

        /// The description of the state.
        let description: String({ minLength: 1, isMarkdown: true })

        let errata: Errata?
    }
}
