import FileDB

@Model
public struct SocialStatus {

  /// The social status’ order. The higher the order, the more powerful the social status. This has to be a unique value.
  @Minimum(1)
  let order: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // SocialStatusTranslation

        /// The social status’ name.
        @MinLength(1)
        let name: String
    }
}
