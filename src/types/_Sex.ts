import * as DB from "tsondb/schema/dsl"

export const BinarySex = DB.Enum(import.meta.url, {
  name: "BinarySex",
  values: () => ({
    Male: DB.EnumCase({ type: null }),
    Female: DB.EnumCase({ type: null }),
  }),
})
