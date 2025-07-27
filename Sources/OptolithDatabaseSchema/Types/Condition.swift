import FileDB

@Model
public struct Condition {

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ConditionTranslation

        /// The condition’s name.
        let name: String({ minLength: 1 })

        /// Additional rules for the condition, if applicable.
        let rules: String({ minLength: 1, isMarkdown: true })?
          effects: Required({
            comment: "The effects for level 1 to 4.",
            type: Array(String({ minLength: 1, isMarkdown: true }), {
              minItems: 4,
              maxItems: 4,
            }),
          }),

        let errata: Errata?
    }
}
