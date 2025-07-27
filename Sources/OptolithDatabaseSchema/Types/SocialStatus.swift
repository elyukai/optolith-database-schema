import FileDB

@Model
public struct SocialStatus {

  /// The social status’ order. The higher the order, the more powerful the social status. This has to be a unique value.
  let order: Integer({ minimum: 1 })

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // SocialStatusTranslation

        /// The social status’ name.
        let name: String({ minLength: 1 })
    }
}
