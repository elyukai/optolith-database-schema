import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/dsl"
import { effect, levels, maximum, name, name_in_library } from "../_Activatable.js"
import { ap_value, ap_value_append, ap_value_l10n } from "../_ActivatableAdventurePointsValue.js"
import {
  aeCost,
  bindingCost,
  cost,
  property,
  volume,
  volume_l10n,
} from "../_ActivatableNonMundane.js"
import { explicit_select_options, select_options } from "../_ActivatableSelectOptions.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { ResponsiveTextOptional } from "../_ResponsiveText.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const StaffEnchantment = Entity(import.meta.url, {
  name: "StaffEnchantment",
  namePlural: "StaffEnchantments",
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
      cost,
      property: property(),
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "StaffEnchantment",
        Object({
          name,
          name_in_library,
          effect,
          cost_note: Optional({
            comment: "A note, appended to the generated cost string in parenthesis.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
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
