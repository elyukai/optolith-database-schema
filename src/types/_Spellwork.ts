import { Array, Enum, EnumCase, Optional, String } from "tsondb/schema/def"
import { MagicalTraditionIdentifier, PropertyIdentifier } from "./_Identifier.js"

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

export const ReversalisProperty = () =>
  Optional({
    comment: "The associated property of the reversed spell.",
    type: PropertyIdentifier(),
  })

export const ReversalisEffect = () =>
  Optional({
    comment: "The effect of the reversed spell.",
    type: String({ minLength: 1, isMarkdown: true }),
  })

export const checkReversalis = (object: {
  propertyReversalis?: string
  translations: { [locale: string]: { effectReversalis?: string } }
}): string[] => {
  const hasProperty = object.propertyReversalis !== undefined
  const hasAnyEffect = Object.values(object.translations).some(
    t => t.effectReversalis !== undefined,
  )

  if (hasProperty && !hasAnyEffect) {
    return [
      "If 'propertyReversalis' is set, at least one translation must have 'effectReversalis' defined.",
    ]
  }

  if (!hasProperty && hasAnyEffect) {
    return ["If any translation has 'effectReversalis' defined, 'propertyReversalis' must be set."]
  }

  return []
}
