import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  aeCost,
  ap_value,
  ap_value_append,
  ap_value_l10n,
  bindingCost,
  cost,
  effect,
  levels,
  maximum,
  name,
  name_in_library,
  property,
  select_options,
  volume_l10n,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const WandEnchantment = Entity(import.meta.url, {
  name: "WandEnchantment",
  namePlural: "WandEnchantments",
  type: () =>
    Object({
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      cost,
      property,
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "WandEnchantment",
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
        })
      ),
    }),
  displayName: {},
})
