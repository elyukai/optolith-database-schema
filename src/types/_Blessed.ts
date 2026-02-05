import * as DB from "tsondb/schema/dsl"
import { AspectIdentifier, BlessedTraditionIdentifier } from "./_Identifier.js"

export const LiturgyTradition = DB.Enum(import.meta.url, {
  name: "LiturgyTradition",
  values: () => ({
    GeneralAspect: DB.EnumCase({ type: AspectIdentifier() }),
    Tradition: DB.EnumCase({ type: DB.IncludeIdentifier(LiturgyTraditionWithAspects) }),
  }),
})

const LiturgyTraditionWithAspects = DB.TypeAlias(import.meta.url, {
  name: "LiturgyTraditionWithAspects",
  type: () =>
    DB.Object({
      tradition: DB.Required({
        comment: "The blessed tradition.",
        type: BlessedTraditionIdentifier(),
      }),
      aspects: DB.Optional({
        comment:
          "The aspect(s) from the tradition the ceremony belongs to. Note that not all traditions have aspects. Traditions with aspects must have at least one aspect specified.",
        type: DB.Array(AspectIdentifier(), { minItems: 1, maxItems: 2 }),
      }),
    }),
})
