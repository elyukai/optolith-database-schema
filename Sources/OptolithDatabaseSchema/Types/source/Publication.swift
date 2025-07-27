import FileDB

/// A publication.
@Model
public struct Publication {

  /// The publication category.
  @Relationship(PublicationCategory)
  let category: PublicationCategory.ID

  /// If the publication may contain adult content.
  let containsAdultContent: Boolean()

  /// If the publication is not (fully) implemented and thus needs to be excluded from stable releases.
  let isMissingImplementation: Boolean()
      prerequisites: Optional({
        type: IncludeIdentifier(PublicationPrerequisites),
      }),

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // PublicationTranslation

        /// The publisher’s publication identifier.
        let publisherId: String({ minLength: 1 })?

        /// The publication’s name.
        let name: String({ minLength: 1 })

        /// The publication’s abbreviation.
        let abbreviation: String({ minLength: 1 })

        /// The publication’s release date.
        let release_date: Date()?
          isMissingImplementation: Required({
            comment:
              "If this publication translation is not (fully) implemented and thus needs to be excluded from stable releases.",
            type: Boolean(),
          }),
    }
}

@ModelEnum
public enum PublicationCategory {
    case CoreRules
    case ExpansionRules
    case Sourcebook
    case RegionalSourcebook
}
