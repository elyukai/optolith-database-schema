import FileDB

@Model
public struct Elixir {

  /// The cost per ingredient level in silverthalers.
  let cost_per_ingredient_level: Integer({ minimum: 1 })

  /// The laboratory level needed to brew the elixir.
  @Relationship(LaboratoryLevel)
  let laboratory: LaboratoryLevel.ID

  /// The brewing difficulty, which represents the challenge of creating an elixir.
  let brewing_difficulty: Integer()

  /// AP value and prerequisites of the elixir recipe’s trade secret.
  @Relationship(RecipeTradeSecret)
  let trade_secret: RecipeTradeSecret.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ElixirTranslationTranslation

        /// The item’s name.
        let name: String({ minLength: 1 })

        /// A list of alternative names.
        let alternative_names: Array(IncludeIdentifier(AlternativeName), { minItems: 1 })?

        /// A list of typical ingredients.
        let typical_ingredients: Array(String({ minLength: 1 }), { minItems: 1, uniqueItems: true })

        /// Prerequsites for the brewing process, if any.
        let brewing_process_prerequisites: String({ minLength: 1, isMarkdown: true })?
          quality_levels: Required({
            comment:
              "The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on.",
            type: Array(String({ minLength: 1, isMarkdown: true }), { minItems: 6, maxItems: 6 }),
          }),

        let errata: Errata?
    }
}
