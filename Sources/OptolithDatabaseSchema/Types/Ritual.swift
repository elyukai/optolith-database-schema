import FileDB

@Model
public struct Ritual {

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID
  /// In some cases, the target's Spirit or Toughness is applied as a penalty.
  @Relationship(SkillCheckPenalty)
  let check_penalty: SkillCheckPenalty.ID?

  /// Measurable parameters of a ritual.
  @Relationship(SlowPerformanceParameters)
  let parameters: SlowPerformanceParameters.ID

  /// The target category – the kind of creature or object – the skill affects.
  @Relationship(AffectedTargetCategories)
  let target: AffectedTargetCategories.ID

  /// The associated property.
  let property: PropertyIdentifier()

  /// The tradition(s) the ritual is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions.
  @Relationship(SpellworkTraditions)
  let traditions: SpellworkTraditions.ID

  /// States which column is used to improve the skill.
  @Relationship(ImprovementCost)
  let improvement_cost: ImprovementCost.ID
  /// The prerequisites for the ritual.
  @Relationship(SpellworkPrerequisites)
  let prerequisites: SpellworkPrerequisites.ID?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // RitualTranslation

        /// The ritual’s name.
        let name: String({ minLength: 1 })
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
