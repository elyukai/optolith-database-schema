import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  levels,
  maximum,
  name,
  name_in_library,
  rules,
  select_options,
  skill_applications,
  skill_uses,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const AdvancedSkillSpecialAbility = Entity(import.meta.url, {
  name: "AdvancedSkillSpecialAbility",
  namePlural: "AdvancedSkillSpecialAbilities",
  type: () =>
    Object({
      levels,
      select_options: select_options(),
      skill_applications: skill_applications(),
      skill_uses: skill_uses(),
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value: ap_value(),
      src,
      translation: NestedLocaleMap(
        Required,
        "AdvancedSkillSpecialAbilityTranslation",
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
