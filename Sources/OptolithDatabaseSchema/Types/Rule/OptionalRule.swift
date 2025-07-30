import FileDB

@Model
public struct OptionalRule {
    /// Has the optional rule not been implemented in Optolith yet? This is also true if the optional rule does not (currently) apply to any Optolith feature.
    let isMissingImplementation: Bool

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // OptionalRuleTranslation
        /// The optional rule’s name.
        @MinLength(1)
        let name: String

        /// The description of the optional rule.
        @MinLength(1)
        let description: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}
