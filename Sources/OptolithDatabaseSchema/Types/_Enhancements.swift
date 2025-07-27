import FileDB

export const Enhancements = TypeAlias(import.meta.url, {
  name: "Enhancements",
  comment: "A list of enhancements.",
  type: () =>
    Array(EnhancementIdentifier(), {
      minItems: 3,
      maxItems: 5,
  }

@Model
public struct Enhancement {
      skill_rating: Required({
        comment: "The skill rating required to learn this enhancement.",
        type: Integer({
          minimum: 8,
          maximum: 16,
          multipleOf: 2,
        }),
      }),
      adventure_points_modifier: Required({
        comment:
          "The value to multiply with the numeric representation of the associated skill's improvement cost to form the final AP cost of this enhancement.",
        type: Integer({
          minimum: 1,
        }),
      }),
      prerequisites: Optional({
        type: IncludeIdentifier(EnhancementPrerequisites),
      }),
  /// Only defined if different than the associated skill.
  @Relationship(PublicationRefs)
  let src: PublicationRefs.ID?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // EnhancementTranslation
          name: Required({
            comment: "The name of the enhancement.",
            type: String({
              minLength: 1,
            }),
          }),
          effect: Required({
            comment: "The effect description.",
            type: String({
              minLength: 1,
              isMarkdown: true,
            }),
          }),

        let errata: Errata?
    }
}
