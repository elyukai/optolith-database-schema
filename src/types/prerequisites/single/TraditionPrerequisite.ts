import * as DB from "tsondb/schema/dsl"
import { DisplayOption } from "../DisplayOption.js"

export const BlessedTraditionPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "BlessedTraditionPrerequisite",
  type: () =>
    DB.Object({
      restriction: DB.Optional({
        comment:
          "The blessed tradition prerequisite may only be satified if the blessed tradition is either church or shamanistic.",
        type: DB.IncludeIdentifier(BlessedTraditionPrerequisiteRestriction),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})

const BlessedTraditionPrerequisiteRestriction = DB.Enum(import.meta.url, {
  name: "BlessedTraditionPrerequisiteRestriction",
  comment:
    "The blessed tradition prerequisite may only be satified if the blessed tradition is either church or shamanistic.",
  values: () => ({
    Church: DB.EnumCase({ type: null }),
    Shamanistic: DB.EnumCase({ type: null }),
  }),
})

export const MagicalTraditionPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "MagicalTraditionPrerequisite",
  type: () =>
    DB.Object({
      restriction: DB.Optional({
        comment:
          "The magical tradition prerequisite may only be satified if the magical tradition can learn rituals or can bind familiars.",
        type: DB.IncludeIdentifier(MagicalTraditionPrerequisiteRestriction),
      }),
      display_option: DB.Optional({
        type: DB.IncludeIdentifier(DisplayOption),
      }),
    }),
})

const MagicalTraditionPrerequisiteRestriction = DB.Enum(import.meta.url, {
  name: "MagicalTraditionPrerequisiteRestriction",
  comment:
    "The magical tradition prerequisite may only be satified if the magical tradition can learn rituals or can bind familiars.",
  values: () => ({
    CanLearnRituals: DB.EnumCase({ type: null }),
    CanBindFamiliars: DB.EnumCase({ type: null }),
  }),
})
