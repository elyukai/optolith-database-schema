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
import {
  ap_value,
  ArcaneEnergyCost,
  BindingCost,
  effect,
  levels,
  maximum,
  name,
  name_in_library,
  property,
  select_options,
  volume,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const DaggerRitual = Entity(import.meta.url, {
  name: "DaggerRitual",
  namePlural: "DaggerRituals",
  type: () =>
    Object({
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      volume,
      cost: Optional({
        type: IncludeIdentifier(DaggerRitualCost),
      }),
      property,
      ap_value,
      src,
      translations: NestedLocaleMap(
        Required,
        "DaggerRitualTranslation",
        Object({
          name,
          name_in_library,
          effect,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
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
