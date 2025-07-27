import FileDB

@Model
public struct OptionalRule {

  /// Has the optional rule not been implemented in Optolith yet? This is also true if the optional rule does not (currently) apply to any Optolith feature.
  let isMissingImplementation: Boolean()

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // OptionalRuleTranslation

        /// The optional rule’s name.
        let name: String({ minLength: 1 })

        /// The description of the optional rule.
        let description: String({ minLength: 1 })

        let errata: Errata?
    }
}
