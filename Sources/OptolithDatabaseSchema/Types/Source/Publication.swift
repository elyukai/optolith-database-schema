import FileDB
import Foundation

/// A publication.
@Model
public struct Publication {

  /// The publication category.
  let category: PublicationCategory

  /// If the publication may contain adult content.
  let containsAdultContent: Bool

  /// If the publication is not (fully) implemented and thus needs to be excluded from stable releases.
  let isMissingImplementation: Bool

      let prerequisites: PublicationPrerequisites?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // PublicationTranslation

        /// The publisher’s publication identifier.
        @MinLength(1)
        let publisherId: String?

        /// The publication’s name.
        @MinLength(1)
        let name: String

        /// The publication’s abbreviation.
        @MinLength(1)
        let abbreviation: String

        /// The publication’s release date.
        let release_date: Date?
          /// If this publication translation is not (fully) implemented and thus needs to be excluded from stable releases.
          let isMissingImplementation: Bool
    }
}

@ModelEnum
public enum PublicationCategory {
    case CoreRules
    case ExpansionRules
    case Sourcebook
    case RegionalSourcebook
}
