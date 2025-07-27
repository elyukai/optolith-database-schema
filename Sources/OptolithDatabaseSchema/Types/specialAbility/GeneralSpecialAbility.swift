import FileDB

@Model
public struct GeneralSpecialAbility {
      levels,
      select_options,
      skill_applications,
      skill_uses,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // GeneralSpecialAbilityTranslation
          name,
          name_in_library,
          input,
          rules,

        let errata: Errata?
    }
}
