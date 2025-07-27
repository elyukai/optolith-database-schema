import FileDB

@Model
public struct MagicalMelody {

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID
  /// In some cases, the target's Spirit or Toughness is applied as a penalty.
  @Relationship(SkillCheckPenalty)
  let check_penalty: SkillCheckPenalty.ID?
      skill: Required({
        comment:
          "To enhance their songs, elves can make a check on either *Singing (Two-Voiced Singing)* or *Music (appropriate application)* (or both) before making the check for the song.",
        type: Array(SkillIdentifier(), {
          minItems: 1,
          maxItems: 2,
          uniqueItems: true,
        }),
      }),

  /// Measurable parameters of a magical melody.
  @Relationship(MagicalMelodyPerformanceParameters)
  let parameters: MagicalMelodyPerformanceParameters.ID

  /// The associated property.
  let property: PropertyIdentifier()
      music_tradition: Required({
        comment:
          "The music tradition(s) the magical melody is available for. This also defines the different names in each music tradition.",
        type: Array(IncludeIdentifier(MusicTraditionReference(ArcaneBardTraditionIdentifier())), {
          minItems: 1,
        }),
      }),

  /// States which column is used to improve the skill.
  @Relationship(ImprovementCost)
  let improvement_cost: ImprovementCost.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // MagicalMelodyTranslation

        /// The magical melody’s name.
        let name: String({ minLength: 1 })
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),

        let errata: Errata?
    }
}

/// Measurable parameters of a magical melody.
@Embedded
public struct MagicalMelodyPerformanceParameters {

  /// The duration.
  @Relationship(MusicDuration)
  let duration: MusicDuration.ID

  /// The AE cost.
  @Relationship(MagicalMelodyCost)
  let cost: MagicalMelodyCost.ID
  }

@ModelEnum
public enum MagicalMelodyCost {
    case Fixed(IncludeIdentifier(FixedMagicalMelodyCost))
    case FirstPerson(IncludeIdentifier(FirstPersonMagicalMelodyCost))
}

@Embedded
public struct FixedMagicalMelodyCost {

  /// The (temporary) AE cost value.
  let value: Integer({ minimum: 1 })
  }

@Embedded
public struct FirstPersonMagicalMelodyCost {

  /// The (temporary) AE cost value for the first targeted person. The AE cost for each additional person is half this value.
  let value: Integer({ minimum: 1, multipleOf: 2 })
  }
