import FileDB

@Model
public struct CauldronEnchantment {
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      volume,

  /// Witches can learn to brew special things in their Witch's Cauldron. These brews can be categorized in different types.
  let brew: BrewIdentifier()
      cost,
      property,
      ap_value,

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // CauldronEnchantmentTranslation
          name,
          name_in_library,
          effect,

        let errata: Errata?
    }
}
