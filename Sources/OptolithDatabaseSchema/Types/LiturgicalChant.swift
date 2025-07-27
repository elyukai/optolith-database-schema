import FileDB

@Model
public struct LiturgicalChant {

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID
  /// In some cases, the target's Spirit or Toughness is applied as a penalty.
  @Relationship(SkillCheckPenalty)
  let check_penalty: SkillCheckPenalty.ID?

  /// Measurable parameters of a liturgical chant.
  @Relationship(FastPerformanceParameters)
  let parameters: FastPerformanceParameters.ID

  /// The target category – the kind of creature or object – the skill affects.
  @Relationship(AffectedTargetCategories)
  let target: AffectedTargetCategories.ID

  /// The tradition(s) the liturgical chant is available for. Note that general aspects do not have an associated tradition and thus need to be defined in a special way.
  let traditions: Array(IncludeIdentifier(LiturgyTradition), { minItems: 1 })

  /// States which column is used to improve the skill.
  @Relationship(ImprovementCost)
  let improvement_cost: ImprovementCost.ID
  /// The prerequisites for the liturgical chant.
  @Relationship(LiturgyPrerequisites)
  let prerequisites: LiturgyPrerequisites.ID?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // LiturgicalChantTranslation

        /// The liturgical chant’s name.
        let name: String({ minLength: 1 })
          name_compressed: Optional({
            comment:
              "A compressed name of the liturgical chant for use in small areas (e.g. on character sheet). Should only be defined if the `name` does not fit on character sheet.",
            type: String({ minLength: 1 }),
          }),
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          casting_time: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          range: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          target: Optional({
            isDeprecated: true,
            type: String({ minLength: 1 }),
          }),

        let errata: Errata?
        })
      ),
      enhancements: Optional({
        type: IncludeIdentifier(Enhancements),
      }),
    }),
}
