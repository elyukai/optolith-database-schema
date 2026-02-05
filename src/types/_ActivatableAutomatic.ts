import * as DB from "tsondb/schema/dsl"
import { ActivatableIdentifier } from "./_IdentifierGroup.js"

const AutomaticEntry = DB.TypeAlias(import.meta.url, {
  name: "AutomaticEntry",
  type: () =>
    DB.Object({
      action: DB.Required({
        comment: "What type of action is applied to the target entry?",
        type: DB.IncludeIdentifier(AutomaticEntryAction),
      }),
      apply_ap_value: DB.Required({
        comment:
          "If an entry is added or removed, does is cost or grant adventure points or is it free of charge?",
        type: DB.Boolean(),
      }),
      target: DB.Required({
        comment:
          "The entry that is to be added or removed. It can be a fixed entry or a selection where the player must choose one entry.",
        type: DB.IncludeIdentifier(AutomaticEntryTarget),
      }),
    }),
})

export const automatic_entries = DB.Optional({
  comment:
    "This entry has a direct influence on the existence of other entries. It may add or remove entries.",
  type: DB.Array(DB.IncludeIdentifier(AutomaticEntry), { minItems: 1 }),
})

const AutomaticEntryAction = DB.Enum(import.meta.url, {
  name: "AutomaticEntryAction",
  values: () => ({
    Add: DB.EnumCase({ type: null }),
    Remove: DB.EnumCase({ type: null }),
  }),
})

const AutomaticEntryTarget = DB.Enum(import.meta.url, {
  name: "AutomaticEntryTarget",
  values: () => ({
    Selection: DB.EnumCase({ type: DB.IncludeIdentifier(AutomaticEntryTargetSelection) }),
    Fixed: DB.EnumCase({ type: DB.IncludeIdentifier(FixedAutomaticEntryTarget) }),
  }),
})

const AutomaticEntryTargetSelection = DB.TypeAlias(import.meta.url, {
  name: "AutomaticEntryTargetSelection",
  type: () =>
    DB.Object({
      list: DB.Required({
        type: DB.IncludeIdentifier(AutomaticEntryTargetSelectionList),
      }),
    }),
})

const AutomaticEntryTargetSelectionList = DB.Enum(import.meta.url, {
  name: "AutomaticEntryTargetSelectionList",
  values: () => ({
    MagicalTraditions: DB.EnumCase({ type: null }),
    MagicalDilettanteTraditions: DB.EnumCase({ type: null }),
  }),
})

const FixedAutomaticEntryTarget = DB.TypeAlias(import.meta.url, {
  name: "FixedAutomaticEntryTarget",
  type: () =>
    DB.Object({
      id: DB.Required({
        type: DB.IncludeIdentifier(ActivatableIdentifier),
      }),
      level: DB.Optional({
        comment:
          "The level of the target entry to be added or removed. If this is omitted for a multi-level entry, level 1 is assumed.",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
})
