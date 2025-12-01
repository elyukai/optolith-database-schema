import {
  Enum,
  EnumCase,
  GenTypeAlias,
  Object,
  Param,
  Required,
  TypeArgument,
} from "tsondb/schema/def"

export const SizeCategory = Enum(import.meta.url, {
  name: "SizeCategory",
  comment: "Each creature fits into one of these size categories.",
  values: () => ({
    Tiny: EnumCase({ type: null }),
    Small: EnumCase({ type: null }),
    Medium: EnumCase({ type: null }),
    Large: EnumCase({ type: null }),
    Huge: EnumCase({ type: null }),
  }),
})

export const BySizeCategory = GenTypeAlias(import.meta.url, {
  name: "BySizeCategory",
  comment: "An object that holds values for the different size categories",
  parameters: [Param("T")],
  type: T =>
    Object({
      tiny: Required({ type: TypeArgument(T) }),
      small: Required({ type: TypeArgument(T) }),
      medium: Required({ type: TypeArgument(T) }),
      large: Required({ type: TypeArgument(T) }),
      huge: Required({ type: TypeArgument(T) }),
    }),
})
