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
import {
  aeCost,
  ArcaneEnergyCost,
  BindingCost,
  bindingCost,
  property,
  volume,
  volume_l10n,
} from "../_ActivatableNonMundane.js"
import { explicit_select_options, select_options } from "../_ActivatableSelectOptions.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const DaggerRitual = Entity(import.meta.url, {
  name: "DaggerRitual",
  namePlural: "DaggerRituals",
  type: () =>
    Object({
      levels,
      select_options,
      explicit_select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      volume,
      cost: Optional({
        type: IncludeIdentifier(DaggerRitualCost),
      }),
      property: property(),
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "DaggerRitual",
        Object({
          name,
          name_in_library,
          effect,
          bindingCost,
          aeCost,
          volume: volume_l10n,
          ap_value_append,
          ap_value: ap_value_l10n,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name_in_library",
      keyPathInEntityMapFallback: "name",
    },
  ],
})

const DaggerRitualCost = Enum(import.meta.url, {
  name: "DaggerRitualCost",
  values: () => ({
    ArcaneEnergyCost: EnumCase({ type: IncludeIdentifier(DaggerRitualArcaneEnergyCost) }),
    BindingCost: EnumCase({ type: IncludeIdentifier(BindingCost) }),
  }),
})

const DaggerRitualArcaneEnergyCost = TypeAlias(import.meta.url, {
  name: "DaggerRitualArcaneEnergyCost",
  type: () =>
    Object({
      ae_cost: Required({
        type: IncludeIdentifier(ArcaneEnergyCost),
      }),
      lp_cost: Optional({
        type: IncludeIdentifier(LifePointsCost),
      }),
    }),
})

export const LifePointsCost = Enum(import.meta.url, {
  name: "LifePointsCost",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedLifePointsCost) }),
  }),
})

const FixedLifePointsCost = TypeAlias(import.meta.url, {
  name: "FixedLifePointsCost",
  type: () =>
    Object({
      value: Required({
        comment: "The LP cost value.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})
