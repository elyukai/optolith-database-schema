import {
  Array,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { MagicalTraditionIdentifier, PropertyIdentifier } from "./_Identifier.js"
import { NestedTranslationMap } from "./Locale.js"

export const SpellworkTraditions = Enum(import.meta.url, {
  name: "SpellworkTraditions",
  comment:
    "The tradition(s) the spell or ritual is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions.",
  values: () => ({
    General: EnumCase({ type: null }),
    Specific: EnumCase({
      comment: "A list of specific traditions.",
      type: Array(MagicalTraditionIdentifier(), { minItems: 1 }),
    }),
  }),
})

export const Reversalis = TypeAlias(import.meta.url, {
  name: "Reversalis",
  comment: "Possible effects of the reversed spell.",
  type: () => Array(IncludeIdentifier(ReversalisEffect), { minItems: 1 }),
})

export const reversalis = Optional({
  comment: "Possible effects of the reversed spell.",
  type: IncludeIdentifier(Reversalis),
})

const ReversalisEffect = TypeAlias(import.meta.url, {
  name: "ReversalisEffect",
  comment:
    "A single possible effect of the reversed spell. A reversed spell can have a different property than the original spell.",
  type: () =>
    Object({
      property: Required({
        comment: "The associated property of the reversed spell.",
        type: PropertyIdentifier(),
      }),
      translations: NestedTranslationMap(
        Required,
        "ReversalisEffect",
        Object({
          effect: Required({
            comment: "The effect description of the reversed spell.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
        }),
      ),
    }),
})
