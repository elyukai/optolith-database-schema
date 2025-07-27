import FileDB

@Model
public struct ElvenMagicalSong {

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID
  /// In some cases, the target's Spirit or Toughness is applied as a penalty.
  @Relationship(SkillCheckPenalty)
  let check_penalty: SkillCheckPenalty.ID?

  /// Measurable parameters of an Elven magical song.
  @Relationship(ElvenMagicalSongPerformanceParameters)
  let parameters: ElvenMagicalSongPerformanceParameters.ID
      skill: Required({
        comment:
          "To enhance their songs, elves can make a check on either *Singing (Two-Voiced Singing)* or *Music (appropriate application)* (or both) before making the check for the song.",
        type: Array(SkillIdentifier(), {
          minItems: 1,
          maxItems: 2,
          uniqueItems: true,
        }),
      }),

  /// The associated property.
  let property: PropertyIdentifier()

  /// States which column is used to improve the skill.
  @Relationship(ImprovementCost)
  let improvement_cost: ImprovementCost.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ElvenMagicalSongTranslation

        /// The Elven magical song’s name.
        let name: String({ minLength: 1 })
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),

        let errata: Errata?
    }
}

/// Measurable parameters of an Elven magical song.
@Embedded
public struct ElvenMagicalSongPerformanceParameters {

  /// The AE cost.
  @Relationship(ElvenMagicalSongCost)
  let cost: ElvenMagicalSongCost.ID
  }

@Embedded
public struct ElvenMagicalSongCost {

  /// The (temporary) AE cost value.
  let value: Integer({ minimum: 1 })

  /// Specified if the AE cost `value` has to be paid for each time interval.
  @Relationship(DurationUnitValue)
  let interval: DurationUnitValue.ID
  /// A permanent AE cost, independent from a possible interval.
  @Relationship(ElvenMagicalSongPermanentCost)
  let permanent: ElvenMagicalSongPermanentCost.ID?
      translations: NestedLocaleMap(
        Optional,
        "ElvenMagicalSongCostTranslation",
        Object({

        /// The cost have to be per a specific countable entity, e.g. `8 AE per person`.
        let per: IncludeIdentifier(ResponsiveText)
        })
      ),
  }

@Embedded
public struct ElvenMagicalSongPermanentCost {

  /// The permanent AE cost value.
  let value: Integer({ minimum: 1 })
      translations: NestedLocaleMap(
        Optional,
        "ElvenMagicalSongPermanentCostTranslation",
        Object({

        /// A replacement string for the permanent cost.
        let replacement: IncludeIdentifier(ResponsiveTextReplace)
        })
      ),
  }
