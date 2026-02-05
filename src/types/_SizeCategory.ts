import * as DB from "tsondb/schema/dsl"

export const SizeCategory = DB.Enum(import.meta.url, {
  name: "SizeCategory",
  comment: "Each creature fits into one of these size categories.",
  values: () => ({
    Tiny: DB.EnumCase({ type: null }),
    Small: DB.EnumCase({ type: null }),
    Medium: DB.EnumCase({ type: null }),
    Large: DB.EnumCase({ type: null }),
    Huge: DB.EnumCase({ type: null }),
  }),
})

export const BySizeCategory = DB.GenTypeAlias(import.meta.url, {
  name: "BySizeCategory",
  comment: "An object that holds values for the different size categories",
  parameters: [DB.Param("T")],
  type: T =>
    DB.Object({
      tiny: DB.Required({ type: DB.TypeArgument(T) }),
      small: DB.Required({ type: DB.TypeArgument(T) }),
      medium: DB.Required({ type: DB.TypeArgument(T) }),
      large: DB.Required({ type: DB.TypeArgument(T) }),
      huge: DB.Required({ type: DB.TypeArgument(T) }),
    }),
})
