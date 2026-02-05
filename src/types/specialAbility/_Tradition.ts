import * as DB from "tsondb/schema/dsl"

export const SpecialRule = DB.TypeAlias(import.meta.url, {
  name: "SpecialRule",
  type: () =>
    DB.Object({
      label: DB.Optional({
        comment: "An optional label that is displayed and placed before the actual text.",
        type: DB.String({ minLength: 1 }),
      }),
      text: DB.Required({
        comment: "The text of a special rule.",
        type: DB.String({ minLength: 1 }),
      }),
    }),
})
