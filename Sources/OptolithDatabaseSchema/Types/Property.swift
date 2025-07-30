import FileDB

@Model
public struct Property {
    /// The property check’s attributes. Only the properties from the Core Rules have defined property checks.
    let check: SkillCheck?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // PropertyTranslation
        /// The property’s name.
        @MinLength(1)
        let name: String
    }
}
