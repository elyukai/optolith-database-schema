import FileDB

@Model
public struct Service {
      availability: Required({
        comment: "Defines for which creature type(s) the service is available.",
        type: Array(IncludeIdentifier(ServiceAvailability), {
          minItems: 1,
          uniqueItems: true,
        }),
      }),

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ServiceTranslation

        /// The service’s name.
        let name: String({ minLength: 1 })

        /// The service’s description.
        let description: String({ minLength: 1, isMarkdown: true })

        let errata: Errata?
    }
}

@ModelEnum
public enum ServiceAvailability {
    case SummonedCreatures
    case Monstrosities
}
