import * as DB from "tsondb/schema/dsl"

export const ImprovementCost = DB.Enum(import.meta.url, {
  name: "ImprovementCost",
  values: () => ({
    A: DB.EnumCase({ type: null }),
    B: DB.EnumCase({ type: null }),
    C: DB.EnumCase({ type: null }),
    D: DB.EnumCase({ type: null }),
  }),
})
