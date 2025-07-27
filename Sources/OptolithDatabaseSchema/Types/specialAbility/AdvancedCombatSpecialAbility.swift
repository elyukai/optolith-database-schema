import FileDB

@Model
public struct AdvancedCombatSpecialAbility {
      levels,
      usage_type,
      select_options,
      skill_applications,
      skill_uses,
      maximum,
      penalty,
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

    struct Translation { // AdvancedCombatSpecialAbilityTranslation
          name,
          name_in_library,
          rules,

        let errata: Errata?
    }
}
