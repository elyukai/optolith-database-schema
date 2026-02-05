import { Enum, EnumCase, IncludeIdentifier, Object, Optional, TypeAlias } from "tsondb/schema/dsl"
import { DisplayOption } from "../DisplayOption.js"

export const BlessedTraditionPrerequisite = TypeAlias(import.meta.url, {
  name: "BlessedTraditionPrerequisite",
  type: () =>
    Object({
      restriction: Optional({
        comment:
          "The blessed tradition prerequisite may only be satified if the blessed tradition is either church or shamanistic.",
        type: IncludeIdentifier(BlessedTraditionPrerequisiteRestriction),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})

const BlessedTraditionPrerequisiteRestriction = Enum(import.meta.url, {
  name: "BlessedTraditionPrerequisiteRestriction",
  comment:
    "The blessed tradition prerequisite may only be satified if the blessed tradition is either church or shamanistic.",
  values: () => ({
    Church: EnumCase({ type: null }),
    Shamanistic: EnumCase({ type: null }),
  }),
})

export const MagicalTraditionPrerequisite = TypeAlias(import.meta.url, {
  name: "MagicalTraditionPrerequisite",
  type: () =>
    Object({
      restriction: Optional({
        comment:
          "The magical tradition prerequisite may only be satified if the magical tradition can learn rituals or can bind familiars.",
        type: IncludeIdentifier(MagicalTraditionPrerequisiteRestriction),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})

const MagicalTraditionPrerequisiteRestriction = Enum(import.meta.url, {
  name: "MagicalTraditionPrerequisiteRestriction",
  comment:
    "The magical tradition prerequisite may only be satified if the magical tradition can learn rituals or can bind familiars.",
  values: () => ({
    CanLearnRituals: EnumCase({ type: null }),
    CanBindFamiliars: EnumCase({ type: null }),
  }),
})
