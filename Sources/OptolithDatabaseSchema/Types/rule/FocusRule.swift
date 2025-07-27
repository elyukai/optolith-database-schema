import FileDB

@Model
public struct FocusRule {

  /// The associated subject.
  let subject: SubjectIdentifier()

  /// The focus rule’s level.
  let level: Integer({ minimum: 1, maximum: 4 })

  /// Has the focus rule not been implemented in Optolith yet? This is also true if the focus rule does not (currently) apply to any Optolith feature.
  let isMissingImplementation: Boolean()

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // FocusRuleTranslation

        /// The focus rule’s name.
        let name: String({ minLength: 1 })

        /// The description of the focus rule.
        let description: String({ minLength: 1 })

        let errata: Errata?
    }
}
