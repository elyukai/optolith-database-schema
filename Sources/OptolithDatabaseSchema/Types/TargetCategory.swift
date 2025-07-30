import FileDB

@Model
public struct TargetCategory {
    /// A superordinate target category, if present.
    let parent: TargetCategory.ID?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // TargetCategoryTranslation
        /// The target category’s name.
        @MinLength(1)
        let name: String
    }
}
