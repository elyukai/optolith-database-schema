import FileDB

/// Meta Conditions are rule elements that work like conditions in the sense that they have four levels with different effects, but which are not explicitly listed as conditions.
@Model
public struct MetaCondition {
    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // MetaConditionTranslation
        /// The meta condition’s name.
        @MinLength(1)
        let name: String

        /// Additional rules for the meta condition, if applicable.
        @MinLength(1)
        @Markdown
        let rules: String?

        /// The effects for level 1 to 4.
        @MinItems(4)
        @MaxItems(4)
        let effects: [MetaConditionLevelEffect]

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@TypeAlias
public struct MetaConditionLevelEffect {
    @MinLength(1)
    @Markdown
    let text: String
}
