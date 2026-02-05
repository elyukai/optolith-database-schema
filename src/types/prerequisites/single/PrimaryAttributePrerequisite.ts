import {
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/dsl"
import { DisplayOption } from "../DisplayOption.js"

export const PrimaryAttributePrerequisite = TypeAlias(import.meta.url, {
  name: "PrimaryAttributePrerequisite",
  type: () =>
    Object({
      category: Required({
        comment: "Is the required primary attribute for spellcasters or blessed ones?",
        type: IncludeIdentifier(PrimaryAttributeCategory),
      }),
      value: Required({
        comment: "Required value of the attribute.",
        type: Integer({ minimum: 9 }),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})

const PrimaryAttributeCategory = Enum(import.meta.url, {
  name: "PrimaryAttributeCategory",
  values: () => ({
    Blessed: EnumCase({ type: null }),
    Magical: EnumCase({ type: null }),
  }),
})
