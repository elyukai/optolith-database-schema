import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  ap_value_append,
  ap_value_l10n,
  aspectOptional,
  effect,
  levels,
  maximum,
  name,
  name_in_library,
  select_options,
  skill_applications,
  skill_uses,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const CeremonialItemSpecialAbility = Entity(import.meta.url, {
  name: "CeremonialItemSpecialAbility",
  namePlural: "CeremonialItemSpecialAbilities",
  type: () =>
    Object({
      levels,
      select_options,
      skill_applications,
      skill_uses,
      maximum,
      aspect: aspectOptional,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "CeremonialItemSpecialAbility",
        Object({
          name,
          name_in_library,
          effect,
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
