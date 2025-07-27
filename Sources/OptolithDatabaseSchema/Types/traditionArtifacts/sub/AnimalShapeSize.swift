import FileDB

@Model
public struct AnimalShapeSize {

  /// The animal shape size’s volume points
  let volume: Integer({ minimum: 1 })

  /// The animal shape size’s adventure point value
  let ap_value: Integer({ minimum: 1 })

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // AnimalShapeSizeTranslation

        /// The animal shape size’s name.
        let name: String({ minLength: 1 })
    }
}
