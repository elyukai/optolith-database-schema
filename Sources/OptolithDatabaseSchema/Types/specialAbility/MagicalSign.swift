import FileDB

@Model
public struct MagicalSign {
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      property,

  /// The adventure points value.
  let ap_value: Integer({ minimum: 0 })

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // MagicalSignTranslation
          name,
          name_in_library,
          effect,

        let errata: Errata?
    }
}
