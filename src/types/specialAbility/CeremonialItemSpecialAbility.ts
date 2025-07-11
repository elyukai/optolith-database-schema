import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  aspect,
  effect,
  levels,
  maximum,
  name,
  name_in_library,
  select_options,
  skill_applications,
  skill_uses,
  usage_type,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const CeremonialItemSpecialAbility = Entity(import.meta.url, {
  name: "CeremonialItemSpecialAbility",
  namePlural: "CeremonialItemSpecialAbilities",
  type: () =>
    Object({
      levels,
      usage_type,
      select_options,
      skill_applications,
      skill_uses,
      maximum,
      aspect,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translations: NestedLocaleMap(
        Required,
        "CeremonialItemSpecialAbilityTranslation",
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
