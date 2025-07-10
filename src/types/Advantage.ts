import { Boolean, Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  input,
  levels,
  maximum,
  name,
  name_in_library,
  rules,
  select_options,
  skill_applications,
  skill_uses,
} from "./_Activatable.js"
import { AdvantageDisadvantagePrerequisites } from "./_Prerequisite.js"
import { NestedLocaleMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Advantage = Entity(import.meta.url, {
  name: "Advantage",
  namePlural: "Advantages",
  type: () =>
    Object({
      levels,
      select_options: select_options(),
      skill_applications: skill_applications(),
      skill_uses: skill_uses(),
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(AdvantageDisadvantagePrerequisites),
      }),
      ap_value: ap_value(),
      has_maximum_spent_influence: Required({
        comment: "Does this advantage count towards the maximum of AP to be spent on advantages?",
        type: Boolean(),
      }),
      is_exclusive_to_arcane_spellworks: Required({
        comment:
          "Does this advantage exclusively applies to arcane spellworks and not to magical actions and magical applications?",
        type: Boolean(),
      }),
      src,
      translation: NestedLocaleMap(
        Required,
        "AdvantageTranslation",
        Object({
          name,
          name_in_library,
          input: input(),
          rules,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
})
