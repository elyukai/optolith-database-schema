import FileDB

@Model
public struct Service {

      /// Defines for which creature type(s) the service is available.
      @MinItems(1)
      @UniqueItems
      let availability: [ServiceAvailability]

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // ServiceTranslation

        /// The service’s name.
        @MinLength(1)
        let name: String

        /// The service’s description.
        @MinLength(1)
        @Markdown
        let description: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@ModelEnum
public enum ServiceAvailability {
    case SummonedCreatures
    case Monstrosities
}
