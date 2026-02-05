import * as DB from "tsondb/schema/dsl"

export const SexualCharacteristicPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "SexualCharacteristicPrerequisite",
  comment: "Requires a specific sexual characteristic.",
  type: () =>
    DB.Object({
      id: DB.Required({
        type: DB.IncludeIdentifier(SexualCharacteristic),
      }),
    }),
})

const SexualCharacteristic = DB.Enum(import.meta.url, {
  name: "SexualCharacteristic",
  values: () => ({
    Penis: DB.EnumCase({ type: null }),
    Vagina: DB.EnumCase({ type: null }),
  }),
})
