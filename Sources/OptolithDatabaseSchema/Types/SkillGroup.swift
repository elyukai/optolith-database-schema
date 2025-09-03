import FileDB

@Model
public struct SkillGroup {
    /// The skill group’s skill check attributes
    let check: SkillCheck

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // SkillGroupTranslation
        /// The skill group’s name.
        @MinLength(1)
        let name: String

        /// The skill group’s long name.
        @MinLength(1)
        let longName: String
    }
}
