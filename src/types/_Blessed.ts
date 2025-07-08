import {
  Array,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { AspectIdentifier, BlessedTraditionIdentifier } from "./_Identifier.js"

export const LiturgyTradition = Enum(import.meta.url, {
  name: "LiturgyTradition",
  values: () => ({
    GeneralAspect: EnumCase({ type: AspectIdentifier }),
    Tradition: EnumCase({ type: IncludeIdentifier(LiturgyTraditionWithAspects) }),
  }),
})

const LiturgyTraditionWithAspects = TypeAlias(import.meta.url, {
  name: "LiturgyTraditionWithAspects",
  type: () =>
    Object({
      tradition: Required({
        comment: "The blessed tradition.",
        type: BlessedTraditionIdentifier,
      }),
      aspects: Optional({
        comment:
          "The aspect(s) from the tradition the ceremony belongs to. Note that not all traditions have aspects. Traditions with aspects must have at least one aspect specified.",
        type: Array(AspectIdentifier, { minItems: 1, maxItems: 2 }),
      }),
    }),
})
