import FileDB

@Model
public struct Advantage {
      levels,
      select_options,
      skill_applications,
      skill_uses,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(AdvantageDisadvantagePrerequisites),
      }),
      ap_value,

  /// Does this advantage count towards the maximum of AP to be spent on advantages?
  let has_maximum_spent_influence: Boolean()

  /// Does this advantage exclusively applies to arcane spellworks and not to magical actions and magical applications?
  let is_exclusive_to_arcane_spellworks: Boolean()

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // AdvantageTranslation
          name,
          name_in_library,
          input,
          rules,

        let errata: Errata?
    }
}
