import FileDB

@Model
public struct AnimalShape {

  /// The animal shape’s path.
  let path: AnimalShapePathIdentifier()

  /// The animal shape’s size.
  let size: AnimalShapeSizeIdentifier()

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // AnimalShapeTranslation

        /// The animal shape’s name.
        let name: String({ minLength: 1 })
    }
}
