import { Enum, EnumCase } from "tsondb/schema/def"

export const BinarySex = Enum(import.meta.url, {
  name: "BinarySex",
  values: () => ({
    Male: EnumCase({ type: null }),
    Female: EnumCase({ type: null }),
  }),
})
