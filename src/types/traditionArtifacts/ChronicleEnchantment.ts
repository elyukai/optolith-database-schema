import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  cost,
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

export const ChronicleEnchantment = Entity(import.meta.url, {
  name: "ChronicleEnchantment",
  namePlural: "ChronicleEnchantments",
  type: () =>
    Object({
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      volume,
      cost,
      property,
      ap_value,
      src,
      translations: NestedLocaleMap(
        Required,
        "ChronicleEnchantmentTranslation",
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
