import FileDB

@Model
public struct ArmorType {
  /// An armor type can have a *sturdiness rating*. The higher the rating, the more durable the armor. Rolling higher than this rating during a sturdiness check means the armor receives one level of the new condition *Wear*.
  let sturdiness_rating: Integer({ minimum: 1, maximum: 20 })?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ArmorTypeTranslation

        /// The armor type’s name.
        let name: String({ minLength: 1 })
    }
}
