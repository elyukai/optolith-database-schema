import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import { effect, levels, maximum, name, name_in_library } from "../_Activatable.js"
import { ap_value, ap_value_append, ap_value_l10n } from "../_ActivatableAdventurePointsValue.js"
import { explicit_select_options, select_options } from "../_ActivatableSelectOptions.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const FamiliarSpecialAbility = Entity(import.meta.url, {
  name: "FamiliarSpecialAbility",
  namePlural: "FamiliarSpecialAbilities",
  type: () =>
    Object({
      levels,
      select_options,
      explicit_select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "FamiliarSpecialAbility",
        Object({
          name,
          name_in_library,
          effect,
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
