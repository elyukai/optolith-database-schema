import FileDB

@Model
public struct Brew {
  name: "Brew",
  namePlural: "Breww",
  type: () =>
    Object({

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // BrewTranslation

        /// The brew’s name.
        let name: String({ minLength: 1 })
    }
}
