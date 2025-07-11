import {
  Array,
  Boolean,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import {
  ap_value,
  levels,
  maximum,
  name,
  name_in_library,
  rules,
  select_options,
} from "../_Activatable.js"
import { ActivatableIdentifier } from "../_IdentifierGroup.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const PactGift = Entity(import.meta.url, {
  name: "PactGift",
  namePlural: "PactGifts",
  type: () =>
    Object({
      levels,
      select_options,
      maximum,
      permanent_demonic_consumption: Optional({
        comment: "This pact gift gives permanent levels of the condition *Demonic Consumption*.",
        type: IncludeIdentifier(PactGiftPermanentDemonicConsumption),
      }),
      automatic_entries: Optional({
        comment:
          "This pact gift has direct influence on the existence of other entries. It may add or remove entries.",
        type: Array(IncludeIdentifier(AutomaticEntry), { minItems: 1 }),
      }),
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translations: NestedLocaleMap(
        Required,
        "PactGiftTranslation",
        Object({
          name,
          name_in_library,
          rules,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const PactGiftPermanentDemonicConsumption = Enum(import.meta.url, {
  name: "PactGiftPermanentDemonicConsumption",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedPactGiftPermanentDemonicConsumption) }),
    PerLevel: EnumCase({ type: IncludeIdentifier(PactGiftPermanentDemonicConsumptionPerLevel) }),
  }),
})

const FixedPactGiftPermanentDemonicConsumption = TypeAlias(import.meta.url, {
  name: "FixedPactGiftPermanentDemonicConsumption",
  type: () =>
    Object({
      levels: Required({
        comment: "The levels of *Demonic Consumption* the pact gift causes.",
        type: Integer({ minimum: 1, maximum: 4 }),
      }),
    }),
})

const PactGiftPermanentDemonicConsumptionPerLevel = TypeAlias(import.meta.url, {
  name: "PactGiftPermanentDemonicConsumptionPerLevel",
  type: () =>
    Object({
      levels: Required({
        comment:
          "The levels of *Demonic Consumption* the pact gift causes per activated level of the pact gift.",
        type: Integer({ minimum: 1, maximum: 4 }),
      }),
    }),
})

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
      is: Required({
        type: IncludeIdentifier(ActivatableIdentifier),
      }),
    }),
})
