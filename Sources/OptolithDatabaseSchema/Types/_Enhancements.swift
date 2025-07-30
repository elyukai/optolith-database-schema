import FileDB

/// A list of enhancements.
@TypeAlias
public struct Enhancements {
  @MinItems(3)
  @MaxItems(5)
  @Relationship(Enhancement.self)
  let list: [Enhancement.ID]
}

@Model
public struct Enhancement {

      /// The skill rating required to learn this enhancement.
      @Minimum(8)
      @Maximum(16)
      @MultipleOf(2)
      let skill_rating: Int
      /// The value to multiply with the numeric representation of the associated skill's improvement cost to form the final AP cost of this enhancement.
      @Minimum(1)
      let adventure_points_modifier: Int

      let prerequisites: EnhancementPrerequisites?

  /// Only defined if different than the associated skill.
  @MinItems(1)
  let src: [PublicationRef]?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // EnhancementTranslation
          /// The name of the enhancement.
          @MinLength(1)
          let name: String

          /// The effect description.
          @MinLength(1)
          @Markdown
          let effect: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}
