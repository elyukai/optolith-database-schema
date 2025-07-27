import FileDB

@Model
public struct SpellSwordEnchantment {
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      volume,
      cost,
      property,
      ap_value,

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // SpellSwordEnchantmentTranslation
          name,
          name_in_library,
          effect,

        let errata: Errata?
    }
}
