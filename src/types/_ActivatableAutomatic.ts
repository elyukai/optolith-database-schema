import {
  Array,
  Boolean,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { ActivatableIdentifier } from "./_IdentifierGroup.js"

const AutomaticEntry = TypeAlias(import.meta.url, {
  name: "AutomaticEntry",
  type: () =>
    Object({
      action: Required({
        comment: "What type of action is applied to the target entry?",
        type: IncludeIdentifier(AutomaticEntryAction),
      }),
      apply_ap_value: Required({
        comment:
          "If an entry is added or removed, does is cost or grant adventure points or is it free of charge?",
        type: Boolean(),
      }),
      target: Required({
        comment:
          "The entry that is to be added or removed. It can be a fixed entry or a selection where the player must choose one entry.",
        type: IncludeIdentifier(AutomaticEntryTarget),
      }),
    }),
})

export const automatic_entries = Optional({
  comment:
    "This entry has a direct influence on the existence of other entries. It may add or remove entries.",
  type: Array(IncludeIdentifier(AutomaticEntry), { minItems: 1 }),
})

const AutomaticEntryAction = Enum(import.meta.url, {
  name: "AutomaticEntryAction",
  values: () => ({
    Add: EnumCase({ type: null }),
    Remove: EnumCase({ type: null }),
  }),
})

const AutomaticEntryTarget = Enum(import.meta.url, {
  name: "AutomaticEntryTarget",
  values: () => ({
    Selection: EnumCase({ type: IncludeIdentifier(AutomaticEntryTargetSelection) }),
    Fixed: EnumCase({ type: IncludeIdentifier(FixedAutomaticEntryTarget) }),
  }),
})

const AutomaticEntryTargetSelection = TypeAlias(import.meta.url, {
  name: "AutomaticEntryTargetSelection",
  type: () =>
    Object({
      list: Required({
        type: IncludeIdentifier(AutomaticEntryTargetSelectionList),
      }),
    }),
})

const AutomaticEntryTargetSelectionList = Enum(import.meta.url, {
  name: "AutomaticEntryTargetSelectionList",
  values: () => ({
    MagicalTraditions: EnumCase({ type: null }),
    MagicalDilettanteTraditions: EnumCase({ type: null }),
  }),
})

const FixedAutomaticEntryTarget = TypeAlias(import.meta.url, {
  name: "FixedAutomaticEntryTarget",
  type: () =>
    Object({
      id: Required({
        type: IncludeIdentifier(ActivatableIdentifier),
      }),
      level: Optional({
        comment:
          "The level of the target entry to be added or removed. If this is omitted for a multi-level entry, level 1 is assumed.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})
