import { Object, Optional, Required, String, TypeAlias } from "tsondb/schema/dsl"

export const SpecialRule = TypeAlias(import.meta.url, {
  name: "SpecialRule",
  type: () =>
    Object({
      label: Optional({
        comment: "An optional label that is displayed and placed before the actual text.",
        type: String({ minLength: 1 }),
      }),
      text: Required({
        comment: "The text of a special rule.",
        type: String({ minLength: 1 }),
      }),
    }),
})
