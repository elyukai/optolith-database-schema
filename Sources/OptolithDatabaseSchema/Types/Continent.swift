import FileDB

@Model
public struct Continent {
  name: "Continent",
  namePlural: "Continents",
  comment:
    "Continents are mostly referenced to in languages and scripts that occur on a specific continent.",
  type: () =>
    Object({

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ContinentTranslation

        /// The continent name.
        let name: String({ minLength: 1 })
    }
}
