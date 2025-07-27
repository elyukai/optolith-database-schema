import FileDB

@Model
public struct PatronCategory {

  /// The list of cultures where patrons from this category can be the primary patron of.
  let primary_patron_cultures: Array(CultureIdentifier(), { minItems: 1, uniqueItems: true })

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // PatronCategoryTranslation

        /// The patron category’s name.
        let name: String({ minLength: 1 })
    }
}
