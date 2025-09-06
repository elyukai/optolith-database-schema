import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  ap_value_append,
  ap_value_l10n,
  effect,
  levels,
  maximum,
  name,
  name_in_library,
  select_options,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const FamiliarSpecialAbility = Entity(import.meta.url, {
  name: "FamiliarSpecialAbility",
  namePlural: "FamiliarSpecialAbilities",
  type: () =>
    Object({
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translations: NestedLocaleMap(
        Required,
        "FamiliarSpecialAbilityTranslation",
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
