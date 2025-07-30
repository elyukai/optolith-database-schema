import FileDB

@Model
public struct PatronCategory {
    /// The list of cultures where patrons from this category can be the primary patron of.
    @MinItems(1)
    @UniqueItems
    @Relationship(Culture.self)
    let primary_patron_cultures: [Culture.ID]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // PatronCategoryTranslation
        /// The patron category’s name.
        @MinLength(1)
        let name: String
    }
}
