import * as DB from "tsondb/schema/dsl"
import { MagicalTraditionIdentifier, PropertyIdentifier } from "./_Identifier.js"
import { NestedTranslationMap } from "./Locale.js"

export const SpellworkTraditions = DB.Enum(import.meta.url, {
  name: "SpellworkTraditions",
  comment:
    "The tradition(s) the spell or ritual is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions.",
  values: () => ({
    General: DB.EnumCase({ type: null }),
    Specific: DB.EnumCase({
      comment: "A list of specific traditions.",
      type: DB.Array(MagicalTraditionIdentifier(), { minItems: 1 }),
    }),
  }),
})

export const Reversalis = DB.TypeAlias(import.meta.url, {
  name: "Reversalis",
  comment: "Possible effects of the reversed spell.",
  type: () => DB.Array(DB.IncludeIdentifier(ReversalisEffect), { minItems: 1 }),
})

export const reversalis = DB.Optional({
  comment: "Possible effects of the reversed spell.",
  type: DB.IncludeIdentifier(Reversalis),
})

const ReversalisEffect = DB.TypeAlias(import.meta.url, {
  name: "ReversalisEffect",
  comment:
    "A single possible effect of the reversed spell. A reversed spell can have a different property than the original spell.",
  type: () =>
    DB.Object({
      property: DB.Required({
        comment: "The associated property of the reversed spell.",
        type: PropertyIdentifier(),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        "ReversalisEffect",
        DB.Object({
          effect: DB.Required({
            comment: "The effect description of the reversed spell.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
        }),
      ),
    }),
})
