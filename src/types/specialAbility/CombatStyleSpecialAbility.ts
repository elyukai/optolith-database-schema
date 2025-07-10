import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  advanced,
  ap_value,
  combat_techniques,
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
import { NestedLocaleMap } from "../Locale.js"
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
      translation: NestedLocaleMap(
        Required,
        "CombatStyleSpecialAbilityTranslation",
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
