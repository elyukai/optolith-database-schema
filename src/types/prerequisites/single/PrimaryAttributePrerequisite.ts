import * as DB from "tsondb/schema/dsl"
import { DisplayOption } from "../DisplayOption.js"

export const PrimaryAttributePrerequisite = DB.TypeAlias(import.meta.url, {
  name: "PrimaryAttributePrerequisite",
  type: () =>
    DB.Object({
      category: DB.Required({
        comment: "Is the required primary attribute for spellcasters or blessed ones?",
        type: DB.IncludeIdentifier(PrimaryAttributeCategory),
      }),
      value: DB.Required({
        comment: "Required value of the attribute.",
        type: DB.Integer({ minimum: 9 }),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})

const PrimaryAttributeCategory = DB.Enum(import.meta.url, {
  name: "PrimaryAttributeCategory",
  values: () => ({
    Blessed: DB.EnumCase({ type: null }),
    Magical: DB.EnumCase({ type: null }),
  }),
})
