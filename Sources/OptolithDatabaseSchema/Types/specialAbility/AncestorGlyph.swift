import FileDB

@Model
public struct AncestorGlyph {
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),

  /// The AE cost of the ancestor glyph.
  let ae_cost: Integer({ minimum: 1 })
      ap_value,

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // AncestorGlyphTranslation
          name,
          name_in_library,
          rules,

        let errata: Errata?
    }
}
