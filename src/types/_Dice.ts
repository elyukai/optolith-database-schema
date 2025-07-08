import { IncludeIdentifier, Integer, Object, Required, TypeAlias } from "tsondb/schema/def"

export const Dice = TypeAlias(import.meta.url, {
  name: "Dice",
  type: () =>
    Object({
      number: Required({
        comment: "Number of dice of the same type. Example: 2 in 2D6.",
        type: Integer({
          minimum: 1,
        }),
      }),
      sides: Required({
        comment: "Number of sides on every die. Example: 6 in 2D6.",
        type: IncludeIdentifier(DieType),
      }),
    }),
})

export const DieType = TypeAlias(import.meta.url, {
  name: "DieType",
  comment: "Number of sides on every die. Example: 6 in 2D6.",
  type: () =>
    Integer({
      minimum: 2,
    }),
})
