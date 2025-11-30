import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  ap_value_append,
  ap_value_l10n,
  combat_techniques,
  explicit_select_options,
  input,
  levels,
  maximum,
  name,
  name_in_library,
  penalty,
  penalty_l10n,
  rules,
  select_options,
  skill_applications,
  skill_uses,
  usage_type,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const CombatSpecialAbility = Entity(import.meta.url, {
  name: "CombatSpecialAbility",
  namePlural: "CombatSpecialAbilities",
  type: () =>
    Object({
      levels,
      usage_type,
      select_options,
      explicit_select_options,
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
      translations: NestedTranslationMap(
        Required,
        "CombatSpecialAbility",
        Object({
          name,
          name_in_library,
          input,
          rules,
          penalty: penalty_l10n,
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
