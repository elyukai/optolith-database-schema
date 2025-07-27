import FileDB

@Model
public struct TradeSecret {
  /// The trade secret’s adventure point value
  let ap_value: Integer({ minimum: 1 })?

  /// Is this trade secret considered secret knowledge?
  let is_secret_knowledge: Boolean()
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // TradeSecretTranslation

        /// The trade secret’s name.
        let name: String({ minLength: 1 })

        /// The description of the trade secret.
        let description: String({ minLength: 1, isMarkdown: true })

        let errata: Errata?
    }
}
