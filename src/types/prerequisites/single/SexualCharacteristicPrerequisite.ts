import { Enum, EnumCase, IncludeIdentifier, Object, Required, TypeAlias } from "tsondb/schema/def"

export const SexualCharacteristicPrerequisite = TypeAlias(import.meta.url, {
  name: "SexualCharacteristicPrerequisite",
  comment: "Requires a specific sexual characteristic.",
  type: () =>
    Object({
      id: Required({
        type: IncludeIdentifier(SexualCharacteristic),
      }),
    }),
})

const SexualCharacteristic = Enum(import.meta.url, {
  name: "SexualCharacteristic",
  values: () => ({
    Penis: EnumCase({ type: null }),
    Vagina: EnumCase({ type: null }),
  }),
})
