import FileDB

@Model
public struct AdvancedKarmaSpecialAbility {
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

    struct Translation { // AdvancedKarmaSpecialAbilityTranslation
          name,
          name_in_library,
          rules,

        let errata: Errata?
    }
}
