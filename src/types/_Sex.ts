import { Enum, EnumCase } from "tsondb/schema/dsl"

export const BinarySex = Enum(import.meta.url, {
  name: "BinarySex",
  values: () => ({
    Male: EnumCase({ type: null }),
    Female: EnumCase({ type: null }),
  }),
})
