import FileDB

@Model
public struct Book {
    /// The cost in silverthalers.
    let cost: Cost

    /// The weight in kg.
    let weight: Weight

    /// The complexity of crafting the item.
    let complexity: Complexity

    /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
    let structure_points: StructurePoints

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // BookTranslation
        /// The item’s name.
        @MinLength(1)
        let name: String

        /// An auxiliary name or label of the item, if available.
        @MinLength(1)
        let secondary_name: String?

        /// The language the book is written in.
        @MinLength(1)
        @Markdown
        let language: String

        /// The script that was used for the book.
        @MinLength(1)
        @Markdown
        let script: String

        /// Note text.
        @MinLength(1)
        @Markdown
        let note: String?

        /// Special rules text.
        @MinLength(1)
        @Markdown
        let rules: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}
