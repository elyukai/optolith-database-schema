import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import { levels, maximum, name, name_in_library, rules } from "../_Activatable.js"
import { advanced } from "../_ActivatableAdvanced.js"
import { ap_value, ap_value_append, ap_value_l10n } from "../_ActivatableAdventurePointsValue.js"
import { combat_techniques, penalty, type, usage_type } from "../_ActivatableCombat.js"
import { explicit_select_options, select_options } from "../_ActivatableSelectOptions.js"
import { skill_applications, skill_uses } from "../_ActivatableSkillApplicationsAndUses.js"
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
      penalty,
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
