import FileDB

@Model
public struct Elixir {
    /// The cost per ingredient level in silverthalers.
    @Minimum(1)
    let cost_per_ingredient_level: Int

    /// The laboratory level needed to brew the elixir.
    let laboratory: LaboratoryLevel

    /// The brewing difficulty, which represents the challenge of creating an elixir.
    let brewing_difficulty: Int

    /// AP value and prerequisites of the elixir recipe’s trade secret.
    let trade_secret: RecipeTradeSecret

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // ElixirTranslationTranslation
        /// The item’s name.
        @MinLength(1)
        let name: String

        /// A list of alternative names.
        @MinItems(1)
        let alternative_names: [AlternativeName]?

        /// A list of typical ingredients.
        @MinItems(1)
        @UniqueItems
        let typical_ingredients: [TypicalIngredientDescriptionForElixir]

        /// Prerequsites for the brewing process, if any.
        @MinLength(1)
        @Markdown
        let brewing_process_prerequisites: String?

        /// The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on.
        @MinItems(6)
        @MaxItems(6)
        let quality_levels: [ElixirEffectTranslationForQualityLevel]

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@TypeAlias
public struct TypicalIngredientDescriptionForElixir {
    @MinLength(1)
    let text: String
}

@TypeAlias
public struct ElixirEffectTranslationForQualityLevel {
    @MinLength(1)
    @Markdown
    let text: String
}
