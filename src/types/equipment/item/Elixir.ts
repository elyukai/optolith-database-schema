import {
  Array,
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "../../Locale.js"
import { AlternativeName } from "../../_AlternativeNames.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { EffectType, LaboratoryLevel, RecipeTradeSecret } from "./_Herbary.js"

export const Elixir = Entity(import.meta.url, {
  name: "Elixir",
  namePlural: "Elixirs",
  type: () =>
    Object({
      effect_types: Optional({
        comment: "Effect type(s) of an alchemical poison.",
        type: Array(IncludeIdentifier(EffectType), { minItems: 1, uniqueItems: true }),
      }),
      value: Optional({
        comment: "The raw (ingredients) value per level, in silverthalers.",
        type: Integer({ minimum: 1 }),
      }),
      cost_per_ingredient_level: Required({
        comment: "The cost per ingredient level in silverthalers.",
        type: Integer({ minimum: 1 }),
      }),
      laboratory: Required({
        comment: "The laboratory level needed to brew the elixir.",
        type: IncludeIdentifier(LaboratoryLevel),
      }),
      brewing_difficulty: Required({
        comment: "The brewing difficulty, which represents the challenge of creating an elixir.",
        type: Integer(),
      }),
      trade_secret: Required({
        comment: "AP value and prerequisites of the elixir recipe’s trade secret.",
        type: IncludeIdentifier(RecipeTradeSecret),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "ElixirTranslation",
        Object({
          name: Required({
            comment: "The item’s name.",
            type: String({ minLength: 1 }),
          }),
          description: Optional({
            comment: "The recipe’s description.",
            type: String({ minLength: 1 }),
          }),
          special: Optional({
            comment: "The recipe’s description.",
            type: String({ minLength: 1 }),
          }),
          alternative_names: Optional({
            comment: "A list of alternative names.",
            type: Array(IncludeIdentifier(AlternativeName), { minItems: 1 }),
          }),
          typical_ingredients: Required({
            comment: "A list of typical ingredients.",
            type: Array(String({ minLength: 1 }), { minItems: 1, uniqueItems: true }),
          }),
          brewing_process_prerequisites: Optional({
            comment: "Prerequsites for the brewing process, if any.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          quality_levels: Required({
            comment:
              "The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on.",
            type: Array(String({ minLength: 1, isMarkdown: true }), { minItems: 6, maxItems: 6 }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  displayName: {},
})
