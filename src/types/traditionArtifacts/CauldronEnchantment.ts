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
import { BrewIdentifier } from "../_Identifier.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const CauldronEnchantment = Entity(import.meta.url, {
  name: "CauldronEnchantment",
  namePlural: "CauldronEnchantments",
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
      brew: Required({
        comment:
          "Witches can learn to brew special things in their Witch's Cauldron. These brews can be categorized in different types.",
        type: BrewIdentifier(),
      }),
      cost,
      property: property(),
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "CauldronEnchantment",
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
