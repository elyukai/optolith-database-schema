import FileDB

@Model
public struct TargetCategory {
  /// A superordinate target category, if present.
  let parent: TargetCategoryIdentifier()?
      translations: NestedLocaleMap(
        Required,
        "TargetCategoryTranslation",
        ObjectType({

        /// The target category’s name.
        let name: String({ minLength: 1 })
    }
}
