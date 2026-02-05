import { Enum, EnumCase } from "tsondb/schema/dsl"

export const ImprovementCost = Enum(import.meta.url, {
  name: "ImprovementCost",
  values: () => ({
    A: EnumCase({ type: null }),
    B: EnumCase({ type: null }),
    C: EnumCase({ type: null }),
    D: EnumCase({ type: null }),
  }),
})
