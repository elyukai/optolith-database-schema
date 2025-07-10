import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  combat_techniques,
  levels,
  maximum,
  name,
  name_in_library,
  rules,
  select_options,
  usage_type,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const BrawlingSpecialAbility = Entity(import.meta.url, {
  name: "BrawlingSpecialAbility",
  namePlural: "BrawlingSpecialAbilities",
  type: () =>
    Object({
      levels,
      usage_type: usage_type(),
      select_options: select_options(),
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      combat_techniques: combat_techniques(),
      ap_value: ap_value(),
      src,
      translation: NestedLocaleMap(
        Required,
        "BrawlingSpecialAbilityTranslation",
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
})
