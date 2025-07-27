import FileDB

@Model
public struct MetaCondition {
  name: "MetaCondition",
  namePlural: "MetaConditions",
  comment:
    "Meta Conditions are rule elements that work like conditions in the sense that they have four levels with different effects, but which are not explicitly listed as conditions.",
  type: () =>
    Object({

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // MetaConditionTranslation

        /// The meta condition’s name.
        let name: String({ minLength: 1 })

        /// Additional rules for the meta condition, if applicable.
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
