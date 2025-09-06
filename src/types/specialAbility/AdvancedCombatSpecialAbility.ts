import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  ap_value_append,
  ap_value_l10n,
  combat_techniques,
  levels,
  maximum,
  name,
  name_in_library,
  penalty,
  rules,
  select_options,
  skill_applications,
  skill_uses,
  usage_type,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const AdvancedCombatSpecialAbility = Entity(import.meta.url, {
  name: "AdvancedCombatSpecialAbility",
  namePlural: "AdvancedCombatSpecialAbilities",
  type: () =>
    Object({
      levels,
      usage_type,
      select_options,
      skill_applications,
      skill_uses,
      maximum,
      penalty,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      combat_techniques,
      ap_value,
      src,
      translations: NestedLocaleMap(
        Required,
        "AdvancedCombatSpecialAbilityTranslation",
        Object({
          name,
          name_in_library,
          rules,
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
