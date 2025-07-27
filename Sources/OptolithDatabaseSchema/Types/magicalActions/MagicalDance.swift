import FileDB

@Model
public struct MagicalDance {

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID

  /// Measurable parameters of a magical dance.
  @Relationship(MagicalDancePerformanceParameters)
  let parameters: MagicalDancePerformanceParameters.ID

  /// The associated property.
  let property: PropertyIdentifier()
      music_tradition: Required({
        comment:
          "The music tradition(s) the magical dance is available for. This also defines the different names in each music tradition.",
        type: Array(IncludeIdentifier(MusicTraditionReference(ArcaneDancerTraditionIdentifier())), {
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

    struct Translation { // MagicalDanceTranslation

        /// The magical dance’s name.
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

/// Measurable parameters of a magical dance.
@Embedded
public struct MagicalDancePerformanceParameters {

  /// The duration.
  @Relationship(MusicDuration)
  let duration: MusicDuration.ID

  /// The AE cost.
  @Relationship(MagicalDanceCost)
  let cost: MagicalDanceCost.ID
  }

@ModelEnum
public enum MagicalDanceCost {
    case Fixed(IncludeIdentifier(FixedMagicalDanceCost))
    case Indefinite(IncludeIdentifier(IndefiniteMagicalDanceCost))
}

@Embedded
public struct FixedMagicalDanceCost {

  /// The (temporary) AE cost value.
  let value: Integer({ minimum: 1 })
      translations: NestedLocaleMap(
        Optional,
        "FixedMagicalDanceCostTranslation",
        Object(
          {
            per: Optional({
              comment:
                "The cost have to be per a specific countable entity, e.g. `8 KP per person`.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 }
        )
      ),
  }

@Embedded
public struct IndefiniteMagicalDanceCost {
  /// Specified if the indefinite description's result value is to be modified by a certain number.
  @Relationship(CheckResultBasedModifier)
  let maximum: CheckResultBasedModifier.ID?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // IndefiniteMagicalDanceCostTranslation

        /// A description of where the cost come from.
        let description: IncludeIdentifier(ResponsiveText)
        })
      ),
  }
