import { Array, Enum, EnumCase } from "tsondb/schema/def"
import { MagicalTraditionIdentifier } from "./_Identifier.js"

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
