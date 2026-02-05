import { Object, Optional, Required, String, TypeAlias } from "tsondb/schema/dsl"

export const AlternativeName = TypeAlias(import.meta.url, {
  name: "AlternativeName",
  type: () =>
    Object({
      name: Required({
        comment: "An alternative name of the disease.",
        type: String({ minLength: 1 }),
      }),
      region: Optional({
        comment: "The region where this alternative name is used.",
        type: String({ minLength: 1 }),
      }),
    }),
})
