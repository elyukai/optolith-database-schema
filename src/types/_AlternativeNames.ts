import * as DB from "tsondb/schema/dsl"

export const AlternativeName = DB.TypeAlias(import.meta.url, {
  name: "AlternativeName",
  type: () =>
    DB.Object({
      name: DB.Required({
        comment: "An alternative name of the disease.",
        type: DB.String({ minLength: 1 }),
      }),
      region: DB.Optional({
        comment: "The region where this alternative name is used.",
        type: DB.String({ minLength: 1 }),
      }),
    }),
})
