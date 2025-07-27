import FileDB

@Model
public struct GemOrPreciousStone {
  name: "GemOrPreciousStone",
  namePlural: "GemsAndPreciousStones",
  type: () =>
    Object({

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // GemOrPreciousStoneTranslation

        /// The item’s name.
        let name: String({ minLength: 1 })

        /// An auxiliary name or label of the item, if available.
        let secondary_name: String({ minLength: 1 })?

        /// The color of the gem or stone.
        let color: String({ minLength: 1 })

        /// Note text.
        let note: String({ minLength: 1, isMarkdown: true })?

        /// Special rules text.
        let rules: String({ minLength: 1, isMarkdown: true })?

        let errata: Errata?
    }
}
