import FileDB

@Model
public struct ProtectiveWardingCircleSpecialAbility {
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),

  /// The cost in AE.
  let ae_cost: Integer({ minimum: 0 })
      ap_value,

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ProtectiveWardingCircleSpecialAbilityTranslation
          name,
          name_in_library,

        /// The rules for the protective circle variant.
        let protective_circle: String({ minLength: 1, isMarkdown: true })

        /// The rules for the warding circle variant.
        let warding_circle: String({ minLength: 1, isMarkdown: true })

        let errata: Errata?
    }
}
