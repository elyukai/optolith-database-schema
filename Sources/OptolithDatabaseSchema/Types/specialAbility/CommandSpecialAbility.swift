import FileDB

@Model
public struct CommandSpecialAbility {
      levels,
      usage_type,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      combat_techniques,
      ap_value,

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // CommandSpecialAbilityTranslation
          name,
          name_in_library,
          rules,

        let errata: Errata?
    }
}
