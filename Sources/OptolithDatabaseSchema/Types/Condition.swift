import FileDB

@Model
public struct Condition {
    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // ConditionTranslation
        /// The condition’s name.
        @MinLength(1)
        let name: String

        /// Additional rules for the condition, if applicable.
        @MinLength(1)
        @Markdown
        let rules: String?

        /// The effects for level 1 to 4.
        @MinItems(4)
        @MaxItems(4)
        let effects: [ConditionLevelEffect]

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@TypeAlias
public struct ConditionLevelEffect {
    @MinLength(1)
    @Markdown
    let text: String
}
