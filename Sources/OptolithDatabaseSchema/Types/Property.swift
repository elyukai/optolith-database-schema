import FileDB

@Model
public struct Property {
  /// The property check’s attributes. Only the properties from the Core Rules have defined property checks.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // PropertyTranslation

        /// The property’s name.
        let name: String({ minLength: 1 })
    }
}
