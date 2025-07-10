import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
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
      usage_type: usage_type(),
      select_options: select_options(),
      skill_applications: skill_applications(),
      skill_uses: skill_uses(),
      maximum,
      penalty: penalty(),
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      combat_techniques: combat_techniques(),
      ap_value: ap_value(),
      src,
      translation: NestedLocaleMap(
        Required,
        "AdvancedCombatSpecialAbilityTranslation",
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
