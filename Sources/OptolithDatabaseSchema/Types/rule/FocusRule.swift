import FileDB

@Model
public struct FocusRule {

  /// The associated subject.
  @Relationship(Subject.self)
  let subject: Subject.ID

  /// The focus rule’s level.
  @Minimum(1)
  @Maximum(4)
  let level: Int

  /// Has the focus rule not been implemented in Optolith yet? This is also true if the focus rule does not (currently) apply to any Optolith feature.
  let isMissingImplementation: Bool

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // FocusRuleTranslation

        /// The focus rule’s name.
        @MinLength(1)
        let name: String

        /// The description of the focus rule.
        @MinLength(1)
        let description: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}
