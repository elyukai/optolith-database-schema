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
import { ResponsiveTextOptional } from "../_ResponsiveText.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const StaffEnchantment = Entity(import.meta.url, {
  name: "StaffEnchantment",
  namePlural: "StaffEnchantments",
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
        "StaffEnchantmentTranslation",
        Object({
          name,
          name_in_library,
          effect,
          cost_note: Optional({
            comment: "A note, appended to the generated cost string in parenthesis.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})
