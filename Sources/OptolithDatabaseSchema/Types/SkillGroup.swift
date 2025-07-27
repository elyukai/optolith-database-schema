import FileDB

@Model
public struct SkillGroup {

  /// The skill group’s skill check attributes
  @Relationship(SkillCheck)
  let check: SkillCheck.ID

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // SkillGroupTranslation

        /// The skill group’s name.
        let name: String({ minLength: 1 })

        /// The skill group’s long name.
        let longName: String({ minLength: 1 })
    }
}
