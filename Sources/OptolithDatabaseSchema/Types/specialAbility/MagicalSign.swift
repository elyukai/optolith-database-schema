import FileDB

@Model
public struct MagicalSign {

      let prerequisites: GeneralPrerequisites?

      /// The magic property’s identifier. ``PropertyDeclaration.dependingOnSelection`` can only be used if the special ability has an option to select a property.
      let property: PropertyDeclaration

  /// The adventure points value.
  @Minimum(0)
  let ap_value: Int

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // MagicalSignTranslation

          /// Name of the activatable entry.
          @MinLength(1)
          let name: String

          /// The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes.
          @MinLength(1)
          let name_in_library: String?

          /// The effect description.
          @MinLength(1)
          @Markdown
          let effect: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}
