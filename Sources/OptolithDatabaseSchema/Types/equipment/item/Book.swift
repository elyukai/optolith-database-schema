import FileDB

@Model
public struct Book {

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

  /// The weight in kg.
  @Relationship(Weight)
  let weight: Weight.ID

  /// The complexity of crafting the item.
  @Relationship(Complexity)
  let complexity: Complexity.ID

  /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
  @Relationship(StructurePoints)
  let structure_points: StructurePoints.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // BookTranslation

        /// The item’s name.
        let name: String({ minLength: 1 })

        /// An auxiliary name or label of the item, if available.
        let secondary_name: String({ minLength: 1 })?

        /// The language the book is written in.
        let language: String({ minLength: 1, isMarkdown: true })

        /// The script that was used for the book.
        let script: String({ minLength: 1, isMarkdown: true })

        /// Note text.
        let note: String({ minLength: 1, isMarkdown: true })?

        /// Special rules text.
        let rules: String({ minLength: 1, isMarkdown: true })?

        let errata: Errata?
    }
}
