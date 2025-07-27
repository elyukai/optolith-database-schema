import FileDB

@Model
public struct Influence {
      prerequisites: Optional({
        type: IncludeIdentifier(InfluencePrerequisites),
      }),

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // InfluenceTranslation

        /// The influence’s name.
        let name: String({ minLength: 1 })
          effects: Optional({
            comment:
              "The effects of the influence. They should be sorted like they are in the book.",
            type: Array(IncludeIdentifier(InfluenceEffect), { minItems: 1 }),
          }),

        let errata: Errata?
    }
}

@Embedded
public struct InfluenceEffect {
  /// An optional label that is displayed and placed before the actual text.
  let label: String({ minLength: 1 })?

  /// The effect text.
  let text: String({ minLength: 1 })
  }
