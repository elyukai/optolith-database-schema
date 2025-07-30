import FileDB

@Model
public struct ArmorType {
  /// An armor type can have a *sturdiness rating*. The higher the rating, the more durable the armor. Rolling higher than this rating during a sturdiness check means the armor receives one level of the new condition *Wear*.
  @Minimum(1)
  @Maximum(20)
  let sturdiness_rating: Int?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // ArmorTypeTranslation

        /// The armor type’s name.
        @MinLength(1)
        let name: String
    }
}
