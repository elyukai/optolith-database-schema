import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  advanced,
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
  skill_applications,
  skill_uses,
  type,
  usage_type,
} from "../_Activatable.js"
import { AdvancedCombatSpecialAbilityIdentifier } from "../_Identifier.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const CombatStyleSpecialAbility = Entity(import.meta.url, {
  name: "CombatStyleSpecialAbility",
  namePlural: "CombatStyleSpecialAbilities",
  type: () =>
    Object({
      levels,
      usage_type,
      type,
      select_options,
      explicit_select_options,
      skill_applications,
      skill_uses,
      maximum,
      advanced: advanced(AdvancedCombatSpecialAbilityIdentifier()),
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      combat_techniques,
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "CombatStyleSpecialAbility",
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
