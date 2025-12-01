import { Enum, EnumCase } from "tsondb/schema/def"

export const SizeCategory = Enum(import.meta.url, {
  name: "SizeCategory",
  comment: "Each creature fits into one of these size categories.",
  values: () => ({
    Tiny: EnumCase({ type: null }),
    Small: EnumCase({ type: null }),
    Medium: EnumCase({ type: null }),
    Large: EnumCase({ type: null }),
    Huge: EnumCase({ type: null }),
  }),
})
