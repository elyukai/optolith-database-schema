import {
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
import { effect, levels, maximum, name, name_in_library } from "../_Activatable.js"
import { ap_value, ap_value_append, ap_value_l10n } from "../_ActivatableAdventurePointsValue.js"
import { automatic_entries } from "../_ActivatableAutomatic.js"
import { explicit_select_options, select_options } from "../_ActivatableSelectOptions.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const PactGift = Entity(import.meta.url, {
  name: "PactGift",
  namePlural: "PactGifts",
  type: () =>
    Object({
      levels,
      select_options,
      explicit_select_options,
      maximum,
      permanent_demonic_consumption: Optional({
        comment: "This pact gift gives permanent levels of the condition *Demonic Consumption*.",
        type: IncludeIdentifier(PactGiftPermanentDemonicConsumption),
      }),
      automatic_entries,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "PactGift",
        Object({
          name,
          name_in_library,
          effect,
          ap_value_append,
          ap_value: ap_value_l10n,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
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
