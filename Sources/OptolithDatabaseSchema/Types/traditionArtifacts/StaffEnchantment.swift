import FileDB

@Model
public struct StaffEnchantment {
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

    struct Translation { // StaffEnchantmentTranslation
          name,
          name_in_library,
          effect,

        /// A note, appended to the generated cost string in parenthesis.
        let cost_note: IncludeIdentifier(ResponsiveTextOptional)?

        let errata: Errata?
    }
}
