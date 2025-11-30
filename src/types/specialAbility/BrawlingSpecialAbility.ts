import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  ap_value_append,
  ap_value_l10n,
  combat_techniques,
  explicit_select_options,
  levels,
  maximum,
  name,
  name_in_library,
  rules,
  select_options,
  usage_type,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const BrawlingSpecialAbility = Entity(import.meta.url, {
  name: "BrawlingSpecialAbility",
  namePlural: "BrawlingSpecialAbilities",
  type: () =>
    Object({
      levels,
      usage_type,
      select_options,
      explicit_select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      combat_techniques,
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "BrawlingSpecialAbility",
        Object({
          name,
          name_in_library,
          rules,
          ap_value_append,
          ap_value: ap_value_l10n,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  displayName: {},
})
