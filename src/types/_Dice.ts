import * as DB from "tsondb/schema/dsl"

export const Dice = DB.TypeAlias(import.meta.url, {
  name: "Dice",
  type: () =>
    DB.Object({
      number: DB.Required({
        comment: "Number of dice of the same type. Example: 2 in 2D6.",
        type: DB.Integer({
          minimum: 1,
        }),
      }),
      sides: DB.Required({
        comment: "Number of sides on every die. Example: 6 in 2D6.",
        type: DB.IncludeIdentifier(DieType),
      }),
    }),
})

export const DieType = DB.TypeAlias(import.meta.url, {
  name: "DieType",
  comment: "Number of sides on every die. Example: 6 in 2D6.",
  type: () =>
    DB.Integer({
      minimum: 2,
    }),
})
