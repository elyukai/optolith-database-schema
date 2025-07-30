import FileDB

@Model
public struct ElvenMagicalSong {

  /// Lists the linked three attributes used to make a skill check.
  let check: SkillCheck

  /// In some cases, the target's Spirit or Toughness is applied as a penalty.
  let check_penalty: SkillCheckPenalty?

  /// Measurable parameters of an Elven magical song.
  let parameters: ElvenMagicalSongPerformanceParameters
      /// To enhance their songs, elves can make a check on either *Singing (Two-Voiced Singing)* or *Music (appropriate application)* (or both) before making the check for the song.
      @MinItems(1)
      @MaxItems(2)
      @UniqueItems
      @Relationship(Skill.self)
      let skill: [Skill.ID]

  /// The associated property.
  @Relationship(Property.self)
  let property: Property.ID

  /// States which column is used to improve the skill.
  let improvement_cost: ImprovementCost

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // ElvenMagicalSongTranslation

        /// The Elven magical song’s name.
        @MinLength(1)
        let name: String
          /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
          let effect: ActivatableSkillEffect

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let cost: OldParameter

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

/// Measurable parameters of an Elven magical song.
@Embedded
public struct ElvenMagicalSongPerformanceParameters {

  /// The AE cost.
  let cost: ElvenMagicalSongCost
  }

@Embedded
public struct ElvenMagicalSongCost {

  /// The (temporary) AE cost value.
  @Minimum(1)
  let value: Int

  /// Specified if the AE cost `value` has to be paid for each time interval.
  let interval: DurationUnitValue

  /// A permanent AE cost, independent from a possible interval.
  let permanent: ElvenMagicalSongPermanentCost?
      /// All translations for the entry, identified by IETF language tag (BCP47).
      @Relationship(Locale.self)
      let translations: [String: Translation]?

      struct Translation { // ElvenMagicalSongCostTranslation

        /// The cost have to be per a specific countable entity, e.g. `8 AE per person`.
        let per: ResponsiveText
      }
  }

@Embedded
public struct ElvenMagicalSongPermanentCost {

  /// The permanent AE cost value.
  @Minimum(1)
  let value: Int
      /// All translations for the entry, identified by IETF language tag (BCP47).
      @Relationship(Locale.self)
      let translations: [String: Translation]?

      struct Translation { // ElvenMagicalSongPermanentCostTranslation

        /// A replacement string for the permanent cost.
        let replacement: ResponsiveTextReplace
      }
  }
