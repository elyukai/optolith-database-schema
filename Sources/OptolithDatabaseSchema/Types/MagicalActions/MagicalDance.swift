import FileDB

@Model
public struct MagicalDance {

  /// Lists the linked three attributes used to make a skill check.
  let check: SkillCheck

  /// Measurable parameters of a magical dance.
  let parameters: MagicalDancePerformanceParameters

  /// The associated property.
  @Relationship(Property.self)
  let property: Property.ID

      /// The music tradition(s) the magical dance is available for. This also defines the different names in each music tradition.
      @MinItems(1)
      let music_tradition: [ArcaneDancerTraditionReference]?

  /// States which column is used to improve the skill.
  let improvement_cost: ImprovementCost

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // MagicalDanceTranslation

        /// The magical dance’s name.
        @MinLength(1)
        let name: String
          /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
          let effect: ActivatableSkillEffect

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let duration: OldParameter

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let cost: OldParameter

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

/// Measurable parameters of a magical dance.
@Embedded
public struct MagicalDancePerformanceParameters {

  /// The duration.
  let duration: MusicDuration

  /// The AE cost.
  let cost: MagicalDanceCost
  }

@ModelEnum
public enum MagicalDanceCost {
    case Fixed(FixedMagicalDanceCost)
    case Indefinite(IndefiniteMagicalDanceCost)
}

@Embedded
public struct FixedMagicalDanceCost {

  /// The (temporary) AE cost value.
  @Minimum(1)
  let value: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation { // FixedMagicalDanceCostTranslation
            /// The cost have to be per a specific countable entity, e.g. `8 KP per person`.
            let per: ResponsiveTextOptional?
          }
  }

@Embedded
public struct IndefiniteMagicalDanceCost {
  /// Specified if the indefinite description's result value is to be modified by a certain number.
  let maximum: CheckResultBasedModifier?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // IndefiniteMagicalDanceCostTranslation

        /// A description of where the cost come from.
        let description: ResponsiveText
      }
  }

/// A reference to an arcane dancer tradition with the music-tradition-specific name of the entry.
@Embedded
public struct ArcaneDancerTraditionReference {
        /// The music tradition’s identifier.
        @Relationship(ArcaneDancerTradition.self)
        let id: ArcaneDancerTradition.ID

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // ArcaneDancerTraditionReferenceTranslation
            /// The music-tradition-specific name of the entry.
            @MinLength(1)
            let name: String
          }
}
